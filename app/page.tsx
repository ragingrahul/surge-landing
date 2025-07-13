import Header from "./components/Header";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
// import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <Analytics />
        <Features />
        <HowItWorks />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
