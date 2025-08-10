import {
  Experience as ExperienceType,
  Education as EducationType,
  Project as ProjectType,
} from '../types';

const caculateWorkLength = (startMonth: Date, endMonth: Date): number => {
  let months = (endMonth.getFullYear() - startMonth.getFullYear()) * 12;
  months -= startMonth.getMonth() + 1;
  months += endMonth.getMonth();
  return months <= 0 ? 0 : months;
};

const projects: Array<ProjectType> = [
  {
    img: 'img/ourmanga.png',
    title: 'Docs for dApp Developers',
    description:
      'Created docs from scratch to onboard users to blockchain-powered Auth, Storage, Privacy and Identity tech stacks.',
    codeLink: 'https://github.com/orgs/arcana-network/repositories',
    liveLink: 'https://docs.arcana.network/',
    techstack: ['Blockchain', 'SDK docs', 'Ethereum', 'API docs'],
  },
  {
    img: 'img/kanji.png',
    title: 'Docs for DevOps admin and developers',
    description:
      'Part of early age startup. Led the documentation and took the product to a successful GA. Later it became an unicorn.',
    codeLink: '',
    liveLink: 'https://developer.harness.io/docs/continuous-integration',
    techstack: ['Markdown', 'CI', 'Kubernetes', 'Docker','Containers'],
  },
  {
    img: 'img/anatoken.png',
    title: 'Docs for admins and developers ensuring cloud security for SaaS, PaaS, and IaaS.',
    description:
      'Led the documentation efforts for a CASB (Cloud Access Security broker).',
    codeLink: '',
    liveLink: 'https://success.myshn.net/Skyhigh_Cloud_Infrastructure_(CNAPP)/CSPM/CSPM_DLP_On-Demand_Scans/Create_a_DLP_On-Demand_Scan_for_GCP',
    techstack: [
    'Enterprise Anti-Virus', 
    'Identity & Access Management (IAM)'],
  },
  {
    img: 'img/djamaile-light.png',
    title: 'Portfolio',
    description: 'Personal portfolio',
    codeLink: 'https://github.com/shanthsm',
    liveLink: 'https://shanthsm.github.io/portfolio-master/',
    techstack: ['ReactJS', 'TypeScript'],
  },
];

const experience: Array<ExperienceType> = [
  {
    img: 'img/arcana.png',
    jobTitle: 'Blockchain Technical Writer',
    company: 'Arcana network',
    date: 'March 2022 - April 2023',
    workLength: `${caculateWorkLength(new Date(2022, 1, 3), new Date())} mos`,
    location: 'Full-time Remote',
    tasks: ['Curating docs for dApp Developers'],
    techstack: ['Blockchain', 'SDK docs', 'Ethereum', 'API docs'],
  },
  {
    img: 'img/bol.png',
    jobTitle: 'Senior Technical Writer',
    company: 'Harness.io',
    date: 'March 2021 - March 2022',
    workLength: `1 yr 1 mos`,
    location: 'Full-time Remote',
    tasks: [
      'Curating docs for DevOps developers. Providing contextual hekps in product writing tooltips.'
    ],
    techstack: ['Markdown', 'CI', 'Kubernetes', 'Docker','Containers'],
  },
  {
    img: 'img/ssm.png',
    jobTitle: 'Senior Technical Writer',
    company: 'McAfee',
    date: 'Sep 2019 - March 2021',
    workLength: '1 year 7 mos',
    location: 'Bangalore',
    tasks: [
      'Developed docs for the best-in-the-business CASB product of Mcafee called MVISION cloud.',
    ],
    techstack: [ 
      'Cloud Access Security Broker (CASB)', 
      'Enterprise Anti-Virus', 
      'Identity & Access Management (IAM)', 
    
    ],
  },
   {
    img: 'img/ssc.png',
    jobTitle: 'Technical Writer',
    company: 'KanTime Healthcare',
    date: 'Jan 2016 - Aug 2019',
    workLength: '3 yrs 8 mos',
    location: 'Bangalore',
    tasks: [
      'Curated docs for a wide range of audience of healthcare industry',
    ],
    techstack: [
      'Camtasia',
      'SnagIt',
      'HelpDocs',
      'MindTouch',
      'Kubernetes',
      'GraphQL',
    ],
  },
  
];

const education: Array<EducationType> = [
  {
    img: 'img/hhs.png',
    school: 'Veltech University',
    study: 'bachelors in Computer Science and Engineering',
    date: '2011 - 2015',
  },
  {
    img: 'img/lhs.png',
    school: 'Kerala Public School',
    study: '10th + 12th',
    date: '2008 - 2010',
  },
  {
    img: 'img/glr.png',
    school: 'Udemy',
    study: '[DevOps Masterclass]',
    date: '2022',
  },
];

export { experience, projects, education };
