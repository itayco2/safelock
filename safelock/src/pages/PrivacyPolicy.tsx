import { useEffect } from "react";
import Header from "@/components/Header";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50" lang="he" aria-label="מדיניות פרטיות">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article className="bg-white rounded-lg shadow-lg p-8 space-y-12">
            {/* Introduction */}
            <section>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">מדיניות פרטיות</h1>
              <p className="text-gray-700 leading-relaxed">
                ב-Take Safe, אנו מחויבים להגן על פרטיותך ולשמור על המידע האישי שלך. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע שלך כאשר אתה משתמש בשירותים שלנו.
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">איסוף מידע</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">מידע שאתה מספק לנו:</h3>
                  <ul className="list-disc list-inside text-gray-700 mr-4 space-y-1">
                    <li>שם מלא ופרטי התקשרות (טלפון, כתובת אימייל)</li>
                    <li>כתובת למשלוח והתקנה</li>
                    <li>פרטי תשלום (מעובדים באופן מאובטח)</li>
                    <li>העדפות ודרישות לגבי סוג הכספת</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">מידע שנאסף אוטומטית:</h3>
                  <ul className="list-disc list-inside text-gray-700 mr-4 space-y-1">
                    <li>כתובת IP ומיקום כללי</li>
                    <li>סוג הדפדפן ומערכת ההפעלה</li>
                    <li>זמני גישה ודפים שנצפו</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Use of Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">שימוש במידע</h2>
              <p className="text-gray-700 mb-3">אנו משתמשים במידע שנאסף למטרות הבאות:</p>
              <ul className="list-disc list-inside text-gray-700 mr-4 space-y-1">
                <li>עיבוד הזמנות ומתן שירותי התקנה</li>
                <li>תקשורת לגבי ההזמנה והשירות</li>
                <li>מתן תמיכה טכנית ושירות לקוחות</li>
                <li>שיפור השירותים והמוצרים שלנו</li>
                <li>משלוח עדכונים ומבצעים (עם אפשרות הסרה)</li>
                <li>עמידה בדרישות החוק והרגולציה</li>
              </ul>
            </section>

            {/* Information Protection */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">הגנה על המידע</h2>
              <p className="text-gray-700 leading-relaxed">
                אנו נוקטים באמצעי אבטחה מתקדמים כדי להגן על המידע שלך מפני גישה לא מורשית, שינוי, חשיפה או השמדה. זה כולל:
              </p>
              <ul className="list-disc list-inside text-gray-700 mr-4 mt-3 space-y-1">
                <li>הצפנת SSL לכל העברות המידע</li>
                <li>אחסון מאובטח של נתונים רגישים</li>
                <li>הגבלת גישה למידע אישי לעובדים מורשים בלבד</li>
                <li>ביקורות אבטחה תקופתיות</li>
              </ul>
            </section>

            {/* Sharing Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">שיתוף מידע</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                אנו לא מוכרים או משכירים את המידע האישי שלך לצדדים שלישיים. אנו עשויים לשתף מידע רק במקרים הבאים:
              </p>
              <ul className="list-disc list-inside text-gray-700 mr-4 space-y-1">
                <li>עם ספקי שירות המסייעים בתפעול העסק (משלוחים, התקנות)</li>
                <li>כאשר נדרש על פי חוק או צו בית משפט</li>
                <li>להגנה על זכויותינו או בטיחות לקוחותינו</li>
                <li>בהסכמתך המפורשת</li>
              </ul>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">זכויותיך</h2>
              <p className="text-gray-700 mb-3">על פי חוק הגנת הפרטיות, יש לך את הזכויות הבאות:</p>
              <ul className="list-disc list-inside text-gray-700 mr-4 space-y-1">
                <li>לבקש לעיין במידע שאנו שומרים עליך</li>
                <li>לבקש תיקון מידע שגוי או לא מעודכן</li>
                <li>לבקש מחיקת המידע שלך (בכפוף למגבלות חוקיות)</li>
                <li>להתנגד לשימושים מסוימים במידע שלך</li>
                <li>לבטל הסכמה לקבלת דיוור שיווקי</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">עוגיות (Cookies)</h2>
              <p className="text-gray-700 leading-relaxed">
                אנו משתמשים בעוגיות כדי לשפר את חוויית הגלישה שלך. עוגיות הן קבצים קטנים הנשמרים במחשב שלך ומסייעים לנו:
              </p>
              <ul className="list-disc list-inside text-gray-700 mr-4 mt-3 space-y-1">
                <li>לזכור את העדפותיך</li>
                <li>לנתח את השימוש באתר</li>
                <li>לשפר את הביצועים והפונקציונליות</li>
              </ul>
              <p className="text-gray-700 mt-3">
                באפשרותך לנהל או למחוק עוגיות דרך הגדרות הדפדפן שלך.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">פרטיות ילדים</h2>
              <p className="text-gray-700 leading-relaxed">
                השירותים שלנו אינם מיועדים לילדים מתחת לגיל 18. אנו לא אוספים ביודעין מידע אישי מילדים. אם אתה הורה או אפוטרופוס וגילית שילדך סיפק לנו מידע אישי, אנא צור איתנו קשר.
              </p>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">עדכונים למדיניות</h2>
              <p className="text-gray-700 leading-relaxed">
                אנו עשויים לעדכן את מדיניות הפרטיות מעת לעת. שינויים מהותיים יפורסמו באתר ונודיע ללקוחות רשומים. המשך השימוש בשירותים שלנו לאחר השינויים מהווה הסכמה למדיניות המעודכנת.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">צור קשר</h2>
              <p className="text-gray-700 mb-4">
                לשאלות או בקשות בנושא פרטיות, ניתן לפנות אלינו:
              </p>
              <address className="bg-gray-50 p-6 rounded-lg not-italic text-gray-700">
                <p className="mb-2"><strong>טלפון:</strong> <a href="tel:0509914009" className="text-blue-900 underline">050-9914009</a></p>
                <p className="mb-2"><strong>אימייל:</strong> <a href="mailto:Takesafe67@gmail.com" className="text-blue-900 underline">Takesafe67@gmail.com</a></p>
                <p><strong>כתובת:</strong> בן-גוריון 190, גבעתיים, ישראל</p>
              </address>
            </section>

            {/* Last Updated */}
            <footer className="text-center pt-8 border-t border-gray-200">
              <p className="text-gray-600">עודכן לאחרונה: יולי 2025</p>
            </footer>
          </article>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
