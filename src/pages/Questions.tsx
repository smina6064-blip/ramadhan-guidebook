import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import IslamicHeader from "@/components/IslamicHeader";
import QuestionCard from "@/components/QuestionCard";
import MobileNavbar from "@/components/MobileNavbar";
import { ramadhanQuestions } from "@/data/ramadhanQuestions";

const Questions = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredQuestions = useMemo(() => {
    if (!searchQuery.trim()) return ramadhanQuestions;

    const query = searchQuery.toLowerCase();
    return ramadhanQuestions.filter(
      (q) =>
        q.title.toLowerCase().includes(query) ||
        q.question.toLowerCase().includes(query) ||
        q.answer.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background pb-20">
      <IslamicHeader
        title="99 Pertanyaan"
        subtitle="Seputar Puasa Ramadhan dengan Dalil"
      />

      <div className="px-4 py-6 max-w-lg mx-auto">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Cari pertanyaan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-4">
          {searchQuery
            ? `Ditemukan ${filteredQuestions.length} pertanyaan`
            : `Menampilkan ${ramadhanQuestions.length} pertanyaan`}
        </p>

        {/* Questions List */}
        <div className="space-y-3">
          {filteredQuestions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </div>

        {/* Empty State */}
        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
              Tidak Ditemukan
            </h3>
            <p className="text-sm text-muted-foreground">
              Coba gunakan kata kunci yang berbeda
            </p>
          </div>
        )}
      </div>

      <MobileNavbar />
    </div>
  );
};

export default Questions;
