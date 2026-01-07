import { Link } from "react-router-dom";
import { Book, HelpCircle, Moon, Star } from "lucide-react";
import MobileNavbar from "@/components/MobileNavbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden gradient-ramadhan text-primary-foreground">
        {/* Decorative Stars */}
        <div className="absolute top-6 left-6 opacity-30 animate-pulse">
          <Star className="w-6 h-6" fill="currentColor" />
        </div>
        <div className="absolute top-12 right-10 opacity-20">
          <Moon className="w-16 h-16" />
        </div>
        <div className="absolute bottom-20 right-6 opacity-30 animate-pulse" style={{ animationDelay: "0.5s" }}>
          <Star className="w-4 h-4" fill="currentColor" />
        </div>
        <div className="absolute top-20 left-1/3 opacity-20 animate-pulse" style={{ animationDelay: "1s" }}>
          <Star className="w-3 h-3" fill="currentColor" />
        </div>
        <div className="absolute bottom-32 left-8 opacity-25 animate-pulse" style={{ animationDelay: "0.3s" }}>
          <Star className="w-5 h-5" fill="currentColor" />
        </div>
        
        {/* Islamic Pattern */}
        <div className="absolute inset-0 opacity-10 islamic-pattern" />
        
        {/* Content */}
        <div className="relative z-10 px-6 py-12 text-center max-w-lg mx-auto">
          <div className="text-4xl mb-4">☪</div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3 drop-shadow-lg">
            99 Pertanyaan
          </h1>
          <h2 className="font-serif text-xl md:text-2xl font-semibold mb-4 opacity-95">
            Seputar Ramadhan
          </h2>
          <p className="text-sm md:text-base opacity-90 leading-relaxed max-w-sm mx-auto">
            Panduan lengkap ibadah puasa Ramadhan dengan dalil-dalil yang shahih
          </p>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 80"
            className="w-full h-10 fill-background"
            preserveAspectRatio="none"
          >
            <path d="M0,80 L0,40 Q300,0 600,40 T1200,40 L1200,80 Z" />
          </svg>
        </div>
      </div>

      {/* Menu Cards */}
      <div className="px-4 py-8 max-w-lg mx-auto space-y-4">
        <h3 className="font-serif text-xl text-center text-foreground mb-6">
          Pilih Menu
        </h3>
        
        {/* Buku Saku Card */}
        <Link to="/buku-saku" className="block">
          <div className="card-islamic p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl gradient-ramadhan flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Book className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h4 className="font-serif text-lg font-bold text-foreground mb-1">
                  Buku Saku Ramadhan
                </h4>
                <p className="text-sm text-muted-foreground">
                  Panduan lengkap puasa, rukun, syarat, dan tata cara ibadah
                </p>
              </div>
            </div>
          </div>
        </Link>

        {/* 99 Pertanyaan Card */}
        <Link to="/99-pertanyaan" className="block">
          <div className="card-islamic p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl gradient-ramadhan flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <HelpCircle className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h4 className="font-serif text-lg font-bold text-foreground mb-1">
                  99 Pertanyaan Ramadhan
                </h4>
                <p className="text-sm text-muted-foreground">
                  Jawaban detail seputar puasa dengan dalil dan referensi
                </p>
              </div>
            </div>
          </div>
        </Link>

        {/* Info Box */}
        <div className="mt-8 p-4 bg-secondary/50 rounded-2xl border border-border/50">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📖</span>
            <span className="font-serif text-sm font-semibold text-foreground">
              Tentang Aplikasi
            </span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Aplikasi ini berisi panduan lengkap ibadah puasa Ramadhan berdasarkan 
            rujukan kitab-kitab fiqih klasik seperti Tuhfatul Muhtaj, I'anah ath-Thalibin, 
            dan kitab-kitab mu'tabar lainnya.
          </p>
        </div>
      </div>

      <MobileNavbar />
    </div>
  );
};

export default Index;
