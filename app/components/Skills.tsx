'use client'

import { motion } from 'framer-motion'
import { 
  SiPython, SiJavascript, SiTypescript, SiCsharp, SiCplusplus, SiHtml5, SiCss3, SiReact, 
  SiNodedotjs, SiAngular, SiBootstrap, SiTensorflow, SiPytorch, SiOpencv, SiNumpy, SiPandas, 
  SiScikitlearn, SiGit, SiDocker, SiGooglecloud, SiVisualstudio, 
  SiIntellijidea, SiPycharm, SiMicrosoftoffice, SiPlotly, SiOpenai, SiFlask, SiChartdotjs, 
  SiSqlite, SiMysql, SiPostgresql, SiLinux
} from 'react-icons/si'
import { FaChess, FaCode, FaBrain, FaDatabase, FaCloud, FaTools } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: FaCode,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', icon: SiPython, level: 95 },
        { name: 'JavaScript', icon: SiJavascript, level: 90 },
        { name: 'TypeScript', icon: SiTypescript, level: 85 },
        { name: 'Java', icon: SiCsharp, level: 85 },
        { name: 'C#', icon: SiCsharp, level: 80 },
        { name: 'C/C++', icon: SiCplusplus, level: 75 },
        { name: 'HTML/CSS', icon: SiHtml5, level: 90 },
        { name: 'SQL', icon: SiSqlite, level: 85 },
        { name: 'R', icon: SiPandas, level: 70 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: FaBrain,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'React', icon: SiReact, level: 90 },
        { name: 'ASP.NET Core', icon: SiMicrosoftoffice, level: 85 },
        { name: 'Entity Framework', icon: SiMicrosoftoffice, level: 80 },
        { name: 'Angular', icon: SiAngular, level: 75 },
        { name: 'Flask', icon: SiFlask, level: 80 },
        { name: 'OpenCV', icon: SiOpencv, level: 85 },
        { name: 'PyTorch', icon: SiPytorch, level: 90 },
        { name: 'TensorFlow', icon: SiTensorflow, level: 85 },
        { name: 'Bootstrap', icon: SiBootstrap, level: 85 }
      ]
    },
    {
      title: 'AI/ML & Data Science',
      icon: FaBrain,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'NumPy', icon: SiNumpy, level: 90 },
        { name: 'Pandas', icon: SiPandas, level: 90 },
        { name: 'scikit-learn', icon: SiScikitlearn, level: 85 },
        { name: 'OpenCV', icon: SiOpencv, level: 85 },
        { name: 'PyTorch', icon: SiPytorch, level: 90 },
        { name: 'TensorFlow', icon: SiTensorflow, level: 85 },
        { name: 'Matplotlib', icon: SiPython, level: 80 },
        { name: 'Plotly', icon: SiPlotly, level: 75 },
        { name: 'OpenAI API', icon: SiOpenai, level: 80 }
      ]
    },
    {
      title: 'Developer Tools',
      icon: FaTools,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', icon: SiGit, level: 90 },
        { name: 'Docker', icon: SiDocker, level: 75 },
        { name: 'Unix/Linux', icon: SiLinux, level: 80 },
        { name: 'Google Cloud', icon: SiGooglecloud, level: 75 },
        { name: 'Visual Studio', icon: SiVisualstudio, level: 85 },
        { name: 'VS Code', icon: SiVisualstudio, level: 95 },
        { name: 'IntelliJ', icon: SiIntellijidea, level: 80 },
        { name: 'PyCharm', icon: SiPycharm, level: 85 },
        { name: 'Microsoft Office', icon: SiMicrosoftoffice, level: 90 }
      ]
    },
    {
      title: 'Technologies & APIs',
      icon: FaCloud,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'REST APIs', icon: SiReact, level: 90 },
        { name: 'SignalR', icon: SiReact, level: 80 },
        { name: 'Chart.js', icon: SiChartdotjs, level: 85 },
        { name: 'MySQL', icon: SiMysql, level: 80 },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 75 },
        { name: 'Node.js', icon: SiNodedotjs, level: 80 },
        { name: 'Requests', icon: SiPython, level: 85 },
        { name: 'OAuth', icon: SiGooglecloud, level: 75 }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
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
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"
          />
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-3xl mx-auto"
          >
            A comprehensive toolkit spanning programming languages, frameworks, AI/ML libraries, and development tools
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <category.icon className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="group"
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center group-hover:bg-white/10">
                      {/* Skill Icon */}
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="text-4xl text-blue-400 mb-4 flex justify-center"
                      >
                        <skill.icon />
                      </motion.div>
                      
                      {/* Skill Name */}
                      <h4 className="text-white font-semibold mb-3 group-hover:text-gradient transition-colors">
                        {skill.name}
                      </h4>
                      
                      {/* Skill Level Bar */}
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                      
                      {/* Skill Level Percentage */}
                      <p className="text-gray-400 text-sm">{skill.level}%</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Machine Learning', 'Computer Vision', 'Deep Learning', 'Data Analysis',
              'Web Development', 'Mobile Development', 'Cloud Computing', 'DevOps',
              'Agile Methodologies', 'Version Control', 'API Development', 'Database Design',
              'UI/UX Design', 'Performance Optimization', 'Security Best Practices', 'Testing'
            ].map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-medium transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
