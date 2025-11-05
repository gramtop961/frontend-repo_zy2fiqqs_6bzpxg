import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="get-started" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br from-black to-neutral-800 p-8 sm:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_40%)]" />
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to build something great?</h3>
            <p className="mt-2 text-white/70 max-w-2xl">Kickstart your project with a polished foundation. Add components, plug in your API, and ship fast.</p>
            <div className="mt-6">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-black hover:bg-white/90 transition-colors">
                Start Now
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
