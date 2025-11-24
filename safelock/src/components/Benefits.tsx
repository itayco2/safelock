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
    <main className="py-24 px-4 bg-white">
      <article className="max-w-6xl mx-auto">
        <header className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold mb-6">
            היתרונות שלנו
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            למה לבחור ב-Take Safe?
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 hover:border-blue-200"
                aria-labelledby={`benefit-title-${index}`}
                role="region"
              >
                <div className="text-blue-600 mb-6 flex justify-center md:justify-start group-hover:scale-110 transition-transform duration-300">
                  <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                    {benefit.icon}
                  </div>
                </div>
                <h2
                  id={`benefit-title-${index}`}
                  className="text-xl font-bold text-slate-900 mb-4 text-center md:text-right group-hover:text-blue-900 transition-colors"
                >
                  {benefit.title}
                </h2>
                <p className="text-slate-600 leading-relaxed text-center md:text-right text-base">
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
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 hover:border-blue-200 flex-1 md:max-w-md"
                aria-labelledby={`benefit-title-${index + 3}`}
                role="region"
              >
                <div className="text-blue-600 mb-6 flex justify-center md:justify-start group-hover:scale-110 transition-transform duration-300">
                  <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                    {benefit.icon}
                  </div>
                </div>
                <h2
                  id={`benefit-title-${index + 3}`}
                  className="text-xl font-bold text-slate-900 mb-4 text-center md:text-right group-hover:text-blue-900 transition-colors"
                >
                  {benefit.title}
                </h2>
                <p className="text-slate-600 leading-relaxed text-center md:text-right text-base">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <div className="text-center bg-gradient-to-r from-blue-900 to-blue-800 p-10 rounded-2xl shadow-2xl">
          <p className="text-xl text-white font-semibold mb-8">
            מעוניינים לקבל שירות מקצועי לכספות שלכם?
          </p>
          <button
            onClick={scrollToContact}
            className="inline-block px-12 py-5 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg"
          >
            צור קשר עכשיו
          </button>
        </div>
      </article>
    </main>
  );
};

export default Benefits;