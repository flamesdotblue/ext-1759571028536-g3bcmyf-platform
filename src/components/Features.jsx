import { Sparkles, Shield, Settings, Monitor } from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: 'Multi-screen orchestration',
    desc: 'Arrange canvases as a centered stack or responsive grid. Drag, snap, and mirror across devices instantly.'
  },
  {
    icon: Sparkles,
    title: 'Real-time presence',
    desc: 'Live cursors, selections, and comments keep teams aligned without switching tabs.'
  },
  {
    icon: Settings,
    title: 'Configurable layouts',
    desc: 'Create presets for dashboards, status boards, and live demos with fine-grained controls.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    desc: 'SSO, audit logs, and granular permissions built for modern IT standards.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Designed for modern teams</h2>
          <p className="mt-3 text-white/70">From live product walkthroughs to mission control dashboards, ScreenStack adapts to your workflow.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-white/10 bg-neutral-900/40 p-5 hover:border-white/20 transition">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900/60 to-neutral-900/20 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="text-xl font-medium">Deploy in minutes</h4>
              <p className="text-white/70 text-sm">Bring your data and screens together. No heavy setup required.</p>
            </div>
            <div className="flex gap-3">
              <a href="#" className="px-4 py-2 rounded-md bg-white text-neutral-950 text-sm font-medium hover:bg-white/90 transition">Start free</a>
              <a href="#" className="px-4 py-2 rounded-md border border-white/15 text-sm hover:border-white/30 transition">Talk to sales</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
