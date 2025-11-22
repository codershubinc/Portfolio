import { Project } from '@/types/project';

export const projects: Project[] = [
    {
        id: '1',
        title: 'Portfolio Website',
        slug: 'portfolio-website',
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        description: 'My personal portfolio website built with Next.js 14, featuring a modern dark theme and modular architecture.',
        githubUrl: 'https://github.com/codershubinc/portfolio',
        liveUrl: 'https://codershubinc.tech',
        tagline: 'Modern Portfolio',
        featured: true,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>'
    },
    {
        id: '2',
        title: 'E-Commerce Dashboard',
        slug: 'ecommerce-dashboard',
        techStack: ['React', 'Node.js', 'PostgreSQL'],
        description: 'A comprehensive dashboard for managing products, orders, and customers with real-time analytics.',
        githubUrl: 'https://github.com/codershubinc/ecommerce-dashboard',
        liveUrl: 'https://dashboard.codershubinc.tech',
        tagline: 'Admin Dashboard',
        featured: true,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>'
    },
    {
        id: '3',
        title: 'Task Management App',
        slug: 'task-manager',
        techStack: ['Vue.js', 'Firebase', 'Vuex'],
        description: 'A collaborative task management tool with real-time updates, drag-and-drop interface, and team features.',
        githubUrl: 'https://github.com/codershubinc/task-manager',
        liveUrl: 'https://tasks.codershubinc.tech',
        tagline: 'Productivity Tool',
        featured: false,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>'
    }
];
