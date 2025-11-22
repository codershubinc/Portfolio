'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/types/project'

interface ProjectsSectionProps {
    projects?: Project[];
}

function ProjectsSection({ projects = [] }: ProjectsSectionProps) {
    return (
        <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
                        Here are some of my top projects and open-source contributions.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-sky-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-sky-500/10"
                        >
                            {/* Project Image/Screenshot */}
                            <div className="relative h-40 sm:h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                                {project.iframeUrl ? (
                                    <div className="relative w-full h-full">
                                        <div className="w-full h-full overflow-hidden">
                                            <iframe
                                                src={project.iframeUrl}
                                                className="w-[200%] h-[200%] border-0 scale-50 origin-top-left pointer-events-none"
                                                title={`Preview of ${project.title}`}
                                                loading="lazy"
                                            />
                                        </div>
                                        {/* Overlay to prevent interaction */}
                                        <div className="absolute inset-0 bg-transparent cursor-pointer"
                                            onClick={() => window.open(project.liveUrl || project.githubUrl, '_blank')} />
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            <div className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                View Project
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        <div className="text-slate-500 text-sm text-center">
                                            <div className="w-12 h-12 mx-auto mb-2 bg-sky-500/20 rounded-lg flex items-center justify-center">
                                                <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                            </div>
                                            VS Code Extension
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Project Content */}
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 mb-4 leading-relaxed text-sm sm:text-base">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 sm:px-3 py-1 bg-sky-500/10 text-sky-400 text-xs sm:text-sm rounded-full border border-sky-500/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Links */}
                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 hover:text-white transition-all duration-300 text-sm"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>

                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-all duration-300 text-sm"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Live Demo
                                        </a>
                                    )}

                                    {project.marketplaceUrl && (
                                        <a
                                            href={project.marketplaceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-all duration-300 text-sm"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                            </svg>
                                            Marketplace
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection