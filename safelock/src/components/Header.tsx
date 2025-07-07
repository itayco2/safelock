import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navigateToHome = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
    setIsMobileMenuOpen(false);
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

  const navItems = [
    { label: "ראשי", section: "hero" },
    { label: "סוגי כספות", section: "safes" },
    { label: "שירותים", section: "services" },
    { label: "לקוחות", section: "clients" },
    { label: "צור קשר", section: "contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50" role="banner" lang="he">
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
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu Button - Right Side on Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-blue-900 transition-colors order-1 md:order-none"
            aria-label="תפריט ניווט"
            type="button"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo - Center */}
          <div
            className="flex items-center cursor-pointer absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none"
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
              className="w-12 h-12 md:w-20 md:h-20"
              loading="eager"
            />
          </div>

          {/* Desktop Navigation */}
          <nav aria-label="ניווט ראשי" className="hidden lg:flex items-center">
            {navItems.map((item, index) => (
              <div key={item.section} className="flex items-center">
                <button
                  onClick={() => scrollToSection(item.section)}
                  className="text-slate-700 hover:text-blue-900 transition-colors px-3 text-base"
                  aria-label={`מעבר ל${item.label}`}
                  type="button"
                >
                  {item.label}
                </button>
                {index < navItems.length - 1 && (
                  <span className="text-slate-400 mx-2" aria-hidden="true">
                    |
                  </span>
                )}
              </div>
            ))}
          </nav>

          {/* Phone Number - Left Side */}
          <a
            href="tel:0509914009"
            className="flex items-center text-blue-900 font-semibold hover:text-blue-800 transition-colors text-sm md:text-base order-3 md:order-none"
            aria-label="התקשרו אלינו"
          >
            <Phone className="w-4 h-4 md:w-5 md:h-5 ml-2" aria-hidden="true" />
            <span className="hidden sm:inline">050-9914009</span>
            <span className="sm:hidden">חייגו</span>
          </a>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-3 border-t border-slate-200" aria-label="ניווט מובייל">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="block w-full text-right py-2.5 px-4 text-slate-700 hover:bg-slate-50 hover:text-blue-900 transition-colors text-base"
                aria-label={`מעבר ל${item.label}`}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;