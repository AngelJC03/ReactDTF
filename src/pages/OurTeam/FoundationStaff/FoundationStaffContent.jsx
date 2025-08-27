import React, { useState, useEffect } from 'react';
import FadeInSection from '../../../components/fadeinsection/FadeIn.jsx';
import './FoundationStaffContent.css';
import GarciaImage from '../../../assets/images/staff-photos/garcia_headshot.jpeg';
import SousaImage from '../../../assets/images/staff-photos/sousa_headshot.jpeg';
import TooneImage from '../../../assets/images/staff-photos/jtoone_headshot.jpg';
import CastanoImage from '../../../assets/images/staff-photos/angel_headshot.jpeg';

function FoundationStaffContent() {
  const [expanded, setExpanded] = useState({});
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  // toggle individual bios
  const toggleText = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // handle screen resize
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth > 768;
      setIsDesktop(desktop);
      if (desktop) {
        // auto-collapse state when on desktop (always expanded)
        setExpanded({});
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // run once at mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const staff = [
    {
      name: 'Angelo Garcia',
      role: 'Chair of the Davis-Tennon Foundation',
      photo: GarciaImage,
      bio: (
        <>
          Angelo Garcia is the Founder and Executive
          Director of the Segue Institute for Learning, a 
          public charter school in Central Falls, Rhode Island,
          focused on providing high-quality education to underserved
          communities. He also serves as Chair of the Davis-Tennon Foundation,
          which empowers local communities in Rhode Island. Garcia's commitment 
          to education is demonstrated through initiatives like the planned opening
          of Legacy High School to train future educators. Mr. Garcia can be reached at{' '}
          <a href="mailto:agarcia@davis-tennonfoundation.org">agarcia@davis-tennonfoundation.org</a>.
        </>
      ),
    },
    {
      name: 'Jenny Sousa',
      role: 'Administrative Support Specialist',
      photo: SousaImage,
      bio: (
        <>
          Jenny Sousa, born and raised in Central Falls, graduated from Central Falls
          High School in 2003 and pursued her passion for travel by training as a flight 
          attendant with Delta Airlines. Of Portuguese heritage, her parents are from São Miguel,
          Azores, where she spent memorable summers with her brother. She now shares
          those experiences with her husband, also from the Azores, and their two sons.
          Mrs. Sousa can be reached at{' '}
          <a href="mailto:jsousa@davis-tennonfoundation.org">jsousa@davis-tennonfoundation.org</a>.
        </>
      ),
    },
    {
      name: 'Jennifer Toone Corrigan',
      role: 'Public Relations Specialist',
      photo: TooneImage,
      bio: (
        <>
          Jennifer Toone Corrigan is the founder and principal of In Toone Communication, 
          a 100% women-owned public relations and marketing firm based in Providence, Rhode Island. 
          Jennifer has been a long-time supporter of the Segue Institute for Learning, contributing 
          to its press efforts and helping showcase community-driven initiatives in Rhode Island. 
          Mrs. Toone Corrigan can be reached at{' '}
          <a href="mailto:jtoone@davis-tennonfoundation.org">jtoone@davis-tennonfoundation.org</a>.
        </>
      ),
    },
    {
      name: 'Angel Castano',
      role: 'Technical Specialist',
      photo: CastanoImage,
      bio: (
        <>
          A Software Engineer based out of Central
          Falls, Rhode Island. Angel is dedicated to 
          advocating for the community members of Central Falls and 
          beyond. As a member of the foundation, Angel is committed to 
          addressing critical needs within Rhode Island and providing 
          support beyond the technical realm. Mr. Castano can be reached at{' '}
          <a href="mailto:acastano@davis-tennonfoundation.org">acastano@davis-tennonfoundation.org</a>.
        </>
      ),
    },
  ];

  return (
    <div className="foundation-staff-page-container">
      <div className="staff-container">
        <FadeInSection>
          <div className="title-of-page">Foundation Staff</div>
        </FadeInSection>
          {staff.map((member, index) => (
            <FadeInSection>
                <div className="staff-member" key={index}>
                    <img
                    src={member.photo}
                    alt={member.name}
                    className="staff-photo"
                    />
                    <div className="staff-caption">
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>

                        {/* only show toggle on mobile */}
                        {!isDesktop && (
                            <div
                            className="toggle-bar"
                            onClick={() => toggleText(index)}
                            >
                            {expanded[index] ? 'Click to Hide' : `About ${member.name}`}
                            </div>
                        )}

                        {(isDesktop || expanded[index]) && (
                            <div className="text-content">{member.bio}</div>
                        )}
                    </div>
                </div>
            </FadeInSection>
        ))}
      </div>
    </div>
  );
}

export default FoundationStaffContent;
