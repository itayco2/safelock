
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SafeTypes from "@/components/SafeTypes";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Clients from "@/components/Clients";
import Trust from "@/components/Trust";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SafeContentBlock from "@/components/SafeContentBlock";
import CinematicSafeIntro from "@/components/CinematicSafeIntro";
import Articles from "@/components/Articles";
import FloatingContactButtons from "@/components/FloatingContactButtons";

const Index = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <CinematicSafeIntro />
      <Header />
      <Hero />
      <SafeTypes />
      <Services />
      <Benefits />
      <SafeContentBlock />
      <Clients />
      <Trust />
      <FAQ />
      <Articles/>
      <ContactForm />
      <Footer />
      <FloatingContactButtons />
    </div>
  );
};

export default Index;
