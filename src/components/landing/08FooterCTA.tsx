import { ArrowRight } from "lucide-react";
import AnimatedSection from "./00AnimatedSection";

declare global {
  interface Window {
    gtagSendEvent?: (url: string, eventName?: string) => void;
  }
}

const WHATSAPP_LINK = "https://wa.me/553121158984/?text=Olá!+Vi+no+site+sua+promoção+da+sala+privativa+Suassuna.+A+sala+ainda+está+disponível?";

const FooterCTA = () => (
  <AnimatedSection className="bg-primary text-primary-foreground pt-16 pb-8 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
        Sua sala comercial em Contagem está esperando por você
      </h2>

      <p className="text-lg text-primary-foreground/60 mb-10">
        Agende uma visita e conheça a Sala Suassuna pessoalmente.
      </p>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault();
          if (typeof window.gtagSendEvent === "function") {
            window.gtagSendEvent(WHATSAPP_LINK);
          } else {
            window.open(WHATSAPP_LINK, "_blank");
          }
        }}
        className="inline-flex items-center gap-2 bg-primary-foreground text-foreground font-semibold px-10 py-4 rounded-sm text-lg tracking-wide hover:bg-primary-foreground/90 transition-colors"
      >
        Falar no WhatsApp
        <ArrowRight className="h-5 w-5" />
      </a>

      <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-primary-foreground/40" style={{ fontSize: "10px" }}>
        <p className="tracking-[0.2em] uppercase font-medium">
          © 2026 Café Coabita Coworking. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </AnimatedSection>
);

export default FooterCTA;
