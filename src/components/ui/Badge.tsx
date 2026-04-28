interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'status' | 'status-green' | 'status-blue';
  className?: string;
}

export default function Badge({ 
  children, 
  variant = 'default',
  className = ''
}: BadgeProps) {
  const baseStyles = "inline-flex items-center gap-2 px-3 py-1 rounded-[4px] text-[10px] font-bold uppercase tracking-wider";
  
  const variants = {
    default: "bg-bg-card-alt text-text-primary",
    status: "bg-bg-card-alt text-text-primary",
    'status-green': "bg-bg-card-alt text-accent-green",
    'status-blue': "bg-accent-blue/20 text-accent-blue"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {variant === 'status' && <span className="w-2 h-2 rounded-full bg-text-dark-muted"></span>}
      {variant === 'status-green' && <span className="w-2 h-2 rounded-full bg-accent-green"></span>}
      {variant === 'status-blue' && <span className="w-2 h-2 rounded-full bg-accent-blue"></span>}
      {children}
    </span>
  );
}
