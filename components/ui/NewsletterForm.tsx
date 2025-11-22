"use client"

import React, { useEffect, useState } from 'react';

export function NewsletterForm() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 h-[46px] bg-input border border-border rounded-lg animate-pulse" />
                <div className="w-full sm:w-auto h-[46px] px-4 md:px-6 bg-primary/50 rounded-lg animate-pulse" />
            </div>
        );
    }

    return (
        <div className="flex flex-col sm:flex-row gap-3">
            <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-sm md:text-base"
            />
            <button className="px-4 md:px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-lg transition-colors duration-200 text-sm md:text-base">
                Subscribe
            </button>
        </div>
    );
}
