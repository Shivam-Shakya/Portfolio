import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, ExternalLink, Send, CheckCircle2 } from 'lucide-react'
import '../styles/Contact.css'

function Reveal({ children, className = '', delay = 0 }) {
  const smoothReveal = {
    hidden: { opacity: 0, y: 50, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", damping: 24, stiffness: 100, mass: 0.8 } },
  }
  return (
    <motion.div className={className} variants={smoothReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={{ delay }}>
      {children}
    </motion.div>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleContact = async (event) => {
    event.preventDefault()
    setLoading(true)

    const formElement = event.currentTarget;
    const formData = new FormData(formElement)
    formData.append("access_key", "e42de6f6-7784-4fe3-8b27-f69f765ce3a1"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      let data = {};
      try {
        data = await response.json();
      } catch (jsonErr) {
        data = { success: true };
      }

      if (response.ok || data.success) {
        setSent(true)
        setLoading(false)
        formElement.reset() 

        setTimeout(() => {
          try {
            const homeElement = document.getElementById('home') || document.querySelector('.hero') || document.querySelector('section');
            if (homeElement) {
              homeElement.scrollIntoView({ behavior: 'smooth' });
            }
          } catch (err) {
            console.log("Scroll error:", err);
          }
        }, 100);

      } else {
        setLoading(false)
        alert(data.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Submission error:", error);
      setLoading(false)
      alert("Network error. Please try again.")
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-glow" />
        <div className="section-wrap contact-wrap">
          <Reveal className="contact-intro">
            <p className="eyebrow">✦ HAVE A PROJECT IN MIND?</p>
            <h2>Let's make something <span className="italic-serif">great.</span></h2>
          <p>Have an opportunity, a project idea, or just want to connect? My inbox is open.</p>
          <a className="contact-email" href="mailto:shivamshakya4270@gmail.com">shivamshakya4270@gmail.com <ArrowUpRight size={17} /></a>
          <div className="contact-socials"><a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ExternalLink size={13} /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ExternalLink size={13} /></a></div>
        </Reveal>
        <Reveal className="contact-form-wrap" delay={.12}>
          <form className="contact-form" onSubmit={handleContact}>
            <div className="form-heading"><Send size={17} /><span>SEND A MESSAGE</span></div>
            <label>Your name<input name="name" type="text" placeholder="What should I call you?" required /></label>
            <label>Your email<input name="email" type="email" placeholder="you@example.com" required /></label>
            <label>What's on your mind?<textarea name="message" rows="4" placeholder="Tell me a little about it..." required /></label>
            
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="button button-primary form-submit" type="submit" disabled={loading}>
              {loading ? "Sending..." : <>Send Message <ArrowUpRight size={16} /></>}
            </motion.button>
            
            {sent && <p className="form-feedback"><CheckCircle2 size={15} /> Message sent successfully! Redirecting...</p>}
          </form>
        </Reveal>
      </div>
    </div>
    </section>
  )
}