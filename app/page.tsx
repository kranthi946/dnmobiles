import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import DeviceEstimator from "./components/DeviceEstimator";
import Services from "./components/Services";
import Process from "./components/Process";
import Refurbished from "./components/Refurbished";
import WhyChooseUs from "./components/WhyChooseUs";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-carbon transition-colors duration-200">
      <Hero />
      <StatsBar />
      <DeviceEstimator />
      <Services />
      <Process />
      <Refurbished />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
