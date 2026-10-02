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

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-4 md:py-8 relative z-10 md:min-h-[80vh] flex items-start md:items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {/* About Card */}
          <AnimatedContent
            distance={140}
            direction="vertical"
            reverse
            duration={0.8}
            ease="elastic.out(1, 0.3)"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0.1}
            container={null}
            onComplete={() => { }}
            onDisappearanceComplete={() => { }}
          >
            <div className="bg-gray-800 border-2 border-blue-500 rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl">
              <h2 className="text-xl md:text-2xl font-black text-blue-500 mb-2">#about</h2>
              <p className="text-gray-400 text-xs mb-4 md:mb-6 font-mono">this is about me?</p>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="bg-gray-700 rounded-lg p-3 md:p-4">
                  <div className="bg-blue-500 rounded-lg p-3 text-white text-sm font-mono mb-3">
                    <p className="font-bold">Full-Stack Developer</p>
                    <p className="text-xs mt-1">Building things with JavaScript, TypeScript, React, Node.js, & more</p>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-3 md:p-4">
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
            duration={0.8}
            ease="elastic.out(1, 0.3)"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0.2}
            container={null}
            onComplete={() => { }}
            onDisappearanceComplete={() => { }}
          >
            <div className="bg-gray-800 border-2 border-blue-500 rounded-2xl md:rounded-3xl p-5 md:p-8 pb-16 md:pb-8 shadow-xl relative overflow-hidden min-h-[220px]">
              <h2 className="text-xl md:text-2xl font-black text-blue-500 mb-4 md:mb-6">Skills</h2>

              <div className="w-full mb-6 md:mb-8">
                <div style={{ height: '100px', position: 'relative', overflow: 'hidden', width: '100%' }}>
                  <LogoLoop
                    logos={techLogos}
                    speed={80}
                    direction="left"
                    logoHeight={50}
                    gap={40}
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

              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-28 h-28 md:w-40 md:h-40 rounded-full bg-yellow-400 border-2 border-yellow-300 flex items-center justify-center z-20">
                <div className="text-center font-black text-black text-[10px] md:text-sm px-3 md:px-4">
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
