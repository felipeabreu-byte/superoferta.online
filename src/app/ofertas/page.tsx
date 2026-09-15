import { Metadata } from "next";
import { offers } from "@/data/offers";
import { OfferCard } from "@/components/ui/OfferCard";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Todas as Ofertas",
  description: "Confira nossa lista completa de ofertas, ferramentas, produtos e serviços em destaque.",
};

export default function OfertasPage() {
  return (
    <>
      <Header />
      
      <main className="flex-1 bg-zinc-50 dark:bg-zinc-950 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Todas as Ofertas</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Navegue por nossa seleção completa de produtos e serviços.
              Encontre exatamente o que você precisa com condições especiais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <OfferCard key={offer.slug} offer={offer} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
