import Link from "next/link";
import Image from "next/image";
import { Offer } from "@/data/offers";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function OfferCard({ offer }: { offer: Offer }) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={offer.imageUrl}
          alt={offer.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-brand-600 shadow-sm">
          {offer.category}
        </div>
        {offer.discountPercentage > 0 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
            -{offer.discountPercentage}%
          </div>
        )}
      </div>
      
      <CardContent className="flex-1 pt-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <span className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider">
            Tempo Limitado
          </span>
        </div>
        <h3 className="font-bold text-xl mb-2 line-clamp-1">{offer.title}</h3>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm line-clamp-2 mb-4">
          {offer.description}
        </p>
        
        <div className="flex items-end gap-2 mt-auto">
          <span className="text-2xl font-bold text-brand-600">
            R$ {offer.currentPrice.toFixed(2).replace(".", ",")}
          </span>
          {offer.originalPrice > offer.currentPrice && (
            <span className="text-sm text-zinc-400 line-through mb-1">
              R$ {offer.originalPrice.toFixed(2).replace(".", ",")}
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pb-6">
        <Link href={`/oferta/${offer.slug}`} className="w-full">
          <Button fullWidth variant="primary" className="group">
            Ver oferta
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
