import getout from '../../assets/company-icons/getout-systems.png';
import redrob from '../../assets/company-icons/redrob.png';
import rxlogix from '../../assets/company-icons/rxlogix.png';

export const WorkData = [
  {
    company: 'Redrob by Mckinley Rice',
    location: 'Noida',
    companyLogo: redrob,
    roles: [
      {
        designation: 'Software Developer II',
        joinDate: '2025-02-01',
        description: [
          '<b>Led the development of a Developer Hub platform</b> post microservices migration, exposing internal backend capabilities as <b>well-documented, reusable APIs</b> for external clients, enabling secure integrations and platform extensibility.',
          '<b>Led the backend migration from a monolithic architecture to a microservices-based architecture,</b> enabling independent deployments, improved scalability, and clearer service ownership across the backend team.',
          'Architected and maintained <b>shared backend libraries using GitHub submodules</b> for <b>utilities, database access layers, and centralized logging</b>, ensuring consistency across services, eliminating redundant logic, and reducing maintenance overhead and production issues.',
          '<b>Redesigned the contact enrichment pipeline</b> originally built earlier to address reliability and scalability gaps, mitigating failure scenarios, improving data consistency, and stabilizing high-volume data processing workflows.',
          'Optimized a critical <b>GET API</b> by introducing <b>Mongoose</b> as a secondary ORM (for read operations) alongside <b>Prisma</b>, reducing response time from <b>3s to 300ms</b> and significantly enhancing user experience.',
          'Mentored junior developers on best practices in <b>Node.js, NestJS, and MongoDB</b>, driving code quality, performance improvements, and knowledge sharing within the team.',
        ],
        tags: ['Node.js', 'NestJS', 'MongoDB', 'Mongoose', 'GCP'],
      },
      {
        designation: 'NodeJs Developer I',
        joinDate: '2024-02-01',
        endDate: '2025-02-01',
        description: [
          'Designed and implemented the <b>initial version of a contact enrichment pipeline</b> using Node.js, NestJS, and MongoDB, responsible for processing and enhancing contact data at scale.',
          'Built a <b>REST API–driven chat module</b> (Node.js, Express, MongoDB) supporting text, documents, and images, with attachments stored on <b>AWS S3</b>. Implemented a 15s polling mechanism (fetch API) to enable near real-time communication without WebSockets.',
        ],
        tags: ['Node.js', 'NestJS', 'MongoDB', 'Prisma', 'AWS'],
      },
    ],
  },
  {
    company: 'Getout System',
    location: 'Gurugram',
    companyLogo: getout,
    roles: [
      {
        designation: 'Software Development Engineer II',
        joinDate: '2022-07-25',
        endDate: '2023-10-04',
        description: [
          "Integrated <b>Mastercard's corporate payment API</b>, scaling the system to support <b>SDK development</b>.",
          'Enhanced <b>service response time</b> by <b>30%</b> through optimization of <b>API architecture</b> and database queries.',
          'Improved <b>codebase efficiency</b> by <b>25%</b> using modular design, best coding practices, and comprehensive testing.',
        ],
        tags: ['Node.js', 'Express', 'MySQL', 'Mastercard', 'AWS'],
      },
    ],
  },
  {
    company: 'RxLogix Corporation India Pvt Ltd',
    location: 'Noida',
    companyLogo: rxlogix,
    roles: [
      {
        designation: 'Associate Software Engineer I',
        joinDate: '2021-06-23',
        endDate: '2022-07-18',
        description: [
          'Improved product stability and performance as a <b>Java developer</b> by resolving over <b>50+ critical bugs</b>.',
          'Led the development of a feature release integrating <b>Docker installation</b>, reducing installation errors by <b>40%</b>.',
        ],
        tags: ['Java', 'Docker', 'Linux', 'AWS'],
      },
    ],
  },
];
