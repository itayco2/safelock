import { Helmet } from "react-helmet";
import { Shield, ShieldCheck, Lock, KeyRound, Layers, Truck, Vault } from "lucide-react";

const SafeTypes = () => {
  const safeTypes = [
    {
      title: "כספת רצפה GA800d",
      description:
        "כספת רצפה גדולה לעסקים ולאירועים — נעילה כפולה (חוגה וקוד דיגיטלי) ונפח אחסון רב לאבטחת מזומנים ופריטי ערך.",
      icon: Truck,
      image: "assets/images/ga800d.jpg",
      seoKeywords: ["כספת רצפה", "כספת גדולה לעסק", "כספת לאירועים", "כספת מזומנים", "כספת נעילה כפולה", "כספת GA800d"],
      searchQueries: ["כספת רצפה לעסק", "כספת גדולה למזומנים", "כספת לאירועים מחיר"],
    },
    {
      title: "כספת עומדת GS100d",
      description:
        "כספת עומדת עם 3 מדפים פנימיים ונעילת חוגה — מסדרת מסמכים, תיקיות וחפצי ערך בנפרד, בגישה נוחה ליום־יום.",
      icon: Layers,
      image: "assets/images/gs100d.jpg",
      seoKeywords: ["כספת עומדת", "כספת עם מדפים", "כספת למסמכים", "כספת משרדית", "כספת נעילת חוגה", "כספת GS100d"],
      searchQueries: ["כספת עומדת למשרד", "כספת עם מדפים מחיר", "כספת למסמכים גדולה"],
    },
    {
      title: "כספת אבטחה GA250d",
      description:
        "כספת אבטחה בנעילה דיגיטלית עם ידית בריחים — פתיחה מהירה בקוד אישי והגנה מוגברת מפני פריצה.",
      icon: Lock,
      image: "assets/images/ga250d.jpg",
      seoKeywords: ["כספת דיגיטלית", "כספת אבטחה", "כספת פריצה", "כספת לבית", "כספת קוד", "כספת GA250d"],
      searchQueries: ["כספת דיגיטלית לבית", "כספת אבטחה מחיר", "כספת קוד אישי"],
    },
    {
      title: "כספת דיגיטלית GS250",
      description:
        "כספת בנעילה דיגיטלית עם קוד אישי — פתיחה מהירה בלחיצת כפתורים, פתרון מאובטח ונוח לבית ולעסק.",
      icon: KeyRound,
      image: "assets/images/gs250.jpg",
      seoKeywords: ["כספת דיגיטלית", "כספת קוד", "כספת לבית", "כספת אלקטרונית", "כספת קטנה", "כספת GS250"],
      searchQueries: ["כספת דיגיטלית מחיר", "כספת קוד לבית", "כספת אלקטרונית קטנה"],
    },
    {
      title: "כספת פריצה GS300d",
      description:
        "כספת מחוזקת עם מנגנון בריחים ונעילת חוגה — דרגת הגנה מוגברת מפני פריצה לאחסון מזומנים ומסמכים רגישים.",
      icon: ShieldCheck,
      image: "assets/images/gs300d.jpg",
      seoKeywords: ["כספת פריצה", "כספת מחוזקת", "כספת לעסק", "כספת מזומנים", "כספת נעילת חוגה", "כספת GS300d"],
      searchQueries: ["כספת פריצה לעסק", "כספת מחוזקת מחיר", "כספת למזומנים"],
    },
    {
      title: "כספת פריצה GS450d",
      description:
        "כספת פריצה כבדה עם גלגל בריחים ונעילה דיגיטלית — דופן מחוזקת ואבטחה ברמה גבוהה לנכסי העסק.",
      icon: Shield,
      image: "assets/images/gs450d.jpg",
      seoKeywords: ["כספת פריצה", "כספת כבדה", "כספת ביטוחית", "כספת לעסק", "כספת גלגל בריחים", "כספת GS450d"],
      searchQueries: ["כספת פריצה כבדה", "כספת ביטוחית מחיר", "כספת גלגל בריחים"],
    },
    {
      title: "כספת פריצה GS600d",
      description:
        "כספת פריצה גדולה בנפח אחסון רב — גלגל בריחים ונעילה מאובטחת, מתאימה לעסקים עם צורכי אבטחה מוגברים.",
      icon: Vault,
      image: "assets/images/gs600d.jpg",
      seoKeywords: ["כספת פריצה גדולה", "כספת לעסק", "כספת אחסון גדול", "כספת ביטוחית", "כספת GS600d"],
      searchQueries: ["כספת פריצה גדולה", "כספת לעסק גדולה", "כספת אחסון מזומנים"],
    },
    {
      title: "כספת פריצה GA600d",
      description:
        "כספת פריצה גדולה עם גלגל בריחים ונעילה דיגיטלית — שילוב של נפח פנימי נדיב ועמידות מרבית בפני ניסיונות פריצה.",
      icon: Vault,
      image: "assets/images/ga600d.jpg",
      seoKeywords: ["כספת פריצה גדולה", "כספת לעסק", "כספת דיגיטלית", "כספת גלגל בריחים", "כספת GA600d"],
      searchQueries: ["כספת פריצה דיגיטלית", "כספת גדולה לעסק", "כספת עמידה בפריצה"],
    },
  ];

  // Enhanced structured data with more details
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "סוגי כספות Take Safe - כספות עסקיות, דיגיטליות וכספות פריצה",
    "description": "מגוון כספות למכירה: כספות רצפה ועומדות, כספות דיגיטליות וכספות פריצה מאובטחות. כל סוגי הכספות באיכות גבוהה",
    "url": "https://www.takesafe.co.il#safes",
    "numberOfItems": safeTypes.length,
    "itemListElement": safeTypes.map((safe, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": safe.title,
      "description": safe.description,
      "image": `https://www.takesafe.co.il/${safe.image}`,
      "brand": {
        "@type": "Brand",
        "name": "Take Safe"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "ILS",
        "url": "https://www.takesafe.co.il#contact",
        "priceRange": "₪₪₪"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "89"
      },
      "keywords": safe.seoKeywords.join(", ")
    }))
  };

  // Breadcrumb structured data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Take Safe",
        "item": "https://www.takesafe.co.il"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "סוגי כספות",
        "item": "https://www.takesafe.co.il#safes"
      }
    ]
  };

  return (
    <section
      id="safes"
      aria-label="סוגי כספות למכירה"
      className="py-20 px-4 bg-white"
      lang="he"
      dir="rtl"
    >
      <Helmet>
        <title>סוגי כספות | כספות עסקיות, דיגיטליות וכספות פריצה - Take Safe</title>
        <meta
          name="description"
          content="מגוון כספות למכירה: כספות רצפה ועומדות, כספות דיגיטליות וכספות פריצה מאובטחות לעסק ולבית. משלוח והתקנה בכל הארץ!"
        />
        <meta
          name="keywords"
          content="כספת לעסק, כספת משרדית, כספת דיגיטלית, כספת אלקטרונית, כספת פריצה, כספת ביטוחית, כספת רצפה, כספת עומדת, כספת למזומנים, כספת לתכשיטים, כספת למסמכים, סוגי כספות, כספות למכירה"
        />

        {/* Open Graph tags for social media */}
        <meta property="og:title" content="סוגי כספות | כספות עסקיות, דיגיטליות וכספות פריצה - Take Safe" />
        <meta property="og:description" content="כל סוגי הכספות: כספות עסקיות, דיגיטליות וכספות פריצה מאובטחות" />
        <meta property="og:type" content="product.group" />

        {/* Additional meta tags for better SEO */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.takesafe.co.il/safes" />

        {/* Structured data */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            סוגי כספות למכירה - כספות עסקיות, דיגיטליות וכספות פריצה
          </h1>
          <h2 className="text-xl text-slate-600 max-w-2xl mx-auto">
            מגוון רחב של כספות איכותיות לכל צורך: כספות משרדיות ועומדות, כספות דיגיטליות וכספות פריצה מאובטחות
          </h2>
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
                itemScope
                itemType="https://schema.org/Product"
              >
                <div className="flex items-center mb-4">
                  <IconComponent
                    className="w-8 h-8 text-blue-900 ml-3"
                    aria-hidden="true"
                  />
                  <h3
                    id={`safe-title-${index}`}
                    className="text-xl font-semibold text-slate-900"
                    itemProp="name"
                  >
                    {safe.title}
                  </h3>
                </div>

                <figure className="relative overflow-hidden rounded-lg mb-4 h-80">
                  <img
                    src={safe.image}
                    alt={`${safe.title} - ${safe.seoKeywords.slice(0, 3).join(', ')}`}
                    title={`${safe.title} למכירה - ${safe.searchQueries[0]}`}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70"
                    loading="lazy"
                    itemProp="image"
                  />
                </figure>

                <p className="text-slate-600 leading-relaxed mb-4" itemProp="description">
                  {safe.description}
                </p>

                {/* Hidden content for SEO */}
                <div className="hidden">
                  {safe.seoKeywords.map((keyword, idx) => (
                    <span key={idx} itemProp="keywords">{keyword} </span>
                  ))}
                  {safe.searchQueries.map((query, idx) => (
                    <span key={idx}>{query} </span>
                  ))}
                </div>

                {/* Visible keywords as tags */}
                <div className="flex flex-wrap gap-2 text-xs">
                  {safe.seoKeywords.slice(0, 4).map((keyword, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded">
                      {keyword}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 prose max-w-none text-center">
          <h3 className="text-2xl font-bold mb-4">כל סוגי הכספות שלנו</h3>
          <p className="text-gray-700">
            ב-Take Safe תמצאו מגוון רחב של כספות למכירה: <strong>כספות עסקיות ומשרדיות</strong> עם נעילה דיגיטלית,
            <strong> כספות פריצה</strong> מחוזקות עם גלגל בריחים לאבטחה ברמה גבוהה,
            <strong> כספות דיגיטליות</strong> לבית ולעסק לאחסון כסף, תכשיטים ומסמכים חשובים.
            כל הכספות שלנו באיכות גבוהה עם אחריות מלאה.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SafeTypes;
