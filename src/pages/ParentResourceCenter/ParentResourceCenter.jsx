import { useEffect } from 'react';
import {
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  HandHeart,
  Handshake,
  UsersRound,
} from 'lucide-react';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import FadeIn from '../../components/fadeinsection/FadeIn.jsx';
import SectionHeader from '../../components/SectionHeader/SectionHeader.jsx';
import FeatureCard from '../../components/FeatureCard/FeatureCard.jsx';
import './ParentResourceCenter.css';
import heroImage from '../../assets/images/home-page-photos/hero_photo2.jpg';
import familySupportImage from '../../assets/images/what-we-fund-photos/student-opportunities.jpg';
import communityImage from '../../assets/images/what-we-fund-photos/Viola-Davis-Hunger-Is-Moms-Event-e1553904813882-1000x469-1.jpg';
import logoMark from '../../assets/images/logo-photos/icononly_nobuffer.png';

const futurePhases = [
  {
    title: 'Community Resource & Empowerment Center',
    icon: HandHeart,
  },
  {
    title: 'Parent Resource Center',
    icon: UsersRound,
  },
  {
    title: 'Adult Empowerment Programs',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Parent University',
    icon: GraduationCap,
  },
  {
    title: 'Expanded Food Pantry Services',
    icon: BookOpen,
  },
  {
    title: 'Shared Nonprofit Collaboration Hub',
    icon: Handshake,
  },
];

function ParentResourceCenter() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = 'Learn about the Mary Alice Davis Parent Engagement Center, an upcoming Davis-Tennon Foundation initiative opening in 2027.';
    let metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute('content');
    const createdMetaDescription = !metaDescription;

    document.title = 'Mary Alice Davis Parent Engagement Center | Davis-Tennon Foundation';

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
          {/* TODO: Replace this placeholder image with final Mary Alice Davis Parent Engagement Center photography. */}
          <img
            src={heroImage}
            alt="Families and community members gathered together"
            className="parent-resource-hero-image"
          />
          <div className="parent-resource-hero-overlay" />
          <FadeIn>
            <div className="parent-resource-hero-copy">
              <p className="parent-resource-kicker">Coming Soon</p>
              <h1 id="parent-resource-title">Mary Alice Davis Parent Engagement Center</h1>
              <p className="parent-resource-opening">Opening in 2027</p>
              <p className="parent-resource-intro">
                An exciting new initiative that will serve families, strengthen communities, and
                expand educational and family support resources throughout the community.
              </p>
              <div className="parent-resource-info-card">
                <strong>We are building something special for our families and community.</strong>
                <span>
                  Please check back at a later date for updates, announcements, and opening
                  information.
                </span>
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="parent-resource-section parent-resource-looking-ahead">
          <FadeIn>
            <SectionHeader title="Looking Ahead">
              <p>
                These services and spaces are being planned for future phases and are not currently
                available.
              </p>
            </SectionHeader>
            <div className="parent-resource-feature-grid">
              {futurePhases.map(({ title, icon }) => (
                <FeatureCard key={title} title={title} icon={icon}>
                  Coming in future phases.
                </FeatureCard>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className="parent-resource-split parent-resource-split-cream">
          <FadeIn>
            <div className="parent-resource-split-inner">
              <div className="parent-resource-image-panel">
                {/* TODO: Replace this placeholder image with parent and family engagement photography. */}
                <img
                  src={familySupportImage}
                  alt="Students participating in enrichment programming"
                  loading="lazy"
                />
              </div>
              <div className="parent-resource-copy-panel">
                <img src={logoMark} alt="" aria-hidden="true" className="parent-resource-mark" />
                <h2>Building Stronger Families Together</h2>
                <p>
                  The Foundation envisions a welcoming center where parents can connect with
                  educational opportunities, practical resources, workforce readiness support, and
                  trusted community partners.
                </p>
                <p>
                  This work is rooted in a long-term commitment to remove barriers to opportunity
                  and help families build stability, confidence, and lasting momentum.
                </p>
              </div>
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
                The Parent Engagement Center will reflect the Davis-Tennon Foundation's mission to
                invest in people, respond to community needs, and create pathways that help families
                thrive across generations.
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
                <p className="parent-resource-kicker">Something big is coming</p>
                <h2>Designed for Families, Built With Community</h2>
                <p>
                  As planning continues, the Foundation is imagining a polished, flexible, and
                  community-focused space that can grow with local needs.
                </p>
                <p>
                  Every phase will be shaped by the belief that families deserve resources close to
                  home, delivered through trusted relationships and collaborative care.
                </p>
              </div>
              <div className="parent-resource-image-panel">
                {/* TODO: Replace this placeholder image with final community collaboration photography. */}
                <img
                  src={communityImage}
                  alt="Community members receiving family support resources"
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
              The Mary Alice Davis Parent Engagement Center represents the next chapter of the
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
