
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SafeTypes from "@/components/SafeTypes";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Articles from "@/components/Articles";
import Clients from "@/components/Clients";
import Trust from "@/components/Trust";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SafeContentBlock from "@/components/SafeContentBlock";
import CinematicSafeIntro from "@/components/CinematicSafeIntro";

const Index = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <CinematicSafeIntro />
      <Header />
      <Hero />
      <SafeTypes />
      <Services />
      <Benefits />
      {/* <Articles /> */}
      <SafeContentBlock />
      <Clients />
      <Trust />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
