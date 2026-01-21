import { FC, ReactNode } from 'react';

interface AnimatedContentProps {
  children: ReactNode;
  container?: string | HTMLElement | null;
  distance?: number;
  direction?: string;
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  disappearAfter?: number;
  disappearDuration?: number;
  disappearEase?: string;
  onComplete?: () => void;
  onDisappearanceComplete?: () => void;
  className?: string;
}

declare const AnimatedContent: FC<AnimatedContentProps>;
export default AnimatedContent;
