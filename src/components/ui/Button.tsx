import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

type BaseButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
};

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
    href?: never;
    to?: never;
  };

type ButtonAsLink = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
    href: string;
    to?: never;
  };

type ButtonAsRouterLink = BaseButtonProps & {
  as: 'routerLink';
  to: string;
  href?: never;
};

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsRouterLink;

export const Button = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  isLoading = false,
  disabled = false,
  as = 'button',
  ...props
}: ButtonProps) => {
  // Classes for different variants
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
  };
  
  // Classes for different sizes
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-5 py-2.5',
    lg: 'text-lg px-6 py-3',
  };
  
  // Combine all classes
  const buttonClasses = `
    inline-flex items-center justify-center font-medium rounded-lg transition-all
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${(isLoading || disabled) ? 'opacity-70 cursor-not-allowed' : ''}
    ${className}
  `.trim();
  
  // Loading spinner
  const Loader = () => (
    <svg
      className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      ></path>
    </svg>
  );
  
  // Button content
  const ButtonContent = () => (
    <>
      {isLoading && <Loader />}
      {children}
    </>
  );
  
  // Render based on "as" prop
  if (as === 'a') {
    const { to, disabled, isLoading, ...anchorProps } = props as ButtonAsLink;
    return (
      <a 
        className={buttonClasses} 
        {...anchorProps}
        aria-disabled={isLoading || disabled}
        tabIndex={isLoading || disabled ? -1 : undefined}
      >
        <ButtonContent />
      </a>
    );
  }
  
  if (as === 'routerLink') {
    const { to, href, disabled, isLoading, ...linkProps } = props as ButtonAsRouterLink;
    return (
      <Link 
        className={buttonClasses} 
        to={to} 
        {...linkProps}
        aria-disabled={isLoading || disabled}
        tabIndex={isLoading || disabled ? -1 : undefined}
      >
        <ButtonContent />
      </Link>
    );
  }
  
  const { href, to, ...buttonProps } = props as ButtonAsButton;
  return (
    <button
      className={buttonClasses}
      disabled={isLoading || disabled}
      {...buttonProps}
    >
      <ButtonContent />
    </button>
  );
}; 