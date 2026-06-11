import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import { personal } from '../data/portfolio'

const ROLES = ['Full-Stack Developer', 'AI Enthusiast', 'Problem Solver']

function useTypewriter(words, charSpeed = 80, deleteSpeed = 45, pause = 2200) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx]  = useState(0)
  const [charIdx, setCharIdx]  = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]
    let timeout

    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(() => setCharIdx((i) => i + 1), charSpeed)
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((i) => i - 1), deleteSpeed)
    } else {
      setDeleting(false)
      setWordIdx((i) => (i + 1) % words.length)
    }

    setDisplay(word.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, charSpeed, deleteSpeed, pause])

  return display
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
})

export default function Hero() {
  const role = useTypewriter(ROLES)

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Gradient background blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 -z-10" />
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-3xl -z-10" />

      {/* Content */}
      <div className="text-center px-6 max-w-4xl mx-auto">
        <motion.p className="section-label" {...fadeUp(0)}>
          Hello, I'm
        </motion.p>

        <motion.h1
          className="text-6xl md:text-8xl font-black text-white tracking-tight leading-none mb-5"
          {...fadeUp(0.1)}
        >
          {personal.name}
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          className="h-10 mb-6 flex items-center justify-center gap-1 text-2xl md:text-3xl font-semibold"
          {...fadeUp(0.2)}
        >
          <span className="text-indigo-400">{role}</span>
          <span className="w-0.5 h-7 bg-indigo-400 animate-pulse rounded-full" />
        </motion.div>

        <motion.p
          className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          {...fadeUp(0.3)}
        >
          I build fast, modern web applications with clean code and great user experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          {...fadeUp(0.4)}
        >
          <Link to="/projects" className="btn-primary">
            View My Work
          </Link>
          <Link to="/contact" className="btn-outline">
            Get In Touch
          </Link>
        </motion.div>

        {/* Social icons */}
        <motion.div
          className="flex items-center justify-center gap-5"
          {...fadeUp(0.5)}
        >
          {[
            { href: personal.github,   Icon: FiGithub,   label: 'GitHub' },
            { href: personal.linkedin, Icon: FiLinkedin, label: 'LinkedIn' },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Icon size={22} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <FiArrowDown size={20} />
      </motion.div>
    </section>
  )
}
