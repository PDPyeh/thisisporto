'use client';

import React from 'react';
import AnimatedContent from '@/components/AnimatedContent';

export default function ContactPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-4 md:py-8 relative z-10 md:min-h-[80vh] flex items-start md:items-center justify-center">
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
          <div className="bg-gray-800 border-2 border-blue-500 rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl max-w-2xl w-full">
            <h2 className="text-2xl md:text-3xl font-black text-blue-500 mb-6 md:mb-8 text-center">Get In Touch</h2>
            <div className="space-y-3 md:space-y-4">
              <a href="mailto:pdpyyo@gmail.com" className="block w-full bg-blue-500 text-white p-3 md:p-4 rounded-xl font-bold hover:bg-blue-600 transition-colors text-center text-sm md:text-base">
                Email
              </a>
              <a href="https://github.com/PDPyeh" target="_blank" rel="noopener noreferrer" className="block w-full bg-yellow-400 text-black p-3 md:p-4 rounded-xl font-bold hover:bg-yellow-300 transition-colors text-center text-sm md:text-base">
                GitHub
              </a>
              <a href="http://www.linkedin.com/in/pradipa-y-143875289" target="_blank" rel="noopener noreferrer" className="block w-full bg-blue-500 text-white p-3 md:p-4 rounded-xl font-bold hover:bg-blue-600 transition-colors text-center text-sm md:text-base">
                LinkedIn
              </a>
              <a href="https://x.com/hosseii_" target="_blank" rel="noopener noreferrer" className="block w-full bg-yellow-400 text-black p-3 md:p-4 rounded-xl font-bold hover:bg-yellow-300 transition-colors text-center text-sm md:text-base">
                Twitter
              </a>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </>
  );
}
