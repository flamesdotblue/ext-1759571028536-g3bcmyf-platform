export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="text-white/70 text-sm">© {new Date().getFullYear()} ScreenStack Inc. All rights reserved.</div>
          <div className="flex items-center gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
