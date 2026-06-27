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
    subtitle: 'เกี่ยวกับ',
    headline: 'นักพัฒนาที่ลงมือทำจริง',
    bio: 'นักพัฒนาที่เพิ่งสำเร็จการศึกษาสาขาเทคโนโลยีสารสนเทศ มีประสบการณ์ลงมือพัฒนาเว็บแอปพลิเคชัน Full-stack จากโปรเจกต์ทางวิชาการและส่วนตัว เชี่ยวชาญ JavaScript, Node.js, Express.js, React และ MySQL มีความรู้ด้าน Backend Development, RESTful APIs, การออกแบบฐานข้อมูล และการ Deploy พร้อมนำทักษะไปใช้และเรียนรู้เทคโนโลยีใหม่ๆ ในสภาพแวดล้อมการทำงานจริง',
    hobbies: ['ดนตรี', 'เกม', 'หนัง', 'กาแฟ'],
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
    title: 'โปรเจกต์ล่าสุด.',
    subtitle: 'ผลงานที่เลือกสรร',
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
    title: 'ประสบการณ์.',
    subtitle: 'เส้นทาง',
    educationTitle: 'การศึกษา',
    items: {
      pthxp: {
        role: 'นักพัฒนา Full-stack',
        org: 'ระบบจัดการคลินิกกายภาพบำบัด PTH-X-P',
        period: 'ม.ค. 2568',
        bullets: [
          'พัฒนาระบบจัดการคลินิกกายภาพบำบัดเป็นโปรเจกต์วิทยานิพนธ์',
          'ครอบคลุมการลงทะเบียนผู้ป่วย บันทึกการรักษา การวินิจฉัย และการเรียกเก็บเงิน',
          'พัฒนาระบบสร้าง PDF ด้วย Puppeteer และ Authentication ด้วย Passport.js',
          'รองรับ 3 ระดับสิทธิ์: ผู้ดูแลระบบ นักกายภาพบำบัด และเจ้าหน้าที่',
          'Stack: Node.js, Express.js, EJS, MySQL/MariaDB',
        ],
      },
      rental: {
        role: 'นักพัฒนา Full-stack',
        org: 'ระบบเช่าห้องพัก',
        period: 'เม.ย. 2569',
        bullets: [
          'พัฒนาแพลตฟอร์มเช่าห้องพักพร้อมระบบ 3 บทบาท: ผู้เช่า เจ้าของห้อง และแอดมิน',
          'พัฒนา JWT Authentication, รายการห้องพัก, ระบบค้นหา/กรอง และจัดการรูปภาพ',
          'เชื่อมต่อ Google Maps API และ Cloudinary สำหรับอัปโหลดรูปภาพ',
          'Deploy Frontend บน Vercel และ Backend บน Railway',
          'Stack: React, Node.js, Express.js, MariaDB',
        ],
      },
      qr: {
        role: 'นักพัฒนา Full-stack',
        org: 'ระบบสั่งอาหารผ่าน QR Code',
        period: 'มิ.ย. 2569',
        bullets: [
          'พัฒนาระบบสั่งอาหาร Real-time ผ่าน QR Code พร้อม 2 Frontend (ลูกค้าและแอดมิน)',
          'ระบบอัปเดตสถานะคำสั่งซื้อแบบ Real-time ด้วย Socket.IO',
          'Dashboard สำหรับแอดมินจัดการออเดอร์ เมนู โต๊ะ และสถิติ',
          'JWT Authentication พร้อม Refresh Token, Rate Limiting และ Helmet.js',
          'Stack: Next.js 14, Node.js, Express.js, MariaDB, Socket.IO, Cloudinary',
        ],
      },
    },
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
