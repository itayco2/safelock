import { useState, useEffect } from "react";
import { Phone, Mail, MessageCircle, X, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingContactButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsExpanded(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3" dir="ltr">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="w-14 h-14 rounded-full bg-gray-700 hover:bg-gray-800 text-white shadow-2xl transition-all duration-300 hover:scale-110"
          aria-label="חזרה למעלה"
          title="חזרה למעלה"
        >
          <ChevronUp className="w-6 h-6" />
        </Button>
      )}

      {/* Main Toggle Button */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full bg-blue-900 hover:bg-blue-800 text-white shadow-2xl transition-all duration-300 hover:scale-110 ${
          isExpanded ? "rotate-45" : ""
        }`}
        aria-label={isExpanded ? "סגור תפריט יצירת קשר" : "פתח תפריט יצירת קשר"}
        aria-expanded={isExpanded}
      >
        {isExpanded ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </Button>

      {/* Expanded Contact Options */}
      {isExpanded && (
        <div className="flex flex-col gap-3" style={{ animation: 'slideInFromBottom 0.3s ease-out' }}>
          <a
            href="tel:0509250905"
            className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="התקשרו אלינו"
            title="התקשרו: 050-9250905"
          >
            <Phone className="w-6 h-6" />
          </a>

          <a
            href="https://wa.me/972533570350?text=שלום, אני מעוניין לקבל פרטים נוספים."
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="שלחו הודעת WhatsApp"
            title="שלחו הודעת WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </a>

          <a
            href="mailto:Takesafe67@gmail.com?subject=פנייה מ-Take Safe"
            className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="שלחו מייל"
            title="שלחו מייל"
          >
            <Mail className="w-6 h-6" />
          </a>

          <Button
            onClick={scrollToContact}
            className="w-14 h-14 rounded-full bg-slate-700 hover:bg-slate-800 text-white shadow-2xl transition-all duration-300 hover:scale-110"
            aria-label="מעבר לטופס יצירת קשר"
            title="מעבר לטופס יצירת קשר"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default FloatingContactButtons;

