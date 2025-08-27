import react, { useState, useEffect } from 'react';
import './BecomeBoardMemberContent.css';
import FadeInSection from '../../../components/fadeinsection/FadeIn.jsx';
import BecomeBoardMemberImage from '../../../assets/images/home-page-photos/angelo-garcia-davistenon-foundation.webp';
import DavisTennonLogo from '../../../assets/images/logo-photos/icononly_nobuffer.png';
import AccordionItem from '../../../components/Accordion/AccordionItem.jsx';

function BecomeBoardMemberContent() {
  const [ContentShown, setContentShown] = useState(window.innerWidth > 1000);

  useEffect(() => {
    window.innerWidth > 1000 ? setContentShown(true) : setContentShown(false);
  }, []);

  return (
    <div className="BBM-OMEGA-CONTAINER">
      <div className="become-board-member-page-container">
        <FadeInSection>
          <div className="bbm-header-image">
            <h1>Board Members</h1>
            <img 
              src={BecomeBoardMemberImage} 
              alt="Angelo Garcia" 
              className="bbm-board-member-photo"
            />
          </div>
        </FadeInSection>

        <div className="bbm-content">
          <FadeInSection>
            <AccordionItem title="Join Our Mission: Seeking Board Members" defaultOpen={ContentShown}>
              <p>
                The Davis-Tennon Foundation is looking for passionate, community-driven individuals 
                to join our Board of Directors. As a board member, you will play a critical role in 
                shaping the Foundation’s mission to empower women, prevent domestic violence, create 
                opportunities for students, and address housing challenges throughout Rhode Island.
              </p>
            </AccordionItem>

            <AccordionItem title="We are seeking individuals who:" defaultOpen={ContentShown}>
              <ul className="bbm-bullet-list">
                <li>
                  <img src={DavisTennonLogo} alt="bullet" className="bbm-bullet-icon" />
                  <span>Share a commitment to building strong, equitable communities.</span>
                </li>
                <li>
                  <img src={DavisTennonLogo} alt="bullet" className="bbm-bullet-icon" />
                  <span>Bring diverse perspectives, skills, and expertise to the table.</span>
                </li>
                <li>
                  <img src={DavisTennonLogo} alt="bullet" className="bbm-bullet-icon" />
                  <span>Have experience in areas such as nonprofit leadership, advocacy, fundraising, education, housing, or social services.</span>
                </li>
                <li>
                  <img src={DavisTennonLogo} alt="bullet" className="bbm-bullet-icon" />
                  <span>Are ready to provide strategic guidance, support key initiatives, and champion the Foundation’s mission.</span>
                </li>
              </ul>
            </AccordionItem>

            <AccordionItem title="As a board member, you will have the opportunity to:" defaultOpen={ContentShown}>
              <ul className="bbm-bullet-list">
                <li>
                  <img src={DavisTennonLogo} alt="bullet" className="bbm-bullet-icon" />
                  <span>Influence impactful programs and partnerships that address critical community needs.</span>
                </li>
                <li>
                  <img src={DavisTennonLogo} alt="bullet" className="bbm-bullet-icon" />
                  <span>Help drive nearly $1 million annually into initiatives that make a difference in the lives of Rhode Island families.</span>
                </li>
                <li>
                  <img src={DavisTennonLogo} alt="bullet" className="bbm-bullet-icon" />
                  <span>Collaborate with a dedicated team and community partners to create lasting change.</span>
                </li>
              </ul>
              <p>
                If you are ready to make a difference and lend your voice to a cause that matters, we’d love to hear from you.
              </p>
            </AccordionItem>

            <AccordionItem title="How to Apply" defaultOpen={ContentShown}>
              <p>
                Submit a letter of interest and your resume to 
                <a href="mailto:agarcia@davis-tennonfoundation.org"> agarcia@davis-tennonfoundation.org </a>
                with the subject line: <b>Board Member Application</b>. Applications will be reviewed on a rolling basis. 
                Use <a href="https://docs.google.com/forms/d/e/1FAIpQLSfvbXJiOKQTISXbQi4hbM31X9YlVZB5VaNLEb8wX28n6E3gOg/viewform" target="_blank" rel="noopener noreferrer">
                THIS FORM
                </a> to complete your application.
              </p>
              <br />
              <p>Together, we can break down barriers, build connections, and strengthen communities. Join us in this important work!</p>
              <br />
              <div className="bbm-spacer">
                <button className="bbm-apply-button">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfvbXJiOKQTISXbQi4hbM31X9YlVZB5VaNLEb8wX28n6E3gOg/viewform" target='_blank' rel='noopener noreferrer' className=" inline-block ml-5 px-3 py-3 bg-[rgba(139,93,49)] text-white font-semibold shadow rounded no-underline apply-button">
                      Apply to be a Board Member
                  </a>
                </button>
              </div>
            </AccordionItem>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}

export default BecomeBoardMemberContent;
