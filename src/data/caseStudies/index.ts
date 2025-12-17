import FlowboardCaseStudy from './flowboard.mdx';
import PlaycreateCaseStudy from './playcreate.mdx';
import PlanthopperCaseStudy from './planthopper.mdx';

export const caseStudyComponentBySlug: Record<string, any> = {
  flowboard: FlowboardCaseStudy,
  playcreate: PlaycreateCaseStudy,
  'plant-hopper': PlanthopperCaseStudy,
};

export const caseStudyTitleBySlug: Record<string, string> = {
  flowboard: 'FlowBoard — My First Viral Open Source Project',
  playcreate: 'PlayCreate — Case Study',
  'plant-hopper': 'Plant Hopper — Case Study',
};

export const caseStudyMetadataBySlug: Record<string, { 
  timeline: string; 
  team: Array<{ name: string; link: string }>;
  techStack: string;
  githubLink?: string;
  projectLink?: string;
}> = {
  flowboard: {
    timeline: 'November 2025',
    team: [
      { name: 'James Li', link: 'https://jame.li' },
      { name: 'Daniel Pu', link: 'https://www.danielpu.dev/' },
      { name: 'Ferdinand Zhang', link: 'https://www.linkedin.com/in/ferdinand-simmons-zhang-39ba62297' },
    ],
    techStack: 'typescript, react, vite, python, google cloud platform, redis, indexeddb, gemini, tldraw, tailwind css',
    githubLink: 'https://github.com/austinjiann/FlowBoard',
    projectLink: 'https://flowboard.tech',
  },
  playcreate: {
    timeline: 'TBD',
    team: [],
    techStack: 'TBD',
  },
  'plant-hopper': {
    timeline: 'TBD',
    team: [],
    techStack: 'TBD',
  },
};

