import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
