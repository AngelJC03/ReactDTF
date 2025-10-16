import React from "react";
import "./FundingRecipientsContent.css";
import FadeIn from "../../../components/fadeinsection/FadeIn.jsx";
import AccordionItem from "../../../components/Accordion/AccordionItem.jsx";

const recipients = [
  {
    name: "Rhode Island Coalition Against Domestic Violence (RICADV)",
    amount: "$50,000",
    content:
      "Supports and enhances the work of member agencies, provides 24/7 confidential helpline, policy advocacy, prevention programs, survivor activism, and training to create a society free from domestic violence.",
    website: "https://www.ricadv.org",
  },
  {
    name: "The Warde-robe (McAuley Ministries)",
    amount: "$60,000",
    content:
      "A thrift store ministry in Central Falls providing quality, gently used clothing and household goods, promoting dignity, offering affordable essentials, volunteer opportunities, and community support for working families.",
    website: "https://mcauleyri.org/warde-robe",
  },
  {
    name: "Central Falls/Rhode Island College Workforce Hub",
    amount: "$75,000",
    content:
      "Collaborates with local organizations and partners to build Rhode Islanders' skills through ESL classes, professional training, licensure testing facilitation, and tailor-made educational experiences for businesses and employees.",
    website:
      "https://www.ric.edu/professional-studies-and-continuing-education/ric-workforce-development-hub",
  },
  {
    name: "Central Falls Square Mile Club",
    amount: "$50,000",
    content:
      "Provides out-of-school enrichment programs for youth, mentorship, career development workshops, hands-on experience in various career fields, and fosters personal and professional growth in Central Falls.",
    website:
      "https://www.facebook.com/people/Central-Falls-Square-Mile-Club/61553554014458/?_rdr",
  },
  {
    "name": "Shri Foundation / Segue-Mary Alice Davis Food Pantry",
    "amount": "$75,000",
    "content": "Funds support pantry operations to better serve the Blackstone Valley community by increasing staff capacity and adding an extra day of service for food, resources, and community assistance.",
    "website": "https://shri-foundation.org/"
  },
  {
    "name": "RI Coalition to End Homelessness",
    "amount": "$25,000",
    "content": "Provides staff and operational support focused on increasing professional development opportunities and strengthening homelessness prevention efforts across Rhode Island.",
    "website": "https://www.rihomeless.org/"
  },
  {
    "name": "Central Falls Children Foundation",
    "amount": "$30,000",
    "content": "Supports programs for mothers and heads of households, including employability training, family services, and Adult Education programming to enhance community empowerment.",
    "website": "https://www.cfchildrensfoundation.org/"
  },
  {
    "name": "Newport County / Community Mental Health Center",
    "amount": "$10,000",
    "content": "Covers transportation costs for individuals seeking mental health support, ensuring access to public transit for appointments and essential care visits.",
    "website": "https://www.newportmentalhealth.org/"
  },
  {
    "name": "Central Falls Athletics",
    "amount": "$10,000",
    "content": "Provides funding to support Central Falls Athletics programs and students, promoting physical activity and community engagement through sports.",
    "website": "https://www.cfhswarriorsathletics.com/"
  }
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
              <AccordionItem key={rec.name} title={rec.name}>
                <p className="font-semibold text-[rgba(37, 78, 52, 1)] text-2xl mb-2">
                  {rec.amount}
                </p>
                <p>{rec.content}</p>
                {rec.website && (
                  <a
                    href={rec.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="learn-more-link"
                  >
                    Learn more here
                  </a>
                )}
              </AccordionItem>
            ))}
          </div>

          {/* Bottom Call-to-Action Section */}
          <div className="funding-bottom-cta">
            <div className="funding-bottom-cta-column">
              <h2>Apply for Funding</h2>
              <p>
                If your organization's mission aligns with our values, don't wait and apply for funding now.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeyf2L9swDTLg0CM6kyN8VamFCxlJ4w-BgiWQihqsM--hBiWA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-5 px-5 py-6 bg-[rgb(109,169,68)] text-white font-semibold shadow rounded no-underline apply-button inline-block"
              >
                Apply For Funding
              </a>
            </div>

            <div className="funding-bottom-cta-column">
              <h2>Funding Opportunities</h2>
              <p>For information about the next funding deadline, click the button below.</p>
              <a
                href="/fundingopportunities"
                className="ml-5 px-5 py-6 bg-[rgba(169,142,68)] text-white font-semibold shadow rounded no-underline apply-button inline-block"
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
