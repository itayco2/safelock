import { Shield, Clock, Users, Wrench, Award } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "ניסיון של שנים בתחום הכספות",
      description: "מומחיות מוכחת בכספות ופריצות עם מאות לקוחות מרוצים ברחבי ישראל",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "שירות מהיר ומקצועי 24/7",
      description: "מענה מהיר וזמין לכל מקרי חירום ולפתרונות אבטחה מיידיים",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "פתרון כולל לכספות והתקנות",
      description: "מכירה, התקנה, תחזוקה ושירות פריצה במקום אחד במקצועיות גבוהה",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "שירות אמין במקרי פריצה וחירום",
      description: "מומחים בפתיחת כספות במקרי חירום ושכחת קוד, שירות דיסקרטי ואיכותי",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "אמינות ושירות אישי מותאם",
      description: "יחס אישי ומותאם לצרכי כל לקוח, עם דגש על אבטחה מקסימלית",
    },
  ];

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="py-20 px-4 bg-white">
      <article className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            למה לבחור ב-Take Safe?
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            מומחים באבטחת כספות, פריצות ושירותי התקנה עם שירות לקוחות יוצא מן הכלל
          </p>
        </header>

        <section
          aria-label="יתרונות Take Safe – ניסיון, שירות ומהירות"
          className="mb-16"
        >
          {/* First row - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {benefits.slice(0, 3).map((benefit, index) => (
              <article
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
                aria-labelledby={`benefit-title-${index}`}
                role="region"
              >
                <div className="text-blue-600 mb-6 flex justify-center md:justify-start">
                  {benefit.icon}
                </div>
                <h2
                  id={`benefit-title-${index}`}
                  className="text-xl font-semibold text-slate-900 mb-4 text-center md:text-right"
                >
                  {benefit.title}
                </h2>
                <p className="text-slate-600 leading-relaxed text-center md:text-right">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>

          {/* Second row - 2 items centered with gap */}
          <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
            {benefits.slice(3, 5).map((benefit, index) => (
              <article
                key={index + 3}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 flex-1 md:max-w-md"
                aria-labelledby={`benefit-title-${index + 3}`}
                role="region"
              >
                <div className="text-blue-600 mb-6 flex justify-center md:justify-start">
                  {benefit.icon}
                </div>
                <h2
                  id={`benefit-title-${index + 3}`}
                  className="text-xl font-semibold text-slate-900 mb-4 text-center md:text-right"
                >
                  {benefit.title}
                </h2>
                <p className="text-slate-600 leading-relaxed text-center md:text-right">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <div className="text-center bg-white p-8 rounded-xl shadow-md">
          <p className="text-lg text-slate-700 font-medium mb-6">
            מעוניינים לקבל שירות מקצועי לכספות שלכם?
          </p>
          <button
            onClick={scrollToContact}
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            צור קשר עכשיו
          </button>
        </div>
      </article>
    </main>
  );
};

export default Benefits;