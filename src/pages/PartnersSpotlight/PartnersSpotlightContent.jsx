import FadeIn from '../../components/fadeinsection/FadeIn.jsx';
import { partnerSpotlights } from './partnersSpotlightData.js';
import './PartnersSpotlightContent.css';

function PartnersSpotlightContent() {
  return (
    <main className="partners-spotlight-page">
      <FadeIn>
        <section className="partners-spotlight-hero" aria-labelledby="partners-spotlight-title">
          <div className="partners-spotlight-hero-copy">
            <p className="partners-spotlight-eyebrow">Partner Spotlight</p>
            <h1 id="partners-spotlight-title">Celebrating impact with our community partners.</h1>
            <p>
              This space highlights partner organizations, outcomes, and stories that show how local
              collaboration helps remove barriers for Rhode Island families.
            </p>
          </div>
        </section>

        <section className="partners-spotlight-intro" aria-labelledby="partners-spotlight-work-title">
          <div>
            <p className="partners-spotlight-eyebrow">Outcomes In Motion</p>
            <h2 id="partners-spotlight-work-title">Facts, milestones, and community wins.</h2>
          </div>
          <p>
            Each spotlight can feature a partner logo or photo, a short impact statement, and a measurable
            accomplishment such as outreach growth, families served, students supported, or services expanded.
          </p>
        </section>

        <section className="partners-spotlight-grid" aria-label="Partner organization spotlights">
          {partnerSpotlights.map((partner) => (
            <article className="partners-spotlight-card" key={partner.id}>
              <div className="partners-spotlight-logo-wrap">
                <img src={partner.image} alt={`${partner.name} logo`} />
              </div>
              <div className="partners-spotlight-card-body">
                <p className="partners-spotlight-focus">{partner.focus}</p>
                <h2>{partner.name}</h2>
                <p>{partner.outcome}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="partners-spotlight-submit" aria-labelledby="partners-spotlight-submit-title">
          <h2 id="partners-spotlight-submit-title">Share a partner accomplishment.</h2>
          <p>
            Future updates can connect this space to a CMS or submission form so partners can share new
            metrics, photos, and stories for review.
          </p>
        </section>
      </FadeIn>
    </main>
  );
}

export default PartnersSpotlightContent;
