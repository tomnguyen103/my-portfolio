import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi'
import { personal } from '../data/portfolio'

const LINKS = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact',  label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand — full name matching tomnguyen.me */}
          <Link to="/" className="text-white font-bold text-lg tracking-tight hover:text-indigo-400 transition-colors">
            {personal.name}
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-4">
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
                className="text-slate-500 hover:text-slate-300 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/40 flex items-center justify-center gap-1 text-slate-600 text-xs">
          <span>© {new Date().getFullYear()} {personal.name} · Built with</span>
          <FiHeart size={11} className="text-indigo-500 mx-0.5" />
          <span>React + Tailwind + Framer Motion</span>
        </div>
      </div>
    </footer>
  )
}
