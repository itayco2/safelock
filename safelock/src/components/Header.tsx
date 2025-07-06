import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Header = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navigateToHome = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Take Safe",
    url: "https://www.takesafe.co.il",
    logo: "https://www.takesafe.co.il/assets/images/logo.jpg",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+972-53-3570350",
        contactType: "customer support",
        areaServed: "IL",
        availableLanguage: ["he"],
      },
    ],
  };

  return (
    <header
      className="bg-white shadow-md sticky top-0 z-50"
      role="banner"
      lang="he"
    >
      <Helmet>
        <title>Take Safe | מומחים בכספות ושירותי פריצה</title>
        <meta
          name="description"
          content="Take Safe - מומחים למכירת כספות, התקנה, פריצה ושירותי תחזוקה בפריסה ארצית. זמינות מלאה ושירות מהיר ללקוחות פרטיים ועסקיים."
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={navigateToHome}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                navigateToHome();
              }
            }}
            aria-label="מעבר לעמוד הבית"
          >
            <img
              src="/assets/images/logo.jpg"
              alt="לוגו Take Safe"
              className="w-14.5 h-14 ml-2"
              loading="eager"
            />
            <span className="text-xl font-bold text-slate-900 mr-2">
              Take Safe
            </span>
          </div>

          {/* Navigation */}
          <nav
            aria-label="ניווט ראשי"
            className="hidden md:flex items-center"
          >
            <button
              onClick={() => scrollToSection("hero")}
              className="text-slate-700 hover:text-blue-900 transition-colors px-4"
              aria-label="מעבר לסקשן ראשי"
              type="button"
            >
              ראשי
            </button>

            <span className="text-slate-400 mx-4" aria-hidden="true">
              |
            </span>

            <button
              onClick={() => scrollToSection("safes")}
              className="text-slate-700 hover:text-blue-900 transition-colors px-4"
              aria-label="מעבר לסוגי כספות"
              type="button"
            >
              סוגי כספות
            </button>

            <span className="text-slate-400 mx-4" aria-hidden="true">
              |
            </span>

            <button
              onClick={() => scrollToSection("services")}
              className="text-slate-700 hover:text-blue-900 transition-colors px-4"
              aria-label="מעבר לסקשן שירותים"
              type="button"
            >
              שירותים
            </button>

            <span className="text-slate-400 mx-4" aria-hidden="true">
              |
            </span>

            <button
              onClick={() => scrollToSection("clients")}
              className="text-slate-700 hover:text-blue-900 transition-colors px-4"
              aria-label="מעבר לסקשן לקוחות"
              type="button"
            >
              לקוחות
            </button>

            <span className="text-slate-400 mx-4" aria-hidden="true">
              |
            </span>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-700 hover:text-blue-900 transition-colors px-4"
              aria-label="מעבר לסקשן צור קשר"
              type="button"
            >
              צור קשר
            </button>
          </nav>

          {/* Call */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:0533570350"
              className="flex items-center text-blue-900 font-semibold hover:text-blue-800 transition-colors"
              aria-label="התקשרו אלינו"
            >
              <Phone className="w-4 h-4 ml-2" aria-hidden="true" />
              053-3570350
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;