import React, { useEffect, useState } from "react";
import "./Articles.css";

function Articles() {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const [visibleCount, setVisibleCount] = useState(7); // show 7 at a time
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = 'https://publickeys.netlify.app/.netlify/functions/newsArticles';
        const response = await fetch(url);
        const data = await response.json();

        // Skip header row
        const allRows = data.slice(1);
        setRows(allRows);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Error loading data.");
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading Recent News Articles...</div>;
  if (error) return <div className="data-container"><p>{error}</p></div>;

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 7);
  };

  return (
    <div className="data-container">
      <h2>Recent Articles</h2>
      {rows.slice(0, visibleCount).map((row, idx) => {
        const rawDate = row[0];
        const title = row[1];
        const description = row[2];
        const link = row[3];
        const imageUrl = row[4] || "https://via.placeholder.com/100";

        const formattedDate = rawDate.includes("T")
          ? new Date(rawDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : rawDate;

        const truncatedDescription =
          description.length > 100 ? (
            <>
              {description.substring(0, 100)}...
              <span className="read-more">
                <br />
                <br />
                <a href="pages/in-the-news.html">See more articles...</a>
                <br />
              </span>
            </>
          ) : (
            description
          );

        return (
          <div key={idx} className="row">
            <div className="image">
              <img src={imageUrl} alt="Article Image" />
            </div>
            <div className="content">
              <div className="date">{formattedDate}</div>
              <div className="title">
                <a href={link}>{title}</a>
              </div>
              <div className="description">{truncatedDescription}</div>
            </div>
          </div>
        );
      })}

      {visibleCount < rows.length && (
        <div className="show-more-container">
          <button
            onClick={handleShowMore}
            className="mt-6 px-6 py-2 bg-[rgba(102,53,23,1)] text-white rounded shadow-md hover:bg-blue-700 transition mx-auto mt-5 block"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default Articles;
