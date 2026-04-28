interface BentoCardProps {
  children: React.ReactNode;
  size?: 'large' | 'medium' | 'small';
  className?: string;
  highlighted?: boolean;
}

export default function BentoCard({ 
  children, 
  size = 'medium',
  className = '',
  highlighted = false
}: BentoCardProps) {
  const baseStyles = "bg-bg-card border border-border-subtle rounded-[8px] p-6 hover:border-border-highlight transition-all duration-300";
  
  const sizes = {
    large: "col-span-2 row-span-2",
    medium: "col-span-1 row-span-1",
    small: "col-span-1 row-span-1"
  };

  return (
    <div className={`${baseStyles} ${highlighted ? 'bg-bg-card-alt' : ''} ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}
