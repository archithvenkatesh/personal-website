'use client'

import { motion } from 'framer-motion'
import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      company: 'Agilysys',
      position: 'Software Engineer Intern',
      duration: 'May 2025 – August 2025',
      location: 'Alpharetta, GA',
      description: [
        'Developed a real-time membership analytics dashboard with KPIs and charts for 50k+ loyalty members, replacing static PDF reports and giving hospitality client managers visibility into trends and engagement.',
        'Designed REST API layer in .NET Core with SQL Server, standardizing auth/pagination across 30 endpoints.',
        'Unblocked membership and loyalty card printing in outbound-only client networks by building a secure server-to-client print relay using web APIs and SignalR, avoiding inbound firewall changes.'
      ],
      technologies: ['C#', '.NET Core', 'SQL Server', 'SignalR', 'REST APIs', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      company: 'CREATE Labs at Georgia Institute of Technology',
      position: 'Software Engineer Research Assistant',
      duration: 'August 2024 – December 2024',
      location: 'Atlanta, GA',
      description: [
        'Improved a diagnostic imaging model for X-ray and MRI data to 85% accuracy by adding transfer learning and targeted augmentations including Mixup, CutMix, and stochastic depth in PyTorch and TensorFlow.',
        'Built automated preprocessing pipelines using Python, TensorFlow, and OpenCV for image normalization and denoising, reducing manual processing time by 80% enabling efficient analysis of large datasets.',
        'Standardized experiment logs and model reports lab-wide, enabling reproducible runs and faster reviews.'
      ],
      technologies: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'Machine Learning', 'Computer Vision'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      company: 'ElysianLoop',
      position: 'Software Engineer Intern',
      duration: 'June 2024 – August 2024',
      location: 'Atlanta, GA',
      description: [
        'Cut homepage load time by 46% by building a responsive homepage using JavaScript and Bootstrap with a dynamic traffic dashboard and targeted performance optimizations, boosting engagement.',
        'Integrated Google Analytics API via OAuth and engineered PHP/SQL backend for automated lead capture.',
        'Implemented Chart.js visualizations with CSRF token protection and enhanced security measures, integrated real-time data streaming and automated reporting pipelines, increasing conversion rates by 35%.'
      ],
      technologies: ['JavaScript', 'PHP', 'SQL', 'Bootstrap', 'Chart.js', 'Google Analytics API'],
      color: 'from-green-500 to-teal-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Work <span className="text-gradient">Experience</span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"
          />
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-3xl mx-auto"
          >
            Building innovative solutions and gaining hands-on experience in software engineering, AI/ML, and full-stack development
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block" />
              
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hidden lg:block" />

              <div className="lg:ml-20">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-colors">
                        {exp.position}
                      </h3>
                      <h4 className="text-xl text-blue-400 font-semibold mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex flex-col lg:items-end space-y-2">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <FaCalendarAlt />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <FaMapMarkerAlt />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <ul className="space-y-3">
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-gray-300 leading-relaxed flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-white font-semibold mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover={{ scale: 1.1 }}
                          className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${exp.color} text-white`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <a
              href="https://drive.google.com/file/d/1BH0Vv6n6EuCeGZ5b_Qun0ifYPvhNMqgy/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-2"
            >
              <FaExternalLinkAlt className="group-hover:animate-pulse" />
              <span>View Full Resume</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
