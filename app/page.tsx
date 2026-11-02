'use client';

import React from 'react';
import ProfileCard from '@/components/ProfileCard';
import AnimatedContent from '@/components/AnimatedContent';
import LogoLoop from '@/components/LogoLoop';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiMysql,
  SiPostgresql,
} from 'react-icons/si';

export default function Home() {
  const techLogos = [
    { node: <SiReact />, title: 'React', href: 'https://react.dev' },
    { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
    { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
    { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
    { node: <SiAdobephotoshop />, title: 'Adobe Photoshop', href: 'https://www.adobe.com/products/photoshop.html' },
    { node: <SiAdobeaftereffects />, title: 'Adobe After Effects', href: 'https://www.adobe.com/products/aftereffects.html' },
    { node: <SiAdobepremierepro />, title: 'Adobe Premiere Pro', href: 'https://www.adobe.com/products/premiere.html' },
    { node: <SiMysql />, title: 'MySQL', href: 'https://www.mysql.com' },
    { node: <SiPostgresql />, title: 'PostgreSQL', href: 'https://www.postgresql.org' },
  ];

  const projects = [
    {
      name: 'Portfolio Website',
      description: 'A modern portfolio showcasing projects and skills',
      tech: ['React', 'Next.js', 'Tailwind CSS'],
    },
    {
      name: 'BrainRowth AI Math Solver',
      description: 'Full-stack AI MathSolver Android application',
      tech: ['Kotlin', 'Node.js', 'LLMs'],
    },
    {
      name: 'AeroCatalog API Service',
      description: 'Airplane catalog API with data integration',
      tech: ['React', 'Node.js', 'PostgreSQL'],
    },
  ];

  const experiences = [
    {
      year: '2023-now',
      title: 'Information Technology Student',
      company: 'Universitas Muhammadiyah Yogyakarta',
      description:
        'im an active student in Information Technology, Faculty of Engineering, Universitas Muhammadiyah Yogyakarta',
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 relative z-10 space-y-16 md:space-y-28">
      {/* SECTION 1: HOME / PROFILE CARD */}
      <section
        id="home"
        className="scroll-mt-28 flex flex-col items-center justify-center min-h-[65vh] md:min-h-[75vh] py-4 md:py-8"
      >
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
          onComplete={() => {}}
          onDisappearanceComplete={() => {}}
        >
          <div className="flex flex-col items-center justify-center">
            <ProfileCard
              avatarUrl="/photos/myfoto.png"
              name="PRADIPA YOGANANDA"
              title="Software Engineer"
              handle="pdpyeh"
              status="Avail"
              miniAvatarUrl="/photos/myfoto.png"
              enableTilt={true}
              enableMobileTilt={true}
              onContactClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              behindGlowEnabled={true}
              behindGlowColor="rgba(59, 130, 246, 0.55)"
              innerGradient="linear-gradient(145deg, rgba(30, 58, 138, 0.65) 0%, rgba(59, 130, 246, 0.35) 50%, rgba(147, 51, 234, 0.35) 100%)"
            />
          </div>
        </AnimatedContent>
      </section>

      {/* SECTION 2: ABOUT & SKILLS */}
      <section
        id="about"
        className="scroll-mt-24 md:min-h-[70vh] flex items-center justify-center py-4 md:py-8"
      >
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
            onComplete={() => {}}
            onDisappearanceComplete={() => {}}
          >
            <div className="bg-gray-800 border-2 border-blue-500 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl h-full">
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-blue-500 mb-2">#about</h2>
              <p className="text-gray-400 text-[11px] sm:text-xs mb-4 md:mb-6 font-mono">this is about me?</p>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="bg-gray-700 rounded-lg p-3 md:p-4">
                  <div className="bg-blue-500 rounded-lg p-3 text-white text-xs sm:text-sm font-mono">
                    <p className="font-bold">Full-Stack Developer</p>
                    <p className="text-[11px] sm:text-xs mt-2 leading-relaxed">
                      Building things with JavaScript, TypeScript, React, Node.js, & more
                    </p>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-3 md:p-4">
                  <div className="bg-blue-500 rounded-lg p-3 text-white text-xs sm:text-sm font-mono leading-relaxed">
                    <p>Passionate about clean code and beautiful UI/UX design</p>
                  </div>
                </div>
              </div>

              <div className="text-[10px] sm:text-xs text-gray-400 font-mono space-y-2 leading-relaxed">
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
            onComplete={() => {}}
            onDisappearanceComplete={() => {}}
          >
            <div className="bg-gray-800 border-2 border-blue-500 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 pb-24 md:pb-8 shadow-xl relative overflow-hidden min-h-[240px] md:h-full flex flex-col justify-between">
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-blue-500 mb-4 md:mb-6">Skills</h2>

                <div className="w-full mb-6 md:mb-8">
                  <div style={{ height: '90px', position: 'relative', overflow: 'hidden', width: '100%' }}>
                    <LogoLoop
                      logos={techLogos}
                      speed={80}
                      direction="left"
                      logoHeight={44}
                      gap={36}
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
              </div>

              <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full bg-yellow-400 border-2 border-yellow-300 flex items-center justify-center z-20 shadow-lg">
                <div className="text-center font-black text-black text-[8px] sm:text-[10px] md:text-xs px-2 md:px-4 leading-tight">
                  PASSION IS MY DRIVE
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* SECTION 3: PROJECTS & EXPERIENCE */}
      <section
        id="projects"
        className="scroll-mt-24 md:min-h-[70vh] flex items-center justify-center py-4 md:py-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {/* Projects Card */}
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
            onComplete={() => {}}
            onDisappearanceComplete={() => {}}
          >
            <div className="bg-gray-800 border-2 border-blue-500 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl h-full">
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-blue-500 mb-2">#Projects</h2>
              <p className="text-gray-400 text-[11px] sm:text-xs mb-4 md:mb-6 font-mono">inilah mY projects</p>

              <div className="space-y-3 md:space-y-4">
                {projects.map((project, idx) => (
                  <div key={idx} className="bg-gray-700 rounded-lg p-3 md:p-4 border border-blue-500">
                    <h3 className="text-white font-bold text-xs sm:text-sm mb-2 leading-snug">{project.name}</h3>
                    <p className="text-gray-300 text-[11px] sm:text-xs mb-3 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-500 text-white px-2 py-1 rounded text-[10px] sm:text-xs font-bold"
                        >
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
            duration={0.8}
            ease="elastic.out(1, 0.3)"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0.2}
            container={null}
            onComplete={() => {}}
            onDisappearanceComplete={() => {}}
          >
            <div className="bg-gray-800 border-2 border-blue-500 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl h-full">
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-blue-500 mb-2">#Experience</h2>
              <p className="text-gray-400 text-[11px] sm:text-xs mb-4 md:mb-6 font-mono">mY pengalaman gua</p>

              <div className="space-y-3 md:space-y-4">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="bg-gray-700 rounded-lg p-3 md:p-4 border-l-4 border-yellow-400">
                    <p className="text-white font-bold text-xs sm:text-sm leading-snug">{exp.title}</p>
                    <p className="text-yellow-400 font-bold text-[11px] sm:text-xs mt-1">[{exp.year}]</p>
                    <p className="text-gray-300 text-[11px] sm:text-xs mt-1">{exp.company}</p>
                    <p className="text-gray-400 text-[11px] sm:text-xs mt-2 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* SECTION 4: CONTACT */}
      <section
        id="contact"
        className="scroll-mt-24 md:min-h-[60vh] flex items-center justify-center py-4 md:py-8"
      >
        <AnimatedContent
          className="w-full flex justify-center"
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
          onComplete={() => {}}
          onDisappearanceComplete={() => {}}
        >
          <div className="bg-gray-800 border-2 border-blue-500 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl max-w-2xl w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-blue-500 mb-6 md:mb-8 text-center">
              Get In Touch
            </h2>
            <div className="space-y-3 md:space-y-4">
              <a
                href="mailto:pdpyyo@gmail.com"
                className="block w-full bg-blue-500 text-white p-3 md:p-4 rounded-xl font-bold hover:bg-blue-600 transition-colors text-center text-xs sm:text-sm md:text-base"
              >
                Email
              </a>
              <a
                href="https://github.com/PDPyeh"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-yellow-400 text-black p-3 md:p-4 rounded-xl font-bold hover:bg-yellow-300 transition-colors text-center text-xs sm:text-sm md:text-base"
              >
                GitHub
              </a>
              <a
                href="http://www.linkedin.com/in/pradipa-y-143875289"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-500 text-white p-3 md:p-4 rounded-xl font-bold hover:bg-blue-600 transition-colors text-center text-xs sm:text-sm md:text-base"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/hosseii_"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-yellow-400 text-black p-3 md:p-4 rounded-xl font-bold hover:bg-yellow-300 transition-colors text-center text-xs sm:text-sm md:text-base"
              >
                Twitter
              </a>
            </div>
          </div>
        </AnimatedContent>
      </section>
    </main>
  );
}
