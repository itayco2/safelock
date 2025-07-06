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
    name: "Take Safe - כספות בטוחות לעסקים ובעלי נשק",
    description:
      "Take Safe מתמחים במכירת כספות, התקנה ושירותי פריצה מהירים בפריסה ארצית. הגנו על העסק שלכם עם פתרונות מותאמים אישית.",
    url: "https://www.takesafe.co.il",
  };

  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-slate-50 to-white py-28 px-4"
      role="region"
      aria-label="הצעת כספות בטוחות לעסקים ובעלי נשק"
      lang="he"
    >
      <Helmet>
        <title>Take Safe - כספות בטוחות לעסקים ובעלי נשק</title>
        <meta
          name="description"
          content="Take Safe מתמחים במכירת כספות איכותיות, שירותי פריצה, התקנה ותיקונים בפריסה ארצית. קבלו הצעת מחיר מותאמת אישית עכשיו."
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-10">
          <img
            src="assets/images/logo.jpg"
            alt="לוגו Take Safe - כספות בטוחות לעסקים ובעלי נשק"
            className="w-40 h-40 mx-auto mb-6"
            loading="eager"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 leading-tight">
          כספות בטוחות לעסקים ובעלי נשק
          <br />
          <span className="text-blue-900">אבטחה מקצועית ושקט נפשי</span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          השאירו פרטים עכשיו לקבלת הצעה מותאמת אישית – כולל שירות פריצה במידת
          הצורך
        </p>

        <Button
          onClick={scrollToContact}
          className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-full transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg mb-16"
          aria-label="מעבר לטופס יצירת קשר לקבלת הצעת מחיר"
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
          <h2
            id="benefits-heading"
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-8"
          >
            למה לבחור ב-Take Safe?
          </h2>
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
        </section>
      </div>
    </section>
  );
};

export default Hero;
