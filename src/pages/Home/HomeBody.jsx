import React from "react";
import "./HomeBody.css";
import FadeIn from '../../components/fadeinsection/FadeIn.jsx';
import HomeWWF from "./HomeWWF";
import GivebutterWidget from "./GivebutterWidget";
import { Fade } from "react-bootstrap";
import NewsArticles from "../../components/newsarticles/NewsArticles.jsx";
import HomeAFF from "./HomeAFF.jsx";
import LazyPlayVideo from "./LazyPlayVideo.jsx";

function HomeBody() {
  return (
    <div className="homebody-container" aria-label="Home Content">
        <FadeIn>
            <div className="video-section">
                <LazyPlayVideo />
            </div>
        </FadeIn>
        <FadeIn>
            <div className="video-section">
            </div>
        </FadeIn>
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