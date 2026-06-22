import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import SectionTitle from '../components/SectionTitle'

const experienceIcons: Record<string, string> = {
  fullstack: '⚡',
  webdev: '🖥️',
  database: '🗄️',
  api: '🔌',
}

const experienceColors: Record<string, { dot: string; line: string; bg: string; border: string }> = {
  fullstack: {
    dot: 'bg-violet-500 shadow-violet-500/40',
    line: 'border-violet-500/30',
    bg: 'from-violet-600/10 to-transparent',
    border: 'border-violet-500/20 hover:border-violet-500/40',
  },
  webdev: {
    dot: 'bg-cyan-500 shadow-cyan-500/40',
    line: 'border-cyan-500/30',
    bg: 'from-cyan-600/10 to-transparent',
    border: 'border-cyan-500/20 hover:border-cyan-500/40',
  },
  database: {
    dot: 'bg-blue-500 shadow-blue-500/40',
    line: 'border-blue-500/30',
    bg: 'from-blue-600/10 to-transparent',
    border: 'border-blue-500/20 hover:border-blue-500/40',
  },
  api: {
    dot: 'bg-emerald-500 shadow-emerald-500/40',
    line: 'border-emerald-500/30',
    bg: 'from-emerald-600/10 to-transparent',
    border: 'border-emerald-500/20 hover:border-emerald-500/40',
  },
}

const experienceOrder = ['fullstack', 'webdev', 'database', 'api'] as const
const educationOrder = ['burapha', 'bangbo'] as const

const educationColors = ['from-indigo-600/10', 'from-sky-600/10'] as const

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="relative py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 bottom-1/3 w-64 h-64 bg-cyan-600/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionTitle title={t.experience.title} subtitle={t.experience.subtitle} />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-white/8 to-transparent" />

          <div className="space-y-6">
            {experienceOrder.map((key, i) => {
              const expT = t.experience.items[key]
              const colors = experienceColors[key]

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.55 }}
                  className="relative flex gap-6 group"
                >
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-2xl ${colors.dot} shadow-lg flex items-center justify-center text-xl z-10 relative`}
                    >
                      {experienceIcons[key]}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 relative overflow-hidden rounded-2xl border bg-white/2 p-5 mb-2 ${colors.border} transition-all hover:bg-white/4`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${colors.bg} opacity-60`} />
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <div className="relative">
                      <h3 className="text-base font-bold text-white mb-1.5">{expT.title}</h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">{expT.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16 pt-10 border-t border-white/6 max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-8 pl-[4.5rem]">
            {t.experience.educationTitle}
          </p>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-white/8 to-transparent" />
            <div className="space-y-6">
              {educationOrder.map((key, i) => {
                const edu = t.experience.education[key]
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.55 }}
                    className="relative flex gap-6 group"
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-500 shadow-lg shadow-indigo-500/40 flex items-center justify-center text-xl z-10 relative">
                        🎓
                      </div>
                    </div>
                    <div
                      className={`flex-1 relative overflow-hidden rounded-2xl border bg-white/2 p-5 mb-2 border-indigo-500/20 hover:border-indigo-500/40 transition-all hover:bg-white/4`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${educationColors[i]} to-transparent opacity-60`} />
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      <div className="relative">
                        <h3 className="text-base font-bold text-white mb-0.5">{edu.school}</h3>
                        <p className="text-sm text-indigo-300 font-medium mb-1">{edu.major}</p>
                        <p className="text-xs text-zinc-500">
                          {edu.degree} · {edu.period}
                        </p>
                        {edu.gpa && (
                          <p className="text-xs text-emerald-400 font-semibold mt-1.5">{edu.gpa}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
