'use client';

import React from 'react';
import AnimatedContent from '@/components/AnimatedContent';

export default function ProjectsPage() {
  const projects = [
    {
      name: 'Portfolio Website',
      description: 'A modern portfolio showcasing projects and skills',
      tech: ['React', 'Next.js', 'Tailwind CSS']
    },
    {
      name: 'BrainRowth AI Math Solver',
      description: 'Full-stack AI MathSolver Android application',
      tech: ['Kotlin', 'Node.js', 'LLMs']
    },
    {
      name: 'AeroCatalog API Service',
      description: 'Airplane catalog API with data integration',
      tech: ['React', 'Node.js', 'PostgreSQL']
    }
  ];

  const experiences = [
    {
      year: '????',
      title: 'I want to be a developer',
      company: 'unknown',
      description: 'I really want experience'
    },
  ];

  return (
    <>
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10 min-h-[80vh] flex items-center justify-center">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Projects Card */}
          <AnimatedContent
            distance={140}
            direction="vertical"
            reverse
            duration={1.4}
            ease="elastic.out(1, 0.3)"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0.3}
            container={null}
            onComplete={() => {}}
            onDisappearanceComplete={() => {}}
          >
            <div className="bg-gray-800 border-2 border-blue-500 rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-black text-blue-500 mb-2">#Projects</h2>
              <p className="text-gray-400 text-xs mb-6 font-mono">inilah mY projects</p>

              <div className="space-y-4">
                {projects.map((project, idx) => (
                  <div key={idx} className="bg-gray-700 rounded-lg p-4 border border-blue-500">
                    <h3 className="text-white font-bold text-sm mb-2">{project.name}</h3>
                    <p className="text-gray-300 text-xs mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>

          {/* Experience Card */}
          <AnimatedContent
            distance={140}
            direction="vertical"
            reverse
            duration={1.4}
            ease="elastic.out(1, 0.3)"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0.6}
            container={null}
            onComplete={() => {}}
            onDisappearanceComplete={() => {}}
          >
            <div className="bg-gray-800 border-2 border-blue-500 rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-black text-blue-500 mb-2">#Experience</h2>
              <p className="text-gray-400 text-xs mb-6 font-mono">info pengalaman lek..</p>

              <div className="space-y-4">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="bg-gray-700 rounded-lg p-4 border-l-2 border-yellow-400">
                    <p className="text-white font-bold text-sm">{exp.title}</p>
                    <p className="text-yellow-400 font-bold text-xs">[{exp.year}]</p>
                    <p className="text-gray-300 text-xs mt-1">{exp.company}</p>
                    <p className="text-gray-400 text-xs mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </>
  );
}
