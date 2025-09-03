'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface TimelineEvent {
    date: string
    title: string
    description: string
}

const timelineEvents: TimelineEvent[] = [
    {
        date: "Sept 2021",
        title: "The Spark",
        description: "Began exploring the developer ecosystem, getting familiar with essential tools like Git, VS Code, and Android Studio."
    },
    {
        date: "2022 - Mid 2023",
        title: "Academic Focus",
        description: "Paused active development to concentrate on academic goals, including 12th board exams and JEE preparation."
    },
    {
        date: "Late 2023",
        title: "Diving into Web Dev",
        description: "Rekindled my passion for code with HTML, CSS, and JavaScript. Realizing tutorials weren't enough, I shifted to learning directly from official documentation to master the fundamentals."
    },
    {
        date: "Early 2024",
        title: "From Learner to Builder",
        description: "Gained a strong command of JavaScript and quickly learned React (via Vite), immediately applying my skills to build a full-stack blog with Appwrite as the backend."
    },
    {
        date: "Mid 2024",
        title: "Mastering the Backend",
        description: "Ventured into backend development with Node.js and Express. Developed and published a popular open-source API that gained over 10 stars on GitHub."
    },
    {
        date: "Late 2024",
        title: "Embracing TypeScript",
        description: "Leveled up by rebuilding my API project with TypeScript and NestJS, focusing on creating scalable, type-safe applications while simultaneously starting a new music web project with Next.js & TS."
    },
    {
        date: "Present",
        title: "...and the journey continues",
        description: "Currently expanding my expertise while building CodersHub Inc and creating tools that make developers' lives easier."
    }
]

function JourneySection() {
    return (
        <section id="journey" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">My Journey</h2>
                    <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
                        From curious beginner to passionate developer - here's how my coding journey unfolded.
                    </p>
                </motion.div>

                {/* Mobile Timeline */}
                <div className="block lg:hidden space-y-8">
                    {timelineEvents.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8"
                        >
                            {/* Mobile Timeline Line */}
                            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-sky-500"></div>
                            <div className="absolute left-0 top-6 w-4 h-4 bg-sky-500 rounded-full border-2 border-slate-900"></div>

                            <div className="bg-slate-800 p-4 sm:p-6 rounded-lg border border-slate-700 hover:border-sky-500/30 transition-colors duration-300">
                                <div className="text-sky-400 font-medium text-sm mb-2">
                                    {event.date}
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                                    {event.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                                    {event.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Desktop Timeline */}
                <div className="hidden lg:block relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sky-500 via-sky-400 to-sky-300"></div>

                    {/* Timeline Events */}
                    <div className="space-y-12">
                        {timelineEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-sky-500 rounded-full border-4 border-slate-900 z-10"></div>

                                {/* Content */}
                                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                                        viewport={{ once: true }}
                                        className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-sky-500/30 transition-colors duration-300"
                                    >
                                        <div className="text-sky-400 font-medium text-sm mb-2">
                                            {event.date}
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            {event.title}
                                        </h3>
                                        <p className="text-slate-400 leading-relaxed">
                                            {event.description}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 sm:mt-16"
                >
                    <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-lg p-6 sm:p-8 border border-sky-500/20">
                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                            What's Next?
                        </h3>
                        <p className="text-slate-400 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
                            The journey continues as I explore new technologies, build innovative projects,
                            and contribute to the developer community through CodersHub Inc.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors duration-300 text-sm sm:text-base"
                        >
                            Let's Build Something Together
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default JourneySection