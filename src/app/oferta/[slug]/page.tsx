import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { getOfferBySlug, offers } from "@/data/offers";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/layout/Footer";
import { CheckoutButton } from "@/components/ui/CheckoutButton";
import { MetaPixel } from "@/components/analytics/MetaPixel";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const offer = getOfferBySlug(slug);
  
  if (!offer) {
    return { title: "Oferta não encontrada" };
  }
  
  return {
    title: offer.title,
    description: offer.description,
    openGraph: {
      title: offer.title,
      description: offer.description,
      images: [offer.imageUrl],
    },
  };
}

export async function generateStaticParams() {
  return offers.map((offer) => ({
    slug: offer.slug,
  }));
}

export default async function OfertaPage({ params }: Props) {
  const { slug } = await params;
  const offer = getOfferBySlug(slug);

  if (!offer) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950">
      <MetaPixel pixelId={offer.metaPixelId} />
      
      {/* Minimal Header */}
      <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-zinc-100 dark:border-zinc-900 flex justify-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
            S
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">
            SuperOferta<span className="text-brand-600">.online</span>
          </span>
        </Link>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-block bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                  {offer.category}
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-6 text-balance">
                  {offer.title}
                </h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl text-balance">
                  {offer.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CheckoutButton 
                    href={offer.checkoutUrl} 
                    className="w-full sm:w-auto block"
                    buttonProps={{
                      size: "xl",
                      fullWidth: true,
                      className: "bg-green-600 hover:bg-green-700 shadow-green-600/20 text-white text-lg w-full"
                    }}
                  >
                    {offer.ctaText}
                  </CheckoutButton>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative aspect-video lg:aspect-square w-full max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800">
                  <Image
                    src={offer.imageUrl}
                    alt={offer.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50 border-y border-zinc-100 dark:border-zinc-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Tudo o que você precisa</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                {offer.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {offer.benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800">
                  <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 text-brand-600 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials (if present) */}
        {offer.testimonials && offer.testimonials.length > 0 && (
          <section className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight text-center mb-16">O que estão dizendo</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {offer.testimonials.map((test, index) => (
                  <div key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800">
                    <p className="text-lg mb-6 italic text-zinc-700 dark:text-zinc-300">"{test.content}"</p>
                    <div>
                      <p className="font-bold">{test.name}</p>
                      <p className="text-sm text-zinc-500">{test.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Offer & Pricing Section */}
        <section className="py-24 bg-brand-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4">Aproveite esta condição especial</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  Não perca a oportunidade de transformar seus resultados com o {offer.title}.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                  <span className="text-5xl font-extrabold tracking-tight">
                    R$ {offer.currentPrice.toFixed(2).replace(".", ",")}
                  </span>
                </div>
                {offer.originalPrice > offer.currentPrice && (
                  <p className="text-zinc-500 line-through">
                    De R$ {offer.originalPrice.toFixed(2).replace(".", ",")}
                  </p>
                )}
              </div>
              
              <div className="w-full md:w-auto">
                <CheckoutButton 
                  href={offer.checkoutUrl} 
                  className="block w-full"
                  buttonProps={{
                    size: "xl",
                    fullWidth: true,
                    className: "bg-green-600 hover:bg-green-700 shadow-green-600/20 text-white text-lg w-full"
                  }}
                >
                  {offer.ctaText}
                </CheckoutButton>
                <p className="text-center text-xs text-zinc-500 mt-4">
                  Pagamento 100% seguro.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {offer.faq && offer.faq.length > 0 && (
          <section className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-center mb-16">Perguntas Frequentes</h2>
              <div className="space-y-6">
                {offer.faq.map((item, index) => (
                  <div key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl">
                    <h3 className="font-bold text-lg mb-2">{item.question}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
