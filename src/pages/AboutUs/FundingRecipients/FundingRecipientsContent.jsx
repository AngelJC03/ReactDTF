import React from "react";
import "./FundingRecipientsContent.css";
import FadeIn from "../../../components/fadeinsection/FadeIn.jsx";
import AccordionItem from "../../../components/accordion/AccordionItem.jsx";

const recipients = [
  {
    name: "Rhode Island Coalition Against Domestic Violence (RICADV)",
    content: `
Supports survivor-led advocacy and empowerment; partners with SOAR to prevent domestic abuse.
"This funding ensures our critical advocacy work remains intact."
    `,
  },
  {
    name: "The Warde-robe Thrift Store (McAuley Ministries)",
    content: `
Supports families in Central Falls; expands outreach and provides essential items.
"This funding allows us to better serve our community." 
    `,
  },
  {
    name: "Central Falls/Rhode Island College Workforce Hub",
    content: "Expands workforce access in Rhode Island.",
  },
  {
    name: "Central Falls Square Mile Club",
    content: "Creates out-of-school enrichment programs for youth.",
  },
];

const FundingRecipientsContent = () => {
  return (
    <div className="funding-recipients-container">
      <FadeIn>
        <div className="funding-recipients-inner-container">
          <h1 className="funding-recipients-title">Funding Recipients</h1>
          <p className="funding-recipients-intro">
            These Rhode Island-based organizations have received grants from the Davis-Tennon Foundation, helping provide safe housing, food security, workforce access, and youth enrichment.
          </p>

          <div className="recipients-grid">
            {recipients.map((rec) => (
              <AccordionItem
                key={rec.name}
                title={rec.name}
              >
                <p>{rec.content}</p>
              </AccordionItem>
            ))}
          </div>

          {/* Bottom Call-to-Action Section */}
          <div className="funding-bottom-cta">
            <div className="funding-bottom-cta-column">
                <h2>Apply for Funding</h2>
                <p>If your organization's mission aligns with our values, don't wait and apply for funding now.</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeyf2L9swDTLg0CM6kyN8VamFCxlJ4w-BgiWQihqsM--hBiWA/viewform" target="_blank" rel="noopener noreferrer" className="ml-5 px-5 py-6 bg-[rgb(109,169,68)] text-white font-semibold shadow rounded no-underline apply-button">
                    Apply For Funding
                </a>
            </div>

            <div className="funding-bottom-cta-column">
                <h2>Funding Opportunities</h2>
                <p>For information about the next funding deadline, click the button below.</p>
                <a
                    href="/fundingopportunities"
                    className="px-5 py-5 border-2 border-[rgba(0,0,0)] text-[rgba(0,0,0))] font-semibold shadow-lg no-underline transition-transform duration-300 hover:scale-105 inline-block"
                >
                    View Deadlines
                </a>
                
            </div>
          </div>

        </div>
      </FadeIn>
    </div>
  );
};

export default FundingRecipientsContent;
