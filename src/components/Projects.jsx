import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react'
import '../styles/Projects.css'
import project1 from '../assets/Project1.PNG';
import project2 from '../assets/Project2.PNG';
import project3 from '../assets/Project3.PNG';

const projectsData = [
  {
    id: '01',
    name: 'MyTutee Platform',
    img: project1,
    category: 'ONLINE TEACHING PLATFORM',
    description: 'A learning platform connecting students and tutors with dedicated dashboards, course discovery, session scheduling and role-based access.',
    client: 'EdTech Initiative',
    service: 'Full-Stack Web App',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    demo: 'https://www.mytutee.com/',
  },
  {
    id: '02',
    name: 'Shop Nova',
    img: project2,
    category: 'E-COMMERCE EXPERIENCE',
    description: 'A modern online store concept with product discovery, category browsing, shopping cart flows and an admin-focused product management experience.',
    client: 'Retail Brand',
    service: 'MERN E-Commerce',
    stack: ['React', 'Express', 'MongoDB', 'REST API'],
    demo: 'https://shopnova-5ly7.vercel.app/',
  },
  {
    id: '03',
    name: 'AI Teaching Whiteboard',
    img: project3,
    category: 'EDTECH / INTERACTIVE TOOL',
    description: 'An interactive teaching workspace concept designed for visual lessons, drawing tools, board controls and future AI-assisted learning workflows.',
    client: 'Interactive Labs',
    service: 'Frontend & UI Design',
    stack: ['React', 'Node.js', 'MongoDB', 'UI/UX'],
    demo: 'https://kr-customizer-pi.vercel.app/',
  }
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1))
  }

  const currentProject = projectsData[currentIndex]

  return (
    <section className="section-wrap section-block projects-section" id="projects">
      <div className="projects-container">
        
        {/* Section Header */}
        <div className="projects-header-center">
          <p className="eyebrow">✦ Work</p>
          <h2 className="section-title">
            My latest <span className="italic-serif">work</span>
          </h2>
          <p className="heading-note mt-15">
            A selection of recent projects showcasing my approach to design, development, and digital problem-solving.
          </p>
        </div>

        {/* Carousel Slider Card */}
        <div className="projects-carousel-wrapper">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              className="project-slider-card"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              {/* Left Side: Mockup / Image Box */}
              <div className="project-art-box">
                <div className="art-gradient-bg" />
                <div className="project-browser-mockup">
                  <div className="mockup-top-bar">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                    <span className="mockup-domain">project-{currentProject.id}.app</span>
                  </div>
                  <div className="mockup-screen-content">
                    <img src={currentProject.img} alt={currentProject.category} className="project-mockup-img" />
                  </div>
                </div>
              </div>

              {/* Right Side: Details, Client, Service & Arrows */}
              <div className="project-details-box">
                <h3 className="project-main-heading">{currentProject.name}</h3>
                <p className="project-main-desc">{currentProject.description}</p>

                <div className="project-meta-grid">
                  <div>
                    <span className="meta-label">Client</span>
                    <span className="meta-value">{currentProject.client}</span>
                  </div>
                  <div>
                    <span className="meta-label">Service</span>
                    <span className="meta-value">{currentProject.service}</span>
                  </div>
                </div>

                <div className="project-stack-row">
                  {currentProject.stack.map(tag => <span key={tag} className="stack-badge">{tag}</span>)}
                </div>

                <div className="project-bottom-row">
                  <a href={currentProject.demo} className="view-details-btn" target="_blank" rel="noopener noreferrer">
                    View Details <ArrowUpRight size={16} />
                  </a>

                  {/* Left & Right Slider Buttons */}
                  <div className="slider-controls">
                    <button onClick={handlePrev} className="arrow-btn" aria-label="Previous Project">
                      <ArrowLeft size={18} />
                    </button>
                    <button onClick={handleNext} className="arrow-btn" aria-label="Next Project">
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}