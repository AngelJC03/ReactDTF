import React, { useState, useEffect } from 'react';
import './PartnersAndResourcesContent.css';
import ViolaDavisHungerEvent from '../../assets/images/what-we-fund-photos/Viola-Davis-Hunger-Is-Moms-Event-e1553904813882-1000x469-1.jpg';
import RICADVLogo from '../../assets/images/partner-photos/ricadv.png';
import RhodeIslandFoundationLogo from '../../assets/images/partner-photos/rif.png';
import ChamplinFoundationLogo from '../../assets/images/partner-photos/champlin.svg';
import RhodeIslandCollegeLogo from '../../assets/images/partner-photos/ric.jpg';
import TrailblazersInitiativeLogo from '../../assets/images/partner-photos/csgf.png';
import SojournerLogo from '../../assets/images/partner-photos/sojouner.png';
import FadeIn from '../../components/fadeinsection/FadeIn.jsx';
import GCRILogo from '../../assets/images/partner-photos/GCRI-logo.svg';
import ThreeRoot from '../../assets/images/partner-photos/3roots-logo.svg';
import BigBrothersBigSistersLogo from '../../assets/images/partner-photos/BIGSRI.svg';
import CentralFallsChildrensFoundationLogo from '../../assets/images/partner-photos/CFCF.webp';
import CentralFallsSchoolDistrictLogo from '../../assets/images/partner-photos/CFSD.png';
import CentralFallsSquareMileClubLogo from '../../assets/images/partner-photos/CFSMC.jpg';
import LearningCommunityLogo from '../../assets/images/partner-photos/LCSCHOOL.webp';
import NewportMentalHealthLogo from '../../assets/images/partner-photos/NMH.webp';
import NonviolenceInstituteLogo from '../../assets/images/partner-photos/NONVIOLENCE_INSTITUTE.avif';
import ProjectGoalLogo from '../../assets/images/partner-photos/PGATHLETES.avif';
import ShriLogo from '../../assets/images/partner-photos/SHRI.webp';
import TidesFamilyServicesLogo from '../../assets/images/partner-photos/TFS.jpg';
import PartnersListObject from './PartnersListObject.jsx';
import CommunityPartnersPhoto from '../../assets/images/home-page-photos/hero_photo2.jpg';

import AccordionItem from "../../components/Accordion/AccordionItem.jsx";

const partnerLogos = [
  {
    href: 'https://ricadv.org/',
    src: RICADVLogo,
    alt: 'RICADV Logo',
  },
  {
    href: 'https://rifoundation.org/',
    src: RhodeIslandFoundationLogo,
    alt: 'Rhode Island Foundation Logo',
  },
  {
    href: 'https://gcrirhodeisland.org/',
    src: GCRILogo,
    alt: 'GCRI Logo',
  },
  {
    href: 'https://champlinfoundation.org/',
    src: ChamplinFoundationLogo,
    alt: 'Champlin Foundation Logo',
  },
  {
    href: 'https://www.threeroots.org/',
    src: ThreeRoot,
    alt: 'Three Roots Logo',
  },
  {
    href: 'https://www.ric.edu/',
    src: RhodeIslandCollegeLogo,
    alt: 'Rhode Island College Logo',
  },
  {
    href: 'https://chartergrowthfund.org/',
    src: TrailblazersInitiativeLogo,
    alt: 'Trailblazers Initiative Logo',
  },
  {
    href: 'https://bigsri.org/',
    src: BigBrothersBigSistersLogo,
    alt: 'Big Brothers Big Sisters of Rhode Island Logo',
  },
  {
    href: 'https://www.cfchildrensfoundation.org/',
    src: CentralFallsChildrensFoundationLogo,
    alt: "Central Falls Children's Foundation Logo",
  },
  {
    href: 'https://www.cfschools.net/athletics',
    src: CentralFallsSchoolDistrictLogo,
    alt: 'Central Falls Athletics Logo',
  },
  {
    href: 'https://www.facebook.com/p/Central-Falls-Square-Mile-Club-61553554014458/',
    src: CentralFallsSquareMileClubLogo,
    alt: 'Central Falls Square Mile Club Logo',
  },
  {
    href: 'https://www.thelearningcommunity.com/',
    src: LearningCommunityLogo,
    alt: 'The Learning Community Logo',
  },
  {
    href: 'https://www.newportmentalhealth.org/',
    src: NewportMentalHealthLogo,
    alt: 'Newport Mental Health Logo',
  },
  {
    href: 'https://www.nonviolenceinstitute.org/',
    src: NonviolenceInstituteLogo,
    alt: 'Nonviolence Institute Logo',
  },
  {
    href: 'https://www.projectgoal.org/',
    src: ProjectGoalLogo,
    alt: 'Project GOAL Logo',
  },
  {
    href: 'https://www.shriyoga.org/',
    src: ShriLogo,
    alt: 'SHRI Logo',
  },
  {
    href: 'https://www.tidesfs.org/',
    src: TidesFamilyServicesLogo,
    alt: 'Tides Family Services Logo',
  },
  {
    href: 'https://sojournerri.org/',
    src: SojournerLogo,
    alt: 'Sojourner House Logo',
  }
];

function PartnersAndResourcesContent() {
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [Screenwidth, setScreenWidth] = useState(window.innerWidth);

  const [ShowAccordion, setShowAccordion] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setShowAccordion(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="partners-and-resources-page-container">
      <FadeIn>
        <div className="par-page-content">
          {/* --- Intro & Photo (always visible) --- */}
          <div className="page-image">
            <h1>Resources for Families and Community Partners</h1>
            <img
              src={ViolaDavisHungerEvent}
              alt="Angelo Garcia"
              className="board-member-photo"
            />
            <p className="photo-credit">
              <em>
                Photo by{" "}
                <a href="https://www.eifoundation.org/">EIF (Entertainment Industry Foundation)</a>
              </em>
            </p>
          </div>

          <section className="community-partners-feature">
            <div className="community-partners-panel community-partners-panel-left">
              <p className="community-partners-eyebrow">Community Partners</p>
              <h2>Local institutions helping families thrive.</h2>
              <p>
                At the Davis-Tennon Foundation, we are dedicated to connecting families with the tools,
                organizations, and support systems they need to thrive.
              </p>
              <p>
                These partnerships reflect our mission to champion local institutions that are creating
                opportunity, removing barriers, and responding directly to community needs.
              </p>
              <p className="community-partners-emphasis">
                Together, we are helping build stronger, safer, and more supported communities throughout Central Falls and beyond.
              </p>
            </div>

            <div className="community-partners-panel community-partners-panel-right">
              <div className="community-partners-copy">
                <h3>Built with trusted Rhode Island partners</h3>
                <p>
                  We are proud to collaborate with organizations that are deeply embedded in the communities they serve.
                </p>
                <p>
                  In addition to our inaugural grantees, we are honored to spotlight partners like:
                </p>

                <div className="community-partners-highlights">
                  <a
                    href="https://www.ric.edu/about/commitment-diversity-equity-inclusion/first-generation-mobility/upward-bound-program"
                    target="_blank"
                    rel="noreferrer"
                    className="community-partners-highlight-item"
                  >
                    <strong>Upward Bound at Rhode Island College</strong>
                    <span>Supporting first-generation and income-eligible students on their path to college.</span>
                  </a>

                  <a
                    href="https://www.centralfallsri.gov/library"
                    target="_blank"
                    rel="noreferrer"
                    className="community-partners-highlight-item"
                  >
                    <strong>Central Falls Adams Public Library</strong>
                    <span>A trusted hub for learning, literacy, and community programming.</span>
                  </a>

                  <a
                    href="https://www.projectreadri.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="community-partners-highlight-item"
                  >
                    <strong>Project R.E.A.D.</strong>
                    <span>Promoting literacy and lifelong learning through adult education.</span>
                  </a>

                  <a
                    href="https://sojournerri.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="community-partners-highlight-item"
                  >
                    <strong>Sojourner House</strong>
                    <span>Providing housing, counseling, and education for people impacted by domestic violence.</span>
                  </a>
                </div>
              </div>

              <div className="community-partners-image-frame">
                <img
                  src={CommunityPartnersPhoto}
                  alt="Community members gathered together at a Davis-Tennon Foundation related event"
                  className="community-partners-image"
                />
              </div>
            </div>
          </section>

          {!ShowAccordion && (
            <PartnersListObject />
          )}

          {ShowAccordion && (
            <AccordionItem title="More of Our Community Partners">
              <PartnersListObject />
            </AccordionItem>
          )}

          <div className="partner-logos" aria-label="Partner logos">
            <div className="partner-logo-banner">
              <div className="partner-logo-track">
                {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                  <a
                    key={`${logo.alt}-${index}`}
                    href={logo.href}
                    target="_blank"
                    rel="noreferrer"
                    className="partner-logo-item"
                    aria-label={logo.alt}
                  >
                    <img src={logo.src} alt={logo.alt} className="partner-logo" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* --- Contact (always visible) --- */}
          <div className="contact-us-partners-page">
            <h2>Contact Us for Assistance</h2>
            <p>
              If you’re unsure where to start or need help connecting with the right resource, contact us
              {Screenwidth > 600 ? (
                <>
                  {" "}at <a href="mailto:agarcia@davis-tennonfoundation.org" className="contact-email">agarcia@davis-tennonfoundation.org.</a>
                </>
              ) : (
                <a href="mailto:agarcia@davis-tennonfoundation.org" className="contact-email"> Here.</a>
              )}
            </p>
            <p>
              Together, we can eliminate barriers, build connections, and create brighter futures for families across Rhode Island.
            </p>
          </div>
        </div>
        </FadeIn>
    </div>
  );
}

export default PartnersAndResourcesContent;
