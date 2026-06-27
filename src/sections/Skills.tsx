import {
  siReact, siNextdotjs, siTypescript, siJavascript, siHtml5, siCss, siTailwindcss,
  siNodedotjs, siExpress, siMysql, siMariadb, siPrisma,
  siGit, siGithub, siVercel, siRailway, siXampp,
} from 'simple-icons'
import type { SimpleIcon } from 'simple-icons'
import { useLanguage } from '../context/LanguageContext'
import SectionTitle from '../components/SectionTitle'
import { skills } from '../data/skills'

const siMap: Record<string, SimpleIcon> = {
  siReact, siNextdotjs, siTypescript, siJavascript, siHtml5, siCss, siTailwindcss,
  siNodedotjs, siExpress, siMysql, siMariadb, siPrisma,
  siGit, siGithub, siVercel, siRailway, siXampp,
}


function isDark(hex: string) {
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 < 40
}

function SkillIcon({ icon }: { icon: string }) {
  if (icon.startsWith('/')) {
    return <img src={icon} alt="" className="w-5 h-5 flex-shrink-0 object-contain" />
  }
  const si = siMap[icon]
  if (si) {
    const fill = isDark(si.hex) ? '#ffffff' : `#${si.hex}`
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="w-5 h-5 flex-shrink-0"
        dangerouslySetInnerHTML={{ __html: `<path d="${si.path}" fill="${fill}"/>` }}
      />
    )
  }
  return <span className="text-lg leading-none">{icon}</span>
}

const row1 = skills.filter(s => s.category === 'frontend' || s.category === 'backend')
const row2 = skills.filter(s => s.category === 'database' || s.category === 'tools')

function MarqueeRow({ items, reverse = false }: { items: typeof skills; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="flex overflow-hidden">
      <div
        className="flex gap-3 flex-shrink-0"
        style={{ animation: `${reverse ? 'marqueeReverse' : 'marquee'} 28s linear infinite` }}
      >
        {doubled.map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/8 whitespace-nowrap flex-shrink-0 hover:bg-white/10 hover:border-white/15 transition-colors cursor-default"
          >
            <SkillIcon icon={skill.icon} />
            <span className="text-sm text-zinc-300">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}


export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="relative py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/3 w-72 h-72 bg-indigo-600/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title={t.skills.title} subtitle={t.skills.subtitle} />

        <div className="space-y-3 -mx-4 sm:-mx-6">
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </div>
      </div>
    </section>
  )
}
