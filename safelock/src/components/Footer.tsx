import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-slate-900 text-white py-16 px-6 md:px-12"
      aria-label="Footer"
      lang="he"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center mb-5">
              <h3 className="text-3xl font-extrabold tracking-wide">Take Safe</h3>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg">
              מומחים בכספות ופריצות עם ניסיון של שנים.
              <br />
              אנחנו כאן כדי לשמור על הבטחון שלכם  שירות מקצועי, אמין ומהיר.
            </p>
          </div>

          {/* Services */}
          <nav aria-label="השירותים שלנו">
            <h4 className="text-xl font-semibold mb-6 border-b border-slate-700 pb-2">
              השירותים שלנו
            </h4>
            <ul className="space-y-3 text-slate-400 text-base leading-relaxed">
              <li>• מכירת כספות לעסקים</li>
              <li>• כספות לבעלי נשק</li>
              <li>• התקנה מקצועית</li>
              <li>• שירות פריצה</li>
              <li>• תחזוקה ותיקונים</li>
              <li>• השכרת כספות</li>
            </ul>
          </nav>

          {/* Contact */}
          <section aria-labelledby="contact-heading">
            <h4
              id="contact-heading"
              className="text-xl font-semibold mb-6 border-b border-slate-700 pb-2"
            >
              צרו קשר
            </h4>
            <div className="space-y-5 text-slate-400 text-base">
              <div className="flex items-center gap-3">
                <span role="img" aria-label="טלפון" title="טלפון" className="text-2xl">
                  📞
                </span>
                <a
                  href="tel:0533570350"
                  aria-label="התקשרו ל-0533570350"
                  className="hover:text-white transition-colors font-medium"
                >
                  053-3570350
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span role="img" aria-label="אימייל" title="אימייל" className="text-2xl">
                  ✉️
                </span>
                <a
                  href="mailto:office.safelock@gmail.com"
                  aria-label="שלחו מייל ל-office.safelock@gmail.com"
                  className="hover:text-white transition-colors font-medium"
                >
                  office.safelock@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span role="img" aria-label="וואטסאפ" title="וואטסאפ" className="text-2xl">
                  💬
                </span>
                <a
                  href="https://wa.me/972533570350?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="צור קשר בוואטסאפ"
                  className="hover:text-white transition-colors font-medium"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* Address & Hours */}
          <address className="not-italic" aria-label="כתובת ושעות פעילות">
            <h4 className="text-xl font-semibold mb-6 border-b border-slate-700 pb-2">
              כתובת ושעות פעילות
            </h4>
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
                <span role="img" aria-label="שעות פעילות" title="שעות פעילות" className="text-2xl mt-1">
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

        {/* Bottom bar */}
        <div className="border-t border-slate-700 mt-12 pt-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <p className="text-slate-500 text-sm md:text-base" lang="he">
              © 2025 Take Safe כל הזכויות שמורות
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
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
