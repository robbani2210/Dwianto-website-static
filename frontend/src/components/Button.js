export const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button', ...props }) => {
  const baseStyles = 'px-8 py-4 text-sm uppercase tracking-widest font-medium transition-all duration-300 rounded-sm';
  
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground',
    link: 'text-primary underline-offset-4 hover:underline decoration-secondary decoration-1 px-0 py-0',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};