import Link from "next/link";
import { offers } from "@/data/offers";
import { OfferCard } from "@/components/ui/OfferCard";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function Home() {
  const featuredOffers = offers.slice(0, 3);

  return (
    <>
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white dark:bg-zinc-950 pt-24 pb-32">
          {/* Background decorations */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100/40 via-transparent to-transparent dark:from-brand-900/20" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-500/10 blur-3xl rounded-full" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-6 text-balance">
                As melhores oportunidades, em um <span className="text-brand-600">só lugar.</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto text-balance">
                Descubra produtos, serviços e soluções selecionados para facilitar sua vida e ajudar você a encontrar exatamente o que procura.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/ofertas" className="w-full sm:w-auto">
                  <Button size="xl" fullWidth className="group">
                    Ver ofertas
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Button>
                </Link>
                <Link href="/sobre" className="w-full sm:w-auto">
                  <Button variant="secondary" size="xl" fullWidth>Conheça a SuperOferta</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Offers Section */}
        <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ofertas em Destaque</h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Nossa curadoria das melhores campanhas ativas no momento.
                  Aproveite enquanto durar o estoque ou prazo.
                </p>
              </div>
              <Link href="/ofertas" className="hidden md:block">
                <Button variant="ghost">Ver todas as ofertas &rarr;</Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredOffers.map((offer) => (
                <OfferCard key={offer.slug} offer={offer} />
              ))}
            </div>
            
            <div className="mt-10 text-center md:hidden">
              <Link href="/ofertas">
                <Button variant="outline" fullWidth>Ver todas as ofertas</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
