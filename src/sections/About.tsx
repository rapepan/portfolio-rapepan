import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const hobbyIcons = ['🎵', '🎮', '🎬', '☕']

export default function About() {
  const { t } = useLanguage()
  const edu = t.experience.education.burapha

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 w-64 h-64 bg-violet-600/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-violet-400 mb-5"
        >
          <span className="w-8 h-px bg-violet-400/50" />
          {t.about.subtitle}
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-14"
        >
          {t.about.headline}
        </motion.h2>

        {/* Photo + bio row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-10 mb-8"
        >
          {/* Circle photo */}
          <div className="flex-shrink-0">
            <div className="w-44 h-44 rounded-full p-[3px] bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-500 shadow-xl shadow-violet-600/25">
              <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 relative">
                <span className="absolute inset-0 flex items-center justify-center text-5xl font-black text-zinc-700 select-none">R</span>
                <img
                  src="/profile.png"
                  alt={t.hero.fullName}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
            </div>
          </div>

          {/* Bio */}
          <p className="text-zinc-300 text-lg leading-relaxed sm:pt-4">
            {t.about.bio}
          </p>
        </motion.div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden rounded-2xl bg-white/3 border border-white/8 px-6 py-5 mb-6 hover:bg-white/5 transition-colors"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-xl flex-shrink-0">
              🎓
            </div>
            <div>
              <p className="font-bold text-white">{edu.school}</p>
              <p className="text-sm text-indigo-300">{edu.major}</p>
              <p className="text-xs text-zinc-500 mt-0.5">
                {edu.period}
                {edu.gpa && <> · <span className="text-emerald-400">{edu.gpa}</span></>}
                {' · '}
                <span>{edu.location ?? 'Chonburi, Thailand'}</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Hobby cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {t.about.hobbies.map((hobby, i) => (
            <motion.div
              key={hobby}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
              className="flex flex-col items-start gap-2 bg-white/3 border border-white/8 rounded-2xl px-4 py-4 hover:bg-white/6 transition-colors cursor-default"
            >
              <span className="text-2xl">{hobbyIcons[i]}</span>
              <span className="text-sm text-zinc-300">{hobby}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
