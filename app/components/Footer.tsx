'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaChess, FaCode, FaHeart } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiFramer } from 'react-icons/si'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/archithvenkatesh',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/archithvenkatesh',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:avenkatesh68@gatech.edu',
      label: 'Email',
      color: 'hover:text-red-400'
    }
  ]

  const quickLinks = [
    { name: 'About', href: 'about' },
    { name: 'Experience', href: 'experience' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">AV</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Archith Venkatesh</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Computer Science & Mathematics student at Georgia Tech. Passionate about building 
              intelligent systems and solving complex problems through innovative technology.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className={`w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.href}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center space-x-2">
                <FaEnvelope size={14} />
                <span>avenkatesh68@gatech.edu</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="w-3.5 h-3.5 bg-blue-400 rounded-full"></span>
                <span>Atlanta, GA</span>
              </p>
              <p className="flex items-center space-x-2">
                <FaChess size={14} />
                <span>Top 15 Chess Player in GA</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} Archith Venkatesh. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-red-500" />
            </motion.div>
            <span>using</span>
            <div className="flex items-center space-x-1">
              <SiNextdotjs className="text-white" />
              <SiTailwindcss className="text-cyan-400" />
              <SiFramer className="text-pink-400" />
            </div>
          </div>
          
          <div className="text-gray-400 text-sm">
            <p>Georgia Institute of Technology • Class of 2027</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
