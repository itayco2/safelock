
import { ShoppingCart, Wrench, Key, Settings, Calendar } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "מכירה",
      description: "מגוון רחב של כספות איכותיות ממותגים מובילים",
      icon: ShoppingCart
    },
    {
      title: "התקנה",
      description: "התקנה מקצועית ומהירה על ידי טכנאים מנוסים",
      icon: Wrench
    },
    {
      title: "פריצה",
      description: "שירות פריצה במקרי חירום - 24/7",
      icon: Key
    },
    {
      title: "תיקון",
      description: "תיקון ותחזוקה של כספות קיימות",
      icon: Settings
    },
    {
      title: "השכרה",
      description: "השכרת כספות לתקופות קצרות וארוכות",
      icon: Calendar
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            השירותים שלנו
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            פתרון כולל לכל הצרכים הקשורים לכספות ואבטחה
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <service.icon className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
