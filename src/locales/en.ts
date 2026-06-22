const en = {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Rapepan',
    fullName: 'Rapepan Siriboonkong',
    role: 'Full-stack Developer',
    typingPhrases: [
      'Building Modern Web Apps',
      'Designing REST APIs',
      'Crafting Real-time Systems',
      'Engineering Database Solutions',
    ],
    bio: 'Full-stack Developer specializing in web applications, REST APIs, database systems, and real-time applications.',
    cta: {
      github: 'GitHub',
      contact: 'Contact Me',
      projects: 'View Projects',
    },
    location: 'Samut Prakan, Thailand',
  },
  about: {
    title: 'About Me',
    subtitle: 'Building the future, one line at a time',
    p1: "I'm a Full-stack Developer who has built web applications using React and Next.js on the frontend, and Node.js with Express.js on the backend. My projects range from a physical therapy clinic management system to a real-time restaurant ordering platform.",
    p2: 'I work with relational databases (MySQL and MariaDB), implement JWT-based authentication, integrate Cloudinary for media storage, and build real-time features using Socket.IO.',
    p3: 'Every project I build is deployed to production — using Vercel for frontends, Railway and Melon Cloud for backends — giving me hands-on experience across the full deployment pipeline.',
    stats: {
      projects: 'Projects on GitHub',
      techs: 'Technologies Used',
      focus: 'Areas of Focus',
    },
    focusAreas: [
      'Full-stack Web Development',
      'REST API Design & Development',
      'Relational Database Design (MySQL / MariaDB)',
      'Real-time Application Development (Socket.IO)',
    ],
    focusAreasLabel: 'Focus Areas',
  },
  skills: {
    title: 'Skills & Technologies',
    subtitle: 'Tools and technologies I work with',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      tools: 'Tools & Platforms',
    },
    certTitle: 'Certifications',
    langTitle: 'Languages',
    certItems: ['AWS Academy Graduate — Cloud Foundations · Jan 2025'],
    langItems: ['Thai — Native', 'English — Fair', 'Chinese — Basic (HSK Level 2)'],
  },
  projects: {
    title: 'Featured Projects',
    subtitle: 'A selection of things I have built',
    github: 'GitHub',
    demo: 'Live Demo',
    items: {
      pthxp: {
        title: 'PTH-X-P Clinic System',
        description:
          'End-to-end physical therapy clinic management system covering patient registration, medical records, clinical examinations, diagnosis, treatment plans, billing, and appointment scheduling with multi-level role-based access control.',
      },
      rental: {
        title: 'Rental System',
        description:
          'Full-stack rental management platform with a React frontend and Node.js backend. Features JWT authentication, property listings with Cloudinary image uploads, location integration via Google Maps API, and CI/CD deployment on Railway and Vercel.',
      },
      qrrestaurant: {
        title: 'QR Restaurant',
        description:
          'Real-time restaurant ordering system built with Next.js 14 and TypeScript. Customers scan a QR code to browse the digital menu and place orders — updates flow live to the kitchen via Socket.IO with no app download required.',
      },
      btecloud: {
        title: 'BTEC LMS',
        description:
          'Learning Management System for blood testing education. Features course management, video/document delivery, quizzes, automatic certificate generation, progress tracking, and role-based access control. (Developer — not repo owner)',
      },
    },
  },
  experience: {
    title: 'Experience',
    subtitle: 'My professional journey',
    educationTitle: 'Education',
    education: {
      burapha: {
        degree: 'Bachelor of Science',
        major: 'Information Technology for Digital Industry',
        school: 'Burapha University',
        location: 'Chonburi, Thailand',
        period: '2022 – 2026',
        gpa: 'GPA 2.32',
      },
      bangbo: {
        degree: 'High School Diploma',
        major: 'Mathematics – English – Chinese Program',
        school: 'Bang Bo Wittayakom School',
        location: 'Chachoengsao, Thailand',
        period: '– 2022',
        gpa: '',
      },
    },
    items: {
      fullstack: {
        title: 'Full-stack Development',
        description:
          'End-to-end web application development, architecting systems from database to UI with a focus on performance and maintainability.',
      },
      webdev: {
        title: 'Web Application Development',
        description:
          'Building responsive, accessible, and performant web applications using React, TypeScript, and modern CSS frameworks.',
      },
      database: {
        title: 'Database Design',
        description:
          'Designing efficient relational database schemas, writing optimized queries, and implementing data integrity constraints.',
      },
      api: {
        title: 'Backend API Development',
        description:
          'Architecting and implementing RESTful APIs with Node.js and Express.js, including JWT authentication, input validation, and real-time communication via Socket.IO.',
      },
    },
  },
  contact: {
    title: 'Get In Touch',
    subtitle: "Let's build something great together",
    description:
      "I'm open to freelance projects, collaborations, and new opportunities. Feel free to reach out — I'll get back to you as soon as possible.",
    phone: 'Call',
    email: 'Send Email',
    github: 'GitHub Profile',
    copyEmail: 'Copy Email',
    copied: 'Copied!',
    available: 'Available for new opportunities',
  },
  footer: {
    copy: 'Developed and maintained by',
    name: 'Rapepan',
    rights: 'All rights reserved.',
  },
}

export default en
export type Translations = typeof en
