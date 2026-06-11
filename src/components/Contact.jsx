import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle } from 'react-icons/fi'
import { personal } from '../data/portfolio'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const CONTACT_INFO = [
  { Icon: FiMail,    text: personal.email,    href: `mailto:${personal.email}` },
  { Icon: FiPhone,   text: personal.phone,    href: null },
  { Icon: FiMapPin,  text: personal.location, href: null },
]

const SOCIAL_LINKS = [
  { Icon: FiGithub,   href: personal.github,   label: 'GitHub' },
  { Icon: FiLinkedin, href: personal.linkedin,  label: 'LinkedIn' },
]

const EMPTY_FORM = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm]     = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // ── Wire up EmailJS here (see implementation-notes.md) ──
    // import emailjs from '@emailjs/browser'
    // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')

    // Stub: simulates network delay until EmailJS is configured
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('sent')
    setForm(EMPTY_FORM)
  }

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
          <motion.p variants={item} className="section-label">Reach Out</motion.p>
          <motion.h2 variants={item} className="section-title">Contact</motion.h2>
          <motion.div variants={item} className="accent-bar" />

          <div className="grid lg:grid-cols-2 gap-14">
            {/* Left — info */}
            <motion.div variants={item} className="space-y-10">
              <p className="text-slate-400 text-lg leading-relaxed">
                Have a project in mind, want to collaborate, or just want to say hello?
                I'd love to hear from you.
              </p>

              <ul className="space-y-5">
                {CONTACT_INFO.map(({ Icon, text, href }) => (
                  <li key={text} className="flex items-center gap-4 group">
                    <div className="w-11 h-11 bg-indigo-500/10 border border-indigo-500/20 rounded-xl
                                    flex items-center justify-center shrink-0
                                    group-hover:bg-indigo-500/20 transition-colors">
                      <Icon className="text-indigo-400" size={16} />
                    </div>
                    {href ? (
                      <a href={href} className="text-slate-300 hover:text-white transition-colors text-sm">
                        {text}
                      </a>
                    ) : (
                      <span className="text-slate-400 text-sm">{text}</span>
                    )}
                  </li>
                ))}
              </ul>

              <div>
                <p className="text-slate-500 text-sm mb-4">Find me online</p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-11 h-11 border border-slate-700 rounded-xl flex items-center justify-center
                                 text-slate-400 hover:border-indigo-500 hover:text-indigo-400 transition-all"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div variants={item}>
              {status === 'sent' ? (
                <div className="glass-card p-10 flex flex-col items-center justify-center text-center gap-4 h-full min-h-[400px]">
                  <FiCheckCircle className="text-emerald-400" size={48} />
                  <h3 className="text-white font-bold text-xl">Message sent!</h3>
                  <p className="text-slate-400">Thanks for reaching out — I'll get back to you soon.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-outline mt-2"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="field"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="field"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="What's on your mind?"
                      className="field resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm">
                      Something went wrong. Try emailing me directly at{' '}
                      <a href={`mailto:${personal.email}`} className="underline">{personal.email}</a>.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </span>
                    ) : (
                      <>
                        <FiSend size={15} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-slate-600 text-xs text-center">
                    Form UI is ready — see <code className="text-indigo-500">implementation-notes.md</code> to wire up EmailJS.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
