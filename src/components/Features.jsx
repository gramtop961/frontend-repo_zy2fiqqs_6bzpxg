import { Sparkles, Shield, Gauge, LayoutPanelTop } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Aesthetic by default',
    desc: 'Thoughtful spacing, elegant typography, and subtle gradients to make everything feel premium.',
  },
  {
    icon: Shield,
    title: 'Production-ready',
    desc: 'Strong foundations with robust configs and best practices to scale with confidence.',
  },
  {
    icon: Gauge,
    title: 'Blazing fast',
    desc: 'Instant feedback with Vite + React. Optimized for performance out of the box.',
  },
  {
    icon: LayoutPanelTop,
    title: 'Composable UI',
    desc: 'Well-structured components that are easy to reuse and extend for your needs.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50 border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything you need to move fast</h2>
          <p className="mt-3 text-gray-600">A focused set of building blocks to ship something you’re proud of.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
