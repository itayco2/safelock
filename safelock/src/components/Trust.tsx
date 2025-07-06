import { useEffect } from "react";

const Trust = () => {
  useEffect(() => {
    // Inject structured data about organization and aggregate rating for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Take Safe",
      "url": window.location.origin,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "bestRating": "5",
        "ratingCount": 500,
        "reviewCount": 500,
        "description": "שביעות רצון גבוהה של מאות לקוחות מרוצים",
      },
      "department": {
        "@type": "LocalBusiness",
        "name": "שירות פריצה והתקנת כספות",
        "telephone": "0533570350",
        "areaServed": "ישראל",
        "availableService": {
          "@type": "Service",
          "name": "התקנת כספות",
          "serviceType": "התקנה ותחזוקה של כספות"
        }
      }
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
      className="py-16 px-4 bg-blue-900 text-white"
      aria-labelledby="trust-heading"
      lang="he"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div
            className="flex justify-center items-center space-x-4 mb-6"
            aria-hidden="true"
          >
            <div className="flex -space-x-2">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center font-semibold text-lg">
                👤
              </div>
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center font-semibold text-lg">
                👤
              </div>
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center font-semibold text-lg">
                👤
              </div>
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center font-semibold text-lg">
                +
              </div>
            </div>
          </div>

          <h2
            id="trust-heading"
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            מאות לקוחות מרוצים – ניסיון של שנים בתחום האבטחה והפריצות
          </h2>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            אנחנו גאים בשירות המקצועי שלנו ובאמון שלקוחותינו נותנים בנו. מעסקים
            קטנים ועד חברות גדולות - כולם בוחרים ב-Take Safe.
          </p>
        </div>

        <ul
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          aria-label="נתוני ביצועים"
        >
          <li className="text-center">
            <div
              className="text-3xl font-bold text-white mb-2"
              aria-label="יותר מ-500 כספות הותקנו על ידי החברה"
            >
              500+
            </div>
            <div className="text-blue-200">כספות הותקנו</div>
          </li>
          <li className="text-center">
            <div
              className="text-3xl font-bold text-white mb-2"
              aria-label="זמינות שירות מלאה 24 שעות ביממה, 7 ימים בשבוע"
            >
              24/7
            </div>
            <div className="text-blue-200">שירות זמינות</div>
          </li>
          <li className="text-center">
            <div
              className="text-3xl font-bold text-white mb-2"
              aria-label="שביעות רצון של 100 אחוז מהלקוחות"
            >
              100%
            </div>
            <div className="text-blue-200">שביעות רצון</div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Trust;
