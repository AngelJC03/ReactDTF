import React, { useState, useEffect } from "react";
import "./AboutViolaAndJuliusContent.css";
import { ImageSlider } from "./ImageSlider";
import image1 from '../../../assets/images/violas-story-photos/image1.webp';
import image2 from '../../../assets/images/violas-story-photos/image2.jpg';
import image3 from '../../../assets/images/violas-story-photos/image3.jpg';
import image4 from '../../../assets/images/violas-story-photos/image4.jpg';
import familyPhoto from '../../../assets/images/violas-story-photos/viola-julius-family.jpg';
import bookPhoto from '../../../assets/images/violas-story-photos/viola-davis-book.jpg'
import FadeInSection from "../../../components/fadeinsection/FadeIn";
import AccordionItem from "../../../components/Accordion/AccordionItem";

const SlideshowImages = [
  { url: image1, alt: "Slide 1" },
  { url: image2, alt: "Slide 2" },
  { url: image3, alt: "Slide 3" },
  { url: image4, alt: "Slide 4" },
];

const infoSections = [
  {
    title: "Passion for Community",
    content: "Viola Davis and Julius Tennon are not only renowned actors and producers but also passionate advocates for community empowerment and social justice. Together, they have dedicated their lives to uplifting underserved communities and driving meaningful change through their philanthropy and storytelling."
  },
  {
    title: "Viola's Journey",
    content: "Viola Davis, a Central Falls, Rhode Island native, is an Academy Award, Emmy, and Tony-winning actress celebrated for her unparalleled talent and commitment to representing diverse voices in the arts. Her journey from humble beginnings to global success has inspired millions, and her deep connection to her roots fuels her drive to give back."
  },
  {
    title: "Julius's Vision",
    content: "Julius Tennon, an accomplished actor, producer, and philanthropist, shares Viola’s vision for creating opportunities and fostering equity. With decades of experience both on-screen and behind the scenes, Tennon has become a respected leader in advocating for inclusivity in entertainment and beyond."
  }
];

function AboutViolaAndJuliusContent() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="about-viola-and-julius-content">
      <FadeInSection>
        <div className="viola-slideshow">
          <div className="violas-story">
            <h1>Viola's Story</h1>
            <p>
              “I grew up in Central Falls. It is the place I call home, and it is
              where my dreams took shape, and it also carries memories of the brutal
              aspects of poverty. Within that community holds so many people who
              have the vision, ability, and talent to shift the world, and within me
              is the ability to give them the tools to do so. More than awards, it
              is my legacy.”
            </p>
          </div>

          <div className="viola-slideshow-images">
            <ImageSlider images={SlideshowImages} />
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="viola-and-julius-info-container">
            <h1>About Viola and Julius</h1>
            <div className="viola-and-julius-info">
            <img
                src={familyPhoto}
                alt="Viola Davis and Family"
                className="viola-and-julius-photo"
            />

            <div className="text-content">
                {infoSections.map((section, index) => (
                <AccordionItem
                    key={index}
                    title={section.title}
                    defaultOpen={isLargeScreen}
                >
                    <p>{section.content}</p>
                </AccordionItem>
                ))}
            </div>
            </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="book-section">
            <div className="book-container">
            <div className="book-text">
                <h1>Finding Me: A Memoir</h1>
                <p className="book-description">
                Discover Viola Davis' latest project—an autobiography that chronicles her journey
                from a challenging childhood to becoming the successful and renowned actor she is today.
                </p>
            </div>
            <div className="book-image">
                <a
                href="https://www.amazon.com/Finding-Me-Memoir-Viola-Davis/dp/0063037327"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                    src={bookPhoto}
                    alt="Book Image"
                />
                </a>
            </div>
            </div>
        </div>
      </FadeInSection>

    </div>
  );
}

export default AboutViolaAndJuliusContent;
