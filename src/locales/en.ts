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
    subtitle: 'About',
    headline: 'A developer who ships.',
    bio: "Recent Information Technology graduate with hands-on experience in developing full-stack web applications through academic and personal projects. Skilled in JavaScript, Node.js, Express.js, React, and MySQL, with strong knowledge of backend development, RESTful APIs, database design, and web deployment. Eager to apply technical skills and continuously learn new technologies in a professional environment.",
    hobbies: ['Music', 'Gaming', 'Films', 'Coffee'],
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
    title: 'Recent projects.',
    subtitle: 'Selected Work',
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
    title: 'Experience.',
    subtitle: 'Journey',
    educationTitle: 'Education',
    items: {
      pthxp: {
        role: 'Full-stack Developer',
        org: 'PTH-X-P Clinic System',
        period: 'Jan 2025',
        bullets: [
          'Built a physical therapy clinic management system as an undergraduate thesis',
          'Covered patient registration, medical records, diagnosis, treatment procedures, and billing',
          'Implemented PDF generation with Puppeteer and Passport.js authentication',
          'Supported 3 role levels: admin, physical therapist, and staff',
          'Stack: Node.js, Express.js, EJS, MySQL/MariaDB',
        ],
      },
      rental: {
        role: 'Full-stack Developer',
        org: 'Rental System',
        period: 'Apr 2026',
        bullets: [
          'Built a rental property platform with tenant, landlord, and admin roles',
          'Implemented JWT authentication, property listings, search/filter, and image management',
          'Integrated Google Maps API for location and Cloudinary for image uploads',
          'Deployed frontend on Vercel and backend on Railway',
          'Stack: React, Node.js, Express.js, MariaDB',
        ],
      },
      qr: {
        role: 'Full-stack Developer',
        org: 'QR Restaurant',
        period: 'Jun 2026',
        bullets: [
          'Built a real-time QR code ordering system for restaurants with dual frontends (customer & admin)',
          'Implemented real-time order updates via Socket.IO events',
          'Admin dashboard with order management, menu, table, and statistics modules',
          'JWT authentication with refresh tokens, rate limiting, and Helmet.js security headers',
          'Stack: Next.js 14, Node.js, Express.js, MariaDB, Socket.IO, Cloudinary',
        ],
      },
    },
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
