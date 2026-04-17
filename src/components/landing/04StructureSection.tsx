import AnimatedSection from "./00AnimatedSection";
import { Maximize2, Users, Monitor, Crown, Wind, Wifi, Clock, Armchair, Plug } from "lucide-react";

const features = [
  { icon: Maximize2, label: "38 m²", desc: "área privativa" },
  { icon: Users, label: "17 posições", desc: "de trabalho simultâneas" },
  { icon: Monitor, label: "15 mesas", desc: "operacionais" },
  { icon: Crown, label: "2 mesas", desc: "de gestor / liderança" },
  { icon: Wind, label: "2 Ar Condicionados", desc: "de 28.000 BTUs cada" },
  { icon: Wifi, label: "3 opções de internet", desc: "1 Algar (fibra) e 2 Starlink" },
  { icon: Clock, label: "10h/mês", desc: "de sala de reunião" },
  { icon: Armchair, label: "100%", desc: "mobiliada" },
  { icon: Plug, label: "Tomadas", desc: "e cabo de rede em todas as mesas" },
];

const StructureSection = () => (
  <AnimatedSection className="py-20 md:py-28 px-6 bg-background">
    <div className="max-w-5xl mx-auto">
      <p className="tracking-[0.3em] uppercase text-sm font-medium text-foreground/70 mb-4 text-center">
        O que está incluso
      </p>
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-foreground">
        Estrutura da Sala Comercial
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
        Sala comercial no coworking Café Coabita, projetada para operações que precisam de capacidade, conforto e infraestrutura profissional em Contagem/MG.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="group bg-zinc-100 border border-zinc-200 rounded-lg p-6 text-center hover:bg-black transition-colors duration-300"
          >
            <f.icon className="h-7 w-7 mx-auto mb-3 text-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
            <p className="font-bold text-lg text-foreground group-hover:text-white transition-colors duration-300">{f.label}</p>
            <p className="text-sm text-muted-foreground group-hover:text-white/70 transition-colors duration-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default StructureSection;
