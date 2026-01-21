import { CSSProperties, FC, ReactNode } from 'react';

interface LogoItem {
  node?: ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
}

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: string;
  width?: string | number;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: LogoItem, index: number) => ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
}

declare const LogoLoop: FC<LogoLoopProps>;
export default LogoLoop;
