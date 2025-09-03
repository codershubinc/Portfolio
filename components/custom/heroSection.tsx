'use client'

import React from 'react'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import SocialLinks from '@/components/shared/SocialLinks'

function HeroSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20"
        >
            <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-8 w-full">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                >
                    Swapnil Ingle
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl sm:text-2xl md:text-3xl text-sky-500 font-semibold min-h-[1.5em] mb-6 sm:mb-8 flex items-center justify-center"
                >
                    <TypeAnimation
                        sequence={[
                            'Software Developer',
                            2000,
                            'Open-Source Creator',
                            2000,
                            'Lifelong Learner',
                            1000,
                            "Just a Developer",
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        deletionSpeed={75}
                        cursor={true}
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 px-4 sm:px-0"
                >
                    I build practical, open-source tools that solve real-world problems for developers.
                    Creator of <a
                        href="https://codershubinc.tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-500 hover:text-sky-400 font-semibold transition-colors duration-300  decoration-sky-500/30 hover:decoration-sky-400"
                    >
                        CodersHub Inc
                    </a>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0"
                >
                    <Link
                        href="#projects"
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25 hover:-translate-y-1 min-w-[180px] text-center"
                    >
                        View My Work
                    </Link>
                    <Link
                        href="#contact"
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-400 text-slate-300 font-semibold rounded-lg hover:border-sky-500 hover:text-sky-500 transition-all duration-300 min-w-[180px] text-center"
                    >
                        Get In Touch
                    </Link>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                >
                    <SocialLinks variant="default" iconSize="md" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 animate-bounce hidden sm:block"
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-sm">Scroll down</span>
                        <div className="w-[2px] h-6 sm:h-8 bg-gradient-to-b from-sky-500 to-transparent"></div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default HeroSection
