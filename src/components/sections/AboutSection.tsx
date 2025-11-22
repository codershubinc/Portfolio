'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { siteConfig } from '@/data/site'

interface AboutSectionProps {
    githubActivity?: any;
    githubStreak?: any;
}

function AboutSection({ githubActivity, githubStreak }: AboutSectionProps) {
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
                        className="flex flex-col items-center lg:items-start order-2 lg:order-1 gap-8"
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

                        {/* Streak Stats */}
                        {githubStreak && (
                            <div className="w-full grid grid-cols-3 gap-3 sm:gap-4">
                                <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700 text-center hover:border-sky-500/30 transition-colors">
                                    <div className="text-xl sm:text-2xl font-bold text-white">{githubStreak.totalContributions}</div>
                                    <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mt-1">Total</div>
                                </div>
                                <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700 text-center hover:border-sky-500/30 transition-colors">
                                    <div className="text-xl sm:text-2xl font-bold text-sky-500">{githubStreak.currentStreak.length}</div>
                                    <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mt-1">Current Streak</div>
                                </div>
                                <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700 text-center hover:border-sky-500/30 transition-colors">
                                    <div className="text-xl sm:text-2xl font-bold text-white">{githubStreak.longestStreak.length}</div>
                                    <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mt-1">Longest Streak</div>
                                </div>
                            </div>
                        )}

                        {/* Contribution Graph */}
                        {githubActivity && (
                            <div className="w-full bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-white font-semibold text-sm">Contribution Activity</h3>
                                    <span className="text-sky-400 text-xs font-mono">Last 5 Months</span>
                                </div>
                                <div className="w-full overflow-x-auto pb-2">
                                    <div className="min-w-[300px] flex items-center justify-center">
                                        <div className="grid grid-rows-7 grid-flow-col gap-[2px]">
                                            {githubActivity.contributions.slice(-150).map((day: any, i: number) => {
                                                let bgColor = "#1e293b"; // slate-800
                                                if (day.contributionCount > 0) bgColor = "#0ea5e9"; // sky-500
                                                if (day.contributionCount > 2) bgColor = "#38bdf8"; // sky-400
                                                if (day.contributionCount > 4) bgColor = "#7dd3fc"; // sky-300

                                                return (
                                                    <div
                                                        key={i}
                                                        className="w-2.5 h-2.5 rounded-[1px]"
                                                        style={{ backgroundColor: bgColor }}
                                                        title={`${day.contributionCount} contributions on ${day.date}`}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
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
                                    href={siteConfig.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sky-500 hover:text-sky-400 font-semibold transition-colors duration-300 underline decoration-sky-500/30 hover:decoration-sky-400"
                                >
                                    {siteConfig.name}
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