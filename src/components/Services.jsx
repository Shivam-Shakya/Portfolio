import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import '../styles/Services.css'
import frontend from '../assets/Frontend.png';
import backend from '../assets/Backend.png';
import fullstack from '../assets/Fullstack.png';

const servicesData = [
  {
    title: 'Frontend',
    italic: 'Development',
    description: 'Crafting responsive, high-performing, and engaging user interfaces using React.js, Tailwind CSS, and Framer Motion for exceptional digital experiences.',
    points: [
      'Custom React.js Component Architecture',
      'Smooth Scroll Animations & Micro-Interactions',
      'Mobile-First & Pixel-Perfect Tailwind Design',
      'State Management & Performance Optimization'
    ],
    image: frontend
  },
  {
    title: 'Backend &',
    italic: 'APIs',
    description: 'Building secure, scalable RESTful APIs and robust database architectures with Node.js, Express.js, PostgreSQL, and MongoDB.',
    points: [
      'Secure RESTful API Design & Integration',
      'Scalable MongoDB & PostgreSQL Schemas',
      'JWT Authentication & Data Protection',
      'PHP CodeIgniter 4 & Third-Party Webhooks'
    ],
    image: backend
  },
  {
    title: 'Full-Stack',
    italic: 'Solutions',
    description: 'Delivering end-to-end MERN stack web applications from concept and UI architecture to server-side logic and seamless deployment.',
    points: [
      'End-to-End MERN Stack Web Applications',
      'E-Commerce & Dynamic Admin Dashboards',
      'Git Workflow, CI/CD & Vercel Deployment',
      'Third-Party API Integrations & Maintenance'
    ],
    image: fullstack
  }
]

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleService = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="section-wrap section-block services-section" id="services">
      <div className="services-container">
        
        {/* Header Row */}
        <div className="services-header-row">
          <div className="services-header-text">
            <p className="eyebrow">✦ Services</p>
            <h2 className="section-title">
              My <span className="italic-serif">services</span>
            </h2>
            <p className="heading-note mt-20">
              Helping brands build modern, high-performing websites that combine strategy, design, and seamless user experiences.
            </p>
          </div>
          <a href="#contact" className="book-call-link">
            Book A Call <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Services Accordion List */}
        <div className="services-list">
          {servicesData.map((service, index) => {
            const isOpen = activeIndex === index
            return (
              <div className="service-item-wrapper" key={index}>
                <div 
                  className={`service-item ${isOpen ? 'active' : ''}`}
                  onClick={() => toggleService(index)}
                >
                  <h3 className="service-title">
                    {service.title} <span className="italic-serif-regular">{service.italic}</span>
                  </h3>
                  <div className={`service-icon-arrow ${isOpen ? 'rotate' : ''}`}>
                    <ChevronDown size={22} />
                  </div>
                </div>

                {/* Expandable Content (FAQ/Detail Style with Text & Image) */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      className="service-dropdown-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="service-dropdown-grid">
                        <div className="service-dropdown-text">
                          <p className="service-desc">{service.description}</p>
                          <ul className="service-points-list">
                            {service.points.map((pt, i) => (
                              <li key={i}>• {pt}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="service-dropdown-image">
                          <img src={service.image} alt={service.title} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}