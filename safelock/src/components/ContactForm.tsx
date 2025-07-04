import { useState } from "react";
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

  const handleSubmit = async (e: React.FormEvent) => {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <header className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            מעוניינים בפרטים נוספים או בהצעה שלא תוכלו לסרב לה?
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            השאירו פרטים בטופס ונחזור אליכם עם ייעוץ חינם והצעה משתלמת
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-3xl p-10 md:p-12 space-y-8"
          noValidate
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
                className="w-full rounded-xl border border-gray-300 px-5 py-3 focus:ring-3 focus:ring-blue-400 focus:outline-none transition"
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
                placeholder="שם החברה או העסק (אופציונלי)"
                className="w-full rounded-xl border border-gray-300 px-5 py-3 focus:ring-3 focus:ring-blue-400 focus:outline-none transition"
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
                className="w-full rounded-xl border border-gray-300 px-5 py-3 focus:ring-3 focus:ring-blue-400 focus:outline-none transition"
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
                placeholder="איזו עיר?"
                className="w-full rounded-xl border border-gray-300 px-5 py-3 focus:ring-3 focus:ring-blue-400 focus:outline-none transition"
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
              className="w-full rounded-xl border border-gray-300 px-5 py-3 focus:ring-3 focus:ring-blue-400 focus:outline-none transition"
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
              placeholder="ספרו לנו על הצורך שלכם - איזה סוג כספת, לאיזה מטרה, וכל פרט שיעזור לנו להכין הצעה מדויקת"
              className="w-full rounded-xl border border-gray-300 px-5 py-4 resize-none focus:ring-3 focus:ring-blue-400 focus:outline-none transition"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white text-lg font-semibold py-4 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
          >
            שלח בקשה
          </Button>
        </form>

        <footer className="mt-12 pt-10 border-t border-gray-200 text-center text-gray-600 space-y-4">
          <p>או צרו קשר ישירות:</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-blue-900 font-semibold">
            <a
              href="tel:050-1234567"
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
