import React from 'react'
import NavBar from '@/components/custom/navBar'
import Image from 'next/image'

export const metadata = {
    title: 'About - Portfolio',
    description: 'Learn more about me, my skills, and my journey as a developer.',
}

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
            <NavBar />

            <main className="container mx-auto px-6 py-12">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <div className="relative w-40 h-40 mx-auto mb-8">
                        <Image
                            src="/devPic.png"
                            alt="Profile Picture"
                            width={160}
                            height={160}
                            className="rounded-full border-4 border-yellow-400 object-cover"
                        />
                    </div>
                    <h1 className="text-5xl font-bold text-white mb-4">About Me</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Passionate developer creating innovative solutions and beautiful user experiences
                    </p>
                </section>

                {/* About Content */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Personal Story */}
                    <section className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
                        <h2 className="text-3xl font-semibold mb-6 text-yellow-400">My Story</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Welcome to my digital space! I'm a passionate developer who loves turning ideas into reality through code.
                            My journey in programming started with curiosity and has evolved into a deep passion for creating
                            meaningful digital experiences.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            I believe in writing clean, efficient code and staying up-to-date with the latest technologies.
                            When I'm not coding, you can find me exploring new frameworks, contributing to open-source projects,
                            or sharing knowledge with the developer community.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            I'm always excited to take on new challenges and collaborate on interesting projects that make a difference.
                        </p>
                    </section>

                    {/* Skills & Expertise */}
                    <section className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
                        <h2 className="text-3xl font-semibold mb-6 text-yellow-400">Skills & Expertise</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-medium mb-3">Frontend Development</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'].map((skill) => (
                                        <span key={skill} className="bg-blue-600/30 px-3 py-1 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium mb-3">Backend Development</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Node.js', 'Express.js', 'Python', 'MongoDB', 'PostgreSQL', 'REST APIs'].map((skill) => (
                                        <span key={skill} className="bg-green-600/30 px-3 py-1 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium mb-3">Tools & Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Git', 'Docker', 'VS Code', 'Figma', 'Linux', 'AWS'].map((skill) => (
                                        <span key={skill} className="bg-purple-600/30 px-3 py-1 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Experience Timeline */}
                <section className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-yellow-400 text-center">My Journey</h2>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400"></div>

                        {/* Timeline items */}
                        <div className="space-y-12">
                            <div className="flex items-center relative">
                                <div className="flex-1 pr-8 text-right">
                                    <h3 className="text-xl font-semibold">Started Coding Journey</h3>
                                    <p className="text-gray-300">Began learning programming fundamentals</p>
                                    <span className="text-yellow-400 text-sm">2020</span>
                                </div>
                                <div className="w-4 h-4 bg-yellow-400 rounded-full relative z-10"></div>
                                <div className="flex-1 pl-8"></div>
                            </div>

                            <div className="flex items-center relative">
                                <div className="flex-1 pr-8"></div>
                                <div className="w-4 h-4 bg-yellow-400 rounded-full relative z-10"></div>
                                <div className="flex-1 pl-8">
                                    <h3 className="text-xl font-semibold">First Full-Stack Project</h3>
                                    <p className="text-gray-300">Built my first complete web application</p>
                                    <span className="text-yellow-400 text-sm">2022</span>
                                </div>
                            </div>

                            <div className="flex items-center relative">
                                <div className="flex-1 pr-8 text-right">
                                    <h3 className="text-xl font-semibold">Professional Development</h3>
                                    <p className="text-gray-300">Started freelancing and building client projects</p>
                                    <span className="text-yellow-400 text-sm">2023</span>
                                </div>
                                <div className="w-4 h-4 bg-yellow-400 rounded-full relative z-10"></div>
                                <div className="flex-1 pl-8"></div>
                            </div>

                            <div className="flex items-center relative">
                                <div className="flex-1 pr-8"></div>
                                <div className="w-4 h-4 bg-yellow-400 rounded-full relative z-10"></div>
                                <div className="flex-1 pl-8">
                                    <h3 className="text-xl font-semibold">Current Focus</h3>
                                    <p className="text-gray-300">Building innovative projects and expanding expertise</p>
                                    <span className="text-yellow-400 text-sm">2025</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8">
                    <h2 className="text-3xl font-semibold text-white mb-4">Let's Work Together</h2>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        I'm always interested in new opportunities and exciting projects.
                        Whether you have a project in mind or just want to connect, I'd love to hear from you!
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="#"
                            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400/90 transition-colors"
                        >
                            Get in Touch
                        </a>
                        <a
                            href="#"
                            className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-colors"
                        >
                            View Projects
                        </a>
                    </div>
                </section>
            </main>
        </div>
    )
}