import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const Footer = () => {
  const { openSettings } = useCookieConsent();
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
        contactType: "customer service",
        areaServed: "IL",
        availableLanguage: ["he"]
      }
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "בן-גוריון 190",
      addressLocality: "גבעתיים",
      addressCountry: "IL"
    }
  };

  return (
    <footer
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6 md:px-12 border-t border-slate-700"
      aria-label="כותרת תחתונה"
      lang="he"
    >
      <Helmet>
        <title>Take Safe - שירותי כספות | צור קשר</title>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center mb-6">
              <h2 className="text-4xl font-extrabold tracking-wide bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Take Safe
              </h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg mb-4">
              מומחים לכספות ופריצות עם ניסיון של שנים.
              <br />
              אנחנו כאן לשמור על הבטחון שלכם — שירות אמין, מקצועי ומהיר.
            </p>
            <div className="flex gap-4 mt-6">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-xl">⭐</span>
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-xl">🏆</span>
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-xl">🔒</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="השירותים שלנו">
            <h3 className="text-xl font-bold mb-6 border-b border-slate-700 pb-3">
              השירותים שלנו
            </h3>
            <ul className="space-y-3 text-slate-300 text-base leading-relaxed">
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="text-blue-400">▸</span>
                מכירת כספות לעסקים
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="text-blue-400">▸</span>
                כספות לנשק
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="text-blue-400">▸</span>
                התקנה מקצועית
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="text-blue-400">▸</span>
                שירותי פריצה
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="text-blue-400">▸</span>
                תחזוקה ותיקונים
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="text-blue-400">▸</span>
                השכרת כספות
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <section aria-labelledby="contact-heading">
            <h3
              id="contact-heading"
              className="text-xl font-bold mb-6 border-b border-slate-700 pb-3"
            >
              צור קשר
            </h3>
            <div className="space-y-4 text-slate-300 text-base">
              <a
                href="tel:073-8026979"
                aria-label="התקשרו ל-073-8026979"
                className="flex items-center gap-3 hover:text-white transition-all duration-300 hover:translate-x-1 group"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <span className="text-xl">📞</span>
                </div>
                <span className="font-semibold">073-8026979</span>
              </a>
              <a
                href="mailto:Takesafe67@gmail.com"
                aria-label="שלחו מייל ל-Takesafe67@gmail.com"
                className="flex items-center gap-3 hover:text-white transition-all duration-300 hover:translate-x-1 group"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <span className="text-xl">✉️</span>
                </div>
                <span className="font-semibold break-all">Takesafe67@gmail.com</span>
              </a>
                <a
                  href="https://wa.me/972509250905?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="צור קשר בוואטסאפ"
                  className="flex items-center gap-3 hover:text-white transition-all duration-300 hover:translate-x-1 group"
                >
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <span className="text-xl">💬</span>
                </div>
                <span className="font-semibold">WhatsApp</span>
              </a>
            </div>
          </section>

          {/* Address */}
          <address
            className="not-italic"
            aria-label="כתובת ושעות פעילות"
          >
            <h3 className="text-xl font-semibold mb-6 border-b border-slate-700 pb-2">
              כתובת ושעות פעילות
            </h3>
            <div className="space-y-5 text-slate-400 text-base leading-relaxed">
              <div className="flex items-start gap-3">
                <span
                  role="img"
                  aria-label="מיקום"
                  title="מיקום"
                  className="text-2xl mt-1"
                >
                  📍
                </span>
                <div>
                  <p>בן-גוריון 190</p>
                  <p>גבעתיים, ישראל</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span
                  role="img"
                  aria-label="שעות פעילות"
                  title="שעות פעילות"
                  className="text-2xl mt-1"
                >
                  🕒
                </span>
                <div>
                  <p>א׳-ה׳: 08:00-20:00</p>
                  <p>שירות חירום 24/7</p>
                </div>
              </div>
            </div>
          </address>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <p className="text-slate-500 text-sm md:text-base" lang="he">
              © 2025 Take Safe — כל הזכויות שמורות
            </p>
            <nav aria-label="קישורים תחתונים">
              <div className="flex gap-6 md:gap-8">
                <Link
                  to="/terms"
                  className="text-slate-500 hover:text-white transition-colors text-sm md:text-base"
                >
                  תנאי שימוש
                </Link>
                <Link
                  to="/privacy"
                  className="text-slate-500 hover:text-white transition-colors text-sm md:text-base"
                >
                  מדיניות פרטיות
                </Link>
                <button
                  onClick={openSettings}
                  className="text-slate-500 hover:text-white transition-colors text-sm md:text-base cursor-pointer"
                  aria-label="הגדרות עוגיות"
                >
                  הגדרות עוגיות
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
