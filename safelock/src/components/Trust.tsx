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
        "telephone": "0509914009",
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
      className="relative py-24 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden"
      aria-labelledby="trust-heading"
      lang="he"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-8">
            האמון שלנו
          </div>
          
          <div
            className="flex justify-center items-center gap-4 mb-8"
            aria-hidden="true"
          >
            <div className="flex -space-x-3">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center font-semibold text-xl border-2 border-white/30 shadow-lg">
                👤
              </div>
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center font-semibold text-xl border-2 border-white/30 shadow-lg">
                👤
              </div>
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center font-semibold text-xl border-2 border-white/30 shadow-lg">
                👤
              </div>
              <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center font-bold text-2xl border-2 border-white/40 shadow-lg">
                +
              </div>
            </div>
          </div>

          <h2
            id="trust-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight"
          >
            מאות לקוחות מרוצים – ניסיון של שנים בתחום האבטחה והפריצות
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            אנחנו גאים בשירות המקצועי שלנו ובאמון שלקוחותינו נותנים בנו. מעסקים
            קטנים ועד חברות גדולות - כולם בוחרים ב-Take Safe.
          </p>
        </div>

        <ul
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          aria-label="נתוני ביצועים"
        >
          <li className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div
              className="text-5xl font-extrabold text-white mb-3"
              aria-label="יותר מ-500 כספות הותקנו על ידי החברה"
            >
              500+
            </div>
            <div className="text-blue-100 text-lg font-semibold">כספות הותקנו</div>
          </li>
          <li className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div
              className="text-5xl font-extrabold text-white mb-3"
              aria-label="זמינות שירות מלאה 24 שעות ביממה, 7 ימים בשבוע"
            >
              24/7
            </div>
            <div className="text-blue-100 text-lg font-semibold">שירות זמינות</div>
          </li>
          <li className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div
              className="text-5xl font-extrabold text-white mb-3"
              aria-label="שביעות רצון של 100 אחוז מהלקוחות"
            >
              100%
            </div>
            <div className="text-blue-100 text-lg font-semibold">שביעות רצון</div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Trust;
