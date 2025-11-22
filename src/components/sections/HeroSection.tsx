"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";
import { terminalData, type TerminalEndpoint, fetchGithubActivity, fetchGithubProfile } from "@/data/terminal";
import MatrixRain from "@/components/ui/MatrixRain";

const TABS = ['overview', 'stack', 'languages', 'projects', 'github', 'activity'] as const;
const AUTO_CYCLE_INTERVAL = 5000;

export default function HeroSection() {
    const [mounted, setMounted] = useState(false);
    const [activeEndpoint, setActiveEndpoint] = useState<TerminalEndpoint>('overview');
    const [apiData, setApiData] = useState(terminalData);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveEndpoint(current => {
                const currentIndex = TABS.indexOf(current as any);
                return TABS[(currentIndex + 1) % TABS.length];
            });
        }, AUTO_CYCLE_INTERVAL);

        return () => clearInterval(interval);
    }, [isPaused]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMounted(true);
        }, 0);

        const loadData = async () => {
            const [activityData, profileData] = await Promise.all([
                fetchGithubActivity(),
                fetchGithubProfile()
            ]);

            setApiData(prev => {
                const newData = { ...prev };

                if (activityData) {
                    newData.activity = {
                        ...prev.activity,
                        response: {
                            ...prev.activity.response,
                            data: {
                                contributions: activityData.contributions,
                                totalContributions: activityData.totalContributions
                            }
                        }
                    };
                }

                if (profileData) {
                    newData.github = {
                        ...prev.github,
                        response: {
                            ...prev.github.response,
                            data: {
                                login: profileData.login,
                                public_repos: profileData.public_repos,
                                followers: profileData.followers,
                                following: profileData.following,
                                created_at: profileData.created_at
                            }
                        }
                    };

                    newData.overview = {
                        ...prev.overview,
                        response: {
                            ...prev.overview.response,
                            data: {
                                ...prev.overview.response.data,
                                github_stats: {
                                    public_repos: profileData.public_repos,
                                    followers: profileData.followers,
                                    bio: profileData.bio || "",
                                    location: profileData.location || "",
                                    blog: profileData.blog || "",
                                    avatar_url: profileData.avatar_url
                                }
                            }
                        }
                    };
                }

                return newData;
            });
        };
        loadData();

        return () => clearTimeout(timer);
    }, []);

    // Helper to calculate streaks from contributions
    const getStreakStats = () => {
        if (!apiData.activity?.response.data.contributions) return { current: 0, longest: 0 };

        const contributions = apiData.activity.response.data.contributions;
        let current = 0;
        let longest = 0;
        let temp = 0;

        // Calculate streaks
        for (let i = 0; i < contributions.length; i++) {
            if (contributions[i].contributionCount > 0) {
                temp++;
                if (temp > longest) longest = temp;
            } else {
                temp = 0;
            }
        }

        // Calculate current streak (working backwards from end)
        for (let i = contributions.length - 1; i >= 0; i--) {
            if (contributions[i].contributionCount > 0) {
                current++;
            } else {
                break;
            }
        }

        return { current, longest };
    };

    if (!mounted) {
        return (
            <section className="relative min-h-screen flex items-center justify-center px-6 py-8 lg:px-8 overflow-hidden bg-[#09090b]">
                <div className="animate-pulse bg-gray-800 w-full max-w-5xl h-96 rounded-xl"></div>
            </section>
        );
    }

    return (
        <section
            data-theme="backend"
            className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden bg-[#09090b] font-mono selection:bg-[#3f3f46] selection:text-white"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <MatrixRain />
            <div className="w-full max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-start">
                    {/* Left Column: Terminal */}
                    <div className="group sticky lg:relative top-4 lg:top-auto z-20 lg:z-auto bg-[#0c0c0c]/90 backdrop-blur-md border border-[#3f3f46] rounded-xl overflow-hidden shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] flex flex-col h-auto lg:h-full min-h-0 lg:min-h-[500px] max-h-none lg:max-h-[85vh] transition-all duration-300 hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.05)] hover:border-[#52525b]">
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-[#18181b] border-b border-[#27272a]">
                            <div className="flex space-x-2 group-hover:opacity-100 transition-opacity">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] shadow-sm"></div>
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] shadow-sm"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] shadow-sm"></div>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-[#71717a] font-mono select-none">
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                visitor@portfolio:~/api
                                <span className={`ml-2 px-1.5 py-0.5 rounded text-[10px] border ${!isPaused ? 'text-green-500 border-green-500/30 bg-green-500/10' : 'text-yellow-500 border-yellow-500/30 bg-yellow-500/10'}`}>
                                    {!isPaused ? 'AUTO-PILOT' : 'PAUSED'}
                                </span>
                            </div>
                            <div className="w-14"></div> {/* Spacer for centering */}
                        </div>

                        {/* API Navigation Tabs */}
                        <div className="flex border-b border-[#27272a] bg-[#0c0c0c] overflow-x-auto no-scrollbar">
                            {TABS.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveEndpoint(tab)}
                                    className={`relative px-4 py-2 text-xs font-mono transition-colors border-r border-[#27272a] hover:bg-[#18181b] hover:text-[#e4e4e7] whitespace-nowrap shrink-0 flex items-center ${activeEndpoint === tab
                                        ? 'text-[#27c93f]'
                                        : 'text-[#71717a] bg-[#0c0c0c]'
                                        }`}
                                >
                                    {activeEndpoint === tab && (
                                        <>
                                            <motion.div
                                                layoutId="activeTabBg"
                                                className="absolute inset-0 bg-[#27c93f]/10"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                            />
                                            <motion.div
                                                layoutId="activeTabBorder"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#27c93f] overflow-hidden"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                            >
                                                {!isPaused && (
                                                    <motion.div
                                                        className="absolute inset-0 bg-white/50 origin-left"
                                                        initial={{ scaleX: 0 }}
                                                        animate={{ scaleX: 1 }}
                                                        transition={{ duration: AUTO_CYCLE_INTERVAL / 1000, ease: "linear" }}
                                                    />
                                                )}
                                            </motion.div>
                                        </>
                                    )}
                                    <span className="relative z-10 flex items-center">
                                        {activeEndpoint === tab && <span className="mr-1.5 animate-pulse">&gt;_</span>}
                                        {tab.toUpperCase()}
                                    </span>
                                </button>
                            ))}
                        </div>

                        <div className="hidden lg:block p-6 overflow-auto flex-1 bg-[#0c0c0c]/50">
                            <div className="flex items-center mb-4 text-[#e4e4e7]">
                                <span className="mr-2 text-[#27c93f]">➜</span>
                                <span className="mr-2 text-[#27c93f]">~</span>
                                <span
                                    className="typing-command"
                                    key={activeEndpoint}
                                    style={{ '--typing-width': `${(`curl -X GET ${apiData[activeEndpoint].endpoint}`).length}ch` } as React.CSSProperties}
                                >
                                    curl -X GET {apiData[activeEndpoint].endpoint}
                                </span>
                            </div>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeEndpoint}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <pre className="text-sm sm:text-base text-[#d4d4d8] font-mono whitespace-pre-wrap break-all sm:break-normal pl-4 border-l-2 border-[#27272a]">
                                        <code>
                                            {JSON.stringify(apiData[activeEndpoint].response, null, 2)}
                                        </code>
                                    </pre>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right Column: Visual Dashboard */}
                    <div className="flex flex-col gap-6 h-full">
                        <AnimatePresence mode="wait">
                            {activeEndpoint === 'overview' && (
                                <motion.div
                                    key="overview"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="space-y-6"
                                >
                                    {/* Main Info Card */}
                                    <div className="bg-[#0c0c0c]/90 backdrop-blur-md border border-[#3f3f46] p-6 rounded-xl shadow-lg hover:border-[#52525b] transition-colors">
                                        <div className="flex items-center justify-between mb-6 border-b border-[#27272a] pb-4">
                                            <h3 className="text-xl text-[#e4e4e7] font-bold flex items-center gap-2">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                                </svg>
                                                System Overview
                                            </h3>
                                            <span className="flex items-center text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                                                ONLINE
                                            </span>
                                        </div>

                                        <div className="space-y-6">
                                            <div>
                                                <div className="text-[#a1a1aa] text-xs uppercase tracking-wider mb-1">Developer</div>
                                                <div className="text-[#e4e4e7] text-3xl font-bold tracking-tight">{siteConfig.author.name}</div>
                                            </div>

                                            <div>
                                                <div className="text-[#a1a1aa] text-xs uppercase tracking-wider mb-1">Current Focus</div>
                                                <div className="text-[#e4e4e7] text-lg">Full Stack Development & Open Source</div>
                                            </div>

                                            <div>
                                                <div className="text-[#a1a1aa] text-xs uppercase tracking-wider mb-3">Active Stack</div>
                                                <div className="flex flex-wrap gap-2">
                                                    {["Next.js", "TypeScript", "TailwindCSS", "Node.js"].map(tech => (
                                                        <span key={tech} className="px-3 py-1.5 bg-[#27272a] text-[#e4e4e7] text-xs rounded border border-[#3f3f46] hover:border-[#e4e4e7] transition-colors cursor-default">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Secondary Info / Stats */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                        <div className="bg-[#0c0c0c]/90 backdrop-blur-md border border-[#3f3f46] p-4 sm:p-5 rounded-xl hover:border-[#e4e4e7] transition-colors group col-span-1 sm:col-span-1">
                                            <div className="text-[#71717a] text-xs uppercase tracking-wider mb-2 group-hover:text-[#a1a1aa]">About</div>
                                            <div className="flex items-start gap-3">
                                                {apiData.overview.response.data.github_stats?.avatar_url ? (
                                                    <Image
                                                        src={apiData.overview.response.data.github_stats.avatar_url}
                                                        alt="Avatar"
                                                        width={40}
                                                        height={40}
                                                        className="rounded-md border border-[#27272a] group-hover:border-[#e4e4e7] transition-colors"
                                                    />
                                                ) : (
                                                    <div className="w-10 h-10 bg-[#18181b] rounded-md flex items-center justify-center text-sm font-bold border border-[#27272a] group-hover:border-[#e4e4e7] transition-colors shrink-0">
                                                        {siteConfig.author.name.split(' ').map(n => n[0]).join('')}
                                                    </div>
                                                )}
                                                <div className="min-w-0">
                                                    <div className="text-[#e4e4e7] text-sm font-medium truncate">{siteConfig.author.name}</div>
                                                    <div className="text-[#71717a] text-xs truncate">{apiData.overview.response.data.github_stats?.location || "Earth"}</div>
                                                    {apiData.overview.response.data.github_stats?.bio && (
                                                        <div className="text-[#a1a1aa] text-[10px] mt-1 line-clamp-2 leading-tight">
                                                            {apiData.overview.response.data.github_stats.bio}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-[#0c0c0c]/90 backdrop-blur-md border border-[#3f3f46] p-4 sm:p-5 rounded-xl hover:border-[#e4e4e7] transition-colors group col-span-1 sm:col-span-1">
                                            <div className="text-[#71717a] text-xs uppercase tracking-wider mb-1 group-hover:text-[#a1a1aa]">GitHub Stats</div>
                                            <div className="flex items-baseline gap-2">
                                                <div className="text-[#e4e4e7] text-3xl font-bold">
                                                    {apiData.overview.response.data.github_stats?.public_repos || "10+"}
                                                </div>
                                                <div className="text-xs text-[#a1a1aa]">Repositories</div>
                                            </div>
                                            <div className="text-xs text-green-500 mt-1 flex items-center">
                                                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                                {apiData.overview.response.data.github_stats?.followers ? `${apiData.overview.response.data.github_stats.followers} Followers` : "Active Development"}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeEndpoint === 'stack' && (
                                <motion.div
                                    key="stack"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="h-full"
                                >
                                    <div className="bg-[#0c0c0c]/90 backdrop-blur-md border border-[#3f3f46] p-6 rounded-xl shadow-lg h-full hover:border-[#52525b] transition-colors">
                                        <h3 className="text-xl text-[#e4e4e7] font-bold mb-6 flex items-center gap-2 border-b border-[#27272a] pb-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                            Tech Stack
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {Object.entries(apiData.stack.response.data).map(([category, items]) => (
                                                <div key={category}>
                                                    <div className="text-[#a1a1aa] text-xs uppercase tracking-wider mb-3 border-b border-[#27272a] pb-1 inline-block">{category}</div>
                                                    <div className="flex flex-wrap gap-2">
                                                        {items.map(item => (
                                                            <span key={item} className="px-2 py-1 bg-[#27272a] text-[#e4e4e7] text-xs rounded border border-[#3f3f46] hover:border-[#e4e4e7] transition-colors cursor-default">
                                                                {item}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeEndpoint === 'languages' && (
                                <motion.div
                                    key="languages"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="h-full"
                                >
                                    <div className="bg-[#0c0c0c]/90 backdrop-blur-md border border-[#3f3f46] p-6 rounded-xl shadow-lg h-full hover:border-[#52525b] transition-colors flex flex-col">
                                        <h3 className="text-xl text-[#e4e4e7] font-bold mb-6 flex items-center gap-2 border-b border-[#27272a] pb-4 shrink-0">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            </svg>
                                            Languages
                                        </h3>
                                        <div className="flex-1 flex items-center justify-center min-h-[300px]">
                                            <Image
                                                src="https://github-readme-states-repo-self-inst.vercel.app/api/top-langs/?username=codershubinc&exclude_repo=R-lang&langs_count=10&layout=donut&theme=dark"
                                                alt="Most Used Languages"
                                                width={400}
                                                height={400}
                                                className="w-full h-auto max-w-[400px] object-contain"
                                                unoptimized
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeEndpoint === 'projects' && (
                                <motion.div
                                    key="projects"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="h-full"
                                >
                                    <div className="bg-[#0c0c0c]/90 backdrop-blur-md border border-[#3f3f46] p-6 rounded-xl shadow-lg h-full hover:border-[#52525b] transition-colors">
                                        <h3 className="text-xl text-[#e4e4e7] font-bold mb-6 flex items-center gap-2 border-b border-[#27272a] pb-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                            </svg>
                                            Featured Projects
                                        </h3>
                                        <div className="space-y-4">
                                            {apiData.projects.response.data.map((project) => (
                                                <div key={project.id} className="p-4 bg-[#27272a]/30 border border-[#3f3f46] rounded hover:border-[#e4e4e7] hover:bg-[#27272a]/50 transition-all group cursor-pointer">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <div className="text-[#e4e4e7] font-bold group-hover:text-white">{project.name}</div>
                                                            <div className="text-[#a1a1aa] text-xs mt-1">{project.type}</div>
                                                        </div>
                                                        <div className="text-[#e4e4e7] text-xs bg-[#27272a] px-2 py-1 rounded border border-[#3f3f46]">
                                                            {project.stars || project.users || project.stack}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="pt-4 text-center">
                                                <Link href="/projects" className="text-sm text-[#a1a1aa] hover:text-[#e4e4e7] hover:underline">
                                                    View all projects →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeEndpoint === 'github' && (
                                <motion.div
                                    key="github"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="h-full"
                                >
                                    <div className="bg-[#0c0c0c]/90 backdrop-blur-md border border-[#3f3f46] p-6 rounded-xl shadow-lg h-full hover:border-[#52525b] transition-colors">
                                        <h3 className="text-xl text-[#e4e4e7] font-bold mb-6 flex items-center gap-2 border-b border-[#27272a] pb-4">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                            </svg>
                                            GitHub Profile
                                        </h3>

                                        <div className="grid grid-cols-1 gap-6">
                                            {/* Profile Info */}
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-[#18181b] border border-[#27272a] p-4 rounded-lg">
                                                    <div className="text-[#a1a1aa] text-xs uppercase tracking-wider mb-1">Repositories</div>
                                                    <div className="text-[#e4e4e7] text-2xl font-bold">{apiData.github.response.data.public_repos}</div>
                                                </div>
                                                <div className="bg-[#18181b] border border-[#27272a] p-4 rounded-lg">
                                                    <div className="text-[#a1a1aa] text-xs uppercase tracking-wider mb-1">Followers</div>
                                                    <div className="text-[#e4e4e7] text-2xl font-bold">{apiData.github.response.data.followers}</div>
                                                </div>
                                            </div>

                                            {/* Total Contributions */}
                                            <div className="bg-[#18181b] border border-[#27272a] p-5 rounded-lg">
                                                <div className="text-[#a1a1aa] text-xs uppercase tracking-wider mb-1">Total Contributions</div>
                                                <div className="text-[#e4e4e7] text-3xl font-bold">
                                                    {apiData.activity.response.data.totalContributions.toLocaleString()}
                                                </div>
                                                <div className="text-xs text-[#a1a1aa] mt-1">
                                                    Last Year
                                                </div>
                                            </div>

                                            {/* Streaks */}
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-[#18181b] border border-[#27272a] p-4 rounded-lg">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-orange-500">🔥</span>
                                                        <div className="text-[#a1a1aa] text-xs uppercase tracking-wider">Current Streak</div>
                                                    </div>
                                                    <div className="text-[#e4e4e7] text-2xl font-bold">
                                                        {getStreakStats().current} <span className="text-sm font-normal text-[#a1a1aa]">days</span>
                                                    </div>
                                                </div>
                                                <div className="bg-[#18181b] border border-[#27272a] p-4 rounded-lg">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-yellow-500">🏆</span>
                                                        <div className="text-[#a1a1aa] text-xs uppercase tracking-wider">Longest Streak</div>
                                                    </div>
                                                    <div className="text-[#e4e4e7] text-2xl font-bold">
                                                        {getStreakStats().longest} <span className="text-sm font-normal text-[#a1a1aa]">days</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeEndpoint === 'activity' && (
                                <motion.div
                                    key="activity"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="h-full"
                                >
                                    <div className="bg-[#0c0c0c]/90 backdrop-blur-md border border-[#3f3f46] p-6 rounded-xl shadow-lg h-full hover:border-[#52525b] transition-colors">
                                        <h3 className="text-xl text-[#e4e4e7] font-bold mb-6 flex items-center gap-2 border-b border-[#27272a] pb-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                            Contribution Graph
                                        </h3>

                                        <div className="w-full overflow-x-auto pb-4">
                                            <div className="min-w-[600px] bg-[#18181b] border border-[#27272a] rounded-lg p-6 flex items-center justify-center">
                                                <div className="grid grid-rows-7 grid-flow-col gap-[3px]">
                                                    {apiData.activity.response.data.contributions.slice(-364).map((day) => {
                                                        // Manual color mapping for better visibility on dark theme
                                                        let bgColor = "#27272a"; // Empty (Zinc 800)

                                                        // Use brighter greens for visibility against dark background
                                                        if (day.contributionCount > 0) bgColor = "#166534"; // Green 800
                                                        if (day.contributionCount > 2) bgColor = "#22c55e"; // Green 500
                                                        if (day.contributionCount > 4) bgColor = "#4ade80"; // Green 400

                                                        return (
                                                            <div
                                                                key={day.date}
                                                                className="w-3 h-3 rounded-[1px] hover:ring-1 hover:ring-[#e4e4e7] hover:z-10 transition-all cursor-pointer"
                                                                style={{ backgroundColor: bgColor }}
                                                                title={`${day.contributionCount} contributions on ${day.date}`}
                                                            />
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-end gap-2 mt-4 text-xs text-[#a1a1aa]">
                                            <span>Less</span>
                                            <div className="w-3 h-3 rounded-[1px] bg-[#27272a]"></div>
                                            <div className="w-3 h-3 rounded-[1px] bg-[#166534]"></div>
                                            <div className="w-3 h-3 rounded-[1px] bg-[#22c55e]"></div>
                                            <div className="w-3 h-3 rounded-[1px] bg-[#4ade80]"></div>
                                            <span>More</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <Link
                            href="/projects"
                            className="block w-full py-4 text-center border border-[#e4e4e7] text-[#e4e4e7] hover:bg-[#e4e4e7] hover:text-black transition-all duration-300 font-mono text-lg group rounded-lg relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center justify-center">
                                <span className="mr-2">&gt;</span>
                                ./explore_projects.sh
                                <span className="ml-2 animate-pulse">_</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

