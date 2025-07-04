
import { Shield, Clock, Users, Wrench, Award } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "ניסיון של שנים בתחום",
      description: "מומחיות מוכחת בכספות ופריצות עם מאות לקוחות מרוצים"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "שירות מהיר ומקצועי",
      description: "מענה מהיר ושירות זמין 24/7 למקרי חירום"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "פתרון כולל לכל צורכי הכספות",
      description: "מכירה, התקנה, תחזוקה ושירות פריצה במקום אחד"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "שירות גם במקרי פריצה",
      description: "מומחים בפתיחת כספות במקרי חירום ושכחת קוד"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "אמינות ושירות אישי",
      description: "יחס אישי לכל לקוח והתאמה מלאה לצרכים הספציפיים"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            למה לבחור ב-Safe Lock?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            אנחנו מספקים פתרונות כספות מקצועיים עם שירות יוצא מן הכלל
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-blue-900 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
