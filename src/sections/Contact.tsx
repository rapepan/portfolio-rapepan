import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import SectionTitle from '../components/SectionTitle'

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
)

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const CopyIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

export default function Contact() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const email = 'rapepan23.rpp@gmail.com'
  const phone = '+66 98-276-9502'

  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 bottom-0 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <SectionTitle title={t.contact.title} subtitle={t.contact.subtitle} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-12 max-w-xl mx-auto"
        >
          {t.contact.description}
        </motion.p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {/* Phone card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/2 hover:bg-white/4 hover:border-white/15 p-6 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-3">
                <PhoneIcon />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">Phone</p>
              <p className="text-sm font-mono text-zinc-200 mb-4">{phone}</p>
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 px-3 py-2 rounded-lg transition-colors shadow-lg shadow-emerald-600/20"
              >
                <PhoneIcon />
                {t.contact.phone}
              </a>
            </div>
          </motion.div>

          {/* Email card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/2 hover:bg-white/4 hover:border-white/15 p-6 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center text-violet-400 mx-auto mb-3">
                <EmailIcon />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">Email</p>
              <p className="text-sm font-mono text-zinc-200 mb-4 break-all">{email}</p>
              <div className="flex gap-2 justify-center">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 px-3 py-2 rounded-lg transition-colors shadow-lg shadow-violet-600/20"
                >
                  <EmailIcon />
                  {t.contact.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/8 px-3 py-2 rounded-lg transition-all"
                >
                  {copied ? <CheckIcon /> : <CopyIcon />}
                  {copied ? t.contact.copied : t.contact.copyEmail}
                </button>
              </div>
            </div>
          </motion.div>

          {/* GitHub card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/2 hover:bg-white/4 hover:border-white/15 p-6 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-zinc-300 mx-auto mb-3">
                <GitHubIcon />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">GitHub</p>
              <p className="text-sm font-mono text-zinc-200 mb-4">github.com/rapepan</p>
              <a
                href="https://github.com/rapepan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 bg-white hover:bg-zinc-100 px-4 py-2 rounded-lg transition-colors shadow-lg shadow-black/20"
              >
                <GitHubIcon />
                {t.contact.github}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 text-sm text-zinc-400 bg-white/4 border border-white/8 rounded-full px-5 py-2"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          {t.contact.available}
        </motion.div>
      </div>
    </section>
  )
}
