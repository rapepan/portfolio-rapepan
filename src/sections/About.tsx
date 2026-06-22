import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import SectionTitle from '../components/SectionTitle'

const stats = [
  { value: '4', labelKey: 'projects' as const },
  { value: '10+', labelKey: 'techs' as const },
  { value: '4', labelKey: 'focus' as const },
]

const CheckIcon = () => (
  <svg className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 w-64 h-64 bg-violet-600/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title={t.about.title} subtitle={t.about.subtitle} />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-zinc-300 leading-relaxed">{t.about.p1}</p>
            <p className="text-zinc-400 leading-relaxed">{t.about.p2}</p>
            <p className="text-zinc-400 leading-relaxed">{t.about.p3}</p>

            {/* Focus areas */}
            <div className="pt-4">
              <p className="text-sm font-semibold text-zinc-300 mb-3 uppercase tracking-wider">{t.about.focusAreasLabel}</p>
              <ul className="space-y-2">
                {t.about.focusAreas.map((area) => (
                  <li key={area} className="flex items-start gap-2 text-sm text-zinc-400">
                    <CheckIcon />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Stats + card column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ value, labelKey }, i) => (
                <motion.div
                  key={labelKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="relative group overflow-hidden rounded-2xl bg-white/3 border border-white/8 p-5 text-center hover:bg-white/5 transition-colors"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-3xl font-black text-white mb-1">{value}</p>
                  <p className="text-xs text-zinc-500 font-medium">{t.about.stats[labelKey]}</p>
                </motion.div>
              ))}
            </div>

            {/* Profile card */}
            <div className="relative overflow-hidden rounded-2xl bg-white/3 border border-white/8 p-6">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-2xl font-black text-white shadow-lg shadow-violet-600/30 overflow-hidden relative flex-shrink-0">
                  <span className="absolute inset-0 flex items-center justify-center select-none">R</span>
                  <img
                    src="/profile.png"
                    alt={t.hero.fullName}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">{t.hero.fullName}</p>
                  <p className="text-sm text-zinc-400">{t.hero.role}</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-zinc-500">{t.hero.location}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { label: 'Tel', value: '+66 98-276-9502' },
                  { label: 'Email', value: 'rapepan23.rpp@gmail.com' },
                  { label: 'GitHub', value: 'github.com/rapepan' },
                  { label: 'Deploy', value: 'Vercel · Railway · Melon Cloud' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center gap-3 text-sm">
                    <span className="text-zinc-600 w-16 flex-shrink-0">{label}</span>
                    <span className="text-zinc-300 font-mono text-xs truncate">{value}</span>
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
