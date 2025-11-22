import Link from "next/link";
import { siteConfig } from "@/data/site";

interface SocialIconProps {
    name: 'github' | 'twitter' | 'portfolio' | 'email';
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    color?: 'current' | 'gray' | 'white' | 'blue' | 'purple';
    hoverEffect?: boolean;
    strokeWidth?: number;
}

interface SocialLinksProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    color?: 'current' | 'gray' | 'white' | 'blue' | 'purple';
    hoverEffect?: boolean;
    orientation?: 'horizontal' | 'vertical';
    gap?: 'sm' | 'md' | 'lg';
    className?: string;
}

const iconPaths = {
    github: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    twitter: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
    portfolio: "M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM4 19V9h16v10H4z M8 11h8v2H8zm0 4h8v2H8z",
    email: "M12 12.713l11.985-7.713v13.5c0 1.104-.896 2-2 2H2c-1.104 0-2-.896-2-2v-13.5L12 12.713zm11.985-9.713H.015C-.552 3 .015 3.448.015 4l11.985 7.713L23.985 4c0-.552-.567-1-.999-1z"
};

export default function SocialIcon({
    name,
    className,
    size = 'md',
    color = 'current',
    hoverEffect = true,
    strokeWidth = 0
}: SocialIconProps) {

    // Size classes
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-10 h-10'
    };

    // Color classes
    const colorClasses = {
        current: 'text-current',
        gray: 'text-gray-400',
        white: 'text-white',
        blue: 'text-blue-500',
        purple: 'text-purple-500'
    };

    // Hover effect classes
    const hoverClasses = hoverEffect
        ? 'hover:text-white hover:scale-110 transition-all duration-200 ease-in-out'
        : '';

    // Combine all classes
    const allClasses = [
        className || sizeClasses[size],
        colorClasses[color],
        hoverClasses,
        'cursor-pointer'
    ].filter(Boolean).join(' ');

    return (
        <svg
            className={allClasses}
            fill="currentColor"
            stroke={strokeWidth > 0 ? "currentColor" : "none"}
            strokeWidth={strokeWidth}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d={iconPaths[name]} />
        </svg>
    );
}

// Complete Social Media Links Component with Links and SVGs
export function SocialMediaLinks({
    size = 'md',
    color = 'gray',
    hoverEffect = true,
    orientation = 'horizontal',
    gap = 'md',
    className
}: SocialLinksProps) {
    const socialLinks = siteConfig.social;

    // Gap classes
    const gapClasses = {
        sm: orientation === 'horizontal' ? 'gap-2' : 'gap-2',
        md: orientation === 'horizontal' ? 'gap-4' : 'gap-4',
        lg: orientation === 'horizontal' ? 'gap-6' : 'gap-6'
    };

    // Container classes
    const containerClasses = [
        'flex',
        'items-center',
        orientation === 'horizontal' ? 'flex-row' : 'flex-col',
        gapClasses[gap],
        className
    ].filter(Boolean).join(' ');

    const socialItems = [
        {
            name: 'github' as const,
            href: socialLinks.github,
            label: 'GitHub Profile'
        },
        {
            name: 'twitter' as const,
            href: socialLinks.twitter,
            label: 'Twitter Profile'
        },
        {
            name: 'portfolio' as const,
            href: socialLinks.portfolio,
            label: 'Portfolio'
        },
        {
            name: 'email' as const,
            href: socialLinks.email,
            label: 'Email'
        }
    ];

    return (
        <div className={containerClasses}>
            {socialItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="inline-block"
                >
                    <SocialIcon
                        name={item.name}
                        size={size}
                        color={color}
                        hoverEffect={hoverEffect}
                    />
                </Link>
            ))}
        </div>
    );
}
