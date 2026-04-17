import AnimatedSection from "./00AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Car } from "lucide-react";

const WHATSAPP_ANUAL = "https://wa.me/553121158984/?text=Olá,+vi+seu+anúncio+no+google+e+gostaria+de+saber+mais+sobre+o+seu+plano+anual+da+Sala+Suassuna";
const WHATSAPP_BIENAL = "https://wa.me/553121158984/?text=Olá,+vi+seu+anúncio+no+google+e+gostaria+de+saber+mais+sobre+o+seu+plano+bienal+da+Sala+Suassuna";

const StarBadge = ({ label }: { label: string }) => (
  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
    <div className="flex items-center gap-1 text-xs font-bold px-3 py-1 bg-background text-foreground border border-black rounded-full whitespace-nowrap">
      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /> {label} <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
    </div>
  </div>
);

const PromoSection = () => (
  <AnimatedSection className="py-20 md:py-28 px-6 bg-background">
    <div className="max-w-4xl mx-auto text-center">

      <p className="tracking-[0.3em] uppercase text-sm font-medium text-foreground/70 mb-6">
        Melhor Custo Benefício
      </p>

      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-foreground">
        Garanta sua sala com 50% OFF na entrada
      </h2>

      <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
        Condição especial para empresas que querem estrutura profissional, pronta para operação imediata.
      </p>

      {/* CARDS */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">

        {/* PLANO ANUAL */}
        <Card className="relative border-2 border-black bg-background max-w-sm w-full mx-auto shadow-sm rounded-xl">
          <StarBadge label="PLANO ANUAL" />

          <CardContent className="pt-8 pb-8 px-6 text-center flex flex-col h-full">
            <p className="text-sm text-muted-foreground mb-2">1º mês por</p>

            <div className="rounded-lg border border-border bg-secondary px-4 py-4 mb-4">
              <p className="text-5xl font-bold text-foreground">R$ 1.750</p>
            </div>

            <p className="text-sm text-muted-foreground mb-2">+ 11 meses por</p>

            <div className="rounded-lg border border-border bg-secondary px-4 py-4 mb-4">
              <p className="text-4xl md:text-5xl font-bold text-foreground">R$ 3.500</p>
            </div>

            <p className="text-xs text-muted-foreground mb-6">
              *Promoção válida para contratos fechados até o dia 30 de abril de 2.026.
            </p>

            <div className="mt-auto">
              <a
                href={WHATSAPP_ANUAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white font-semibold py-2 px-5 rounded-sm text-sm tracking-wide hover:bg-zinc-700 transition-colors"
              >
                Quero o Plano Anual
              </a>
            </div>
          </CardContent>
        </Card>

        {/* PLANO BIENAL */}
        <Card className="relative border-2 border-black bg-background max-w-sm w-full mx-auto shadow-sm rounded-xl">
          <StarBadge label="PLANO BIENAL" />

          <CardContent className="pt-8 pb-8 px-6 text-center flex flex-col h-full">
            <p className="text-sm text-muted-foreground mb-2">1º mês por</p>

            <div className="rounded-lg border border-border bg-secondary px-4 py-4 mb-4">
              <p className="text-5xl font-bold text-foreground">R$ 1.450</p>
            </div>

            <p className="text-sm text-muted-foreground mb-2">+ 23 meses por</p>

            <div className="rounded-lg border border-border bg-secondary px-4 py-4 mb-4">
              <p className="text-4xl md:text-5xl font-bold text-foreground">R$ 2.900</p>
            </div>

            <p className="text-xs text-muted-foreground mb-6">
              *Promoção válida para contratos fechados até o dia 30 de abril de 2.026.
            </p>

            <div className="mt-auto">
              <a
                href={WHATSAPP_BIENAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white font-semibold py-2 px-5 rounded-sm text-sm tracking-wide hover:bg-zinc-700 transition-colors"
              >
                Quero o Plano Bienal
              </a>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* EXTRA */}
      <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground text-sm">
        <Car className="h-4 w-4" />
        <span>
          Vaga de garagem: <strong className="text-foreground">R$ 200/mês</strong>
        </span>
      </div>

    </div>
  </AnimatedSection>
);

export default PromoSection;
