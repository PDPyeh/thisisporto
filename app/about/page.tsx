'use client';

import React from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiAdobephotoshop, SiAdobeaftereffects, SiAdobepremierepro, SiMysql, SiPostgresql, } from 'react-icons/si';
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
    { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
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

  return (
    <>
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
            container={null}
            onComplete={() => { }}
            onDisappearanceComplete={() => { }}
          >
            <div className="bg-gray-800 border-2 border-blue-500 rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-black text-blue-500 mb-2">#about</h2>
              <p className="text-gray-400 text-xs mb-6 font-mono">this is about me?</p>

              <div className="space-y-4 mb-8">
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="bg-blue-500 rounded-lg p-3 text-white text-sm font-mono mb-3">
                    <p className="font-bold">Full-Stack Developer</p>
                    <p className="text-xs mt-1">Building things with JavaScript, TypeScript, React, Node.js, & more</p>
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
            container={null}
            onComplete={() => { }}
            onDisappearanceComplete={() => { }}
          >
            <div className="bg-gray-800 border-2 border-blue-500 rounded-3xl p-8 shadow-xl relative">
              <h2 className="text-2xl font-black text-blue-500 mb-6">Skills</h2>

              <div className="w-full mb-8 z-">
                <div style={{ height: '120px', position: 'relative', overflow: 'hidden', width: '100%' }}>

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
                    className=""
                    style={{}}
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
    </>
  );
}
