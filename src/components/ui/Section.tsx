import { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
  bgColor?: 'white' | 'light' | 'dark';
  paddingY?: 'small' | 'medium' | 'large' | 'none';
};

export const Section = ({
  id,
  className = '',
  children,
  fullWidth = false,
  bgColor = 'white',
  paddingY = 'medium',
}: SectionProps) => {
  // Background color classes
  const bgColorClasses = {
    white: 'bg-white dark:bg-secondary-900',
    light: 'bg-secondary-100 dark:bg-secondary-800',
    dark: 'bg-secondary-900 dark:bg-secondary-950 text-white',
  };
  
  // Padding classes
  const paddingClasses = {
    none: 'py-0',
    small: 'py-8',
    medium: 'py-16',
    large: 'py-24',
  };
  
  return (
    <section
      id={id}
      className={`
        ${bgColorClasses[bgColor]}
        ${paddingClasses[paddingY]}
        ${className}
      `}
    >
      <div className={fullWidth ? 'w-full' : 'container'}>
        {children}
      </div>
    </section>
  );
}; 