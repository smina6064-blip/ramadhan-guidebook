import { useState } from "react";
import { ChevronDown, BookOpen } from "lucide-react";
import type { Question } from "@/data/ramadhanQuestions";

interface QuestionCardProps {
  question: Question;
}

const QuestionCard = ({ question }: QuestionCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card-islamic overflow-hidden animate-fade-in">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 flex items-start gap-3 hover:bg-secondary/30 transition-colors"
      >
        <span className="flex-shrink-0 w-8 h-8 rounded-full gradient-ramadhan text-primary-foreground text-sm font-bold flex items-center justify-center">
          {question.id}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-lg font-semibold text-foreground leading-tight mb-1">
            {question.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {question.question}
          </p>
        </div>
        <ChevronDown
          className={`flex-shrink-0 w-5 h-5 text-primary transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 border-t border-border/50">
          <div className="bg-secondary/50 rounded-xl p-4 mb-3">
            <p className="text-foreground font-medium mb-3 italic">
              "{question.question}"
            </p>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-primary">Jawab:</p>
              <p className="text-foreground leading-relaxed">
                {question.answer}
              </p>
            </div>
          </div>
          
          {question.reference && (
            <div className="flex items-start gap-2 text-xs text-muted-foreground bg-muted/50 rounded-lg p-3">
              <BookOpen className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" />
              <span>
                <strong>Referensi:</strong> {question.reference}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
