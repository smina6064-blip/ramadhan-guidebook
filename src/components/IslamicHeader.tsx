import { Moon, Star } from "lucide-react";

interface IslamicHeaderProps {
  title: string;
  subtitle?: string;
}

const IslamicHeader = ({ title, subtitle }: IslamicHeaderProps) => {
  return (
    <header className="relative overflow-hidden gradient-ramadhan text-primary-foreground py-8 px-4">
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 opacity-30">
        <Star className="w-6 h-6" fill="currentColor" />
      </div>
      <div className="absolute top-8 right-8 opacity-20">
        <Moon className="w-10 h-10" />
      </div>
      <div className="absolute bottom-4 right-4 opacity-30">
        <Star className="w-4 h-4" fill="currentColor" />
      </div>
      <div className="absolute top-12 left-1/4 opacity-20">
        <Star className="w-3 h-3" fill="currentColor" />
      </div>
      
      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 islamic-pattern" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-lg mx-auto">
        <div className="mb-3 text-2xl">☪</div>
        <h1 className="font-serif text-2xl md:text-3xl font-bold mb-2 drop-shadow-md">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm md:text-base opacity-90 font-light">
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 60"
          className="w-full h-6 fill-background"
          preserveAspectRatio="none"
        >
          <path d="M0,60 L0,30 Q300,0 600,30 T1200,30 L1200,60 Z" />
        </svg>
      </div>
    </header>
  );
};

export default IslamicHeader;
