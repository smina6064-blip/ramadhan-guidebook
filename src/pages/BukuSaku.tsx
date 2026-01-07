import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import IslamicHeader from "@/components/IslamicHeader";
import SectionCard from "@/components/SectionCard";
import MobileNavbar from "@/components/MobileNavbar";
import { bukuSakuSections } from "@/data/bukuSakuContent";

const BukuSaku = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const currentSection = bukuSakuSections.find((s) => s.id === activeSection);

  const renderContent = (content: string) => {
    // Simple markdown-like rendering
    return content.split("\n").map((line, index) => {
      // Headers
      if (line.startsWith("## ")) {
        return (
          <h3 key={index} className="font-serif text-lg font-bold text-primary mt-6 mb-3">
            {line.replace("## ", "")}
          </h3>
        );
      }
      if (line.startsWith("### ")) {
        return (
          <h4 key={index} className="font-serif text-base font-semibold text-foreground mt-4 mb-2">
            {line.replace("### ", "")}
          </h4>
        );
      }
      // Bold text
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <p key={index} className="font-bold text-foreground my-2">
            {line.replace(/\*\*/g, "")}
          </p>
        );
      }
      // Italic (Arabic/quotes)
      if (line.startsWith("*") && line.endsWith("*") && !line.startsWith("**")) {
        return (
          <p key={index} className="italic text-muted-foreground my-2 bg-secondary/30 p-3 rounded-lg text-sm leading-relaxed">
            {line.replace(/\*/g, "")}
          </p>
        );
      }
      // Arabic text (detect Arabic characters)
      if (/[\u0600-\u06FF]/.test(line) && line.length > 10) {
        return (
          <p key={index} dir="rtl" className="font-serif text-lg text-primary my-3 p-4 bg-primary/5 rounded-xl text-center leading-loose border border-primary/20">
            {line}
          </p>
        );
      }
      // Table
      if (line.startsWith("|")) {
        return null; // Skip table for now, handled separately
      }
      // List items
      if (line.match(/^\d+\./)) {
        return (
          <p key={index} className="text-foreground my-1 pl-4">
            {line}
          </p>
        );
      }
      if (line.startsWith("- ")) {
        return (
          <p key={index} className="text-foreground my-1 pl-4">
            • {line.replace("- ", "")}
          </p>
        );
      }
      // Horizontal rule
      if (line === "---") {
        return <hr key={index} className="my-6 border-border" />;
      }
      // Regular paragraph
      if (line.trim()) {
        return (
          <p key={index} className="text-foreground my-2 leading-relaxed">
            {line}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <IslamicHeader
        title="Buku Saku Ramadhan"
        subtitle="Panduan Lengkap Ibadah Puasa"
      />

      <div className="px-4 py-6 max-w-lg mx-auto">
        {/* Back button when viewing content */}
        {activeSection && (
          <button
            onClick={() => setActiveSection(null)}
            className="flex items-center gap-2 text-primary mb-4 hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Kembali ke Daftar</span>
          </button>
        )}

        {/* Section List */}
        {!activeSection && (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground text-center mb-4">
              Pilih topik untuk membaca penjelasan lengkap
            </p>
            {bukuSakuSections.map((section) => (
              <SectionCard
                key={section.id}
                title={section.title}
                onClick={() => setActiveSection(section.id)}
              />
            ))}
          </div>
        )}

        {/* Section Content */}
        {activeSection && currentSection && (
          <div className="animate-fade-in">
            <div className="card-islamic p-5">
              <h2 className="font-serif text-xl font-bold text-primary mb-4 pb-3 border-b border-border">
                {currentSection.title}
              </h2>
              <div className="prose-sm">
                {renderContent(currentSection.content)}
              </div>
            </div>
          </div>
        )}
      </div>

      <MobileNavbar />
    </div>
  );
};

export default BukuSaku;
