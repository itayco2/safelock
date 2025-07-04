
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "אילו סוגי כספות אתם מציעים?",
      answer: "אנו מציעים מגוון רחב של כספות: כספות לנשק, חסינות אש, דיגיטליות, משרדיות, ביתיות וכספות מפתחות. כל כספת מותאמת לצרכים ספציפיים ובמגוון גדלים ורמות אבטחה."
    },
    {
      question: "מה קורה במקרה של צורך בפריצה?",
      answer: "אנו מספקים שירות פריצה מקצועי 24/7 במקרי חירום. הטכנאים שלנו מגיעים עם כלים מתקדמים ופותחים את הכספת בזמן מינימלי ללא נזק למכולות הפלדה."
    },
    {
      question: "כמה זמן לוקחת התקנה?",
      answer: "התקנה סטנדרטית אורכת בין 1-3 שעות, תלוי בסוג הכספת ומיקום ההתקנה. אנו מתאמים מראש ומגיעים עם כל הכלים הנדרשים להתקנה מושלמת."
    },
    {
      question: "האם אתם מספקים אחריות?",
      answer: "כן, אנו מספקים אחריות מלאה על כל הכספות שלנו - 3 שנים על מנגנון הנעילה ושנה על העבודה. בנוסף, אנו מספקים שירות תחזוקה ותמיכה מתמשכת."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            שאלות נפוצות
          </h2>
          <p className="text-xl text-slate-600">
            תשובות לשאלות הנפוצות ביותר מלקוחותינו
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-right bg-white hover:bg-slate-50 transition-colors duration-200 flex items-center justify-between"
              >
                <span className="text-lg font-semibold text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-slate-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-600" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
