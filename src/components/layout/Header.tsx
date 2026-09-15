import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full glass-panel">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-95">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden shadow-md bg-white flex items-center justify-center">
              <Image src="/logo.jpg" alt="SuperOferta Logo" fill className="object-cover" />
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">
              SuperOferta<span className="text-brand-600">.online</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            <Link href="/ofertas" className="hover:text-brand-600 transition-colors">
              Todas as Ofertas
            </Link>
            <Link href="/sobre" className="hover:text-brand-600 transition-colors">
              Sobre nós
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-zinc-500 hover:text-brand-600 transition-colors p-2" aria-label="Buscar ofertas">
            <Search className="w-5 h-5" />
          </button>
          <Button variant="primary" size="sm" className="hidden sm:inline-flex">
            Ver destaques
          </Button>
        </div>
      </div>
    </header>
  );
}
