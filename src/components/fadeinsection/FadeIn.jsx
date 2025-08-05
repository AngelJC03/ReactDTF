import { useRef, useEffect, useState } from "react";
import "./FadeIn.css"; // CSS styles here

export default function FadeInSection({ children }) {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current); // animate once
        }
      },
      { threshold: 0.05 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
}
