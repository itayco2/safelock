import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { ShoppingCart, Wrench, Key, Settings, Calendar } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "מכירת כספות איכותיות למשרדים ועסקים",
      description:
        "מגוון רחב של כספות איכותיות ממותגים מובילים, פתרונות אמינים ובטוחים לעסק שלך.",
      icon: ShoppingCart,
      keywords: "מכירת כספות, כספות למכירה, חנות כספות",
    },
    {
      title: "התקנת כספות מקצועית ומהירה",
      description: "התקנה מקצועית ומהירה על ידי טכנאים מנוסים, עם אחריות מלאה.",
      icon: Wrench,
      keywords: "התקנת כספות, טכנאי כספות, הרכבת כספת",
    },
    {
      title: "שירות פריצה חירום 24/7",
      description: "שירות פריצה מקצועי במקרי חירום, זמינות מלאה 24 שעות ביממה, 7 ימים בשבוע.",
      icon: Key,
      keywords: "פריצת כספות, פורץ כספות, פתיחת כספת, שכחתי קוד כספת",
    },
    {
      title: "תיקון ותחזוקה של כספות קיימות",
      description: "תיקון ותחזוקה איכותית לשמירה על כספתך במצב מיטבי.",
      icon: Settings,
      keywords: "תיקון כספות, תחזוקת כספות, החלפת מנעול כספת",
    },
    {
      title: "השכרת כספות לתקופות שונות",
      description: "השכרת כספות לתקופות קצרות וארוכות במחירים אטרקטיביים.",
      icon: Calendar,
      keywords: "השכרת כספות, כספת להשכרה, כספות להשכרה",
    },
  ];

  // Inject JSON-LD structured data for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "שירותי כספות ופריצה",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Take Safe",
        "telephone": "+972-53-3570350",
        "email": "Takesafe67@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "בן-גוריון 190",
          "addressLocality": "גבעתיים",
          "addressCountry": "IL"
        },
        "areaServed": [
          {"@type": "City", "name": "תל אביב"},
          {"@type": "City", "name": "ירושלים"},
          {"@type": "City", "name": "חיפה"},
          {"@type": "City", "name": "ראשון לציון"},
          {"@type": "City", "name": "פתח תקווה"}
        ],
        "url": "https://www.takesafe.co.il"
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
      <Helmet>
        <title>שירותי כספות | מכירה | התקנה | פריצה 24/7 | תיקון | השכרה | Take Safe</title>
        <meta
          name="description"
          content="שירותי כספות מקצועיים: מכירת כספות איכותיות, התקנת כספות מקצועית, פריצת כספות 24/7, תיקון ותחזוקה, השכרת כספות. שירות בכל הארץ - 053-3570350"
        />
        <meta name="keywords" content="שירותי כספות, מכירת כספות, התקנת כספות, פריצת כספות, פורץ כספות, תיקון כספות, השכרת כספות, טכנאי כספות, פתיחת כספת, שכחתי קוד כספת, החלפת מנעול כספת, כספות 24/7" />
        <meta property="og:title" content="שירותי כספות Take Safe - מכירה, התקנה, פריצה 24/7" />
        <meta property="og:description" content="פתרון כולל לכל הצרכים הקשורים לכספות ואבטחה" />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            השירותים שלנו
          </h1>
          <h2 className="text-xl text-slate-600 max-w-2xl mx-auto">
            פתרון כולל לכל הצרכים הקשורים לכספות ואבטחה
          </h2>
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
                itemScope
                itemType="https://schema.org/Service"
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
                  itemProp="name"
                >
                  {service.title}
                </h3>
                <p
                  id={`service-desc-${index}`}
                  className="text-slate-600 leading-relaxed"
                  itemProp="description"
                >
                  {service.description}
                </p>
                <meta itemProp="keywords" content={service.keywords} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;