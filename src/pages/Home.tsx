import { Header } from '../components/layout/Header';
import { Hero } from '../components/section/Hero';
import { Projects } from '../components/section/Projects';
import { WebringBadge } from '../components/ui/WebringBadge';
import { SEO } from '../components/SEO';
import { Helmet } from 'react-helmet-async';

export const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Austin Jian",
    "url": "https://austinjian.com",
    "jobTitle": "Software Engineer",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "University of Waterloo"
    },
    "description": "CS student at UWaterloo building cool and eye-catching software. 5x hackathon winner.",
    "knowsAbout": ["Software Engineering", "Web Development", "Full Stack Development", "Product Design", "AI/ML"],
    "sameAs": [
      "https://github.com/austinjian",
      "https://linkedin.com/in/austinjian"
    ]
  };

  return (
    <>
      <SEO />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div style={{ position: 'relative' }}>
        <Header />
        <Hero />
        <Projects />
        <WebringBadge siteUrl="austinjian.ca" />
      </div>
    </>
  );
};