import type { Skill } from '../types'

export const skills: Skill[] = [
  // Frontend — confirmed: Rental-System (React), qr-restaurant (Next.js, TypeScript, Tailwind CSS)
  { name: 'React', icon: '⚛️', category: 'frontend' },
  { name: 'Next.js', icon: '▲', category: 'frontend' },
  { name: 'TypeScript', icon: '🔷', category: 'frontend' },
  { name: 'JavaScript', icon: '🟨', category: 'frontend' },
  { name: 'HTML', icon: '🌐', category: 'frontend' },
  { name: 'CSS', icon: '🎨', category: 'frontend' },
  { name: 'Tailwind CSS', icon: '💨', category: 'frontend' },
  // Backend — confirmed: all 3 repos (Node.js, Express.js), PTH-X-P (EJS)
  { name: 'Node.js', icon: '🟢', category: 'backend' },
  { name: 'Express.js', icon: '🚂', category: 'backend' },
  { name: 'EJS', icon: '📄', category: 'backend' },
  // Database — confirmed: PTH-X-P (MySQL), Rental-System + qr-restaurant + BTEC LMS (MariaDB), BTEC LMS (Prisma ORM)
  { name: 'MySQL', icon: '🐬', category: 'database' },
  { name: 'MariaDB', icon: '🗄️', category: 'database' },
  { name: 'Prisma', icon: '◈', category: 'database' },
  // Tools — confirmed: all repos use Git/GitHub, deployed on Vercel/Railway/Render
  { name: 'Git', icon: '📦', category: 'tools' },
  { name: 'GitHub', icon: '🐙', category: 'tools' },
  { name: 'Vercel', icon: '🔺', category: 'tools' },
  { name: 'Railway', icon: '🚄', category: 'tools' },
  { name: 'Melon Cloud', icon: '☁️', category: 'tools' },
  { name: 'XAMPP', icon: '🖥️', category: 'tools' },
]
