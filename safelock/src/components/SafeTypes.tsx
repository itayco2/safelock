import { Helmet } from "react-helmet";
import { Shield, Lock, Briefcase } from "lucide-react";

const SafeTypes = () => {
  const safeTypes = [
    {
      title: "כספת למשרד GS-600",
      description:
        "מתאימה למשרדים ועסקים, כוללת מנגנון נעילה אלקטרוני עם אפשרות לפתיחה בקוד, מפתח או טביעת אצבע.",
      icon: Briefcase,
      image: "assets/images/safeoffice.jpeg",
      overlayText: "גובה 60 ס\"מ\nרוחב 42 ס\"מ\nעומק 38 ס\"מ",
    },
    {
      title: "כספת נשק תקנית BK-250",
      description:
        "כספת קומפקטית ובטוחה לנשק אישי, עם נעילה מכנית חזקה ודלת מחוזקת.",
      icon: Shield,
      image: "assets/images/wepondsafe.jpeg",
      overlayText:
        "גובה 20 ס\"מ\nרוחב 30 ס\"מ\nעומק 25 ס\"מ\nדלת 8 מ\"מ\nגוף 4 מ\"מ\n4 בריחי נעילה ל־3 כיוונים",
    },
    {
      title: "כספת תקנית לביטוח GS-450",
      description:
        "כספת עמידה וחזקה, מתאימה לעמידה בדרישות ביטוח עם גוף ודלת בעובי מיוחד ונפח פנימי גדול.",
      icon: Lock,
      image: "assets/images/officesafe2.jpeg",
      overlayText:
        "גובה 45 ס\"מ\nרוחב 38 ס\"מ\nעומק 33 ס\"מ\nמשקל 55 ק\"ג\nדלת 10 מ\"מ\nגוף 6 מ\"מ",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: safeTypes.map((safe, index) => ({
      "@type": "Product",
      name: safe.title,
      description: safe.description,
      image: `https://www.takesafe.co.il/${safe.image}`,
      position: index + 1,
    })),
  };

  return (
    <section
      id="safes"
      aria-label="סוגי כספות"
      className="py-20 px-4 bg-white"
      lang="he"
      dir="rtl"
    >
      <Helmet>
        <title>סוגי כספות | Take Safe</title>
        <meta
          name="description"
          content="מגוון רחב של כספות לעסק, לבית ולנשק. כספות איכותיות עם מנגנוני נעילה מתקדמים. קבלו ייעוץ מותאם אישית מ-Take Safe."
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            סוגי הכספות שלנו
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            מגוון רחב של כספות איכותיות לכל צורך ותקציב
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safeTypes.map((safe, index) => {
            const IconComponent = safe.icon;
            return (
              <article
                key={index}
                className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                aria-labelledby={`safe-title-${index}`}
                tabIndex={0}
              >
                <div className="flex items-center mb-4">
                  <IconComponent
                    className="w-8 h-8 text-blue-900 ml-3"
                    aria-hidden="true"
                  />
                  <h3
                    id={`safe-title-${index}`}
                    className="text-xl font-semibold text-slate-900"
                  >
                    {safe.title}
                  </h3>
                </div>

                <figure className="relative overflow-hidden rounded-lg mb-4 h-80">
                  <img
                    src={safe.image}
                    alt={`תמונה של ${safe.title} - ${safe.description}`}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70"
                    loading="lazy"
                  />
                  <figcaption
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40"
                    aria-hidden="true"
                  >
                    <p className="text-white text-lg font-medium px-4 text-center whitespace-pre-line">
                      {safe.overlayText}
                    </p>
                  </figcaption>
                </figure>

                <p className="text-slate-600 leading-relaxed">
                  {safe.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SafeTypes;
