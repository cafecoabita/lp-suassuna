import { ArrowRight } from "lucide-react";

declare global {
  interface Window {
    gtagSendEvent?: (url: string, eventName?: string) => void;
  }
}

const WHATSAPP_LINK = "https://wa.me/553121158984/?text=Olá!+Vi+no+site+sua+promoção+da+sala+privativa+Suassuna.+A+sala+ainda+está+disponível?";

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

      {/* Preço + urgência */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
        <span className="bg-white text-gray-900 text-sm font-bold px-5 py-2 rounded-full shadow-md">
          A partir de R$ 2.900/mês
        </span>
        <span className="bg-yellow-400 text-yellow-900 text-sm font-bold px-5 py-2 rounded-full shadow-md animate-pulse">
          ⚡ 50% OFF na entrada · Oferta até 30/04
        </span>
      </div>

      {/* CTA */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault();
          if (typeof window.gtagSendEvent === "function") {
            window.gtagSendEvent(WHATSAPP_LINK, "cta_hero_agendar_visita");
          } else {
            window.open(WHATSAPP_LINK, "_blank");
          }
        }}
        className="inline-flex items-center gap-2 bg-primary-foreground text-foreground font-semibold px-10 py-4 rounded-sm text-lg tracking-wide hover:bg-primary-foreground/90 transition-colors"
      >
        Agende uma visita
        <ArrowRight className="h-5 w-5" />
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
