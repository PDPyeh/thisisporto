'use client';

import React from 'react';
import Link from 'next/link';
import PixelBlast from '@/components/PixelBlast';
import BubbleMenu from '@/components/BubbleMenu';
import AnimatedContent from '@/components/AnimatedContent';
import PixelTrail from '@/components/PixelTrail';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiAdobephotoshop, SiAdobeaftereffects, SiAdobepremierepro, } from 'react-icons/si';
import LogoLoop from '@/components/LogoLoop';

export default function AboutPage() {

    const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiAdobephotoshop />, title: "Adobe Photoshop", href: "https://www.adobe.com/products/photoshop.html" },
  { node: <SiAdobeaftereffects />, title: "Adobe After Effects", href: "https://www.adobe.com/products/aftereffects.html" },
  { node: <SiAdobepremierepro />, title: "Adobe Premiere Pro", href: "https://www.adobe.com/products/premiere.html" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

  const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Next.js', level: 'Advanced' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'Docker', level: 'Intermediate' }
  ];

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

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#27187E"
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
          gooeyEnabled
          gooStrength={2}
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
          {/* About Card */}
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
          >
            <div className="bg-gray-800 border-2 border-blue-500 rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-black text-blue-500 mb-2">#about</h2>
              <p className="text-gray-400 text-xs mb-6 font-mono">this is about me?</p>

              <div className="space-y-4 mb-8">
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="bg-blue-500 rounded-lg p-3 text-white text-sm font-mono mb-3">
                    <p className="font-bold">Full-Stack Developer</p>
                    <p className="text-xs mt-1">Building things with React, Next.js & more</p>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="bg-blue-500 rounded-lg p-3 text-white text-sm font-mono">
                    <p>Passionate about clean code and beautiful UI/UX design</p>
                  </div>
                </div>
              </div>

              <div className="text-xs text-gray-400 font-mono space-y-1">
                <p>[location] Yogyakarta, Indonesia</p>
                <p>[experience] searching for experience</p>
                <p>[status] Open to opportunities</p>
              </div>
            </div>
          </AnimatedContent>

          {/* Skills Card */}
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
          >
            <div className="bg-gray-800 border-2 border-blue-500 rounded-3xl p-8 shadow-xl relative">
              <h2 className="text-2xl font-black text-blue-500 mb-6">Skills</h2>

              <div className="w-full mb-8 z-">
                <div style={{ height: '120px', position: 'relative', overflow: 'hidden', width: '100%'}}>
                    
                    {/* Logo loop with white icons */}
                    <LogoLoop
                        logos={techLogos}
                        speed={80}
                        direction="left"
                        logoHeight={60}
                        gap={50}
                        hoverSpeed={0}
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#1f2937"
                        ariaLabel="Technology partners"
                    />

                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-yellow-400 border-2 border-yellow-300 flex items-center justify-center z-20">
                <div className="text-center font-black text-black text-sm px-4">
                  PASSION IS MY DRIVE
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
}
