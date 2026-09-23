import { createElement, useEffect } from 'react';
import {
  Apple,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Clapperboard,
  GraduationCap,
  HandHeart,
  Handshake,
  Heart,
  Home,
  ShieldCheck,
  Utensils,
  UsersRound,
} from 'lucide-react';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import FadeIn from '../../components/fadeinsection/FadeIn.jsx';
import SectionHeader from '../../components/SectionHeader/SectionHeader.jsx';
import FeatureCard from '../../components/FeatureCard/FeatureCard.jsx';
import './ParentResourceCenter.css';
import heroImage from '../../assets/images/prc-photos/prc-hero-image.png';
import familySupportImage from '../../assets/images/prc-photos/viola-and-julius.png';
import recognitionImage from '../../assets/images/prc-photos/PRC4.png';
import logoMark from '../../assets/images/logo-photos/icononly_nobuffer.png';

const futurePhases = [
  {
    title: 'Community Resource & Empowerment Center',
    description: 'Connections to essential services and community partners.',
    icon: HandHeart,
  },
  {
    title: 'Parent Resource Center',
    description: 'Tools, workshops, and support for parents and caregivers.',
    icon: UsersRound,
  },
  {
    title: 'Adult Empowerment',
    description: 'Education and workforce development for adults.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Parent University',
    description: 'Classes and learning opportunities for the whole family.',
    icon: GraduationCap,
  },
  {
    title: 'Expanded Mary Alice Davis Food Pantry',
    description: 'Growing the pantry to serve more families in need.',
    icon: Apple,
  },
  {
    title: 'Shared Nonprofit Collaboration Hub',
    description: 'A shared space for partnership, innovation, and collective impact.',
    icon: Handshake,
  },
];

const missionFocusAreas = [
  { title: 'Food Security', icon: Utensils },
  { title: 'Housing Stability', icon: Home },
  { title: 'Student Opportunity', icon: GraduationCap },
  { title: 'Empowering Women', icon: Heart },
  { title: 'Domestic Violence Prevention', icon: ShieldCheck },
  { title: 'Community Partnerships', icon: UsersRound },
];

const recognitionItems = [
  {
    title: '2026 Rhode Island Community Service Award',
    detail: 'Leadership Rhode Island',
    icon: Award,
  },
  {
    title: 'Food 2050',
    detail: 'World Premiere',
    icon: Clapperboard,
  },
  {
    title: 'Viola Davis',
    detail: 'Global Humanitarian Achievement Award',
    icon: Heart,
  },
  {
    title: 'Davis Reach Academy',
    detail: 'Growing statewide and national partnerships',
    icon: BookOpen,
  },
];

const impactStats = [
  {
    value: '$385,000',
    label: 'Awarded through two funding cycles',
    detail: 'Summer Funding: $150,000 | Winter Funding: $235,000',
  },
  {
    value: '13',
    label: 'Organizations supported',
  },
  {
    value: '3,000+',
    label: 'Individuals served monthly through the Mary Alice Davis Food Pantry',
  },
];

function ParentResourceCenter() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = 'Learn about the Mary Alice Davis Family Engagement Center, an upcoming Davis-Tennon Foundation initiative opening in 2027.';
    let metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute('content');
    const createdMetaDescription = !metaDescription;

    document.title = 'Mary Alice Davis Family Engagement Center | Davis-Tennon Foundation';

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute('content', description);

    return () => {
      document.title = previousTitle;

      if (createdMetaDescription) {
        metaDescription.remove();
      } else if (previousDescription) {
        metaDescription.setAttribute('content', previousDescription);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="parent-resource-page">
        <section className="parent-resource-hero" aria-labelledby="parent-resource-title">
          <img
            src={heroImage}
            alt="Rendering of the Mary Alice Davis Family Engagement Center exterior"
            className="parent-resource-hero-image"
          />
          <div className="parent-resource-hero-overlay" />
          <FadeIn>
            <div className="parent-resource-hero-copy">
              <p className="parent-resource-kicker">Parent Resource Center</p>
              <h1 id="parent-resource-title">Mary Alice Davis Family Engagement Center</h1>
              <p className="parent-resource-opening">Coming in 2027</p>
              <p className="parent-resource-intro">
                The Family Engagement Center will create pathways to resources, education, and
                support so families can grow stronger and thrive together.
              </p>
              <div className="parent-resource-info-card">
                <strong>Together, we are creating pathways to opportunity.</strong>
                <span>
                  From the Mary Alice Davis Family Engagement Center to every program we support,
                  we are building stronger communities where everyone can thrive.
                </span>
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="parent-resource-section parent-resource-mission">
          <FadeIn>
            <div className="parent-resource-mission-grid">
              <div className="parent-resource-mission-copy">
                <SectionHeader eyebrow="Our Mission" title="We Believe People Are Born With Worth" align="left">
                  <p>
                    The Foundation works to remove barriers and expand access so individuals can
                    fully participate in community life.
                  </p>
                </SectionHeader>
              </div>
              <div className="parent-resource-focus-grid" aria-label="Foundation focus areas">
                {missionFocusAreas.map(({ title, icon }) => (
                  <article key={title} className="parent-resource-focus-card">
                    {createElement(icon, { size: 26, strokeWidth: 2.1, 'aria-hidden': true })}
                    <h3>{title}</h3>
                  </article>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="parent-resource-section parent-resource-looking-ahead">
          <FadeIn>
            <SectionHeader title="Looking Ahead">
              <p>
                The Family Engagement Center will bring together planned services, shared spaces,
                and future programming designed to empower every member of the family.
              </p>
            </SectionHeader>
            <div className="parent-resource-feature-grid">
              {futurePhases.map(({ title, description, icon }) => (
                <FeatureCard key={title} title={title} icon={icon}>
                  {description}
                </FeatureCard>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className="parent-resource-split parent-resource-split-cream">
          <FadeIn>
            <div className="parent-resource-split-inner">
              <div className="parent-resource-image-panel">
                <img
                  src={familySupportImage}
                  alt="Davis Reach Academy community members standing together"
                  loading="lazy"
                />
              </div>
              <div className="parent-resource-copy-panel">
                <img src={logoMark} alt="" aria-hidden="true" className="parent-resource-mark" />
                <h2>Building Stronger Families Together</h2>
                <p>
                  The Center will be a welcoming space where families can access resources, connect
                  with others, and find the support they need to build brighter futures.
                </p>
                <p>
                  This work is rooted in a long-term commitment to remove barriers to opportunity
                  and help families build stability, confidence, and lasting momentum.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="parent-resource-section parent-resource-impact">
          <FadeIn>
            <SectionHeader eyebrow="Our Impact" title="Creating Real Change Across Rhode Island">
              <p>
                Through grantmaking, partnerships, and programs, the Foundation is building momentum
                for families and the organizations that serve them.
              </p>
            </SectionHeader>
            <div className="parent-resource-stats-grid">
              {impactStats.map(({ value, label, detail }) => (
                <article key={value} className="parent-resource-stat-card">
                  <strong>{value}</strong>
                  <span>{label}</span>
                  {detail && <p>{detail}</p>}
                </article>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className="parent-resource-section parent-resource-vision">
          <FadeIn>
            <SectionHeader
              eyebrow="Foundation Vision"
              title="A Welcoming Place for Partnership and Possibility"
            >
              <p>
                  The Family Engagement Center will reflect the Davis-Tennon Foundation's mission
                  to invest in people, respond to community needs, and create pathways that help
                  families thrive across generations.
              </p>
            </SectionHeader>
            <div className="parent-resource-pillars">
              <article>
                <h3>Support for Parents</h3>
                <p>
                  Future programming will be designed with parents in mind, centering dignity,
                  access, connection, and practical support.
                </p>
              </article>
              <article>
                <h3>Education and Readiness</h3>
                <p>
                  Planned resources will encourage lifelong learning, skill development, and
                  workforce readiness for adults and families.
                </p>
              </article>
              <article>
                <h3>Community Impact</h3>
                <p>
                  Partnerships will help strengthen family engagement, expand opportunity, and
                  deepen the Foundation's long-term community impact.
                </p>
              </article>
            </div>
          </FadeIn>
        </section>

        <section className="parent-resource-split parent-resource-split-green">
          <FadeIn>
            <div className="parent-resource-split-inner parent-resource-split-reverse">
              <div className="parent-resource-copy-panel">
                <p className="parent-resource-kicker">Recognition & Momentum</p>
                <h2>Growing Partnerships, Expanding Possibility</h2>
                <p>
                  Recent milestones reflect the Foundation's growing statewide and national
                  partnerships, as well as the community-centered work guiding the Family Engagement
                  Center.
                </p>
                <div className="parent-resource-recognition-list">
                  {recognitionItems.map(({ title, detail, icon }) => (
                    <article key={title}>
                      {createElement(icon, { size: 24, strokeWidth: 2, 'aria-hidden': true })}
                      <div>
                        <h3>{title}</h3>
                        <p>{detail}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <div className="parent-resource-image-panel">
                <img
                  src={recognitionImage}
                  alt="Viola Davis and Julius Tennon attending a Food 2050 event"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="parent-resource-footer-cta">
          <FadeIn>
            <p>Opening in 2027</p>
            <h2>
              The Mary Alice Davis Family Engagement Center represents the next chapter of the
              Davis-Tennon Foundation's commitment to empowering families and strengthening our
              community.
            </h2>
            <span>Please check back for future announcements.</span>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ParentResourceCenter;
