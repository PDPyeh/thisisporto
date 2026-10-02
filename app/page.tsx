'use client';

import React from 'react';
import ProfileCard from '@/components/ProfileCard';
import AnimatedContent from '@/components/AnimatedContent';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-2 md:py-8 relative z-10">
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

        <div className="flex flex-col items-center justify-center min-h-0 md:min-h-[70vh] py-2 md:py-4">
          <ProfileCard
            avatarUrl="/photos/myfoto.png"
            name="PRADIPA YOGANANDA"
            title="Software Engineer"
            handle="pdpyeh"
            status="Avail"
            miniAvatarUrl="/photos/myfoto.png"
            enableTilt={true}
            enableMobileTilt={true}
            onContactClick={() => window.location.href = '/contact'}
            behindGlowEnabled={true}
            behindGlowColor="rgba(74, 158, 255, 0.4)"
            innerGradient="linear-gradient(145deg, rgba(96, 73, 110, 0.4) 0%, rgba(113, 196, 255, 0.2) 100%)"
          />
        </div>
      </AnimatedContent>
    </div>
  );
}
