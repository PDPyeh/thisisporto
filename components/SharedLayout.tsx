'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import PixelBlast from '@/components/PixelBlast';
import BubbleMenu from '@/components/BubbleMenu';
import PixelTrail from '@/components/PixelTrail';

export default function SharedLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const items = [
    {
      label: 'home',
      href: '/',
      ariaLabel: 'Home',
      rotation: -8,
      hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' },
      onClick: (e: React.MouseEvent) => { e.preventDefault(); router.push('/'); }
    },
    {
      label: 'about',
      href: '/about',
      ariaLabel: 'About',
      rotation: 0,
      hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' },
      onClick: (e: React.MouseEvent) => { e.preventDefault(); router.push('/about'); }
    },
    {
      label: 'projects',
      href: '/projects',
      ariaLabel: 'Projects',
      rotation: 8,
      hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' },
      onClick: (e: React.MouseEvent) => { e.preventDefault(); router.push('/projects'); }
    },
    {
      label: 'contact',
      href: '/contact',
      ariaLabel: 'Contact',
      rotation: 12,
      hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' },
      onClick: (e: React.MouseEvent) => { e.preventDefault(); router.push('/contact'); }
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
          onMenuClick={() => { }}
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

      {/* Page Content */}
      {children}
    </div>
  );
}
