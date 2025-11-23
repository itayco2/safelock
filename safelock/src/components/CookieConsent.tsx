import { useCookieConsent, CookieCategory } from "@/hooks/useCookieConsent";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const {
    showBanner,
    preferences,
    acceptAll,
    rejectAll,
    savePreferences,
    updatePreference,
    setShowBanner,
    hasCategoryConsent,
    showSettingsDialog,
    setShowSettingsDialog,
  } = useCookieConsent();

  const cookieCategories: {
    key: CookieCategory;
    title: string;
    description: string;
    required: boolean;
  }[] = [
    {
      key: "necessary",
      title: "עוגיות הכרחיות",
      description:
        "עוגיות אלה נחוצות לפעולת האתר ואי אפשר לבטל אותן. הן כוללות עוגיות אבטחה, אימות משתמשים והגדרות בסיסיות.",
      required: true,
    },
    {
      key: "analytics",
      title: "עוגיות אנליטיקה",
      description:
        "עוגיות אלה עוזרות לנו להבין כיצד מבקרים משתמשים באתר שלנו על ידי איסוף מידע אנונימי. זה עוזר לנו לשפר את האתר.",
      required: false,
    },
    {
      key: "marketing",
      title: "עוגיות שיווק",
      description:
        "עוגיות אלה משמשות לעקוב אחר מבקרים באתרים שונים כדי להציג פרסומות רלוונטיות. אנו לא משתמשים בעוגיות שיווק כרגע.",
      required: false,
    },
  ];

  return (
    <>
      {/* Banner */}
      {showBanner && (
        <div
          className="fixed bottom-0 left-0 right-0 z-[100] bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-t-4 border-blue-500 shadow-[0_-8px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm"
          dir="rtl"
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
          style={{
            animation: "slideUp 0.4s ease-out",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">🍪</div>
                  <h3
                    id="cookie-consent-title"
                    className="text-2xl md:text-3xl font-bold text-gray-900"
                  >
                    שימוש בעוגיות
                  </h3>
                </div>
                <p
                  id="cookie-consent-description"
                  className="text-gray-700 text-base md:text-lg leading-relaxed"
                >
                  אנו משתמשים בעוגיות כדי לשפר את חוויית הגלישה שלך, לנתח את השימוש באתר
                  ולספק תוכן מותאם אישית. על פי התקנות הישראליות, אנו זקוקים להסכמתך
                  לפני שימוש בעוגיות שאינן הכרחיות.
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  למידע נוסף, עיין ב-{" "}
                  <Link
                    to="/privacy"
                    className="text-blue-700 hover:text-blue-900 underline font-semibold transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    מדיניות הפרטיות
                  </Link>{" "}
                  שלנו.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0 lg:mr-6">
                <Button
                  variant="outline"
                  onClick={() => setShowSettingsDialog(true)}
                  className="whitespace-nowrap border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 font-semibold px-6 py-2.5"
                >
                  ⚙️ הגדרות
                </Button>
                <Button
                  variant="outline"
                  onClick={rejectAll}
                  className="whitespace-nowrap border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 font-semibold px-6 py-2.5"
                >
                  ✕ דחה הכל
                </Button>
                <Button
                  onClick={acceptAll}
                  className="whitespace-nowrap bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-2.5 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  ✓ קבל הכל
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Dialog */}
      <Dialog open={showSettingsDialog} onOpenChange={setShowSettingsDialog}>
        <DialogContent
          className="max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white to-blue-50"
          dir="rtl"
        >
          <DialogHeader className="space-y-3 pb-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="text-3xl">⚙️</div>
              <DialogTitle className="text-3xl font-bold text-gray-900">
                הגדרות עוגיות
              </DialogTitle>
            </div>
            <DialogDescription className="text-gray-700 text-lg leading-relaxed">
              בחר את סוגי העוגיות שאתה מאפשר. אתה יכול לשנות את ההעדפות שלך בכל עת.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-6">
            {cookieCategories.map((category) => (
              <div
                key={category.key}
                className={`flex flex-col md:flex-row md:items-start gap-4 p-5 rounded-xl border-2 transition-all duration-200 ${
                  category.required
                    ? "bg-blue-50 border-blue-200"
                    : preferences[category.key]
                    ? "bg-green-50 border-green-300"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <h4 className="text-xl font-bold text-gray-900">
                      {category.title}
                    </h4>
                    {category.required && (
                      <span className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-full font-semibold whitespace-nowrap">
                        הכרחי
                      </span>
                    )}
                    {!category.required && preferences[category.key] && (
                      <span className="text-xs bg-green-600 text-white px-3 py-1.5 rounded-full font-semibold whitespace-nowrap">
                        מופעל
                      </span>
                    )}
                    {!category.required && !preferences[category.key] && (
                      <span className="text-xs bg-gray-400 text-white px-3 py-1.5 rounded-full font-semibold whitespace-nowrap">
                        כבוי
                      </span>
                    )}
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <div className="flex items-center justify-center md:justify-start md:flex-shrink-0 md:w-[100px] md:pr-4">
                  <div 
                    className="scale-125"
                    style={{
                      direction: 'ltr' // Force LTR for switch to work correctly
                    }}
                  >
                    <Switch
                      checked={preferences[category.key]}
                      onCheckedChange={(checked) =>
                        updatePreference(category.key, checked)
                      }
                      disabled={category.required}
                      aria-label={`${category.title} - ${category.required ? "הכרחי" : preferences[category.key] ? "מופעל" : "כבוי"}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t-2 border-gray-300 bg-white rounded-lg p-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-end mb-4">
              <Button 
                variant="outline" 
                onClick={rejectAll}
                className="border-2 border-gray-300 hover:border-gray-400 font-semibold px-6 py-2.5"
              >
                ✕ דחה הכל
              </Button>
              <Button
                onClick={() => savePreferences(preferences)}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-2.5 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                ✓ שמור העדפות
              </Button>
            </div>
            <p className="text-sm text-gray-600 text-center leading-relaxed">
              על ידי לחיצה על "שמור העדפות", אתה מסכים לשימוש בעוגיות לפי ההעדפות
              שבחרת.{" "}
              <Link
                to="/privacy"
                className="text-blue-700 hover:text-blue-900 underline font-semibold transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowSettingsDialog(false);
                }}
              >
                קרא עוד במדיניות הפרטיות
              </Link>
              .
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;

