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
          'Delivered <b>scalable, high-performance RESTful APIs</b> in <b>Node.js, NestJS, and MongoDB</b> for production systems, improving system reliability and throughput.',
          'Optimized a critical <b>GET API</b> by introducing <b>Mongoose</b> as a secondary ORM (for read operations) alongside <b>Prisma</b>, reducing response time from <b>43s to 3.25s</b> and significantly enhancing user experience.',
          'Mentored junior developers on best practices in <b>Node.js, NestJS, and MongoDB</b>, driving code quality, performance improvements, and knowledge sharing within the team.',
        ],
        tags: ['Node.js', 'NestJS', 'MongoDB', 'Mongoose', 'GCP'],
      },
      {
        designation: 'NodeJs Developer I',
        joinDate: '2024-02-01',
        endDate: '2025-02-01',
        description: [
          'Collaborated with the <b>Korean development team</b> to resolve multi-regional service issues, ensuring smooth cross-border product performance using <b>Node.js, Express, and MongoDB</b>.',
          'Built a <b>REST API–driven chat module</b> (Node.js, Express, MongoDB) supporting text, documents, and images, with attachments stored on <b>AWS S3</b>. Implemented a 15s polling mechanism (fetch API) to enable near real-time communication without WebSockets.',
          'Refactored core modules in <b>Node.js and MongoDB</b> to improve <b>scalability</b> and <b>resilience</b>, handling high traffic loads with greater efficiency and stability.',
          'Contributed to the U.S. product launch, showcased to investors during <b>Series A</b> funding, demonstrating technical expertise with <b>AWS, Docker, and Linux</b> in a production environment.',
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
