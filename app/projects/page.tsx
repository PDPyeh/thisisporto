'use client';

import React from 'react';
import Link from 'next/link';
import PixelBlast from '@/components/PixelBlast';
import BubbleMenu from '@/components/BubbleMenu';
import AnimatedContent from '@/components/AnimatedContent';
import PixelTrail from '@/components/PixelTrail';


export default function ProjectsPage() {
  const items = [
    {
      label: 'home',
      href: '/',
      ariaLabel: 'Home',
      rotation: -8,
      hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' },
      onClick: () => window.location.href = '/'
    },
    {
      label: 'about',
      href: '/about',
      ariaLabel: 'About',
      rotation: 0,
      hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' },
      onClick: () => window.location.href = '/about'
    },
    {
      label: 'projects',
      href: '/projects',
      ariaLabel: 'Projects',
      rotation: 8,
      hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' },
      onClick: () => window.location.href = '/projects'
    },
    {
      label: 'contact',
      href: '/contact',
      ariaLabel: 'Contact',
      rotation: 12,
      hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' },
      onClick: () => window.location.href = '/contact'
    }
  ];

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
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#27187E"
          className=""
          style={{}}
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>
      <div className="fixed inset-0 opacity-20 pointer-events-none z-0" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(74, 158, 255, 0.1), transparent 50%)'
      }} />
      
      <div className="fixed inset-0 z-10 pointer-events-auto" style={{ width: '100vw', height: '100vh' }}>
        <PixelTrail
          gridSize={50}
          trailSize={0.1}
          maxAge={250}
          interpolate={5}
          color="#69a8e2"
          gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
        />
      </div>

      {/* Header */}
      <div className="relative z-20 px-6 py-8">
        <div>
          <h1 className="text-5xl font-black text-white mb-2">
            <span className="text-blue-500">#about</span>
            <span className="text-white font-bold">me</span>
            <span className="text-gray-500 font-light"> ®</span>
          </h1>
          <p className="text-gray-400 text-sm font-mono">(ini portofolio...)</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex justify-start py-8 px-4 relative z-10 pointer-events-auto">
        <BubbleMenu
          items={items}
          logo={null}
          onMenuClick={() => {}}
          className=""
          style={{}}
          menuAriaLabel="Toggle navigation"
          menuBg="#ffffff"
          menuContentColor="#111111"
          useFixedPosition={false}
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.08}
          defaultOpen={true}
        />
      </div>

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
    </div>
  );
}
