import { LinkProps } from 'next/link';
export interface IButtonProps {
  className?: string;
  label?: string;
  onClick?: () => void;
  to?: string;
  size?: 'full' | 'default' | 'small';
  shape: 'primary' | 'secondary' | 'outline' | undefined;
  disabled?: boolean;
  isLoading?: boolean;
  type?: 'button' | 'reset' | 'submit';
  iconPosition?: 'left' | 'right' | 'center';
  iconName?: string;
  newTab?: boolean;
}
