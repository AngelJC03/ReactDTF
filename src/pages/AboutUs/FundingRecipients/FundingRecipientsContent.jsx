import React from "react";
import "./FundingRecipientsContent.css";
import FadeIn from "../../../components/fadeinsection/FadeIn.jsx";

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
  },
  {
    name: "Segue/Mary Alice Davis Food Pantry",
    amount: "$75,000",
    content:
      "These funds will allow the continuation of the work done to serve the Blackstone Valley at the Mary Alice Davis Food Pantry. The Pantry now operates three days a week and extends its hours into the early evening. The Pantry continues to serve 3,000 residents monthly.",
    website: "https://www.segueifl.org/FoodPantry"
  },
  {
    name: "Project GOAL",
    amount: "$25,000",
    content:
      "With support from the Davis-Tennon Foundation, we will be able to provide high-quality, proven, free-of-cost academic and youth development afterschool programming in support of Central Falls elementary and middle grade youth with a goal of growing the number of CF supported annually.",
    website: "https://www.projectgoal.org/"
  },
  {
    name: "Tides/Family Services", 
    amount: "$20,000",
    content:
      "With the generosity of the Davis-Tennon Foundation, TFS will be positioned to swiftly launch our critical Screen-printing Social Enterprise initiative.",
    website: "https://www.tidesfs.org/"
  },
  {
    name: "The Learning Community",
    amount: "$5,000",
    content:
      "Generous support from the Davis-Tennon Foundation will allow our organization to cover the costs of bringing in high-quality outside STEAM vendors, teaching artists, and industry professionals who provide real-world, hands-on learning experiences for students in our Exploration program.",
    website: "https://www.thelearningcommunity.com/"
  },
  {
    name: "The Institute for the Practice of Non-Violence",
    amount: "$30,000",
    content:
      "This grant funds an outreach worker to connect at-risk youth programming, supports two SEED cohorts 40 students, provides nonviolence training, strengthens collaboration among schools, families, and trainees to reduce violence.",
    website: "https://www.nonviolence.org/"
  },
  {
    name: "Big Brothers/Big Sisters of RI",
    amount: "$25,000",
    content:
      "Your generous support will allow our organization to increase the number of youth and families we serve and expand access to safe, structured enrichment opportunities that build confidence, stability, and long-term success for young people across RI.",
    website: "https://bigsri.org/"
  },
  {
    name: "Square Mile Club",
    amount: "$30,000",
    content:
      "Afterschool and evening activities for students from Central Falls schools to participate in three day a week program. Program offers arts, career exploration, cultural events, job training, etc.",
    website: "https://www.facebook.com/people/Central-Falls-Square-Mile-Club/61553554014458/?_rdr"
  },
  {
    name: "SOAR/RI Coalition Against Domestic Violence",
    amount: "$25,000",
    content:
      "Program to support Survivors of Domestic Violence. Resources and basic necessities will be offered with these funds. This program is statewide and offers services to non-English speaking victims as well.",
    website: "https://ricadv.org/soar/"
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
              <article
                key={rec.name}
                className="funding-recipient-card"
                tabIndex={0}
                aria-label={`${rec.name}, funded ${rec.amount}`}
              >
              
                <a href={rec.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="funding-recipient-link"
                >
                  <div className="funding-recipient-card-front">
                    <p className="funding-recipient-amount">{rec.amount}</p>
                    <h2 className="funding-recipient-name">{rec.name}</h2>
                  </div>

                  <div className="funding-recipient-card-overlay">
                    <p className="funding-recipient-description">{rec.content}</p>

                  </div>
                </a>
              </article>
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
                aria-label="Apply For Funding (opens in new tab)"
                className="ml-5 px-5 py-6 bg-[rgb(76,122,47)] text-white font-semibold shadow rounded no-underline apply-button inline-block"
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
