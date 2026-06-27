import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const experienceOrder = ['pthxp', 'rental', 'qr'] as const

const expIconColors = [
  'bg-violet-500 shadow-violet-500/40',
  'bg-cyan-500 shadow-cyan-500/40',
  'bg-emerald-500 shadow-emerald-500/40',
] as const

const expIcons = [
  <svg key="pth" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  <svg key="rent" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>,
  <svg key="qr" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zm0 9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zm9.75-9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" /></svg>,
]

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="relative py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 bottom-1/3 w-64 h-64 bg-cyan-600/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-violet-400 mb-5"
        >
          <span className="w-8 h-px bg-violet-400/50" />
          {t.experience.subtitle}
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-14"
        >
          {t.experience.title}
        </motion.h2>

        {/* Experience timeline */}
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-white/8 to-transparent" />

          <div className="space-y-6">
            {experienceOrder.map((key, i) => {
              const item = t.experience.items[key]
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="relative flex gap-5"
                >
                  <div className={`w-10 h-10 rounded-xl ${expIconColors[i]} shadow-lg flex items-center justify-center flex-shrink-0 z-10`}>
                    {expIcons[i]}
                  </div>

                  <div className="flex-1 bg-white/2 border border-white/8 rounded-2xl px-5 py-4 hover:bg-white/4 transition-colors mb-2">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-0.5">{item.role}</p>
                        <p className="text-base font-bold text-white break-words">{item.org}</p>
                      </div>
                      <span className="text-xs text-zinc-500 whitespace-nowrap pt-0.5 flex-shrink-0">{item.period}</span>
                    </div>
                    <ul className="space-y-1.5 mt-3">
                      {item.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-sm text-zinc-400">
                          <span className="text-violet-500 mt-1 flex-shrink-0">•</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
