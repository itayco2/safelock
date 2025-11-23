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
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl p-6 md:p-8"
          dir="rtl"
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
              <div className="flex-1">
                <h3
                  id="cookie-consent-title"
                  className="text-xl font-bold text-gray-900 mb-2"
                >
                  🍪 שימוש בעוגיות
                </h3>
                <p
                  id="cookie-consent-description"
                  className="text-gray-700 text-sm md:text-base leading-relaxed mb-2"
                >
                  אנו משתמשים בעוגיות כדי לשפר את חוויית הגלישה שלך, לנתח את השימוש באתר
                  ולספק תוכן מותאם אישית. על פי התקנות הישראליות, אנו זקוקים להסכמתך
                  לפני שימוש בעוגיות שאינן הכרחיות.
                </p>
                <p className="text-gray-600 text-xs md:text-sm">
                  למידע נוסף, עיין ב-{" "}
                  <Link
                    to="/privacy"
                    className="text-blue-600 hover:underline font-medium"
                    onClick={() => setShowBanner(false)}
                  >
                    מדיניות הפרטיות
                  </Link>{" "}
                  שלנו.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0">
                <Button
                  variant="outline"
                  onClick={() => setShowSettingsDialog(true)}
                  className="whitespace-nowrap"
                >
                  הגדרות
                </Button>
                <Button
                  variant="outline"
                  onClick={rejectAll}
                  className="whitespace-nowrap"
                >
                  דחה הכל
                </Button>
                <Button
                  onClick={acceptAll}
                  className="whitespace-nowrap bg-blue-600 hover:bg-blue-700"
                >
                  קבל הכל
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Dialog */}
      <Dialog open={showSettingsDialog} onOpenChange={setShowSettingsDialog}>
        <DialogContent
          className="max-w-2xl max-h-[90vh] overflow-y-auto"
          dir="rtl"
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              הגדרות עוגיות
            </DialogTitle>
            <DialogDescription className="text-gray-700 text-base">
              בחר את סוגי העוגיות שאתה מאפשר. אתה יכול לשנות את ההעדפות שלך בכל עת.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 mt-6">
            {cookieCategories.map((category) => (
              <div
                key={category.key}
                className="flex flex-col md:flex-row md:items-start gap-4 p-4 border border-gray-200 rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {category.title}
                    </h4>
                    {category.required && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        הכרחי
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 md:flex-shrink-0">
                  <Switch
                    checked={preferences[category.key]}
                    onCheckedChange={(checked) =>
                      updatePreference(category.key, checked)
                    }
                    disabled={category.required}
                    aria-label={`${category.title} - ${category.required ? "הכרחי" : preferences[category.key] ? "מופעל" : "כבוי"}`}
                  />
                  <span className="text-sm font-medium text-gray-700 min-w-[60px]">
                    {category.required
                      ? "הכרחי"
                      : preferences[category.key]
                      ? "מופעל"
                      : "כבוי"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <Button variant="outline" onClick={rejectAll}>
                דחה הכל
              </Button>
              <Button
                onClick={() => savePreferences(preferences)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                שמור העדפות
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">
              על ידי לחיצה על "שמור העדפות", אתה מסכים לשימוש בעוגיות לפי ההעדפות
              שבחרת.{" "}
              <Link
                to="/privacy"
                className="text-blue-600 hover:underline"
                onClick={() => {
                  setShowSettingsDialog(false);
                  setShowBanner(false);
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

