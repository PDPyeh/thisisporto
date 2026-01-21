import { FC } from 'react';

interface PixelTrailProps {
  gridSize?: number;
  trailSize?: number;
  maxAge?: number;
  interpolate?: number;
  easingFunction?: (x: number) => number;
  canvasProps?: object;
  glProps?: object;
  gooeyFilter?: { id: string; strength: number };
  color?: string;
  className?: string;
}

declare const PixelTrail: FC<PixelTrailProps>;
export default PixelTrail;
