import type { Translations } from './en'

const th: Translations = {
  nav: {
    home: 'หน้าแรก',
    about: 'เกี่ยวกับ',
    skills: 'ทักษะ',
    projects: 'โปรเจกต์',
    experience: 'ประสบการณ์',
    contact: 'ติดต่อ',
  },
  hero: {
    greeting: 'สวัสดี ฉันชื่อ',
    name: 'ระพีพันธุ์',
    fullName: 'ระพีพันธุ์ ศิริบุญคง',
    role: 'นักพัฒนา Full-stack',
    typingPhrases: [
      'พัฒนาเว็บแอปพลิเคชันสมัยใหม่',
      'ออกแบบ REST APIs',
      'สร้างระบบ Real-time',
      'วางโครงสร้างฐานข้อมูล',
    ],
    bio: 'นักพัฒนา Full-stack ที่เชี่ยวชาญด้านเว็บแอปพลิเคชัน REST APIs ระบบฐานข้อมูล และแอปพลิเคชันแบบเรียลไทม์',
    cta: {
      github: 'GitHub',
      contact: 'ติดต่อฉัน',
      projects: 'ดูโปรเจกต์',
    },
    location: 'สมุทรปราการ, ไทย',
  },
  about: {
    title: 'เกี่ยวกับฉัน',
    subtitle: 'สร้างอนาคต ทีละบรรทัด',
    p1: 'ฉันเป็นนักพัฒนา Full-stack ที่สร้างเว็บแอปพลิเคชันด้วย React และ Next.js ฝั่ง Frontend และ Node.js กับ Express.js ฝั่ง Backend โปรเจกต์ของฉันครอบคลุมตั้งแต่ระบบจัดการคลินิกกายภาพบำบัด ระบบเช่า ไปจนถึงแพลตฟอร์มสั่งอาหารแบบเรียลไทม์',
    p2: 'ฉันทำงานกับฐานข้อมูลเชิงสัมพันธ์ (MySQL และ MariaDB) พัฒนาระบบ Authentication ด้วย JWT เชื่อมต่อ Cloudinary สำหรับจัดเก็บไฟล์ และสร้างฟีเจอร์เรียลไทม์ด้วย Socket.IO',
    p3: 'ทุกโปรเจกต์ที่ฉันสร้างถูก Deploy ขึ้น Production จริง ทั้งบน Vercel, Railway และ Melon Cloud ทำให้ฉันมีประสบการณ์จริงครอบคลุมทั้ง Development และ Deployment Pipeline',
    stats: {
      projects: 'โปรเจกต์บน GitHub',
      techs: 'เทคโนโลยีที่ใช้จริง',
      focus: 'ด้านที่เชี่ยวชาญ',
    },
    focusAreas: [
      'การพัฒนาเว็บแบบ Full-stack',
      'ออกแบบและพัฒนา REST API',
      'ออกแบบฐานข้อมูลเชิงสัมพันธ์ (MySQL / MariaDB)',
      'พัฒนาแอปพลิเคชันแบบ Real-time (Socket.IO)',
    ],
    focusAreasLabel: 'ด้านที่เชี่ยวชาญ',
  },
  skills: {
    title: 'ทักษะและเทคโนโลยี',
    subtitle: 'เครื่องมือและเทคโนโลยีที่ฉันใช้',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'ฐานข้อมูล',
      tools: 'เครื่องมือและแพลตฟอร์ม',
    },
    certTitle: 'ใบรับรอง',
    langTitle: 'ภาษา',
    certItems: ['AWS Academy Graduate — Cloud Foundations · ม.ค. 2568'],
    langItems: ['ไทย — ภาษาหลัก', 'อังกฤษ — พอใช้', 'จีน — พื้นฐาน (HSK ระดับ 2)'],
  },
  projects: {
    title: 'โปรเจกต์เด่น',
    subtitle: 'ผลงานที่ฉันได้สร้างขึ้น',
    github: 'GitHub',
    demo: 'ดูตัวอย่าง',
    items: {
      pthxp: {
        title: 'ระบบคลินิกกายภาพบำบัด PTH-X-P',
        description:
          'ระบบบริหารคลินิกกายภาพบำบัดแบบครบวงจร รองรับการลงทะเบียนผู้ป่วย บันทึกประวัติการรักษา ตรวจร่างกาย วินิจฉัยโรค วางแผนการรักษา ออกใบเสร็จ และนัดหมาย พร้อมระบบสิทธิ์ผู้ใช้หลายระดับ',
      },
      rental: {
        title: 'Rental System',
        description:
          'แพลตฟอร์มจัดการการเช่าแบบ Full-stack พัฒนาด้วย React (Frontend) และ Node.js (Backend) มีระบบ JWT Authentication อัปโหลดรูปภาพผ่าน Cloudinary แสดงตำแหน่งด้วย Google Maps API และ Deploy บน Railway และ Vercel',
      },
      qrrestaurant: {
        title: 'QR Restaurant',
        description:
          'ระบบสั่งอาหารแบบเรียลไทม์ พัฒนาด้วย Next.js 14 และ TypeScript ลูกค้าสแกน QR Code เพื่อดูเมนูและสั่งอาหาร คำสั่งซื้อส่งถึงครัวทันทีผ่าน Socket.IO ไม่ต้องติดตั้งแอปพลิเคชัน',
      },
      btecloud: {
        title: 'BTEC LMS',
        description:
          'ระบบจัดการการเรียนรู้สำหรับการศึกษาด้านการตรวจเลือด รองรับการจัดการหลักสูตร วิดีโอ เอกสาร แบบทดสอบ ออกใบรับรองอัตโนมัติ ติดตามความก้าวหน้า และระบบสิทธิ์ผู้ใช้ (ผู้พัฒนาระบบ — ไม่ใช่เจ้าของ Repository)',
      },
    },
  },
  experience: {
    title: 'ประสบการณ์',
    subtitle: 'เส้นทางวิชาชีพของฉัน',
    educationTitle: 'การศึกษา',
    education: {
      burapha: {
        degree: 'วิทยาศาสตรบัณฑิต',
        major: 'เทคโนโลยีสารสนเทศเพื่ออุตสาหกรรมดิจิทัล',
        school: 'มหาวิทยาลัยบูรพา',
        location: 'ชลบุรี, ไทย',
        period: '2565 – 2569',
        gpa: 'เกรดเฉลี่ย 2.32',
      },
      bangbo: {
        degree: 'มัธยมศึกษาตอนปลาย',
        major: 'สาย คณิตศาสตร์ – อังกฤษ – จีน',
        school: 'โรงเรียนบางบ่อวิทยาคม',
        location: 'ฉะเชิงเทรา, ไทย',
        period: '– 2565',
        gpa: '',
      },
    },
    items: {
      fullstack: {
        title: 'การพัฒนา Full-stack',
        description:
          'พัฒนาเว็บแอปพลิเคชันแบบครบวงจร ออกแบบระบบตั้งแต่ฐานข้อมูลจนถึง UI โดยมุ่งเน้นประสิทธิภาพและความง่ายในการบำรุงรักษา',
      },
      webdev: {
        title: 'การพัฒนาเว็บแอปพลิเคชัน',
        description:
          'สร้างเว็บแอปพลิเคชันที่ตอบสนองได้ดี เข้าถึงง่าย และมีประสิทธิภาพสูง โดยใช้ React, TypeScript และ CSS Framework สมัยใหม่',
      },
      database: {
        title: 'การออกแบบฐานข้อมูล',
        description:
          'ออกแบบ Schema ฐานข้อมูลเชิงสัมพันธ์ที่มีประสิทธิภาพ เขียน Query ที่ปรับปรุงแล้ว และนำ Data Integrity Constraints ไปใช้',
      },
      api: {
        title: 'การพัฒนา Backend API',
        description:
          'ออกแบบและพัฒนา RESTful APIs ด้วย Node.js และ Express.js รวมถึงระบบ JWT Authentication, การ Validate ข้อมูล และการสื่อสารแบบ Real-time ด้วย Socket.IO',
      },
    },
  },
  contact: {
    title: 'ติดต่อฉัน',
    subtitle: 'มาสร้างสิ่งยิ่งใหญ่ด้วยกัน',
    description:
      'ฉันเปิดรับโปรเจกต์ Freelance ความร่วมมือ และโอกาสใหม่ๆ อย่าลังเลที่จะติดต่อ ฉันจะตอบกลับโดยเร็วที่สุด',
    phone: 'โทร',
    email: 'ส่งอีเมล',
    github: 'GitHub Profile',
    copyEmail: 'คัดลอกอีเมล',
    copied: 'คัดลอกแล้ว!',
    available: 'พร้อมรับโอกาสใหม่ๆ',
  },
  footer: {
    copy: 'พัฒนาและดูแลโดย',
    name: 'ระพีพันธุ์',
    rights: 'สงวนลิขสิทธิ์',
  },
}

export default th
