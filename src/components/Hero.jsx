import Spline from '@splinetool/react-spline';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6y0r3m7N4bG2J1c6/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
          <Star size={14} className="text-yellow-500" />
          Beautiful, modern, fast
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Launch a polished app experience in minutes
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          A clean, thoughtfully designed starter with React, Tailwind, and 3D visuals. Build delightful interfaces without the setup fuss.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#get-started" className="inline-flex items-center rounded-full bg-black px-5 py-3 text-white font-medium hover:bg-black/90 transition-colors">Get Started</a>
          <a href="#features" className="inline-flex items-center rounded-full px-5 py-3 font-medium border border-black/10 hover:bg-black/5 transition-colors">Explore Features</a>
        </div>
      </div>
    </section>
  );
}
