import React, { useEffect, useState } from "react";
import "./NewsArticles.css";

function NewsArticles() {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const configRes = await fetch("../../backend/netlify/config/config.json");
        console.log("Config response status:", configRes);
        if (!configRes.ok) throw new Error(`HTTP error! status: ${configRes.status}`);
        const config = await configRes.json();
        const url = config.newsArticles[0].tableRows;

        const response = await fetch(url);
        console.log("Response status:", response);
        const data = await response.json();

        // Skip header row, get next 3 rows
        const firstThreeRows = data.slice(1, 4);

        setRows(firstThreeRows);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Error loading data.");
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div class="loading">Loading Recent News Articles...</div>;

  if (error) return <div class="data-container"><p>{error}</p></div>;

  return (
    <div class="data-container">
      <h2>Recent Articles</h2>
      {rows.map((row, idx) => {
        const rawDate = row[0];
        const title = row[1];
        const description = row[2];
        const link = row[3];
        const imageUrl = row[4] || "https://via.placeholder.com/100";

        // Format date if ISO string
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
    </div>
  );
}

export default NewsArticles;
