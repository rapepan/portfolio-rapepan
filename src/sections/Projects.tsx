import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { projects } from '../data/projects'

const illustrations = [
  // PTH-X-P
  <svg key={0} className="w-full h-full" viewBox="0 0 400 220" fill="none">
    <rect width="400" height="220" fill="#4f46e5" fillOpacity="0.35"/>
    <rect x="16" y="16" width="72" height="188" rx="8" fill="white" fillOpacity="0.07" stroke="white" strokeOpacity="0.1"/>
    {[28,46,60,74,88,102,116,130,144,158].map((y,i) => <rect key={y} x="24" y={y} width={i===0?56:40} height="7" rx="3" fill="white" fillOpacity={i===0?0.4:0.12}/>)}
    <rect x="100" y="16" width="284" height="50" rx="8" fill="white" fillOpacity="0.07" stroke="white" strokeOpacity="0.1"/>
    <rect x="112" y="27" width="100" height="9" rx="4" fill="white" fillOpacity="0.5"/>
    <rect x="112" y="42" width="160" height="7" rx="3" fill="white" fillOpacity="0.2"/>
    {[0,1,2].map(i=><g key={i}><rect x={100+i*96} y="80" width="88" height="66" rx="8" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.1"/><circle cx={144+i*96} cy={113} r="10" fill="white" fillOpacity="0.12"/><rect x={112+i*96} y="128" width="56" height="7" rx="3" fill="white" fillOpacity="0.3"/><rect x={118+i*96} y="140" width="44" height="6" rx="3" fill="white" fillOpacity="0.15"/></g>)}
    <rect x="100" y="158" width="284" height="36" rx="8" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.08"/>
    {[0,1,2,3].map(i=><rect key={i} x={112+i*68} y="167" width="52" height="7" rx="3" fill="white" fillOpacity="0.18"/>)}
    <text x="200" y="212" textAnchor="middle" fill="white" fillOpacity="0.35" fontSize="10" fontFamily="monospace">PTH-X-P CLINIC MANAGEMENT</text>
  </svg>,
  // Rental
  <svg key={1} className="w-full h-full" viewBox="0 0 400 220" fill="none">
    <rect width="400" height="220" fill="#0891b2" fillOpacity="0.35"/>
    <rect x="0" y="0" width="400" height="32" fill="black" fillOpacity="0.2"/>
    <rect x="16" y="10" width="60" height="12" rx="4" fill="white" fillOpacity="0.5"/>
    {[100,150,200].map(x=><rect key={x} x={x} y="12" width="36" height="8" rx="4" fill="white" fillOpacity="0.2"/>)}
    {[0,1,2].map(i=><g key={i}><rect x={16+i*128} y="46" width="116" height="120" rx="10" fill="white" fillOpacity="0.07" stroke="white" strokeOpacity="0.12"/><rect x={16+i*128} y="46" width="116" height="64" rx="10" fill="white" fillOpacity="0.1"/><rect x={24+i*128} y="120" width="80" height="8" rx="4" fill="white" fillOpacity="0.4"/><rect x={24+i*128} y="133" width="55" height="6" rx="3" fill="white" fillOpacity="0.2"/><rect x={24+i*128} y="145" width="40" height="10" rx="5" fill="white" fillOpacity="0.25"/></g>)}
    <text x="200" y="212" textAnchor="middle" fill="white" fillOpacity="0.35" fontSize="10" fontFamily="monospace">RENTAL SYSTEM</text>
  </svg>,
  // QR Restaurant
  <svg key={2} className="w-full h-full" viewBox="0 0 400 220" fill="none">
    <rect width="400" height="220" fill="#059669" fillOpacity="0.35"/>
    <rect x="30" y="30" width="100" height="100" rx="10" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.2"/>
    {[0,1,2,3].map(row=>[0,1,2,3].map(col=><rect key={`${row}-${col}`} x={42+col*20} y={42+row*20} width="14" height="14" rx="2" fill="white" fillOpacity={(row+col)%3===0?0.65:0.12}/>))}
    <text x="80" y="148" textAnchor="middle" fill="white" fillOpacity="0.5" fontSize="9" fontFamily="monospace">SCAN TO ORDER</text>
    {[20,78,130,175].map((y,i)=><g key={y}><rect x="150" y={y} width="230" height={i===0?50:40} rx="8" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.1"/><rect x="162" y={y+8} width="40" height={i===0?34:24} rx="4" fill="white" fillOpacity="0.12"/><rect x="212" y={y+13} width="90" height="8" rx="4" fill="white" fillOpacity="0.4"/><rect x="212" y={y+27} width="50" height="6" rx="3" fill="white" fillOpacity="0.2"/></g>)}
    <text x="200" y="212" textAnchor="middle" fill="white" fillOpacity="0.35" fontSize="10" fontFamily="monospace">QR RESTAURANT</text>
  </svg>,
  // BTEC LMS
  <svg key={3} className="w-full h-full" viewBox="0 0 400 220" fill="none">
    <rect width="400" height="220" fill="#e11d48" fillOpacity="0.3"/>
    <rect x="0" y="0" width="400" height="34" fill="black" fillOpacity="0.2"/>
    <rect x="16" y="11" width="70" height="12" rx="4" fill="white" fillOpacity="0.5"/>
    <rect x="16" y="46" width="80" height="160" rx="8" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.1"/>
    {[58,78,98,118,138,158,178].map((y,i)=><rect key={y} x="24" y={y} width={i===0?64:48} height="8" rx="4" fill="white" fillOpacity={i===0?0.4:0.15}/>)}
    {[[108,46],[232,46]].map(([x,y],i)=><g key={i}><rect x={x} y={y} width="148" height="70" rx="8" fill="white" fillOpacity="0.07" stroke="white" strokeOpacity="0.12"/><rect x={x} y={y} width="148" height="32" rx="8" fill="white" fillOpacity="0.1"/><rect x={x+10} y={y+42} width="90" height="8" rx="4" fill="white" fillOpacity="0.4"/><rect x={x+10} y={y+56} width="55" height="6" rx="3" fill="white" fillOpacity="0.2"/></g>)}
    <rect x="108" y="130" width="272" height="28" rx="8" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.1"/>
    <rect x="118" y="140" width="200" height="6" rx="3" fill="white" fillOpacity="0.1"/>
    <rect x="118" y="140" width="140" height="6" rx="3" fill="white" fillOpacity="0.45"/>
    <rect x="108" y="168" width="272" height="24" rx="6" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.2"/>
    <text x="244" y="184" textAnchor="middle" fill="white" fillOpacity="0.6" fontSize="9" fontFamily="monospace">🏅 CERTIFICATE AUTO-GENERATED</text>
    <text x="200" y="212" textAnchor="middle" fill="white" fillOpacity="0.35" fontSize="10" fontFamily="monospace">BTEC LMS</text>
  </svg>,
]

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="relative py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 w-96 h-96 bg-violet-600/6 rounded-full blur-3xl -translate-x-1/2" />
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
          {t.projects.subtitle}
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-12"
        >
          {t.projects.title}
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => {
            const projT = t.projects.items[project.id as keyof typeof t.projects.items]
            const link = project.github || project.demo

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-zinc-900 hover:border-white/16 transition-all duration-300"
              >
                {/* Image area */}
                <div className="relative h-52 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={projT.title}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    illustrations[i]
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />

                  {/* Arrow link */}
                  {link && link !== '#' && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-white mb-1.5">{projT.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-2">{projT.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/6 border border-white/10 text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span>{project.year}</span>
                    <span>·</span>
                    <span>{project.category}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}

          {/* More coming soon */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: projects.length * 0.08, duration: 0.5 }}
            className="rounded-2xl border border-dashed border-white/10 bg-white/2 flex flex-col items-center justify-center gap-3 min-h-48 text-zinc-600 hover:border-white/20 hover:text-zinc-500 transition-all"
          >
            <div className="w-10 h-10 rounded-full border border-dashed border-zinc-600 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            <span className="text-sm">More coming soon</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
