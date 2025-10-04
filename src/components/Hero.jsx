import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/30 to-neutral-950/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
            Build modern digital workspaces
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80">
            Orchestrate multiple screens in real-time with a sleek, innovative interface. Align, grid, and collaborate across devices with effortless precision.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#features" className="px-5 py-3 rounded-lg bg-cyan-500 text-neutral-950 font-medium hover:bg-cyan-400 transition">
              Explore features
            </a>
            <a href="#contact" className="px-5 py-3 rounded-lg border border-white/15 hover:border-white/30 transition">
              Book a demo
            </a>
          </div>
          <div className="mt-6 text-xs text-white/60">
            Theme: Multiple little screens in two configurations — aligned center and as a grid. Technology, digital, corporate, modern, innovative.
          </div>
        </div>
      </div>
    </section>
  );
}
