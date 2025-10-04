import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Rocket className="h-6 w-6 text-cyan-400" />
          <span className="text-white font-semibold tracking-tight">ScreenStack</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1.5 rounded-md border border-white/15 text-sm hover:border-white/30 transition">Sign in</button>
          <button className="px-3.5 py-1.5 rounded-md bg-cyan-500 text-neutral-950 text-sm font-medium hover:bg-cyan-400 transition">Get started</button>
        </div>
      </div>
    </header>
  );
}
