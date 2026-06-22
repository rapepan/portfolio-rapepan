import { motion } from 'framer-motion'
import {
  siReact, siNextdotjs, siTypescript, siJavascript, siHtml5, siCss, siTailwindcss,
  siNodedotjs, siExpress, siMysql, siMariadb, siPrisma,
  siGit, siGithub, siVercel, siRailway, siXampp,
} from 'simple-icons'
import type { SimpleIcon } from 'simple-icons'
import { useLanguage } from '../context/LanguageContext'
import SectionTitle from '../components/SectionTitle'
import { skills } from '../data/skills'
import type { Skill } from '../types'

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

const categoryOrder: Skill['category'][] = ['frontend', 'backend', 'database', 'tools']

const certLinks = ['https://www.credly.com/go/V236Xvht']

const categoryGradients: Record<Skill['category'], string> = {
  frontend: 'from-cyan-600/20 to-blue-600/10',
  backend: 'from-green-600/20 to-emerald-600/10',
  database: 'from-blue-600/20 to-indigo-600/10',
  tools: 'from-orange-600/20 to-amber-600/10',
}

const categoryAccents: Record<Skill['category'], string> = {
  frontend: 'border-cyan-500/20 hover:border-cyan-500/40',
  backend: 'border-green-500/20 hover:border-green-500/40',
  database: 'border-blue-500/20 hover:border-blue-500/40',
  tools: 'border-orange-500/20 hover:border-orange-500/40',
}

const categoryTitles: Record<Skill['category'], string> = {
  frontend: 'text-cyan-400',
  backend: 'text-green-400',
  database: 'text-blue-400',
  tools: 'text-orange-400',
}

export default function Skills() {
  const { t } = useLanguage()

  const grouped = categoryOrder.reduce(
    (acc, cat) => ({ ...acc, [cat]: skills.filter((s) => s.category === cat) }),
    {} as Record<Skill['category'], Skill[]>
  )

  return (
    <section id="skills" className="relative py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/3 w-72 h-72 bg-indigo-600/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title={t.skills.title} subtitle={t.skills.subtitle} />

        <div className="grid sm:grid-cols-2 gap-6">
          {categoryOrder.map((cat, catIdx) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-2xl border bg-white/2 p-6 ${categoryAccents[cat]} transition-all`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${categoryGradients[cat]} opacity-60`} />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="relative">
                <h3 className={`text-sm font-bold uppercase tracking-widest mb-4 ${categoryTitles[cat]}`}>
                  {t.skills.categories[cat]}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {grouped[cat].map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.1 + i * 0.05 + 0.2 }}
                      whileHover={{ scale: 1.05 }}
                      className="group flex items-center gap-2 bg-black/30 border border-white/8 rounded-xl px-3 py-2 hover:bg-white/8 hover:border-white/15 transition-all cursor-default"
                    >
                      <SkillIcon icon={skill.icon} />
                      <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications + Languages */}
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border bg-white/2 p-6 border-amber-500/20 hover:border-amber-500/40 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-yellow-600/10 opacity-60" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="relative">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-amber-400">
                {t.skills.certTitle}
              </h3>
              <div className="space-y-3">
                {t.skills.certItems.map((cert, i) => (
                  <a
                    key={cert}
                    href={certLinks[i]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 bg-black/30 border border-white/8 rounded-xl px-3 py-2.5 hover:bg-white/8 hover:border-amber-500/30 transition-all group"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0 mt-0.5">
                      <path d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                    </svg>
                    <span className="text-sm text-zinc-200 group-hover:text-white transition-colors flex-1">{cert}</span>
                    <svg className="w-3.5 h-3.5 text-zinc-600 group-hover:text-amber-400 transition-colors mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border bg-white/2 p-6 border-rose-500/20 hover:border-rose-500/40 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-600/20 to-pink-600/10 opacity-60" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="relative">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-rose-400">
                {t.skills.langTitle}
              </h3>
              <div className="space-y-3">
                {t.skills.langItems.map((lang) => (
                  <div key={lang} className="flex items-center gap-3 bg-black/30 border border-white/8 rounded-xl px-3 py-2.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0">
                      <path d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                    </svg>
                    <span className="text-sm text-zinc-200">{lang}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
