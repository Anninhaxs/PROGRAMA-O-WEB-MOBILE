// app/components/Footer.js
export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto py-12 px-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-gray-500 text-sm">
        © 2026 <span className="text-white font-medium">Anna Beatriz</span>. All rights reserved.
      </p>
      <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
        <a href="#about" className="hover:text-purple-500 transition">About</a>
        <a href="#projects" className="hover:text-purple-500 transition">Projects</a>
        <a href="#contact" className="hover:text-purple-500 transition">Contact</a>
      </div>
    </footer>
  );
}