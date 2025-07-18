import Header from "@/components/Header";

const Terms = () => {
  return (
    <>
      <Header />
      <main
        className="max-w-4xl mx-auto px-4 py-20"
        lang="he"
        aria-label="תנאי שימוש"
      >
        <h1 className="text-3xl font-bold mb-6">תנאי שימוש</h1>

        <section className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            ברוכים הבאים לאתר Take Safe ("האתר"). השימוש באתר זה כפוף לתנאים
            ולהגבלות כמפורט להלן. השימוש והגלישה באתר מהווים הסכמה מצדך לכל
            התנאים.
          </p>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-2">שימוש באתר</h2>
            <p>
              המשתמש מתחייב להשתמש באתר ובתכניו בהתאם להוראות כל דין ולמטרות חוקיות בלבד.
              חל איסור להעתיק, לשכפל, להפיץ או לפרסם תכנים מהאתר ללא אישור מראש ובכתב
              מבעלי Take Safe.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-2">שירותים ומידע</h2>
            <p>
              האתר מציע מידע ושירותים הקשורים למכירת כספות, התקנות, תחזוקה, פריצה ושירותים נוספים.
              המידע המוצג באתר הוא למטרות כלליות בלבד ואינו מהווה התחייבות כלשהי מטעם Take Safe.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-2">הגבלת אחריות</h2>
            <p>
              Take Safe אינה אחראית לנזקים ישירים או עקיפים שעלולים להיגרם עקב שימוש באתר,
              הסתמכות על המידע או קבלת שירותים באמצעות האתר.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-2">פרטיות</h2>
            <p>
              Take Safe מתחייבת לשמור על פרטיות המשתמשים בהתאם למדיניות הפרטיות.
              שימוש בפרטים אישיים יתבצע לפי הוראות הדין בלבד.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-2">שינויים ועדכונים</h2>
            <p>
              Take Safe רשאית לשנות ולעדכן את תנאי השימוש מעת לעת, ללא הודעה מוקדמת.
              התנאים החדשים יחייבו מרגע פרסומם באתר.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-2">יצירת קשר</h2>
            <p>
              בכל שאלה ניתן ליצור קשר בדוא"ל
              <a
                href="mailto:Takesafe67@gmail.com"
                className="text-blue-600 underline mx-1"
              >
                Takesafe67@gmail.com
              </a>
              או בטלפון
              <a href="tel:0509914009" className="text-blue-600 underline mx-1">
                050-9914009
              </a>
              .
            </p>
          </section>
        </section>
      </main>
    </>
  );
};

export default Terms;
