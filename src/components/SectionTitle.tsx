import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4 ${centered ? 'justify-center' : ''}`}
      >
        <span className="w-8 h-px bg-violet-400/50" />
        {subtitle}
        <span className="w-8 h-px bg-violet-400/50" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
      >
        {title}
      </motion.h2>
    </div>
  )
}
