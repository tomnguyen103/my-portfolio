import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FiDownload } from 'react-icons/fi'
import { personal } from '../data/portfolio'

const NAV_LINKS = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const isActive = (to) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to)

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — full name matching tomnguyen.me */}
        <Link
          to="/"
          className="text-white font-bold text-xl tracking-tight hover:text-indigo-400 transition-colors"
        >
          {personal.name}
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors ${
                isActive(to)
                  ? 'text-indigo-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
          {/* Resume downloads the PDF directly — no page */}
          <a
            href={personal.resumePdf}
            download
            className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-semibold border border-indigo-500
                       text-indigo-400 rounded-md hover:bg-indigo-500 hover:text-white transition-all duration-200"
          >
            <FiDownload size={13} />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-md border-b border-slate-800"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`text-sm font-medium py-1 transition-colors ${
                    isActive(to)
                      ? 'text-indigo-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <a
                href={personal.resumePdf}
                download
                className="flex items-center gap-2 text-sm font-semibold text-indigo-400
                           hover:text-indigo-300 transition-colors pt-1 border-t border-slate-800"
              >
                <FiDownload size={13} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
