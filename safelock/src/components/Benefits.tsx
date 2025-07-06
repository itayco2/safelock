import { Shield, Clock, Users, Wrench, Award } from "lucide-react";
import { Helmet } from "react-helmet";

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

  return (
    <>
      <Helmet>
        <title>למה לבחור ב-Take Safe? פתרונות כספות מקצועיים ואמינים</title>
        <meta
          name="description"
          content="Take Safe – מומחים בכספות, פריצות ושירותי אבטחה עם ניסיון רב ושירות 24/7. פתרונות מותאמים אישית לאבטחת הנכסים שלך."
        />
        <meta name="keywords" content="כספות, פריצות כספות, שירות פריצה, התקנת כספות, אבטחה, שירות 24/7, Take Safe, שירות לקוחות, אבטחת נכסים" />
        <html lang="he" />
      </Helmet>

      <main className="py-20 px-4 bg-white">
        <article className="max-w-6xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              למה לבחור ב-Take Safe? פתרונות כספות מקצועיים
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              מומחים באבטחת כספות, פריצות ושירותי התקנה עם שירות לקוחות יוצא מן הכלל
            </p>
          </header>

          <section
            aria-label="יתרונות Take Safe – ניסיון, שירות ומהירות"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <article
                key={index}
                className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                aria-labelledby={`benefit-title-${index}`}
                role="region"
              >
                <div className="text-blue-900 mb-4">{benefit.icon}</div>
                <h2
                  id={`benefit-title-${index}`}
                  className="text-xl font-semibold text-slate-900 mb-3"
                >
                  {benefit.title}
                </h2>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </article>
            ))}
          </section>
        </article>
      </main>
    </>
  );
};

export default Benefits;
