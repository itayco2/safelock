import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "אילו סוגי כספות אתם מציעים?",
      answer:
        "אנו מציעים מגוון רחב של כספות: כספות לנשק, חסינות אש, דיגיטליות, משרדיות, ביתיות וכספות מפתחות. כל כספת מותאמת לצרכים ספציפיים ובמגוון גדלים ורמות אבטחה.",
    },
    {
      question: "מה קורה במקרה של צורך בפריצה?",
      answer:
        "אנו מספקים שירות פריצה מקצועי 24/7 במקרי חירום. הטכנאים שלנו מגיעים עם כלים מתקדמים ופותחים את הכספת בזמן מינימלי ללא נזק למכולות הפלדה.",
    },
    {
      question: "כמה זמן לוקחת התקנה?",
      answer:
        "התקנה סטנדרטית אורכת בין 1-3 שעות, תלוי בסוג הכספת ומיקום ההתקנה. אנו מתאמים מראש ומגיעים עם כל הכלים הנדרשים להתקנה מושלמת.",
    },
    {
      question: "האם אתם מספקים אחריות?",
      answer:
        "כן, אנו מספקים אחריות מלאה על כל הכספות שלנו - 3 שנים על מנגנון הנעילה ושנה על העבודה. בנוסף, אנו מספקים שירות תחזוקה ותמיכה מתמשכת.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ SEO: Inject FAQPage structured data
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-white" aria-labelledby="faq-heading">
      <Helmet>
        <title>שאלות ותשובות - Take Safe | כל מה שצריך לדעת על כספות</title>
        <meta
          name="description"
          content="מצא תשובות לשאלות נפוצות על התקנת כספות, שירות פריצה, סוגי כספות ואחריות עם Take Safe. מידע אמין ושירות מקצועי."
        />
        <html lang="he" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            שאלות נפוצות על כספות Take Safe
          </h1>
          <p className="text-xl text-slate-600">
            כל מה שרציתם לדעת על שירותי התקנה, פריצה, ואחריות לכספות
          </p>
        </header>

        <dl className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden"
              >
                <dt>
                  <button
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                    className="w-full px-6 py-4 text-right bg-white hover:bg-slate-50 transition-colors duration-200 flex items-center justify-between text-lg font-semibold text-slate-900"
                  >
                    {faq.question}
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-600" />
                    )}
                  </button>
                </dt>

                {isOpen && (
                  <dd
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="px-6 py-4 bg-slate-50 border-t border-slate-200 text-slate-700 leading-relaxed"
                  >
                    {faq.answer}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
};

export default FAQ;
