import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
  type?: string;
}

export const SEO = ({ 
  title = "Austin Jian - Software Engineer & Product Builder",
  description = "CS student at UWaterloo building cool and eye-catching software. 5x hackathon winner. Seeking 2026 summer internships.",
  image = "https://austinjian.com/AustinFavicon.png",
  url = "https://austinjian.com/",
  keywords = "Austin Jian, software engineer, UWaterloo, computer science, FlowBoard, PlayCreate, Plant Hopper, hackathon winner, web development, full stack developer",
  type = "website"
}: SEOProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};
