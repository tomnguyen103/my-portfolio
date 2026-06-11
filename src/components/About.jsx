import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiLayout, FiCpu } from 'react-icons/fi'
import { personal, skills } from '../data/portfolio'
import profilepic from './pic1.jpg'

const CATEGORY_ICONS = {
  Frontend:   FiLayout,
  Backend:    FiCode,
  Frameworks: FiCpu,
  Databases:  FiDatabase,
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function About() {
  return (
    <section className="min-h-screen pt-16">
      <div className="section-container">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Header */}
          <motion.p variants={item} className="section-label">Get to know me</motion.p>
          <motion.h2 variants={item} className="section-title">About Me</motion.h2>
          <motion.div variants={item} className="accent-bar" />

          {/* Bio row */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            {/* Photo */}
            <motion.div variants={item} className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 rounded-2xl overflow-hidden ring-2 ring-indigo-500/30 shadow-2xl shadow-indigo-500/10">
                  <img
                    src={profilepic}
                    alt={personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative offset border */}
                <div className="absolute -bottom-4 -right-4 w-72 h-72 rounded-2xl border-2 border-indigo-500/20 -z-10" />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div variants={item}>
              <h3 className="text-2xl font-bold text-white mb-4">
                Based in{' '}
                <span className="text-indigo-400">{personal.location}</span>
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8">{personal.bio}</p>

              <dl className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
                {[
                  { label: 'Name',         value: personal.name },
                  { label: 'Location',     value: personal.location },
                  { label: 'Email',        value: personal.email, href: `mailto:${personal.email}` },
                  { label: 'Availability', value: 'Open to opportunities', green: true },
                ].map(({ label, value, href, green }) => (
                  <div key={label}>
                    <dt className="text-slate-500 font-medium mb-0.5">{label}</dt>
                    <dd>
                      {href ? (
                        <a href={href} className="text-indigo-400 hover:underline break-all">{value}</a>
                      ) : (
                        <span className={green ? 'text-emerald-400' : 'text-slate-200'}>{value}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>

          {/* Skills grid */}
          <motion.div variants={item}>
            <h3 className="text-2xl font-bold text-white mb-8">Tech Stack</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {skills.map(({ category, items }) => {
                const Icon = CATEGORY_ICONS[category] ?? FiCode
                return (
                  <motion.div
                    key={category}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="glass-card p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="text-indigo-400" size={15} />
                      </div>
                      <span className="font-semibold text-white text-sm">{category}</span>
                    </div>
                    <ul className="space-y-2">
                      {items.map((skill) => (
                        <li key={skill} className="text-sm text-slate-400 flex items-center gap-2">
                          <span className="w-1 h-1 bg-indigo-400 rounded-full shrink-0" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
