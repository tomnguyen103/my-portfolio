import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/portfolio'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const card = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Projects() {
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
          <motion.p variants={card} className="section-label">My Work</motion.p>
          <motion.h2 variants={card} className="section-title">Projects</motion.h2>
          <motion.div variants={card} className="accent-bar" />

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.article
                key={project.id}
                variants={card}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-card overflow-hidden group flex flex-col"
              >
                {/* Thumbnail */}
                <div className="h-48 overflow-hidden bg-slate-800 shrink-0">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-white text-lg leading-snug">{project.name}</h3>
                    <div className="flex gap-3 text-slate-400 shrink-0 ml-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} source code`}
                        className="hover:text-white transition-colors"
                      >
                        <FiGithub size={18} />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} live demo`}
                        className="hover:text-indigo-400 transition-colors"
                      >
                        <FiExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 bg-indigo-500/10 text-indigo-300
                                   border border-indigo-500/20 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div variants={card} className="mt-14 text-center">
            <p className="text-slate-400 mb-4">Want to see more?</p>
            <a
              href="https://github.com/tomnguyen103"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <FiGithub size={16} />
              View GitHub Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
