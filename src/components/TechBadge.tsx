interface TechBadgeProps {
  name: string
  small?: boolean
}

const techColors: Record<string, string> = {
  React: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'Next.js': 'bg-zinc-500/10 text-zinc-200 border-zinc-400/20',
  TypeScript: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  JavaScript: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  'Node.js': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Express.js': 'bg-zinc-500/10 text-zinc-300 border-zinc-500/20',
  EJS: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
  JWT: 'bg-pink-500/10 text-pink-400 border-pink-500/20',

  MariaDB: 'bg-blue-600/10 text-blue-300 border-blue-600/20',
  MySQL: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  Prisma: 'bg-slate-500/10 text-slate-300 border-slate-500/20',
  'Socket.IO': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'Tailwind CSS': 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  Git: 'bg-orange-600/10 text-orange-300 border-orange-600/20',
  GitHub: 'bg-zinc-600/10 text-zinc-300 border-zinc-600/20',
  Vercel: 'bg-white/5 text-zinc-200 border-white/10',
  Railway: 'bg-violet-700/10 text-violet-300 border-violet-700/20',
  'Melon Cloud': 'bg-green-700/10 text-green-300 border-green-700/20',
  XAMPP: 'bg-orange-700/10 text-orange-300 border-orange-700/20',
}

export default function TechBadge({ name, small = false }: TechBadgeProps) {
  const colorClass = techColors[name] ?? 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20'
  return (
    <span
      className={`inline-flex items-center border rounded-md font-medium ${colorClass} ${
        small ? 'text-xs px-2 py-0.5' : 'text-xs px-2.5 py-1'
      }`}
    >
      {name}
    </span>
  )
}
