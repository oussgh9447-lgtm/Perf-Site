interface GradientButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'white';
  onClick?: () => void;
  className?: string;
}

export default function GradientButton({
  children,
  variant = 'primary',
  onClick,
  className = ''
}: GradientButtonProps) {
  const baseStyles = "px-4 py-2.5 md:px-6 md:py-3 rounded-[4px] font-black text-[12px] md:text-[14px] uppercase tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap";

  const variants = {
    primary: "bg-gradient-to-r from-accent-blue to-accent-blue-dark text-white box-glow-blue hover:opacity-90",
    secondary: "bg-transparent border border-border-subtle text-text-primary hover:border-border-highlight",
    white: "bg-white text-accent-blue shadow-[0_25px_50px_rgba(0,0,0,0.25)] hover:opacity-90"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
