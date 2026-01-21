import { CSSProperties, FC, ReactNode } from 'react';

interface BubbleMenuItem {
  label: string;
  href?: string;
  ariaLabel?: string;
  rotation?: number;
  hoverStyles?: { bgColor?: string; textColor?: string };
  onClick?: () => void;
}

interface BubbleMenuProps {
  logo?: ReactNode;
  onMenuClick?: (isOpen: boolean) => void;
  className?: string;
  style?: CSSProperties;
  menuAriaLabel?: string;
  menuBg?: string;
  menuContentColor?: string;
  useFixedPosition?: boolean;
  items?: BubbleMenuItem[];
  animationEase?: string;
  animationDuration?: number;
  staggerDelay?: number;
  defaultOpen?: boolean;
}

declare const BubbleMenu: FC<BubbleMenuProps>;
export default BubbleMenu;
