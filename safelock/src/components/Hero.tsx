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
      className="bg-gradient-to-b from-slate-50 to-white py-28 px-4"
      role="region"
      aria-label="כספות בטוחות - כספת למשרד, כספת נשק, כספת ביטוחית"
      lang="he"
    >
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

      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 leading-tight">
          כספת למשרד | כספת נשק | כספת ביטוחית
          <br />
          <span className="text-blue-900">כספות בטוחות לעסקים ובעלי נשק</span>
        </h1>

        <h2 className="text-lg md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          מגוון כספות איכותיות: כספת משרדית דיגיטלית, כספת נשק תקנית, כספת ביטוחית חזקה.
          השאירו פרטים לקבלת הצעת מחיר מותאמת
        </h2>

        <Button
          onClick={scrollToContact}
          className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-full transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg mb-16"
          aria-label="קבל הצעת מחיר לכספת למשרד, כספת נשק או כספת ביטוחית"
          role="button"
        >
          אני רוצה הצעת מחיר
        </Button>

        {/* Benefits List */}
        <section
          aria-labelledby="benefits-heading"
          className="max-w-3xl mx-auto"
          lang="he"
        >
          <h3
            id="benefits-heading"
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-8"
          >
            למה לבחור ב-Take Safe לכספת שלכם?
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-right list-none">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-600 text-xl" aria-hidden="true">
                  ✔️
                </span>
                <span className="text-lg text-slate-700">{benefit}</span>
              </li>
            ))}
          </ul>
          
          {/* Safe types quick mention */}
          <p className="mt-8 text-gray-600">
            מומחים בכל סוגי הכספות: <strong>כספות משרדיות</strong>, <strong>כספות נשק</strong>, <strong>כספות ביטוחיות</strong> ועוד
          </p>
        </section>
      </div>
    </section>
  );
};

export default Hero;