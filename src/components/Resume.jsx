import { motion } from 'framer-motion'
import { FiDownload, FiMapPin, FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi'
import { personal, skills, education, experience } from '../data/portfolio'
import profilepic from './pic1.jpg'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function SectionHeading({ color = 'bg-indigo-500', children }) {
  return (
    <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
      <span className={`w-1 h-6 ${color} rounded-full`} />
      {children}
    </h4>
  )
}

export default function Resume() {
  return (
    <section className="min-h-screen pt-16">
      <div className="section-container">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Header row */}
          <motion.div variants={item} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <div>
              <p className="section-label">My Background</p>
              <h2 className="section-title mb-0">Resume</h2>
              <div className="accent-bar mb-0" />
            </div>
            <a
              href={personal.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary self-start sm:self-auto"
            >
              <FiDownload size={15} />
              Download PDF
            </a>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* ── Left sidebar ── */}
            <motion.div variants={item} className="space-y-6">
              {/* Profile card */}
              <div className="glass-card p-6 text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-indigo-500/40">
                  <img src={profilepic} alt={personal.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-white font-bold text-lg">{personal.name}</h3>
                <p className="text-indigo-400 text-sm mt-1">{personal.title}</p>
              </div>

              {/* Contact */}
              <div className="glass-card p-6">
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
                <ul className="space-y-3">
                  {[
                    { Icon: FiMapPin,   text: personal.location },
                    { Icon: FiMail,     text: personal.email,   href: `mailto:${personal.email}` },
                    { Icon: FiPhone,    text: personal.phone },
                    { Icon: FiGithub,   text: 'tomnguyen103', href: personal.github },
                    { Icon: FiLinkedin, text: 'LinkedIn',       href: personal.linkedin },
                  ].map(({ Icon, text, href }) => (
                    <li key={text} className="flex items-center gap-3 text-slate-400 text-sm">
                      <Icon size={14} className="text-indigo-400 shrink-0" />
                      {href ? (
                        <a href={href} target="_blank" rel="noopener noreferrer"
                           className="hover:text-indigo-400 transition-colors break-all">
                          {text}
                        </a>
                      ) : (
                        <span>{text}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="glass-card p-6">
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Skills</h4>
                <div className="space-y-5">
                  {skills.map(({ category, items }) => (
                    <div key={category}>
                      <p className="text-indigo-400 text-xs font-mono uppercase tracking-wider mb-2">
                        {category}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map((s) => (
                          <span key={s}
                            className="text-xs px-2 py-0.5 bg-slate-700/60 text-slate-300 rounded border border-slate-600/40">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── Right content ── */}
            <motion.div variants={item} className="lg:col-span-2 space-y-8">
              {/* Education */}
              <div className="glass-card p-6 md:p-8">
                <SectionHeading color="bg-indigo-500">Education</SectionHeading>
                {education.map(({ school, degree, startYear, endYear }) => (
                  <div key={school} className="flex gap-6">
                    <div className="text-slate-500 text-sm whitespace-nowrap pt-0.5 font-mono">
                      {startYear} – {endYear}
                    </div>
                    <div>
                      <h5 className="text-white font-semibold">{school}</h5>
                      <p className="text-slate-400 text-sm mt-1">{degree}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Experience */}
              <div className="glass-card p-6 md:p-8">
                <SectionHeading color="bg-violet-500">Experience</SectionHeading>
                {experience.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-slate-500 text-sm italic mb-2">Work experience coming soon.</p>
                    <p className="text-slate-600 text-xs">
                      Add entries to the <code className="text-indigo-400">experience</code> array in{' '}
                      <code className="text-indigo-400">src/data/portfolio.js</code>
                    </p>
                  </div>
                ) : (
                  <ol className="relative border-l border-slate-700 ml-2 space-y-8">
                    {experience.map(({ company, role, startDate, endDate, bullets }) => (
                      <li key={company} className="ml-6">
                        <span className="absolute -left-1.5 mt-1.5 w-3 h-3 bg-violet-500 rounded-full border-2 border-slate-950" />
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                          <div>
                            <h5 className="text-white font-semibold">{role}</h5>
                            <p className="text-violet-400 text-sm">{company}</p>
                          </div>
                          <span className="text-slate-500 text-xs whitespace-nowrap font-mono">
                            {startDate} – {endDate}
                          </span>
                        </div>
                        <ul className="space-y-1.5">
                          {bullets.map((b, i) => (
                            <li key={i} className="text-slate-400 text-sm flex gap-2">
                              <span className="text-indigo-400 mt-0.5 shrink-0">▸</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
