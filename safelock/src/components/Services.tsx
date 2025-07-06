import { useEffect } from "react";
import { ShoppingCart, Wrench, Key, Settings, Calendar } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "מכירת כספות איכותיות למשרדים ועסקים",
      description:
        "מגוון רחב של כספות איכותיות ממותגים מובילים, פתרונות אמינים ובטוחים לעסק שלך.",
      icon: ShoppingCart,
    },
    {
      title: "התקנת כספות מקצועית ומהירה",
      description: "התקנה מקצועית ומהירה על ידי טכנאים מנוסים, עם אחריות מלאה.",
      icon: Wrench,
    },
    {
      title: "שירות פריצה חירום 24/7",
      description: "שירות פריצה מקצועי במקרי חירום, זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.",
      icon: Key,
    },
    {
      title: "תיקון ותחזוקה של כספות קיימות",
      description: "תיקון ותחזוקה איכותית לשמירה על כספתך במצב מיטבי.",
      icon: Settings,
    },
    {
      title: "השכרת כספות לתקופות שונות",
      description: "השכרת כספות לתקופות קצרות וארוכות במחירים אטרקטיביים.",
      icon: Calendar,
    },
  ];

  // Inject JSON-LD structured data for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "כספות ושירותים נלווים",
      "provider": {
        "@type": "Organization",
        "name": "Take Safe",
        "url": window.location.origin,
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "השירותים שלנו",
        "itemListElement": services.map((service) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.title,
            "description": service.description,
          },
        })),
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section
      id="services"
      aria-label="השירותים שלנו"
      className="py-20 px-4 bg-white"
      lang="he"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            השירותים שלנו
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            פתרון כולל לכל הצרכים הקשורים לכספות ואבטחה
          </p>
        </header>

        <div
          role="list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <article
                key={index}
                role="listitem"
                className="bg-slate-50 rounded-xl p-6 text-center hover:shadow-lg focus:shadow-lg transition-shadow duration-300 outline-none focus:outline-blue-500"
                tabIndex={0}
                aria-labelledby={`service-title-${index}`}
                aria-describedby={`service-desc-${index}`}
              >
                <div
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4"
                  aria-hidden="true"
                >
                  <IconComponent className="w-8 h-8 text-blue-900" />
                </div>
                <h3
                  id={`service-title-${index}`}
                  className="text-xl font-semibold text-slate-900 mb-3"
                >
                  {service.title}
                </h3>
                <p
                  id={`service-desc-${index}`}
                  className="text-slate-600 leading-relaxed"
                >
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;