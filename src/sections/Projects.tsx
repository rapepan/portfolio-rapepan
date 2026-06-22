import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import SectionTitle from '../components/SectionTitle'
import TechBadge from '../components/TechBadge'
import { projects } from '../data/projects'

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

/* SVG illustration placeholders per project */
const ProjectIllustration = ({ index }: { index: number }) => {
  const illustrations = [
    // PTH-X-P: clinic / patient record UI
    <svg key={0} className="w-full h-full" viewBox="0 0 400 200" fill="none">
      <defs>
        <linearGradient id="g0a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#g0a)" />
      {/* Sidebar nav */}
      <rect x="16" y="16" width="72" height="168" rx="8" fill="white" fillOpacity="0.08" stroke="white" strokeOpacity="0.12" />
      <rect x="24" y="28" width="56" height="8" rx="4" fill="white" fillOpacity="0.5" />
      {[46,60,74,88,102,116,130,144].map((y, i) => (
        <rect key={y} x="24" y={y} width={i===0?56:40} height="7" rx="3" fill="white" fillOpacity={i===0?0.35:0.15} />
      ))}
      {/* Main content */}
      <rect x="100" y="16" width="284" height="50" rx="8" fill="white" fillOpacity="0.07" stroke="white" strokeOpacity="0.1" />
      <rect x="112" y="27" width="100" height="9" rx="4" fill="white" fillOpacity="0.45" />
      <rect x="112" y="42" width="160" height="7" rx="3" fill="white" fillOpacity="0.2" />
      <rect x="340" y="25" width="36" height="26" rx="6" fill="white" fillOpacity="0.2" />
      {/* Patient cards row */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={100 + i*96} y="78" width="88" height="60" rx="8" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.1" />
          <circle cx={144 + i*96} y="98" r="10" fill="white" fillOpacity="0.15" />
          <rect x={112 + i*96} y="112" width="56" height="7" rx="3" fill="white" fillOpacity="0.3" />
          <rect x={118 + i*96} y="123" width="44" height="6" rx="3" fill="white" fillOpacity="0.15" />
        </g>
      ))}
      {/* Bottom table */}
      <rect x="100" y="148" width="284" height="36" rx="8" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.08" />
      {[0,1,2,3].map(i => <rect key={i} x={112+i*68} y="158" width="52" height="7" rx="3" fill="white" fillOpacity="0.18" />)}
      {[0,1,2,3].map(i => <rect key={`b${i}`} x={112+i*68} y="170" width={[40,32,44,28][i]} height="6" rx="3" fill="white" fillOpacity="0.1" />)}
      <text x="200" y="195" textAnchor="middle" fill="white" fillOpacity="0.45" fontSize="10" fontFamily="monospace">PTH-X-P CLINIC MANAGEMENT</text>
    </svg>,
    // Rental System: property listing UI
    <svg key={1} className="w-full h-full" viewBox="0 0 400 200" fill="none">
      <defs>
        <linearGradient id="g1b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0891b2" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#g1b)" />
      {/* Top navbar */}
      <rect x="0" y="0" width="400" height="32" fill="black" fillOpacity="0.2" />
      <rect x="16" y="10" width="60" height="12" rx="4" fill="white" fillOpacity="0.5" />
      {[100,150,200].map(x => <rect key={x} x={x} y="12" width="36" height="8" rx="4" fill="white" fillOpacity="0.2" />)}
      <rect x="340" y="8" width="44" height="16" rx="6" fill="white" fillOpacity="0.25" />
      {/* Property cards */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={16+i*128} y="44" width="116" height="110" rx="10" fill="white" fillOpacity="0.07" stroke="white" strokeOpacity="0.12" />
          <rect x={16+i*128} y="44" width="116" height="58" rx="10" fill="white" fillOpacity="0.1" />
          {/* map pin icon simplified */}
          <rect x={24+i*128} y="112" width="80" height="8" rx="4" fill="white" fillOpacity="0.4" />
          <rect x={24+i*128} y="125" width="55" height="6" rx="3" fill="white" fillOpacity="0.2" />
          <rect x={24+i*128} y="136" width="40" height="10" rx="5" fill="white" fillOpacity="0.3" />
        </g>
      ))}
      {/* Badge row */}
      {['React','Node.js','JWT'].map((lbl,i) => (
        <g key={lbl}>
          <rect x={16+i*90} y="164" width="76" height="20" rx="6" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.15" />
          <text x={54+i*90} y="178" textAnchor="middle" fill="white" fillOpacity="0.55" fontSize="9" fontFamily="monospace">{lbl}</text>
        </g>
      ))}
      <text x="200" y="197" textAnchor="middle" fill="white" fillOpacity="0.4" fontSize="10" fontFamily="monospace">RENTAL SYSTEM</text>
    </svg>,
    // QR Restaurant: menu grid with QR code
    <svg key={2} className="w-full h-full" viewBox="0 0 400 200" fill="none">
      <defs>
        <linearGradient id={`g${index}c`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#059669" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0d9488" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#g2c)" />
      {/* QR code block */}
      <rect x="30" y="30" width="100" height="100" rx="10" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.2" />
      {[0,1,2,3].map(row => [0,1,2,3].map(col => (
        <rect key={`${row}-${col}`} x={42+col*20} y={42+row*20} width="14" height="14" rx="2"
          fill="white" fillOpacity={(row+col)%3===0?0.7:0.15} />
      )))}
      <text x="80" y="148" textAnchor="middle" fill="white" fillOpacity="0.5" fontSize="9" fontFamily="monospace">SCAN TO ORDER</text>
      {/* Menu items */}
      <rect x="150" y="20" width="230" height="50" rx="8" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.1" />
      <rect x="162" y="33" width="40" height="24" rx="4" fill="white" fillOpacity="0.12" />
      <rect x="212" y="35" width="90" height="8" rx="4" fill="white" fillOpacity="0.4" />
      <rect x="212" y="49" width="50" height="6" rx="3" fill="white" fillOpacity="0.2" />
      <rect x="340" y="37" width="28" height="18" rx="4" fill="white" fillOpacity="0.25" />
      {[80,120,160].map((y, i) => (
        <g key={y}>
          <rect x="150" y={y} width="230" height="40" rx="8" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.08" />
          <rect x="162" y={y+8} width="30" height="24" rx="4" fill="white" fillOpacity="0.1" />
          <rect x="202" y={y+11} width={60+i*15} height="7" rx="3" fill="white" fillOpacity="0.3" />
          <rect x="202" y={y+24} width="35" height="6" rx="3" fill="white" fillOpacity="0.2" />
          <rect x="340" y={y+12} width="28" height="16" rx="4" fill="white" fillOpacity="0.15" />
        </g>
      ))}
      <text x="200" y="193" textAnchor="middle" fill="white" fillOpacity="0.4" fontSize="11" fontFamily="monospace">QR RESTAURANT</text>
    </svg>,
    // BTEC LMS: course dashboard with certificate
    <svg key={3} className="w-full h-full" viewBox="0 0 400 200" fill="none">
      <defs>
        <linearGradient id="g3d" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e11d48" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#db2777" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#g3d)" />
      {/* Header bar */}
      <rect x="0" y="0" width="400" height="34" fill="black" fillOpacity="0.2" />
      <rect x="16" y="11" width="70" height="12" rx="4" fill="white" fillOpacity="0.5" />
      <rect x="300" y="9" width="80" height="16" rx="6" fill="white" fillOpacity="0.15" />
      {/* Sidebar */}
      <rect x="16" y="46" width="80" height="140" rx="8" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.1" />
      {[58,78,98,118,138,158].map((y, i) => (
        <rect key={y} x="24" y={y} width={i===0?64:48} height="8" rx="4" fill="white" fillOpacity={i===0?0.4:0.15} />
      ))}
      {/* Course cards */}
      {[[108,46],[232,46]].map(([x,y],i) => (
        <g key={i}>
          <rect x={x} y={y} width="148" height="66" rx="8" fill="white" fillOpacity="0.07" stroke="white" strokeOpacity="0.12" />
          <rect x={x} y={y} width="148" height="32" rx="8" fill="white" fillOpacity="0.1" />
          <rect x={x+10} y={y+40} width="90" height="8" rx="4" fill="white" fillOpacity="0.4" />
          <rect x={x+10} y={y+53} width="55" height="6" rx="3" fill="white" fillOpacity="0.2" />
        </g>
      ))}
      {/* Progress bars */}
      <rect x="108" y="124" width="272" height="28" rx="8" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.1" />
      <rect x="118" y="132" width="200" height="6" rx="3" fill="white" fillOpacity="0.1" />
      <rect x="118" y="132" width="140" height="6" rx="3" fill="white" fillOpacity="0.45" />
      <rect x="118" y="143" width="60" height="5" rx="3" fill="white" fillOpacity="0.25" />
      {/* Certificate badge */}
      <rect x="108" y="162" width="272" height="24" rx="6" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.2" />
      <text x="244" y="178" textAnchor="middle" fill="white" fillOpacity="0.6" fontSize="9" fontFamily="monospace">🏅 CERTIFICATE AUTO-GENERATED</text>
      <text x="200" y="197" textAnchor="middle" fill="white" fillOpacity="0.4" fontSize="10" fontFamily="monospace">BTEC LMS</text>
    </svg>,
  ]
  return <>{illustrations[index] ?? illustrations[0]}</>
}

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="relative py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 w-96 h-96 bg-violet-600/6 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const projKey = project.id as keyof typeof t.projects.items
            const projT = t.projects.items[projKey]

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/2 hover:bg-white/4 hover:border-white/15 transition-all duration-300"
              >
                {/* Project image area */}
                <div className="relative h-48 overflow-hidden">
                  <ProjectIllustration index={i} />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                    {projT.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">{projT.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((tech) => (
                      <TechBadge key={tech} name={tech} small />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/15 rounded-lg px-3 py-2 transition-all"
                      >
                        <GitHubIcon />
                        {t.projects.github}
                      </a>
                    )}
                    {project.demo && project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 hover:text-white bg-violet-600/10 hover:bg-violet-600/20 border border-violet-500/20 hover:border-violet-500/40 rounded-lg px-3 py-2 transition-all"
                      >
                        <ExternalIcon />
                        {t.projects.demo}
                      </a>
                    )}
                  </div>
                </div>

                {/* Corner gradient glow on hover */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${project.color} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
