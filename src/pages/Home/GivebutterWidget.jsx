import { useEffect } from "react";
import FadeIn from '../../components/fadeinsection/FadeIn.jsx';
import './GivebutterWidget.css';

function GivebutterWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.givebutter.com/latest.umd.cjs?acct=iICpNmwnRgOMH7V8&p=other";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // This div is where Givebutter injects the widget
  return (
    <section className="widget-container">
      <FadeIn>
        <div className="widget-text"> 
          <h2>Support the Davis-Tennon Foundation</h2>
          <p>Your contributions will help the Davis-Tennon Foundation fund vital programs that empower women, combat domestic violence, provide educational opportunities for students, and ensure safe, stable housing for underserved families in Rhode Island. Together, we’re creating lasting change and brighter futures for our communities.</p>
        </div>
      
        <div className="widget-wrapper">
          <givebutter-widget id="p5odxL" align="center" aria-label="Givebutter Widget"></givebutter-widget>
        </div>
      </FadeIn>
    </section>
  );
}

export default GivebutterWidget;
