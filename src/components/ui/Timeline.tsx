interface TimelineStep {
  title: string;
  description: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}

interface TimelineProps {
  steps: TimelineStep[];
  variant?: 'horizontal' | 'vertical';
  className?: string;
}

export default function Timeline({ 
  steps, 
  variant = 'horizontal',
  className = ''
}: TimelineProps) {
  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        {steps.map((step, index) => (
          <div key={index} className="flex-1 flex flex-col items-center relative">
            {/* Card */}
            <div className={`w-full p-6 rounded-[8px] border ${
              step.isActive 
                ? 'bg-accent-blue border-accent-blue box-glow-blue-strong' 
                : 'bg-bg-card border-border-subtle'
            }`}>
              {step.icon && (
                <div className="mb-4 text-text-muted">
                  {step.icon}
                </div>
              )}
              <h4 className={`text-[18px] font-bold mb-2 ${
                step.isActive ? 'text-white' : 'text-text-primary'
              }`}>
                {step.title}
              </h4>
              <p className={`text-[14px] ${
                step.isActive ? 'text-white/90' : 'text-text-secondary'
              }`}>
                {step.description}
              </p>
            </div>
            
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="absolute top-1/2 -right-2 w-4 h-[2px] bg-gradient-to-r from-accent-blue to-transparent"></div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {steps.map((step, index) => (
        <div key={index} className="flex items-start gap-4 relative">
          {/* Vertical Line */}
          {index < steps.length - 1 && (
            <div className="absolute left-6 top-12 bottom-0 w-[2px] bg-border-subtle"></div>
          )}
          
          {/* Icon */}
          <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
            step.isActive 
              ? 'bg-accent-blue box-glow-blue' 
              : 'bg-bg-card-alt border border-border-subtle'
          }`}>
            {step.icon}
          </div>
          
          {/* Content */}
          <div className="flex-1 pt-2">
            <h4 className={`text-[18px] font-bold mb-2 ${
              step.isActive ? 'text-accent-blue' : 'text-text-primary'
            }`}>
              {step.title}
            </h4>
            <p className="text-text-secondary text-[14px]">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
