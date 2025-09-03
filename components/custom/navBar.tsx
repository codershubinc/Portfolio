'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const menuItems = [
        { href: '/', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
        { href: '/blog', label: 'Blog' },
    ]

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <div className="bg-sky-500 p-2 rounded-full">
                                <span className="text-white font-bold text-sm">S</span>
                            </div>
                            <span className="text-white font-bold text-xl">Portfolio</span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-6">
                            <ul className="flex items-center gap-8">
                                {menuItems.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="text-slate-300 hover:text-sky-400 transition-colors duration-300 font-medium"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Avatar - only visible on md+ screens */}
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-sky-500/30 hover:border-sky-500 transition-colors duration-300">
                                <img
                                    src="/avatar.jpeg"
                                    alt="Swapnil Ingle"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Mobile Hamburger Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden relative w-6 h-6 flex flex-col justify-center items-center gap-1 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="block w-6 h-0.5 bg-white origin-center"
                            />
                            <motion.span
                                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="block w-6 h-0.5 bg-white"
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="block w-6 h-0.5 bg-white origin-center"
                            />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden bg-slate-800 border-t border-slate-700"
                        >
                            <div className="px-4 py-2 space-y-1">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block px-3 py-2 text-slate-300 hover:text-sky-400 hover:bg-slate-700 rounded-md transition-all duration-300 font-medium"
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Spacer to prevent content from hiding behind fixed navbar */}
            <div className="h-16"></div>
        </>
    )
}

export default NavBar