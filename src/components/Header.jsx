import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-xl font-semibold tracking-tight">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white">
              <Rocket size={18} />
            </span>
            Vibe Starter
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-black transition-colors">Features</a>
            <a href="#showcase" className="hover:text-black transition-colors">Showcase</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
            <a href="#get-started" className="inline-flex items-center rounded-full bg-black px-4 py-2 text-white font-medium hover:bg-black/90 transition-colors">Get Started</a>
          </nav>

          <button aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 grid gap-2 text-sm">
            <a href="#features" className="py-2" onClick={() => setOpen(false)}>Features</a>
            <a href="#showcase" className="py-2" onClick={() => setOpen(false)}>Showcase</a>
            <a href="#contact" className="py-2" onClick={() => setOpen(false)}>Contact</a>
            <a href="#get-started" className="inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-white font-medium mt-2" onClick={() => setOpen(false)}>Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}
