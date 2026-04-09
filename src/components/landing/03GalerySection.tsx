import { useState } from "react";
import AnimatedSection from "./00AnimatedSection";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const photos = [
  { src: "/lp-suassuna/images/sala-suassuna-01.webp", alt: "Layout da Sala Suassuna", span: "md:col-span-2 md:row-span-2" },
  { src: "/lp-suassuna/images/sala-suassuna-02.webp", alt: "Mesas operacionais e cadeiras confortáveis", span: "" },
  { src: "/lp-suassuna/images/sala-suassuna-03.webp", alt: "Estrutura ideal para sua operação", span: "" },
  { src: "/lp-suassuna/images/sala-suassuna-04.webp", alt: "Sala privativa mobiliada e fino acabamento", span: "md:col-span-2" },
  { src: "/lp-suassuna/images/sala-suassuna-05.webp", alt: "Vista ampla da Sala Suassuna", span: "" },
  { src: "/lp-suassuna/images/sala-suassuna-06.webp", alt: "Espaço pronto para uso imediato", span: "" },
  { src: "/lp-suassuna/images/sala-suassuna-07.webp", alt: "Duas mesas de gestores e quadro", span: "md:col-span-2" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox((i) => (i === null ? 0 : i === 0 ? photos.length - 1 : i - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox((i) => (i === null ? 0 : i === photos.length - 1 ? 0 : i + 1));
  };

  return (
    <>
      <AnimatedSection className="py-20 md:py-28 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="tracking-[0.3em] uppercase text-sm font-medium text-foreground/70 mb-4">
              Galeria de Fotos
            </p>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-foreground">
              Sua equipe merece uma sala pronta, mobiliada e profissional
            </h2>
            <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
              Conheça a estrutura da Sala Suassuna por diferentes ângulos e detalhes do ambiente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] gap-4">
            {photos.map((photo, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className={`group relative overflow-hidden rounded-2xl border border-border ${photo.span}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-sm font-medium">{photo.alt}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-white/70 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-7 h-7" />
          </button>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <img
            src={photos[lightbox].src}
            alt={photos[lightbox].alt}
            className="max-h-[90vh] max-w-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {lightbox + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
