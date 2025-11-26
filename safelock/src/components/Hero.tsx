import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    "ניסיון של שנים בפריצה והתקנה",
    "שירות מהיר ותגובה בזמן אמת",
    "פתרון כולל – מכירה, התקנה, פריצה, תיקון",
    "אמינות ומקצועיות בלתי מתפשרת",
    "התאמה אישית לפי הצורך שלך",
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Take Safe - כספת למשרד | כספת נשק | כספת ביטוחית",
    description: "Take Safe מתמחים במכירת כספות: כספת למשרד דיגיטלית, כספת נשק תקנית, כספת ביטוחית. התקנה ופריצה 24/7",
    url: "https://www.takesafe.co.il",
    keywords: "כספת למשרד, כספת נשק, כספת ביטוחית, כספת דיגיטלית, כספת משרדית, כספת לאקדח, כספת לרובה, כספת לכסף, כספת לתכשיטים",
    mainEntity: {
      "@type": "LocalBusiness",
      "name": "Take Safe",
      "telephone": "+972-53-3570350",
      "email": "Takesafe67@gmail.com",
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "כספת למשרד",
            "description": "כספת משרדית דיגיטלית עם טביעת אצבע"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "כספת נשק",
            "description": "כספת נשק תקנית לאקדח ורובה"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "כספת ביטוחית",
            "description": "כספת מאושרת ביטוח לכסף ותכשיטים"
          }
        }
      ]
    }
  };

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-white py-32 px-4 overflow-hidden"
      role="region"
      aria-label="כספות בטוחות - כספת למשרד, כספת נשק, כספת ביטוחית"
      lang="he"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <Helmet>
        <title>כספת למשרד | כספת נשק | כספת ביטוחית | Take Safe - כספות למכירה</title>
        <meta
          name="description"
          content="כספת למשרד דיגיטלית GS-600 | כספת נשק תקנית BK-250 | כספת ביטוחית GS-450. מכירה, התקנה ופריצת כספות 24/7. משלוח לכל הארץ. חייגו: 050-9914009"
        />
        <meta 
          name="keywords" 
          content="כספת למשרד, כספת נשק, כספת ביטוחית, כספת דיגיטלית, כספת משרדית, כספת לאקדח, כספת לרובה, כספת לכסף, כספת לתכשיטים, כספת למסמכים, כספת עם טביעת אצבע, כספת אלקטרונית, כספות למכירה, מחיר כספת" 
        />
        
        {/* Rich snippets for products */}
        <meta property="product:brand" content="Take Safe" />
        <meta property="product:availability" content="in stock" />
        <meta property="product:condition" content="new" />
        <meta property="product:price:currency" content="ILS" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          שירות מקצועי 24/7 | מאות לקוחות מרוצים
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
          כספת למשרד | כספת נשק | כספת ביטוחית
          <br />
          <span className="text-blue-900 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
            כספות בטוחות לעסקים ובעלי נשק
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
          מגוון כספות איכותיות: כספת משרדית דיגיטלית, כספת נשק תקנית, כספת ביטוחית חזקה.
          <br className="hidden md:block" />
          <span className="text-blue-900 font-semibold">השאירו פרטים לקבלת הצעת מחיר מותאמת</span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <Button
            onClick={scrollToContact}
            className="bg-blue-900 hover:bg-blue-800 text-white px-10 py-6 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
            aria-label="קבל הצעת מחיר לכספת למשרד, כספת נשק או כספת ביטוחית"
            role="button"
          >
            אני רוצה הצעת מחיר
          </Button>
          <a
            href="tel:073-8026979"
            className="flex items-center gap-3 px-8 py-6 bg-white text-blue-900 border-2 border-blue-900 rounded-xl text-xl font-bold transition-all duration-300 hover:bg-blue-50 hover:scale-105 shadow-lg hover:shadow-xl"
            aria-label="התקשרו עכשיו: 073-8026979"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            התקשרו עכשיו
          </a>
        </div>

        {/* Benefits List */}
        <section
          aria-labelledby="benefits-heading"
          className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
          lang="he"
        >
          <h3
            id="benefits-heading"
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center"
          >
            למה לבחור ב-Take Safe לכספת שלכם?
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right list-none">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50/50 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-medium text-slate-800 leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
          
          {/* Safe types quick mention */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-700 text-lg">
              מומחים בכל סוגי הכספות: <strong className="text-blue-900">כספות משרדיות</strong>, <strong className="text-blue-900">כספות נשק</strong>, <strong className="text-blue-900">כספות ביטוחיות</strong> ועוד
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;