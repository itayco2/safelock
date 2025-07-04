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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            מעוניינים בפרטים נוספים או בהצעה שלא תוכלו לסרב לה?
          </h2>
          <p className="text-xl text-slate-600">
            השאירו פרטים בטופס ונחזור אליכם עם ייעוץ חינם והצעה משתלמת
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  שם פרטי *
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="הכניסו את שמכם"
                />
              </div>

              <div>
                <label
                  htmlFor="business"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  שם העסק
                </label>
                <Input
                  type="text"
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="שם החברה או העסק (אופציונלי)"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  טלפון *
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="050-1234567"
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  עיר *
                </label>
                <Input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="איזו עיר?"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                אימייל
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                פרטים נוספים
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="ספרו לנו על הצורך שלכם - איזה סוג כספת, לאיזה מטרה, וכל פרט שיעזור לנו להכין הצעה מדויקת"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 px-8 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              שלח בקשה
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-600 mb-4">או צרו קשר ישירות:</p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
              <a
                href="tel:050-1234567"
                className="text-blue-900 font-semibold hover:underline"
              >
                📞 050-1234567
              </a>
              <a
                href="mailto:info@safelock.co.il"
                className="text-blue-900 font-semibold hover:underline"
              >
                ✉️ info@safelock.co.il
              </a>
              <a
                href="https://wa.me/972501234567"
                className="text-blue-900 font-semibold hover:underline"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
