'use client';
import React from 'react';
import { IButtonProps } from '../../_lib/types/button';
import Link from 'next/link';
import Icon from '../UI/icon';
import LoadingSpinner from './LoadingSpinner';

const Button: React.FC<IButtonProps> = ({
  className,
  label,
  onClick,
  to,
  shape,
  disabled,
  isLoading,
  type,
  iconPosition,
  iconName,
  newTab,
  size,
}) => {
  const commonProps = {
    className: `${className} ${
      shape == 'primary' || shape == 'secondary'
        ? `bg-${shape}`
        : shape === 'outline'
        ? 'border border-primary text-primary'
        : ''
    } ${size == 'full' ? 'w-full' : size == 'small' ? 'px-2' : 'px-4'} ${
      shape == 'primary' ? 'text-white' : ''
    } rounded-md py-2  text-sm   block  flex items-center justify-center text-center whitespace-nowrap`,
  };

  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }

    return (
      <>
        {iconName ? (
          <>
            {iconPosition === 'right' && (
              <span className="pl-2">
                <Icon name={iconName} />
              </span>
            )}
            {iconPosition == 'center' ? (
              <span>
                <Icon name={iconName} />
              </span>
            ) : (
              label
            )}
            {iconPosition === 'left' && (
              <span className="pr-2">
                <Icon name={iconName} />
              </span>
            )}
          </>
        ) : (
          <>{label}</>
        )}
      </>
    );
  };
  if (to) {
    return (
      <Link href={to} target={newTab ? '_blank' : undefined} {...commonProps}>
        {renderContent()}
      </Link>
    );
  } else {
    return (
      <button
        {...commonProps}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {renderContent()}
      </button>
    );
  }
};
export default Button;
