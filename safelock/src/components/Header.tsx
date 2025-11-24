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
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100" role="banner" lang="he">
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
        <div className="flex items-center justify-between h-18 md:h-22">
          {/* Mobile Menu Button - Right Side on Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-blue-900 transition-colors order-1 md:order-none rounded-lg hover:bg-gray-100"
            aria-label="תפריט ניווט"
            type="button"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="w-14 h-14 md:w-24 md:h-24 rounded-lg shadow-md"
              loading="eager"
            />
          </div>

          {/* Desktop Navigation */}
          <nav aria-label="ניווט ראשי" className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="text-slate-700 hover:text-blue-900 transition-all px-4 py-2 text-base font-medium rounded-lg hover:bg-blue-50 relative group"
                aria-label={`מעבר ל${item.label}`}
                type="button"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Phone Number - Left Side */}
          <a
            href="tel:0509250905"
            className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm md:text-base order-3 md:order-none"
            aria-label="התקשרו אלינו: 050-9250905"
          >
            <Phone className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
            <span className="hidden sm:inline">050-9250905</span>
            <span className="sm:hidden">חייגו</span>
          </a>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-slate-200 bg-white" aria-label="ניווט מובייל">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="block w-full text-right py-3 px-4 text-slate-700 hover:bg-blue-50 hover:text-blue-900 transition-colors text-base font-medium rounded-lg mx-2"
                aria-label={`מעבר ל${item.label}`}
                type="button"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:0509250905"
              className="block w-full text-right py-3 px-4 bg-blue-900 text-white hover:bg-blue-800 transition-colors text-base font-semibold rounded-lg mx-2 mt-2 flex items-center justify-end gap-2"
              aria-label="התקשרו אלינו"
            >
              <Phone className="w-5 h-5" />
              050-9250905
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
