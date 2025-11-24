import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, Mail, MessageCircle, Building2, User, MapPin, Send, CheckCircle2 } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.phone || !formData.city) {
      toast.error("אנא מלאו את השדות החובה");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://hook.eu2.make.com/egkehwconvft5jh4w7kxko297vbxv1p2",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("הפרטים נשלחו בהצלחה! נחזור אליכם בהקדם");
        setIsSubmitted(true);
        setFormData({
          name: "",
          business: "",
          phone: "",
          email: "",
          city: "",
          message: "",
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        toast.error("שגיאה בשליחה. נסו שוב מאוחר יותר.");
      }
    } catch (error) {
      console.error(error);
      toast.error("קרתה שגיאה בשליחה.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Enhanced JSON-LD for Local Business
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Take Safe",
    "url": "https://www.takesafe.co.il",
    "email": "Takesafe67@gmail.com",
    "telephone": "+972533570350",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "בן-גוריון 190",
      "addressLocality": "גבעתיים",
      "addressRegion": "תל אביב",
      "postalCode": "53454",
      "addressCountry": "IL"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+972533570350",
      "contactType": "customer support",
      "areaServed": "IL",
      "availableLanguage": ["Hebrew", "English"]
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "₪₪₪",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "areaServed": {
      "@type": "Country",
      "name": "ישראל"
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Helmet>
        <title>צור קשר - Take Safe | ייעוץ חינם | התקנת כספות | פריצת כספות 24/7</title>
        <meta
          name="description"
          content="צור קשר עם Take Safe לקבלת ייעוץ מקצועי בחינם. התקנת כספות, פריצת כספות 24/7, מכירת כספות ופתרונות אבטחה לעסק ולבית. חייגו: 050-9914009"
        />
        <meta name="keywords" content="צור קשר כספות, ייעוץ כספות חינם, התקנת כספות, פריצת כספות, Take Safe, טופס יצירת קשר, כספות תל אביב, כספות גבעתיים, שירות כספות 24/7" />
        <meta property="og:title" content="צור קשר - Take Safe | ייעוץ חינם לאבטחת כספות" />
        <meta property="og:description" content="קבלו ייעוץ מקצועי והצעת מחיר מותאמת אישית" />
        <link rel="canonical" href="https://www.takesafe.co.il#contact" />
        <html lang="he" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-900 rounded-full mb-6 shadow-lg">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            צור קשר עם Take Safe
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            השאירו פרטים בטופס וקבלו ייעוץ חינם והצעת מחיר מותאמת אישית לאבטחת הכספת שלכם
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            אנו עובדים עם חברות מובילות בישראל ומתמחים בפתרונות אבטחה מקצועיים
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Quick Contact Cards */}
          <a
            href="tel:0509250905"
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
            aria-label="התקשרו אלינו"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-900 transition-colors">
                <Phone className="w-6 h-6 text-blue-900 group-hover:text-white transition-colors" />
              </div>
              <div className="text-right">
                <h3 className="font-bold text-gray-900 text-lg">טלפון</h3>
                <p className="text-gray-600 text-sm">התקשרו עכשיו</p>
              </div>
            </div>
            <p className="text-blue-900 font-semibold text-xl">050-9250905</p>
          </a>

          <a
            href="mailto:Takesafe67@gmail.com"
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
            aria-label="שלחו מייל"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-900 transition-colors">
                <Mail className="w-6 h-6 text-blue-900 group-hover:text-white transition-colors" />
              </div>
              <div className="text-right">
                <h3 className="font-bold text-gray-900 text-lg">אימייל</h3>
                <p className="text-gray-600 text-sm">שלחו הודעה</p>
              </div>
            </div>
            <p className="text-blue-900 font-semibold text-sm break-all">Takesafe67@gmail.com</p>
          </a>

          <a
            href="https://wa.me/972533570350"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
            aria-label="שלחו הודעת WhatsApp"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
                <MessageCircle className="w-6 h-6 text-green-700 group-hover:text-white transition-colors" />
              </div>
              <div className="text-right">
                <h3 className="font-bold text-gray-900 text-lg">WhatsApp</h3>
                <p className="text-gray-600 text-sm">שלחו הודעה</p>
              </div>
            </div>
            <p className="text-green-700 font-semibold">שלחו הודעה</p>
          </a>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 space-y-8 border border-gray-100"
          noValidate
          aria-label="טופס צור קשר Take Safe"
        >
          {isSubmitted && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3 text-green-800">
              <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
              <p className="font-semibold">הפרטים נשלחו בהצלחה! נחזור אליכם בהקדם האפשרי.</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700"
              >
                <User className="w-4 h-4 text-blue-900" />
                שם פרטי *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="הכניסו את שמכם"
                className="h-12 text-lg"
                aria-required="true"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="business"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700"
              >
                <Building2 className="w-4 h-4 text-blue-900" />
                שם העסק
              </label>
              <Input
                id="business"
                name="business"
                type="text"
                value={formData.business}
                onChange={handleChange}
                placeholder="שם החברה (אם רלוונטי)"
                className="h-12 text-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700"
              >
                <Phone className="w-4 h-4 text-blue-900" />
                טלפון *
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="050-1234567"
                className="h-12 text-lg"
                aria-required="true"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="city"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700"
              >
                <MapPin className="w-4 h-4 text-blue-900" />
                עיר *
              </label>
              <Input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder="עיר מגורים / עסק"
                className="h-12 text-lg"
                aria-required="true"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="flex items-center gap-2 text-sm font-semibold text-gray-700"
            >
              <Mail className="w-4 h-4 text-blue-900" />
              אימייל
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="h-12 text-lg"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="flex items-center gap-2 text-sm font-semibold text-gray-700"
            >
              <MessageCircle className="w-4 h-4 text-blue-900" />
              פרטים נוספים
            </label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="פרטו יותר על הצורך שלכם - סוג כספת, מיקום התקנה, דרישות מיוחדות"
              className="text-lg resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white text-lg font-semibold py-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">⏳</span>
                שולח...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 ml-2" />
                שלחו בקשה עכשיו
              </>
            )}
          </Button>

          <p className="text-center text-sm text-gray-500 mt-4">
            * שדות חובה. הפרטים שלכם מוגנים ולא יועברו לצדדים שלישיים.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
