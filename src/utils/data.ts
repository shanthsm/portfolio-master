import {
  Experience as ExperienceType,
  Education as EducationType,
  Project as ProjectType,
} from '../types';

const calculateWorkLength = (startMonth: Date, endMonth: Date): number => {
  let months = (endMonth.getFullYear() - startMonth.getFullYear()) * 12;
  months -= startMonth.getMonth() + 1;
  months += endMonth.getMonth();
  return months <= 0 ? 0 : months;
};

const projects: Array<ProjectType> = [
  {
    img: 'img/cashfree-docs.png',
    title: 'Docs for Cashfree Payments',
    description:
      'Spearheaded migration from ReadMe to Mintlify. Published comprehensive API references, SDK documentation, integration guides, and troubleshooting resources for developers.',
    codeLink: '',
    liveLink: 'https://www.cashfree.com/docs',
    techstack: ['API docs', 'SDK docs', 'Mintlify', 'Fintech'],
  },
  {
    img: 'img/cashfree-video.png',
    title: 'Videos and Visuals at Cashfree',
    description:
      'Created and edited engaging video tutorials to explain walkthroughs, integration processes, and product features for visual learners.',
    codeLink: '',
    liveLink: 'https://www.youtube.com/watch?v=cCuJDFY2QSs',
    techstack: ['Video Production', 'Camtasia', 'Trupeer', 'Fintech'],
  },
  {
    img: 'img/zeta-docs.png',
    title: 'Docs for Zeta',
    description:
      'Developed and maintained 200+ pages of technical documentation including How-to guides, User guides, Runbooks, API docs, and Video tutorials using docs-as-code methodology.',
    codeLink: '',
    liveLink: 'https://cipherdocs0zetaapps.olympus-world.zetaapps.in/',
    techstack: ['Hugo', 'Markdown', 'REST API', 'Lucidchart'],
  },
  {
    img: 'img/djamaile-light.png',
    title: 'Portfolio',
    description: 'Personal portfolio built with Docusaurus showcasing projects and experience.',
    codeLink: 'https://github.com/shanthsm',
    liveLink: 'https://shanthsm.github.io/portfolio-master/',
    techstack: ['ReactJS', 'TypeScript', 'Docusaurus'],
  },
];

const experience: Array<ExperienceType> = [
  {
    img: 'img/cf.png',
    jobTitle: 'Senior Information Developer',
    company: 'Cashfree Payments',
    date: 'Oct 2024 - Present',
    workLength: '1 year 5 months',
    location: 'Bengaluru, Karnataka, India',
    tasks: ['Spearheaded migration to Mintlify. Built and led a team of 3 writers. Implemented Vale integration, AI-powered documentation, and analytics-driven content strategy.'],
    techstack: ['Mintlify', 'Vale', 'ChatGPT', 'Google Analytics', 'Jira'],
  },
  {
    img: 'img/zeta.png',
    jobTitle: 'Senior Information Developer',
    company: 'Zeta',
    date: 'Nov 2022 - Oct 2024',
    workLength: '2 years',
    location: 'Bengaluru, Karnataka, India',
    tasks: [
      'Adopted docs-as-code methodology. Developed 200+ pages of technical docs. Increased user engagement by 20% through improved content strategy and SEO.'
    ],
    techstack: ['Hugo', 'Markdown', 'Git', 'Figma', 'Adobe Premiere Pro'],
  },
  {
    img: 'img/ecw.png',
    jobTitle: 'Technical Writer',
    company: 'eClinicalWorks India Pvt Ltd',
    date: 'May 2021 - Nov 2022',
    workLength: '1 year 7 months',
    location: 'Bengaluru, Karnataka, India',
    tasks: [
      'Developed User Guides, Online Help, Release Notes for EMR and RCM software. Reduced user errors by 50% and improved billing accuracy by 25%.',
    ],
    techstack: [ 
      'Postman', 
      'REST APIs', 
      'Adobe Photoshop', 
      'Microsoft Streams',
    ],
  },
  {
    img: 'img/cg.png',
    jobTitle: 'Technical Writer',
    company: 'Capgemini',
    date: 'Sep 2018 - May 2021',
    workLength: '2 years 7 months',
    location: 'Bengaluru, Karnataka, India',
    tasks: [
      'Prepared installation and troubleshooting manuals for Volvo trucks. Adhered to MSTP guidelines and performed user acceptance testing.',
    ],
    techstack: [
      'MSTP',
      'User Manuals',
      'Release Notes',
      'UAT Testing',
    ],
  },
  
];

const education: Array<EducationType> = [
  {
    img: 'img/hhs.png',
    school: 'VTU University',
    study: 'Bachelors in Mechanical Engineering',
    date: '2014 - 2018',
  },
  {
    img: 'img/school-placeholder.svg',
    school: 'Mandaara Public School',
    study: '11th + 12th',
    date: '2012 - 2014',
  },
  {
    img: 'img/school-placeholder.svg',
    school: 'Gurudeva School',
    study: '1st to 10th',
    date: '2002 - 2012',
  },
  {
    img: 'img/glr.png',
    school: 'Udemy',
    study: 'OpenAPI Specification & Swagger Tools - Zero To Master',
    date: '2024',
  },
];

export { experience, projects, education };
