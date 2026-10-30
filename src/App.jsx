// import { useState, useEffect } from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'
// import {
//   ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
//   Menu, X, Code2, Layers3, Database, Globe, ExternalLink, Download,
//   Sparkles, Terminal, MonitorSmartphone, Send, CheckCircle2, Award
// } from 'lucide-react'

// const skills = [
//   { title: 'Frontend', icon: MonitorSmartphone, items: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js', 'Tailwind CSS', 'Responsive UI'] },
//   { title: 'Backend', icon: Database, items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Authentication', 'CRUD'] },
//   { title: 'Tools & Workflow', icon: Terminal, items: ['Git & GitHub', 'VS Code', 'Postman', 'npm', 'API Integration', 'WordPress'] },
// ]

// const services = [
//   { 
//     title: 'Frontend Development', 
//     icon: MonitorSmartphone, 
//     desc: 'React, Tailwind CSS aur Framer Motion ka use karke responsive, accessible aur interactive user interfaces design karna.' 
//   },
//   { 
//     title: 'Backend & APIs', 
//     icon: Database, 
//     desc: 'Node.js, Express aur MongoDB ke saath secure, scalable RESTful APIs aur robust database architecture build karna.' 
//   },
//   { 
//     title: 'Full-Stack Solutions', 
//     icon: Layers3, 
//     desc: 'Client-side rendering se lekar server-side logic tak, end-to-end MERN stack web applications develop karna.' 
//   },
// ]

// const projects = [
//   {
//     number: '01',
//     name: 'MyTutee',
//     type: 'ONLINE TEACHING PLATFORM',
//     description: 'A learning platform connecting students and tutors with dedicated dashboards, course discovery, session scheduling and role-based access.',
//     stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
//     accent: 'red',
//     mark: 'MT',
//     link: 'https://github.com/',
//     demo: '#contact',
//   },
//   {
//     number: '02',
//     name: 'Shop Nova',
//     type: 'E-COMMERCE EXPERIENCE',
//     description: 'A modern online store concept with product discovery, category browsing, shopping cart flows and an admin-focused product management experience.',
//     stack: ['React', 'Express', 'MongoDB', 'REST API'],
//     accent: 'orange',
//     mark: 'SN',
//     link: 'https://github.com/',
//     demo: '#contact',
//   },
//   {
//     number: '03',
//     name: 'AI Teaching Whiteboard',
//     type: 'EDTECH / INTERACTIVE TOOL',
//     description: 'An interactive teaching workspace concept designed for visual lessons, drawing tools, board controls and future AI-assisted learning workflows.',
//     stack: ['React', 'Node.js', 'MongoDB', 'UI/UX'],
//     accent: 'blue',
//     mark: 'WB',
//     link: 'https://github.com/',
//     demo: '#contact',
//   },
// ]

// const achievements = [
//   { 
//     title: 'Azisly Code2Career Hackathon', 
//     desc: 'PlanetPulse naam ka ek full-stack MERN carbon footprint tracker application banaya aur submit kiya.', 
//     date: 'SEP 2026' 
//   },
//   { 
//     title: 'Product Customizer Deployment', 
//     desc: 'KR-Customizer web application ko React aur Tailwind CSS ke saath develop karke Vercel par successfully deploy kiya.', 
//     date: 'OCT 2026' 
//   },
// ]

// function CurtainTransition() {
//   return (
//     <div style={{ position: 'fixed', inset: 0, zIndex: 999999, display: 'flex', pointerEvents: 'none' }}>
//       {[...Array(6)].map((_, i) => {
//         let delay = 0.6
//         if (i === 2 || i === 3) delay = 0.2
//         else if (i === 1 || i === 4) delay = 0.4
        
//         return (
//           <motion.div
//             key={i}
//             initial={{ scaleY: 1 }}
//             animate={{ scaleY: 0 }}
//             transition={{ duration: 0.85, ease: [0.7, 0, 0.3, 1], delay }}
//             style={{
//               flex: 1,
//               backgroundColor: 'var(--red)',
//               transformOrigin: 'top',
//               borderRight: i !== 5 ? '1px solid rgba(0,0,0,0.1)' : 'none'
//             }}
//           />
//         )
//       })}
//     </div>
//   )
// }

// const smoothReveal = {
//   hidden: { opacity: 0, y: 50, scale: 0.96 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     scale: 1, 
//     transition: { type: "spring", damping: 24, stiffness: 100, mass: 0.8 } 
//   },
// }

// function Reveal({ children, className = '', delay = 0, hover = false }) {
//   return (
//     <motion.div
//       className={className}
//       variants={smoothReveal}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.15 }}
//       transition={{ delay }}
//       whileHover={hover ? { scale: 1.02, y: -8, transition: { type: "spring", stiffness: 300 } } : {}}
//     >
//       {children}
//     </motion.div>
//   )
// }

// function BlockReveal({ children, delay = 0, blockColor = "var(--red)", display = "inline-block" }) {
//   return (
//     <div style={{ position: 'relative', overflow: 'hidden', display }}>
//       <motion.div
//         initial={{ opacity: 0, y: 15 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: delay + 0.4, duration: 0.5, ease: "easeOut" }}
//       >
//         {children}
//       </motion.div>
//       <motion.div
//         initial={{ x: "-100%" }}
//         animate={{ x: "100%" }}
//         transition={{ delay, duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
//         style={{
//           position: "absolute",
//           inset: 0,
//           backgroundColor: blockColor,
//           zIndex: 20
//         }}
//       />
//     </div>
//   )
// }

// function App() {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [sent, setSent] = useState(false)
  
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   useEffect(() => {
//     const updateMousePosition = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//     }
//     window.addEventListener("mousemove", updateMousePosition)
//     return () => window.removeEventListener("mousemove", updateMousePosition)
//   }, [])

//   const { scrollY, scrollYProgress } = useScroll()
  
//   const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.2])
//   const heroScale = useTransform(scrollY, [0, 600], [1, 0.92])

//   const closeMenu = () => setMenuOpen(false)
//   const handleContact = (event) => {
//     event.preventDefault()
//     const data = new FormData(event.currentTarget)
//     const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`)
//     const body = encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('name')}\nEmail: ${data.get('email')}`)
//     window.location.href = `mailto:shivamshakya.dev@example.com?subject=${subject}&body=${body}`
//     setSent(true)
//   }

//   return (
//     <div className="site-shell">
//       <CurtainTransition />

//       <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      
//       <motion.div 
//         className="custom-cursor" 
//         animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }} 
//         transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }} 
//       />
//       <motion.div 
//         className="custom-cursor-dot" 
//         animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }} 
//         transition={{ type: "tween", duration: 0 }} 
//       />

//       <div className="grain" aria-hidden="true" />
      
//       <div className="header-wrap">
//         <header className="topbar">
//           <a className="brand" href="#home" onClick={closeMenu} aria-label="Shivam home">
//             <span className="brand-mark">S<span>.</span></span>
//             <span className="brand-name">SHIVAM<span>SHAKYA</span></span>
//           </a>
//           <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
//             {menuOpen ? <X size={22} /> : <Menu size={22} />}
//           </button>
//           <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
//             {[['About', '#about'], ['Skills', '#skills'], ['Services', '#services'], ['Projects', '#projects'], ['Experience', '#experience'], ['Achievements', '#achievements']].map(([label, href]) => (
//               <a key={label} href={href} onClick={closeMenu}>{label}</a>
//             ))}
//             <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
//           </nav>
//         </header>
//       </div>

//       <main>
//         <div className="hero-spacer">
//           <motion.div className="hero-fixed" style={{ opacity: heroOpacity, scale: heroScale }}>
//             <section className="hero section-wrap" id="home">
//               <div className="hero-copy">
//                 <motion.div className="availability" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", delay: 1.1, stiffness: 100 }}>
//                   <span className="status-dot" /> OPEN TO OPPORTUNITIES
//                 </motion.div>
                
//                 <p className="eyebrow hero-eyebrow">
//                   <BlockReveal delay={1.2} blockColor="#333">MERN STACK DEVELOPER <span>·</span> INDIA</BlockReveal>
//                 </p>
//                 <h1 style={{ margin: 0, paddingBottom: '5px' }}>
//                   <BlockReveal delay={1.4} blockColor="var(--red)" display="block">I build digital</BlockReveal>
//                   <BlockReveal delay={1.6} blockColor="#fff" display="block">
//                     <span className="outlined-word">experiences</span><span className="red-dot">.</span>
//                   </BlockReveal>
//                 </h1>
//                 <div className="hero-intro">
//                   <BlockReveal delay={1.8} blockColor="#444" display="block">
//                     I'm <strong>Shivam Shakya</strong> — a developer who turns ideas into clean, responsive and useful web applications with the MERN stack.
//                   </BlockReveal>
//                 </div>

//                 <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2, type: "spring" }}>
//                   <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></motion.a>
//                   <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="button button-ghost" href="#contact">Get in touch <ArrowUpRight size={16} /></motion.a>
//                 </motion.div>
//                 <motion.div className="hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}>
//                   <motion.a whileHover={{ y: -4, color: "#ff3b4e" }} href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></motion.a>
//                   <motion.a whileHover={{ y: -4, color: "#ff3b4e" }} href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></motion.a>
//                   <motion.a whileHover={{ y: -4, color: "#ff3b4e" }} href="mailto:shivamshakya.dev@example.com" aria-label="Email"><Mail size={18} /></motion.a>
//                   <span className="social-line" /><span className="social-caption">LET'S CONNECT</span>
//                 </motion.div>
//               </div>
              
//               {/* Right Side User Image Integration */}
//               <motion.div className="hero-visual" initial={{ opacity: 0, scale: .90 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 1.8, type: "spring" }}>
//                 <div className="hero-bg-image" style={{ backgroundImage: "url('/src/assets/Shivam.png')" }} />
//                 <div className="visual-glow" />
//               </motion.div>

//               <a className="scroll-cue" href="#about"><span className="scroll-line" /> SCROLL TO DISCOVER</a>
//             </section>
//           </motion.div>
//         </div>

//         <div className="content-layer-simple">
//           <div className="ticker-container">
//     <div className="ticker" aria-label="Areas of work">
//       <div className="ticker-track">
//         {Array.from({ length: 2 }).map((_, idx) => <div className="ticker-set" key={idx}>
//           {['DEVELOPMENT', 'CREATIVE THINKING', 'RESPONSIVE DESIGN', 'FULL STACK', 'CONTINUOUS LEARNING'].map((item) => <span key={item}>{item}<b>✳</b></span>)}
//         </div>)}
//       </div>
//     </div>
//   </div>

//           <section className="section-wrap section-block about-section" id="about">
//             <Reveal className="section-heading">
//               <p className="eyebrow"><span>01</span> / A LITTLE ABOUT ME</p>
//               <h2>Curious mind.<br /><span className="muted-heading">Builder's mindset.</span></h2>
//             </Reveal>
//             <div className="about-grid">
//               <Reveal className="about-text">
//                 <p className="large-copy">I enjoy creating web experiences that are <span className="text-white">useful, intuitive, and thoughtfully built.</span></p>
//                 <p>I'm a developer focused on the MERN stack, with hands-on project experience building responsive interfaces, connecting APIs, and developing full-stack features. I like breaking complex problems into clear, maintainable solutions.</p>
//                 <p>I'm always learning, refining my craft, and looking for opportunities to contribute to a team that builds meaningful products.</p>
//                 <a className="text-link" href="#contact">Let's build something <ArrowUpRight size={16} /></a>
//               </Reveal>
//               <Reveal className="about-side" delay={.12}>
//                 <motion.div className="stat-card" whileHover={{ scale: 1.03 }}><span className="stat-number">MERN</span><span className="stat-label">FULL-STACK TOOLKIT</span><p>From thoughtful UI to reliable APIs and data.</p></motion.div>
//                 <motion.div className="stat-card" whileHover={{ scale: 1.03 }}><span className="stat-number">01<span className="red-dot">.</span></span><span className="stat-label">MINDSET</span><p>Learn, build, improve — repeat.</p></motion.div>
//                 <motion.div className="education-card" whileHover={{ scale: 1.02 }}><div className="edu-icon"><Layers3 size={19} /></div><div><span className="mini-label">EDUCATION</span><h3>Master of Computer Applications</h3><p>Dewan Institute of Management Studies · Meerut, UP</p><span className="edu-meta">Expected graduation: 2026 · CGPA 8.2/10</span></div></motion.div>
//               </Reveal>
//             </div>
//           </section>

//           <section className="section-wrap section-block skills-section" id="skills">
//             <Reveal className="section-heading heading-row">
//               <div><p className="eyebrow"><span>02</span> / MY TOOLKIT</p><h2>Skills that make<br /><span className="muted-heading">ideas happen.</span></h2></div>
//               <p className="heading-note">The right tool for the right problem. Here are the technologies I work with.</p>
//             </Reveal>
//             <div className="skills-grid">
//               {skills.map((group, i) => {
//                 const Icon = group.icon
//                 return <Reveal className="skill-card" key={group.title} delay={i * .15} hover={true}>
//                   <div className="skill-card-top"><div className="skill-icon"><Icon size={20} /></div><span>0{i + 1}</span></div>
//                   <h3>{group.title}</h3><p className="skill-subtitle">{i === 0 ? 'Interfaces people enjoy using.' : i === 1 ? 'Logic, data and application flow.' : 'Tools for shipping better work.'}</p>
//                   <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
//                 </Reveal>
//               })}
//             </div>
//           </section>

//           <section className="section-wrap section-block services-section" id="services">
//             <Reveal className="section-heading heading-row">
//               <div>
//                 <p className="eyebrow"><span>02.5</span> / WHAT I DO</p>
//                 <h2>Services &<br /><span className="muted-heading">Expertise.</span></h2>
//               </div>
//               <p className="heading-note">Main in areas mein specialize karta hu aur end-to-end development value provide karta hu.</p>
//             </Reveal>
//             <div className="skills-grid">
//               {services.map((srv, i) => {
//                 const Icon = srv.icon
//                 return (
//                   <Reveal className="skill-card" key={srv.title} delay={i * .15} hover={true}>
//                     <div className="skill-card-top">
//                       <div className="skill-icon"><Icon size={20} /></div>
//                     </div>
//                     <h3>{srv.title}</h3>
//                     <p className="skill-subtitle" style={{ marginBottom: 0 }}>{srv.desc}</p>
//                   </Reveal>
//                 )
//               })}
//             </div>
//           </section>

//           <section className="section-wrap section-block projects-section" id="projects">
//             <Reveal className="section-heading heading-row">
//               <div><p className="eyebrow"><span>03</span> / SELECTED WORK</p><h2>Things I've been<br /><span className="muted-heading">building lately.</span></h2></div>
//               <p className="heading-note">A few projects that reflect my interest in useful products, full-stack development and clean UI.</p>
//             </Reveal>
//             <div className="projects-list">
//               {projects.map((project, i) => <Reveal className={`project-card project-${project.accent}`} key={project.number} delay={i * .1} hover={true}>
//                 <div className="project-art">
//                   <div className="art-grid" />
//                   <motion.div className="art-circle" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }} />
//                   <span className="project-mark">{project.mark}</span>
//                   <span className="art-caption">SELECTED PROJECT / {project.number}</span>
//                   <div className="art-mini-window"><span /><span /><span /><div /></div>
//                 </div>
//                 <div className="project-info">
//                   <div className="project-meta"><span>{project.type}</span><span>{project.number} / 03</span></div>
//                   <h3>{project.name}</h3>
//                   <p>{project.description}</p>
//                   <div className="project-stack">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
//                   <div className="project-links"><a href={project.demo}>Project details <ArrowUpRight size={15} /></a><a href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.name} source code`}><Github size={17} /></a></div>
//                 </div>
//               </Reveal>)}
//             </div>
//           </section>
          
//           <section className="section-wrap section-block experience-section" id="experience">
//             <Reveal className="section-heading">
//               <p className="eyebrow"><span>04</span> / EXPERIENCE & GROWTH</p>
//               <h2>Learning by<br /><span className="muted-heading">building things.</span></h2>
//             </Reveal>
//             <div className="timeline">
//               <Reveal className="timeline-item">
//                 <div className="timeline-marker" /><div className="timeline-date">FEB 2026 — AUG 2026 <span>· REMOTE</span></div>
//                 <div className="timeline-content"><div className="timeline-title-row"><h3>WordPress Developer</h3><span className="timeline-type">DEVELOPMENT</span></div><p className="timeline-company">AtoZ Online Solutions / Web projects</p><p>Worked on website and landing-page development, responsive layouts, page updates and troubleshooting. Focused on improving usability and keeping pages consistent across screen sizes.</p><div className="project-stack"><span>WordPress</span><span>HTML/CSS</span><span>Responsive Design</span></div></div>
//               </Reveal>
//               <Reveal className="timeline-item" delay={.1}>
//                 <div className="timeline-marker" /><div className="timeline-date">2026 <span>· PROJECT WORK</span></div>
//                 <div className="timeline-content"><div className="timeline-title-row"><h3>MERN Stack Developer</h3><span className="timeline-type">FULL STACK</span></div><p className="timeline-company">Independent / Project-based development</p><p>Built full-stack application features with React, Express, Node.js and MongoDB, including authentication flows, API integration, dashboards and data-driven UI.</p><div className="project-stack"><span>React</span><span>Node.js</span><span>Express</span><span>MongoDB</span></div></div>
//               </Reveal>
//             </div>
//           </section>

//           <section className="section-wrap section-block achievements-section" id="achievements">
//             <Reveal className="section-heading">
//               <p className="eyebrow"><span>04.5</span> / MILESTONES</p>
//               <h2>Achievements &<br /><span className="muted-heading">Highlights.</span></h2>
//             </Reveal>
//             <div className="timeline">
//               {achievements.map((ach, i) => (
//                 <Reveal className="timeline-item" delay={i * .1} key={i}>
//                   <div className="timeline-marker" style={{ display: 'block' }} />
//                   <div className="timeline-date">{ach.date}</div>
//                   <div className="timeline-content">
//                     <div className="timeline-title-row">
//                       <h3>{ach.title}</h3>
//                       <span className="timeline-type" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
//                         <Award size={11} /> MILESTONE
//                       </span>
//                     </div>
//                     <p>{ach.desc}</p>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </section>

//           <section className="contact-section" id="contact">
//             <div className="contact-glow" />
//             <div className="section-wrap contact-wrap">
//               <Reveal className="contact-intro">
//                 <p className="eyebrow"><span>05</span> / HAVE A PROJECT IN MIND?</p>
//                 <h2>Let's make<br />something <span>great.</span></h2>
//                 <p>Have an opportunity, a project idea, or just want to connect? My inbox is open.</p>
//                 <a className="contact-email" href="mailto:shivamshakya.dev@example.com">shivamshakya.dev@example.com <ArrowUpRight size5={17} /></a>
//                 <div className="contact-socials"><a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ExternalLink size={13} /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ExternalLink size={13} /></a></div>
//               </Reveal>
//               <Reveal className="contact-form-wrap" delay={.12}>
//                 <form className="contact-form" onSubmit={handleContact}>
//                   <div className="form-heading"><Send size={17} /><span>SEND A MESSAGE</span></div>
//                   <label>Your name<input name="name" type="text" placeholder="What should I call you?" required /></label>
//                   <label>Your email<input name="email" type="email" placeholder="you@example.com" required /></label>
//                   <label>What's on your mind?<textarea name="image" rows="4" placeholder="Tell me a little about it..." required /></label>
//                   <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="button button-primary form-submit" type="submit">Open email app <ArrowUpRight size={16} /></motion.button>
//                   {sent && <p className="form-feedback"><CheckCircle2 size={15} /> Your email app should open with the message ready to send.</p>}
//                 </form>
//               </Reveal>
//             </div>
//           </section>

//           <footer className="footer section-wrap">
//             <a className="brand footer-brand" href="#home"><span className="brand-mark">S<span>.</span></span><span className="brand-name">SHIVAM<span>SHAKYA</span></span></a>
//             <p>Designed with curiosity. Built with code.</p>
//             <a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={14} /></a>
//             <span className="copyright">© {new Date().getFullYear()} SHIVAM SHAKYA</span>
//           </footer>
//         </div>
//       </main>
//     </div>
//   )
// }

// export default App




import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

function CurtainTransition() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 999999, display: 'flex', pointerEvents: 'none' }}>
      {[...Array(6)].map((_, i) => {
        let delay = 0.6
        if (i === 2 || i === 3) delay = 0.2
        else if (i === 1 || i === 4) delay = 0.4
        
        return (
          <motion.div
            key={i}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.85, ease: [0.7, 0, 0.3, 1], delay }}
            style={{
              flex: 1,
              backgroundColor: 'var(--red)',
              transformOrigin: 'top',
              borderRight: i !== 5 ? '1px solid rgba(0,0,0,0.1)' : 'none'
            }}
          />
        )
      })}
    </div>
  )
}

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  return (
    <div className="site-shell">
      <CurtainTransition />

      <motion.div className="scroll-progress" style={{ scaleX: useScrollProgress() }} />
      
      <motion.div 
        className="custom-cursor" 
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }} 
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }} 
      />
      <motion.div 
        className="custom-cursor-dot" 
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }} 
        transition={{ type: "tween", duration: 0 }} 
      />

      <div className="grain" aria-hidden="true" />
      
      <Navbar />

      <main>
        <Hero />

        <div className="content-layer-simple">
          <Ticker />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  )
}

// Helper hook for scroll progress bar in App if needed, or keep standard motion
import { useScroll } from 'framer-motion'
function useScrollProgress() {
  const { scrollYProgress } = useScroll()
  return scrollYProgress
}