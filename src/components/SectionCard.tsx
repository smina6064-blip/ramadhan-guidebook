import { ChevronRight } from "lucide-react";

interface SectionCardProps {
  title: string;
  onClick: () => void;
  isActive?: boolean;
}

const SectionCard = ({ title, onClick, isActive }: SectionCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between gap-3 ${
        isActive
          ? "gradient-ramadhan text-primary-foreground shadow-lg scale-[1.02]"
          : "bg-card hover:bg-secondary border border-border/50 hover:border-primary/30"
      }`}
    >
      <span className="font-serif text-base font-medium">{title}</span>
      <ChevronRight
        className={`w-5 h-5 flex-shrink-0 transition-transform ${
          isActive ? "rotate-90" : ""
        }`}
      />
    </button>
  );
};

export default SectionCard;
