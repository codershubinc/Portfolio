'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function AboutSection() {
    return (
        <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center"
                >
                    {/* Left Column - Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex justify-center lg:justify-start order-2 lg:order-1"
                    >
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-sky-500/30">
                            <Image
                                src="/avatar.jpeg"
                                alt="Swapnil Ingle"
                                width={320}
                                height={320}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-sky-500/20 to-transparent"></div>
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-6 order-1 lg:order-2 text-center lg:text-left"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">About Me</h2>

                        <div className="space-y-4 text-slate-400 leading-relaxed text-base sm:text-lg">
                            <p>
                                My journey in technology began with curiosity and has evolved into a deep passion for creating
                                meaningful digital experiences. I believe in the power of code to solve real-world problems
                                and make developers' lives easier.
                            </p>

                            <p>
                                What drives me is the intersection of innovation and practicality. I don't just write code;
                                I craft solutions that matter. Whether it's building developer tools, contributing to open-source
                                projects, or exploring new technologies, I'm always focused on creating value.
                            </p>

                            <p>
                                My passion for building developer tools led me to create{' '}
                                <a
                                    href="https://codershubinc.tech"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sky-500 hover:text-sky-400 font-semibold transition-colors duration-300 underline decoration-sky-500/30 hover:decoration-sky-400"
                                >
                                    CodersHub Inc
                                </a>
                                , my brand for all my open-source projects. It represents my commitment to the developer
                                community and my belief in the power of shared knowledge.
                            </p>
                        </div>

                        {/* Philosophy */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="mt-6 sm:mt-8 p-4 sm:p-6 bg-slate-800/50 rounded-lg border border-slate-700"
                        >
                            <h3 className="text-sky-500 font-semibold mb-3 text-lg">My Philosophy</h3>
                            <p className="text-slate-400 italic text-sm sm:text-base">
                                "Continuous learning isn't just a career choice—it's a way of life. Every challenge is an
                                opportunity to grow, and every project is a chance to make a difference."
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutSection