import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Croissant, Star, Coffee, X } from "lucide-react";
import { getOfferBySlug, offers } from "@/data/offers";
import { CheckoutButton } from "@/components/ui/CheckoutButton";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { RecentSalesPopup } from "@/components/ui/RecentSalesPopup";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const offer = getOfferBySlug(slug);
  
  if (!offer) {
    return { title: "Oferta não encontrada" };
  }
  
  const cleanTitle = offer.title.replace(/\*/g, '');
  
  return {
    title: cleanTitle,
    description: offer.description,
    openGraph: {
      title: cleanTitle,
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

const IconMap: Record<string, any> = {
  Croissant,
  Star,
  Coffee,
  CheckCircle2
};

export default async function OfertaPage({ params }: Props) {
  const { slug } = await params;
  const offer = getOfferBySlug(slug);

  if (!offer) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900">
      <MetaPixel pixelId={offer.metaPixelId} />
      
      {/* High-Converting Scarcity Banner */}
      <div className="w-full bg-red-600 text-white text-center py-2 px-4 text-sm md:text-base font-bold tracking-wide uppercase animate-pulse shadow-md relative z-50">
        ⚡ ALERTA: Esta página sairá do ar em breve. Garanta sua vaga com desconto!
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 border-b border-zinc-100">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-50/50 via-white to-white" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start">
                {offer.preHeadline ? (
                  <div className="inline-block bg-zinc-900 text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-xl transform hover:scale-105 transition-transform">
                    {offer.preHeadline}
                  </div>
                ) : (
                  <div className="inline-block bg-brand-50 text-brand-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
                    {offer.category}
                  </div>
                )}
                
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tighter text-zinc-900 mb-6 text-balance leading-[1.05]">
                  {offer.title.split('*').map((part, idx) => 
                    idx % 2 === 1 ? (
                      <span key={idx} className="text-red-600 bg-red-100/50 px-2 py-0.5 rounded-xl inline-block">
                        {part}
                      </span>
                    ) : (
                      <span key={idx}>{part}</span>
                    )
                  )}
                </h1>
                <p className="text-xl text-zinc-600 mb-6 max-w-2xl text-balance lg:mx-0 mx-auto font-medium">
                  {offer.subtitle}
                </p>

                {/* Urgency Element */}
                <div className="w-full max-w-md">
                  <CountdownTimer />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full mt-4 px-2">
                  <CheckoutButton 
                    href={offer.checkoutUrl} 
                    className="w-full sm:w-auto block"
                    buttonProps={{
                      size: "xl",
                      fullWidth: true,
                      className: "bg-[#00D154] hover:bg-[#00B046] shadow-[0_0_25px_rgba(0,209,84,0.5)] hover:shadow-[0_0_40px_rgba(0,209,84,0.7)] text-white text-base sm:text-lg font-black w-full uppercase tracking-wide border-b-4 border-green-700 active:border-b-0 active:translate-y-1 transition-all whitespace-normal h-auto py-4 md:py-5 px-4 leading-tight"
                    }}
                  >
                    {offer.ctaText}
                  </CheckoutButton>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="relative aspect-[4/5] lg:aspect-square w-full max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200/80 border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src={offer.imageUrl}
                    alt={offer.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-black shadow-lg transform rotate-12 animate-pulse">
                    - {offer.discountPercentage}% OFF
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        {offer.problemSection && (
          <section className="py-24 bg-zinc-50 border-y border-zinc-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-center mb-12 text-balance text-zinc-900">
                {offer.problemSection.title}
              </h2>
              <div className="space-y-4 mb-12">
                {offer.problemSection.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0 shadow-inner">
                      <X className="w-5 h-5 font-bold" />
                    </div>
                    <p className="text-xl font-semibold text-zinc-800">{bullet}</p>
                  </div>
                ))}
              </div>
              <div className="bg-brand-50 border border-brand-100 p-8 rounded-2xl">
                <p className="text-xl text-center text-brand-900 text-balance leading-relaxed font-bold">
                  {offer.problemSection.conclusion}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Features / Benefits Section */}
        {offer.features && offer.features.length > 0 ? (
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-center mb-16 text-zinc-900">O Que Você Vai Receber Hoje:</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {offer.features.map((feature, idx) => {
                  const IconComponent = feature.iconName ? IconMap[feature.iconName] || CheckCircle2 : CheckCircle2;
                  return (
                    <div key={idx} className="bg-zinc-50 p-8 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-2">
                      <div className="w-20 h-20 bg-gradient-to-br from-brand-500 to-brand-700 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-500/30">
                        <IconComponent className="w-10 h-10" />
                      </div>
                      <h3 className="font-extrabold text-2xl mb-3 text-zinc-900">{feature.title}</h3>
                      <p className="text-lg text-zinc-600 font-medium leading-relaxed">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ) : offer.benefits && offer.benefits.length > 0 && (
          <section className="py-24 bg-white border-y border-zinc-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-zinc-900">Tudo o que você precisa</h2>
                <p className="text-xl text-zinc-600 font-medium">
                  {offer.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {offer.benefits.map((benefit, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-6 bg-zinc-50 rounded-2xl shadow-sm border border-zinc-100 transform hover:-translate-y-1 transition-transform">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-md shadow-green-500/20">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="font-bold text-lg text-zinc-900">{benefit}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Premium Testimonials Section */}
        {offer.testimonials && offer.testimonials.length > 0 && (
          <section className="py-24 bg-zinc-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-center mb-16 text-zinc-900">
                O que as pessoas estão dizendo
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {offer.testimonials.map((test, index) => (
                  <div key={index} className="bg-white p-8 rounded-[2rem] shadow-lg shadow-zinc-200/50 border border-zinc-100 relative">
                    <div className="flex gap-1 mb-6 text-amber-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg mb-8 text-zinc-700 leading-relaxed font-medium">"{test.content}"</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold text-xl uppercase">
                        {test.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-extrabold text-zinc-900">{test.name}</p>
                        <p className="text-sm text-zinc-500 font-medium">{test.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* High-Converting Guarantee Section */}
        {offer.guarantee && (
          <section className="py-24 bg-white border-y border-zinc-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              <div className="bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-12 text-left">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl" />
                
                <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_50px_rgba(16,185,129,0.4)] relative z-10 border-8 border-zinc-800">
                  <ShieldCheck className="w-16 h-16 md:w-24 md:h-24 text-white" />
                </div>
                
                <div className="relative z-10 flex-1 text-center md:text-left">
                  <div className="inline-block bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
                    Compra 100% Segura
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-white leading-tight">
                    {offer.guarantee.title}
                  </h2>
                  <p className="text-xl text-zinc-400 leading-relaxed font-medium">
                    {offer.guarantee.description} Se você achar que esse material não é para você, basta nos enviar um único e-mail e devolveremos todo o seu investimento imediatamente. Sem perguntas.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Pricing / Offer Section */}
        <section className="py-24 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-balance tracking-tight">
                {offer.guarantee ? "Quanto custa ter essa liberdade na cozinha?" : "Aproveite esta condição especial"}
              </h2>
              
              <div className="bg-zinc-800 dark:bg-white rounded-[2rem] p-8 md:p-16 shadow-2xl border border-zinc-700 dark:border-zinc-200">
                <div className="flex flex-col items-center justify-center mb-8">
                  {offer.originalPrice > offer.currentPrice && (
                    <p className="text-xl text-zinc-400 dark:text-zinc-500 line-through mb-2 font-medium">
                      De R$ {offer.originalPrice.toFixed(2).replace(".", ",")}
                    </p>
                  )}
                  <span className="text-6xl md:text-7xl font-black tracking-tight text-white dark:text-zinc-900 mb-2">
                    Por R$ {offer.currentPrice.toFixed(2).replace(".", ",")}
                  </span>
                  {offer.guarantee && (
                    <span className="text-zinc-400 dark:text-zinc-500 font-medium">
                      (ou menos de R$ 1,00 por dia)
                    </span>
                  )}
                </div>
                
                <div className="w-full max-w-xl mx-auto px-2">
                  <CheckoutButton 
                    href={offer.checkoutUrl} 
                    className="block w-full"
                    buttonProps={{
                      size: "xl",
                      fullWidth: true,
                      className: "bg-[#0066FF] hover:bg-blue-700 shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_40px_rgba(0,102,255,0.6)] text-white text-lg sm:text-xl md:text-2xl font-black w-full uppercase py-5 md:py-8 px-4 whitespace-normal h-auto leading-tight"
                    }}
                  >
                    COMPRAR AGORA POR R$ {offer.currentPrice.toFixed(2).replace(".", ",")}
                  </CheckoutButton>
                  <p className="text-center text-sm text-zinc-400 dark:text-zinc-500 mt-6 font-medium">
                    Pagamento 100% seguro e acesso imediato.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {offer.faq && offer.faq.length > 0 && (
          <section className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">Perguntas Frequentes</h2>
              <div className="space-y-6">
                {offer.faq.map((item, index) => (
                  <div key={index} className="bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50">
                    <h3 className="font-bold text-xl mb-3">{item.question}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      
      {/* Non-branded Minimal Footer for Funnel Pages */}
      <footer className="py-8 border-t border-zinc-200/50 text-center text-zinc-500 text-sm bg-white">
        <div className="container mx-auto px-4">
          <p className="mb-4">© {new Date().getFullYear()} Todos os direitos reservados.</p>
          <div className="flex items-center justify-center gap-6">
            <Link href="/termos-de-uso" className="hover:text-zinc-800 underline underline-offset-4">Termos de Uso</Link>
            <Link href="/politica-de-privacidade" className="hover:text-zinc-800 underline underline-offset-4">Privacidade</Link>
          </div>
          <p className="mt-8 text-xs text-zinc-400 max-w-2xl mx-auto">
            Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site não é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial independente da FACEBOOK, Inc.
          </p>
        </div>
      </footer>

      <RecentSalesPopup />
    </div>
  );
}
