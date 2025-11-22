'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface SkillCategory {
    title: string
    skills: string[]
}

const skillCategories: SkillCategory[] = [
    {
        title: "Languages",
        skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL"]
    },
    {
        title: "Frameworks & Libraries",
        skills: ["React", "Next.js", "Node.js", "Express.js", "NestJS", "Tailwind CSS"]
    },
    {
        title: "Tools & Platforms",
        skills: ["Git", "VS Code", "Docker", "Vercel", "Appwrite", "Linux"]
    }
]

function SkillsSection() {
    return (
        <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
                    <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
                        The tools and technologies I use to bring ideas to life and create exceptional digital experiences.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 rounded-lg p-4 sm:p-6 border border-slate-700 hover:border-sky-500/30 transition-colors duration-300"
                        >
                            <h3 className="text-lg sm:text-xl font-semibold text-sky-400 mb-4 sm:mb-6 text-center">
                                {category.title}
                            </h3>

                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: categoryIndex * 0.2 + skillIndex * 0.1
                                        }}
                                        viewport={{ once: true }}
                                        className="bg-slate-700/50 rounded-lg p-2 sm:p-3 text-center border border-slate-600 hover:border-sky-500/50 hover:bg-slate-700 transition-all duration-300 group"
                                    >
                                        <div className="text-slate-300 font-medium text-xs sm:text-sm group-hover:text-sky-400 transition-colors">
                                            {skill}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-8 sm:mt-12 text-center"
                >
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Always Learning</h3>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                        {["AWS", "GraphQL", "React Native", "Vue.js", "PostgreSQL", "MongoDB"].map((skill) => (
                            <span
                                key={skill}
                                className="px-3 sm:px-4 py-1 sm:py-2 bg-sky-500/10 text-sky-400 rounded-full border border-sky-500/20 text-xs sm:text-sm hover:bg-sky-500/20 transition-colors duration-300"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                    <p className="text-slate-400 mt-3 sm:mt-4 text-xs sm:text-sm">
                        Technologies I'm currently exploring and adding to my toolkit
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default SkillsSection