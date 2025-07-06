import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.city) {
      toast.error("אנא מלאו את השדות החובה");
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
        setFormData({
          name: "",
          business: "",
          phone: "",
          email: "",
          city: "",
          message: "",
        });
      } else {
        toast.error("שגיאה בשליחה. נסו שוב מאוחר יותר.");
      }
    } catch (error) {
      console.error(error);
      toast.error("קרתה שגיאה בשליחה.");
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // JSON-LD for Local Business (for local SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Take Safe",
    "url": "https://www.yoursite.com",
    "email": "office.safelock@gmail.com",
    "telephone": "+972533570350",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "תל אביב",
      "addressCountry": "IL"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+972533570350",
      "contactType": "customer support",
      "areaServed": "IL"
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <Helmet>
        <title>צור קשר - Take Safe | ייעוץ חינם לאבטחת כספות</title>
        <meta
          name="description"
          content="צור קשר עם Take Safe לקבלת ייעוץ מקצועי, התקנת כספות ופתרונות אבטחה לעסק ולבית. שירות מהיר, אמין ומומלץ."
        />
        <html lang="he" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            צור קשר עם Take Safe
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            השאירו פרטים בטופס וקבלו ייעוץ חינם והצעת מחיר מותאמת אישית לאבטחת הכספת שלכם
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-3xl p-10 md:p-12 space-y-8"
          noValidate
          aria-label="טופס צור קשר Take Safe"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
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
              />
            </div>

            <div>
              <label
                htmlFor="business"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                שם העסק
              </label>
              <Input
                id="business"
                name="business"
                type="text"
                value={formData.business}
                onChange={handleChange}
                placeholder="שם החברה (אם רלוונטי)"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
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
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
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
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              אימייל
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              פרטים נוספים
            </label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="פרטו יותר על הצורך שלכם - סוג כספת, מיקום התקנה, דרישות מיוחדות"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white text-lg font-semibold py-4 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
          >
            שלחו בקשה עכשיו
          </Button>
        </form>

        <footer className="mt-12 pt-10 border-t border-gray-200 text-center text-gray-600 space-y-4">
          <p>או דברו איתנו ישירות:</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-blue-900 font-semibold">
            <a
              href="tel:0533570350"
              className="hover:underline flex items-center gap-2"
            >
              📞 053-3570350
            </a>
            <a
              href="mailto:office.safelock@gmail.com"
              className="hover:underline flex items-center gap-2"
            >
              ✉️ office.safelock@gmail.com
            </a>
            <a
              href="https://wa.me/972533570350"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-2"
            >
              💬 WhatsApp
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactForm;
