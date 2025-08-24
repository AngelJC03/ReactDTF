import React from "react";
import "./HomeBody.css";
import FadeIn from '../../components/fadeinsection/FadeIn.jsx';
import HomeWWF from "./HomeWWF";
import GivebutterWidget from "./GivebutterWidget";
import { Fade } from "react-bootstrap";
import NewsArticles from "../../components/newsarticles/NewsArticles.jsx";
import HomeAFF from "./HomeAFF.jsx";

function HomeBody() {
  return (
    <div className="homebody-container">
        <FadeIn>
            <div className="WWF-section">
                <HomeWWF />
            </div>
        </FadeIn>
            <div className="widget-section">
                <GivebutterWidget />
            </div>
        <FadeIn>
            <div className="apply-for-funding-section">
                <HomeAFF />
            </div>
        </FadeIn>
        <FadeIn>
            <div className="news-articles-section">
                <NewsArticles />
            </div>
        </FadeIn>
    </div>
  );
}

export default HomeBody;