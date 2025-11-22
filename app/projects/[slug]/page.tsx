import React from 'react';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface ProjectDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="container mx-auto py-12">
            <Button variant="ghost" asChild className="mb-6">
                <Link href="/projects">← Back to Projects</Link>
            </Button>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{project.description}</p>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <span key={tech} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex gap-4">
                {project.githubUrl && (
                    <Button asChild variant="outline">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </Button>
                )}
                {project.liveUrl && (
                    <Button asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </Button>
                )}
            </div>
        </div>
    );
}
