'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import SocialLinks from '@/components/shared/SocialLinks'
import { siteConfig } from '@/data/site'

interface HeroSectionProps {
    githubProfile?: any;
    githubStreak?: any;
}

function HeroSection({ githubProfile, githubStreak }: HeroSectionProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20"
        >
            <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-8 w-full">
                {/* Avatar removed for minimalist look */}

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                >
                    <span className="text-gradient">{githubProfile?.name || "Swapnil Ingle"}</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl sm:text-2xl md:text-3xl text-sky-400 font-semibold min-h-[1.5em] mb-6 sm:mb-8 flex items-center justify-center"
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
                        href={siteConfig.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-500 hover:text-sky-400 font-semibold transition-colors duration-300  decoration-sky-500/30 hover:decoration-sky-400"
                    >
                        {siteConfig.name}
                    </a>.
                    {githubProfile?.bio && (
                        <span className="block mt-4 text-slate-400 italic">
                            &quot;{githubProfile.bio}&quot;
                        </span>
                    )}
                    {githubProfile?.location && (
                        <span className="block mt-2 text-sm text-slate-500">
                            📍 {githubProfile.location}
                        </span>
                    )}
                </motion.p>

                {/* GitHub Stats */}
                {githubProfile && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8"
                    >
                        <div className="bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:border-sky-500/50 transition-colors">
                            <span className="text-slate-400 text-sm">Public Repos</span>
                            <span className="text-white font-bold">{githubProfile.public_repos}</span>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:border-sky-500/50 transition-colors">
                            <span className="text-slate-400 text-sm">Followers</span>
                            <span className="text-white font-bold">{githubProfile.followers}</span>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:border-sky-500/50 transition-colors">
                            <span className="text-slate-400 text-sm">Following</span>
                            <span className="text-white font-bold">{githubProfile.following}</span>
                        </div>
                    </motion.div>
                )}

                {/* GitHub Streak Stats */}
                {githubStreak && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.75 }}
                        className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8"
                    >
                        <div className="bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:border-sky-500/50 transition-colors">
                            <div className="flex flex-col">
                                <span className="text-slate-400 text-sm">Total Contributions</span>
                                <span className="text-slate-500 text-xs">from {githubStreak.firstContribution}</span>
                            </div>
                            <span className="text-white font-bold">{githubStreak.totalContributions}</span>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:border-sky-500/50 transition-colors">
                            <span className="text-slate-400 text-sm">Current Streak</span>
                            <span className="text-sky-500 font-bold">{githubStreak.currentStreak.length} days</span>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:border-sky-500/50 transition-colors">
                            <span className="text-slate-400 text-sm">Longest Streak</span>
                            <span className="text-white font-bold">{githubStreak.longestStreak.length} days</span>
                        </div>
                    </motion.div>
                )}


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
