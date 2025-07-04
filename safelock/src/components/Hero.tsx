import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    "ניסיון של שנים בפריצה והתקנה",
    "שירות מהיר ותגובה בזמן אמת",
    "פתרון כולל – מכירה, התקנה, פריצה, תיקון",
    "אמינות ומקצועיות בלתי מתפשרת",
    "התאמה אישית לפי הצורך שלך"
  ];

  return (
    <section id="hero" className="bg-gradient-to-b from-slate-50 to-white py-28 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-10">
          <img
            src="/lovable-uploads/5371994a-ea13-4b33-a94e-dd79a9caec70.png"
            alt="Safe Lock Logo"
            className="w-40 h-40 mx-auto mb-6"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 leading-tight">
          כספות בטוחות לעסקים ובעלי נשק
          <br />
          <span className="text-blue-900">אבטחה מקצועית ושקט נפשי</span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          השאירו פרטים עכשיו לקבלת הצעה מותאמת אישית – כולל שירות פריצה במידת הצורך
        </p>

        <Button
          onClick={scrollToContact}
          className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-full transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg mb-16"
        >
          אני רוצה הצעת מחיר
        </Button>

        {/* Benefits List */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            למה לבחור ב-Safe Lock?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-right">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-2"
              >
                <span className="text-green-600 text-xl">✔️</span>
                <span className="text-lg text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
