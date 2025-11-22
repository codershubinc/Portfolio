'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SocialLinks from '@/components/shared/SocialLinks'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <div className="text-slate-400 text-center md:text-left text-sm sm:text-base">
                        <p>© {currentYear} Swapnil Ingle. Built with passion and Next.js.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <a
                            href="https://codershubinc.tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-400 hover:text-sky-300 transition-colors duration-300 font-medium text-sm sm:text-base"
                        >
                            CodersHub Inc
                        </a>
                        <div className="flex gap-3 sm:gap-4">
                            <SocialLinks variant="footer" iconSize="sm" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}
