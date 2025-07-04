
import { FileText, Clock, ArrowLeft } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      title: "איך לבחור את הכספת הנכונה לבית שלכם",
      summary: "מדריך מקיף לבחירת הכספת המתאימה ביותר לצרכים האישיים שלכם",
      readTime: "5 דקות קריאה",
      category: "מדריכים"
    },
    {
      title: "כספות חסינות אש - מה חשוב לדעת",
      summary: "הכל על רמות החסינות לאש ומה שחשוב לקחת בחשבון",
      readTime: "3 דקות קריאה",
      category: "טכנולוגיה"
    },
    {
      title: "תקנים ישראליים לכספות נשק",
      summary: "המדריך המלא לדרישות החוק והתקנים הנדרשים",
      readTime: "7 דקות קריאה",
      category: "חוקים ותקנים"
    },
    {
      title: "תחזוקה נכונה של כספות - טיפים מקצועיים",
      summary: "איך לשמור על הכספת שלכם במצב מושלם לאורך שנים",
      readTime: "4 דקות קריאה",
      category: "תחזוקה"
    },
    {
      title: "טכנולוגיות נעילה מתקדמות",
      summary: "סקירה של הטכנולוגיות החדישות בעולם הכספות",
      readTime: "6 דקות קריאה",
      category: "טכנולוגיה"
    },
    {
      title: "מה לעשות במקרה של שכחת קוד",
      summary: "פתרונות ואפשרויות כשאתם לא זוכרים את הקוד של הכספת",
      readTime: "3 דקות קריאה",
      category: "פתרון בעיות"
    }
  ];

  return (
    <section id="articles" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            מאמרים מקצועיים
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            ידע מקצועי ומדריכים שיעזרו לכם לקבל החלטות נכונות
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-medium text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <div className="flex items-center text-slate-500 text-sm">
                  <Clock className="w-4 h-4 ml-1" />
                  {article.readTime}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-3 line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                {article.summary}
              </p>
              
              <button className="flex items-center text-blue-900 font-medium hover:text-blue-800 transition-colors">
                קרא עוד
                <ArrowLeft className="w-4 h-4 mr-2" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
