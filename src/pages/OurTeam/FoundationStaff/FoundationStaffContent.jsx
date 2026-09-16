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
      role: 'Chair',
      photo: GarciaImage,
      bio: (
        <>
          Angelo grew up in Central Falls, RI, alongside Viola, and the two have been childhood friends for nearly 50 years. He holds an Associate degree in Communication from CCRI, a Bachelor of Science from Springfield College, and a Master's in Educational Leadership from Cambridge College.
          <p></p>
          Although his foray into philanthropic work is recent, Angelo is learning a great deal about running a foundation. He is fortunate to share a close connection with Viola and Julius and deeply appreciates their guidance and generosity.
          <p></p>
          Working closely with other non-profits and foundations throughout the country, Angelo looks forward to the Davis-Tennon foundation's continued growth and is thrilled to be part of this monumental effort.
           <p></p>
           Mr. Garcia can be reached at{' '}
          <a href="mailto:agarcia@davis-tennonfoundation.org">agarcia@davis-tennonfoundation.org</a>
        </>
      ),
    },
    {
      name: 'Jenny Sousa',
      role: 'Administrative Support Specialist',
      photo: SousaImage,
      bio: (
        <>
          Jenny Sousa was born and raised in Central Falls, Rhode Island, and is a proud graduate of Central Falls High School, Class of 2003. Following graduation, she pursued her passion for travel and new experiences by completing flight attendant training with Delta Air Lines.
          <p></p>
          Proud of her Portuguese heritage, Jenny’s family roots are in São Miguel, Azores. Growing up, she spent many memorable summers in the Azores with her Grandparents, experiences that helped shape her strong appreciation for family, culture, and community. Today, she continues those traditions with her husband, who is also from the Azores, and their two sons.
          <p></p>
          Professionally, Jenny has built a meaningful career in education, where she is dedicated to supporting students, families, staff, and the greater school community. She worked 20 years at an early learning center right here in the city of Central Falls.  Her work reflects her commitment to organization, collaboration, and creating a welcoming and supportive environment for everyone she serves. As someone who was raised in the community she now has the opportunity to serve, Jenny takes great pride in giving back and helping families navigate their educational journey.
          <p></p>
          Outside of her professional role, Jenny values spending time with her family, traveling, celebrating her Portuguese culture, and creating lasting memories with her husband and sons.
          <p></p>
          Mrs. Sousa can be reached at{' '}
          <a href="mailto:jsousa@davis-tennonfoundation.org">jsousa@davis-tennonfoundation.org</a>
        </>
      ),
    },
    {
      name: 'Jennifer Toone Corrigan',
      role: 'Public Relations Specialist',
      photo: TooneImage,
      bio: (
        <>
          Jennifer Toone Corrigan is the founder and principal of In Toone Communication, a women-owned PR and marketing firm based in Providence. For more than two decades, she’s worked in public relations, marketing strategy, media and branding — figuring out what matters, how to tell the story and how to make people pay attention.
          <p></p>
          Her work with the Davis-Tennon Foundation is especially close to her heart. Jennifer is deeply committed to its belief in the worth of every person and its mission to remove obstacles, expand opportunity and strengthen communities. She is proud to help tell the stories of the people, organizations and ideas the Foundation invests in — and to help more people understand why that work matters.
          <p></p>
          Mrs. Toone Corrigan can be reached at{' '}
          <a href="mailto:jtoone@intoone.com">jtoone@intoone.com</a>
        </>
      ),
    },
    {
      name: 'Angel Castano',
      role: 'Technical Specialist',
      photo: CastanoImage,
      bio: (
        <>
          Angel Javier Castano is a software engineer based in Central Falls, Rhode Island, who is passionate about technology, community and creating opportunities for others. As a software engineer, he enjoys solving problems and building technology that can make people's lives easier and more connected.
          <p/>
          His work with the Davis-Tennon Foundation is an opportunity to bring that perspective beyond the technical world. Angel is deeply committed to the Foundation's belief in the worth of every person and its mission to remove obstacles, expand opportunity and strengthen communities. He is proud to contribute his skills, perspective and time to work that supports the people and communities of Rhode Island — and to be part of a Foundation committed to making a meaningful difference. 
          <p/>
          Mr. Castano can be reached at{' '}
          <a href="mailto:acastano@davis-tennonfoundation.org">acastano@davis-tennonfoundation.org</a>
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
                        <h1>{member.name}</h1>
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
