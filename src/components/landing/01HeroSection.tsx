import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image estática */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/lp-suassuna/images/sala-suassuna-02.webp')" }}
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-foreground/60" />

    {/* Conteúdo */}
    <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">

      {/* Brand */}
      <p className="tracking-[0.3em] uppercase text-sm font-medium text-primary-foreground/70 mb-5">
        Café Coabita Coworking · Eldorado, Contagem/MG
      </p>

      {/* H1 */}
      <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary-foreground mb-6">
        Sala Suassuna
      </h1>

      {/* Descritivo */}
      <p className="text-base md:text-2xl font-light text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
        Sala comercial mobiliada para equipes de até 17 pessoas · 38m²
      </p>

      {/* Preço clicável → seção de planos */}
      <a
        href="#planos"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-bold px-5 py-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
      >
        <ArrowRight className="h-4 w-4" />
        A partir de R$ 2.900/mês
      </a>
    </div>

    {/* Scroll indicator CSS puro */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40">
      <div className="w-5 h-8 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-1.5">
        <div className="w-1 h-2 bg-primary-foreground/50 rounded-full animate-bounce" />
      </div>
    </div>
  </section>
);

export default HeroSection;
