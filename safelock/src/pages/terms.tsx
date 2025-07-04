import Header from "@/components/Header";

const Terms = () => {
  return (
    <>
      <Header/>
      <main className="max-w-4xl mx-auto px-4 py-20">
  <h1 className="text-3xl font-bold mb-6">תנאי שימוש</h1>

  <div className="space-y-6 text-slate-700 leading-relaxed">
    <p>
      ברוכים הבאים לאתר Take Safe ("האתר"). השימוש באתר זה כפוף לתנאים ולהגבלות כמפורט להלן.
      השימוש והגלישה באתר מהווים הסכמה מצדך לכל התנאים.
    </p>

    <h2 className="text-xl font-semibold mt-8">שימוש באתר</h2>
    <p>
      המשתמש מתחייב להשתמש באתר ובתכניו בהתאם להוראות כל דין ולמטרות חוקיות בלבד.
      חל איסור להעתיק, לשכפל, להפיץ או לפרסם תכנים מהאתר ללא אישור מראש ובכתב מבעלי Take Safe.
    </p>

    <h2 className="text-xl font-semibold mt-8">שירותים ומידע</h2>
    <p>
      האתר מציע מידע ושירותים הקשורים למכירת כספות, התקנות, תחזוקה, פריצה ושירותים נוספים.
      המידע המוצג באתר הוא למטרות כלליות בלבד ואינו מהווה התחייבות כלשהי מטעם Take Safe.
    </p>

    <h2 className="text-xl font-semibold mt-8">הגבלת אחריות</h2>
    <p>
      Take Safe אינה אחראית לנזקים ישירים או עקיפים שעלולים להיגרם עקב שימוש באתר,
      הסתמכות על המידע או קבלת שירותים באמצעות האתר.
    </p>

    <h2 className="text-xl font-semibold mt-8">פרטיות</h2>
    <p>
      Take Safe מתחייבת לשמור על פרטיות המשתמשים בהתאם למדיניות הפרטיות.
      שימוש בפרטים אישיים יתבצע לפי הוראות הדין בלבד.
    </p>

    <h2 className="text-xl font-semibold mt-8">שינויים ועדכונים</h2>
    <p>
      Take Safe רשאית לשנות ולעדכן את תנאי השימוש מעת לעת, ללא הודעה מוקדמת.
      התנאים החדשים יחייבו מרגע פרסומם באתר.
    </p>

    <h2 className="text-xl font-semibold mt-8">יצירת קשר</h2>
    <p>
      בכל שאלה ניתן ליצור קשר בדוא"ל
      <a href="mailto:office.safelock@gmail.com" className="text-blue-600 underline mx-1">
        office.safelock@gmail.com
      </a>
      או בטלפון
      <a href="tel:0533570350" className="text-blue-600 underline mx-1">
        053-3570350
      </a>.
    </p>
  </div>
</main>

    </>
  );
};

export default Terms;
