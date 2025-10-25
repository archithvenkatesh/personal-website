'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaChess, FaCode, FaBrain, FaRocket } from 'react-icons/fa'
import { SiPython, SiJavascript, SiReact, SiNodedotjs, SiTensorflow, SiPytorch, SiJava, SiCsharp, SiGooglecloud } from 'react-icons/si'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import { Engine } from 'tsparticles-engine'
import Typed from 'react-typed'
import { useInView } from 'react-intersection-observer'
import { Link, Element, scroller } from 'react-scroll'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  useEffect(() => {
    setMounted(true)
  }, [])

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine)
  }

  const particlesLoaded = async (container: any) => {
    console.log(container)
  }

  if (!mounted) {
    return null
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#3b82f6",
            },
            links: {
              color: "#3b82f6",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="fixed inset-0 z-0"
      />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Element name="home">
        <Hero />
      </Element>

      {/* About Section */}
      <Element name="about">
        <About />
      </Element>

      {/* Experience Section */}
      <Element name="experience">
        <Experience />
      </Element>

      {/* Skills Section */}
      <Element name="skills">
        <Skills />
      </Element>

      {/* Projects Section */}
      <Element name="projects">
        <Projects />
      </Element>

      {/* Contact Section */}
      <Element name="contact">
        <Contact />
      </Element>

      {/* Footer */}
      <Footer />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
        style={{ scaleX: scrollYProgress }}
        transformOrigin="0%"
      />
    </main>
  )
}
