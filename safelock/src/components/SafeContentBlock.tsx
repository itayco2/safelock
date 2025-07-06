import { Helmet } from "react-helmet";

const SafeContentBlock = () => {
  const blocks = [
    {
      title: "איך כספת יכולה להגן על החפצים היקרים שלך?",
      text: `כספת מספקת דרך בטוחה ואמינה להגן על החפצים היקרים שלך מפני איומים שונים...`,
      imageSrc: "/assets/images/firstimg.png",
      imageAlt: "כספת מגינה על חפצים יקרי ערך בצורה בטוחה",
    },
    {
      title: "איזו כספת מתאימה לי? בחירת הכספת הנכונה",
      text: `בחירת הכספת הנכונה כוללת התחשבות בגורמים כמו הגודל, רמת האבטחה והשימוש המיועד...`,
      imageSrc: "/assets/images/secondimg.png",
      imageAlt: "אדם בוחר כספת מתאימה לצרכים שלו",
      reverse: true,
    },
    {
      title: "מדוע יש צורך בכספת בבית?",
      text: `להחזיק כספת בבית הכרחי לשמירה על החפצים היקרים ביותר והמסמכים החשובים ביותר...`,
      imageSrc: "/assets/images/thirdimg.png",
      imageAlt: "כספת ביתית להגנה על מסמכים ותכשיטים",
    },
    {
      title: "אודות החברה",
      text: `ברוכים הבאים ל-Take Safe – החברה המובילה בתחום הכספות בישראל מאז 1990...`,
      imageSrc: "/assets/images/forthimg.png",
      imageAlt: "צוות Take Safe עובד על התקנת כספת בבית עסק",
      reverse: true,
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "מדריך בחירת כספות – איך לבחור כספת מתאימה",
    author: {
      "@type": "Organization",
      name: "Take Safe",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.takesafe.co.il",
    },
  };

  return (
    <section
      aria-label="מאמרים ומידע על כספות ובטיחות"
      className="space-y-16"
      lang="he"
      dir="rtl"
    >
      <Helmet>
        <title>מדריך בחירת כספות | Take Safe</title>
        <meta
          name="description"
          content="כל מה שצריך לדעת על בחירת כספת, הגנה על חפצים יקרים ובחירת פתרון מותאם אישית לעסק ולבית. Take Safe – פתרונות אבטחה מתקדמים."
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {blocks.map((block, index) => (
        <article
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto py-12 px-4 ${
            block.reverse ? "md:flex-row-reverse" : ""
          }`}
          aria-labelledby={`section-title-${index}`}
          lang="he"
          tabIndex={-1}
        >
          <div className="flex-1 text-right">
            <h2
              id={`section-title-${index}`}
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
            >
              {block.title}
            </h2>
            <p className="text-slate-700 leading-relaxed text-lg whitespace-pre-line">
              {block.text}
            </p>
          </div>
          <div className="flex-1">
            <img
              src={block.imageSrc}
              alt={block.imageAlt}
              className="w-full max-w-md mx-auto rounded-xl object-cover shadow-lg"
              loading="lazy"
            />
          </div>
        </article>
      ))}
    </section>
  );
};

export default SafeContentBlock;
