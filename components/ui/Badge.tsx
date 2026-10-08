import React from 'react';

export interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'info' | 'error' | 'demo';
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-gray-100 text-gray-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-amber-100 text-amber-700',
    info: 'bg-blue-100 text-blue-700',
    error: 'bg-red-100 text-red-700',
    demo: 'bg-yellow-100 text-yellow-800 border border-yellow-300'
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
