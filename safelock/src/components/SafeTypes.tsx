import { Shield, Flame, Smartphone, Building, Home, Key, Briefcase, Lock } from "lucide-react";

const SafeTypes = () => {
 const safeTypes = [
  {
    title: "כספת למשרד GS-600",
    description: "מתאימה למשרדים ועסקים, כוללת מנגנון נעילה אלקטרוני עם אפשרות לפתיחה בקוד, מפתח או טביעת אצבע.",
    icon: Briefcase,
    image: "assets/images/safeoffice.jpeg",
    overlayText: "גובה 60 ס\"מ\nרוחב 42 ס\"מ\nעומק 38 ס\"מ"
  },
  {
    title: "כספת נשק תקנית BK-250",
    description: "כספת קומפקטית ובטוחה לנשק אישי, עם נעילה מכנית חזקה ודלת מחוזקת.",
    icon: Shield,
    image: "assets/images/wepondsafe.jpeg",
    overlayText: "גובה 20 ס\"מ\nרוחב 30 ס\"מ\nעומק 25 ס\"מ\nדלת 8 מ\"מ\nגוף 4 מ\"מ\n4 בריחי נעילה ל־3 כיוונים"
  },
  {
    title: "כספת תקנית לביטוח GS-450",
    description: "כספת עמידה וחזקה, מתאימה לעמידה בדרישות ביטוח עם גוף ודלת בעובי מיוחד ונפח פנימי גדול.",
    icon: Lock,
    image: "assets/images/officesafe2.jpeg",
    overlayText: "גובה 45 ס\"מ\nרוחב 38 ס\"מ\nעומק 33 ס\"מ\nמשקל 55 ק\"ג\nדלת 10 מ\"מ\nגוף 6 מ\"מ"
  }
];


  return (
    <section id="safes" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            סוגי הכספות שלנו
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            מגוון רחב של כספות איכותיות לכל צורך ותקציב
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safeTypes.map((safe, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <safe.icon className="w-8 h-8 text-blue-900 ml-3" />
                <h3 className="text-xl font-semibold text-slate-900">
                  {safe.title}
                </h3>
              </div>
              <div className="relative overflow-hidden rounded-lg mb-4 h-80">
                <img
                  src={safe.image}
                  alt={safe.title}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70"
                />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                 <p className="text-white text-lg font-medium px-4 text-center whitespace-pre-line">
                 {safe.overlayText}
                  </p>
                </div>

              </div>
              <p className="text-slate-600 leading-relaxed">
                {safe.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafeTypes;
