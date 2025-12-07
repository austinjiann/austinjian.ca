import { ProjectCard } from '../ui/ProjectCard';

const PROJECTS = [
  {
    title: "Project One",
    description: "A revolutionary way to handle tasks efficiently using AI-driven insights.",
    href: "#",
    color: "#FF5F56" // Example color for a placeholder image
  },
  {
    title: "Project Two",
    description: "Building the future of decentralized finance with secure and scalable protocols.",
    href: "#",
    color: "#27C93F"
  },
  {
    title: "Project Three",
    description: "An immersive 3D experience for web browsers pushing the limits of WebGL.",
    href: "#",
    color: "#FFBD2E"
  }
];

export const Projects = () => {
  return (
    <section style={{
      padding: '100px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '80px', // Space between cards
      width: '100%'
    }}>
      {PROJECTS.map((project, index) => (
        <ProjectCard 
          key={index}
          title={project.title}
          description={project.description}
          href={project.href}
        >
          {/* Placeholder for project image/content */}
          <div style={{
            width: '100%',
            aspectRatio: '16/9',
            background: `linear-gradient(45deg, ${project.color}22, ${project.color}66)`,
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.2rem',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <span style={{ opacity: 0.7 }}>Project Preview Image</span>
          </div>
        </ProjectCard>
      ))}
    </section>
  );
};
