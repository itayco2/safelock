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
      seoKeywords: ["כספת למשרד", "כספת משרדית", "כספת לעסק", "כספת דיגיטלית", "כספת אלקטרונית", "כספת ביומטרית", "כספת עם טביעת אצבע", "כספת GS-600", "כספות משרדיות למכירה"],
      searchQueries: ["כספת למשרד מחיר", "כספת משרדית גדולה", "כספת דיגיטלית למשרד", "כספת אלקטרונית לעסק"],
    },
    {
      title: "כספת נשק תקנית BK-250",
      description:
        "כספת קומפקטית ובטוחה לנשק אישי, עם נעילה מכנית חזקה ודלת מחוזקת.",
      icon: Shield,
      image: "assets/images/wepondsafe.jpeg",
      overlayText:
        "גובה 20 ס\"מ\nרוחב 30 ס\"מ\nעומק 25 ס\"מ\nדלת 8 מ\"מ\nגוף 4 מ\"מ\n4 בריחי נעילה ל־3 כיוונים",
      seoKeywords: ["כספת נשק", "כספת לנשק", "כספת לאקדח", "כספת לרובה", "כספת נשק תקנית", "כספת נשק קטנה", "כספת BK-250", "כספת נשק משטרתית", "כספת תקן משטרה"],
      searchQueries: ["כספת נשק מחיר", "כספת לאקדח תקנית", "כספת נשק חובה", "כספת נשק ביתית"],
    },
    {
      title: "כספת תקנית לביטוח GS-450",
      description:
        "כספת עמידה וחזקה, מתאימה לעמידה בדרישות ביטוח עם גוף ודלת בעובי מיוחד ונפח פנימי גדול.",
      icon: Lock,
      image: "assets/images/officesafe2.jpeg",
      overlayText:
        "גובה 45 ס\"מ\nרוחב 38 ס\"מ\nעומק 33 ס\"מ\nמשקל 55 ק\"ג\nדלת 10 מ\"מ\nגוף 6 מ\"מ",
      seoKeywords: ["כספת ביטוחית", "כספת תקנית לביטוח", "כספת לכסף", "כספת לתכשיטים", "כספת למסמכים", "כספת חזקה", "כספת GS-450", "כספת מאושרת ביטוח"],
      searchQueries: ["כספת ביטוח מחיר", "כספת לכסף ותכשיטים", "כספת חזקה למסמכים", "כספת מומלצת ביטוח"],
    },
  ];

  // Enhanced structured data with more details
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "סוגי כספות Take Safe - כספת למשרד, כספת נשק, כספת ביטוחית",
    "description": "מגוון כספות למכירה: כספת למשרד GS-600 דיגיטלית, כספת נשק תקנית BK-250, כספת תקנית לביטוח GS-450. כל סוגי הכספות באיכות גבוהה",
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
        <title>כספת למשרד | כספת נשק | כספת ביטוחית | סוגי כספות Take Safe</title>
        <meta
          name="description"
          content="כספת למשרד GS-600 דיגיטלית עם טביעת אצבע | כספת נשק תקנית BK-250 לאקדח ורובה | כספת תקנית לביטוח GS-450 לכסף ותכשיטים. משלוח והתקנה בכל הארץ!"
        />
        <meta 
          name="keywords" 
          content="כספת למשרד, כספת משרדית, כספת לעסק, כספת דיגיטלית, כספת אלקטרונית, כספת ביומטרית, כספת נשק, כספת לנשק, כספת לאקדח, כספת לרובה, כספת תקנית, כספת ביטוחית, כספת לכסף, כספת לתכשיטים, כספת למסמכים, כספת GS-600, כספת BK-250, כספת GS-450, סוגי כספות, כספות למכירה"
        />
        
        {/* Open Graph tags for social media */}
        <meta property="og:title" content="כספת למשרד | כספת נשק | כספת ביטוחית - Take Safe" />
        <meta property="og:description" content="כל סוגי הכספות: כספת למשרד דיגיטלית, כספת נשק תקנית, כספת ביטוחית חזקה" />
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
            סוגי כספות למכירה - כספת למשרד, כספת נשק, כספת ביטוחית
          </h1>
          <h2 className="text-xl text-slate-600 max-w-2xl mx-auto">
            מגוון רחב של כספות איכותיות: כספות משרדיות דיגיטליות, כספות נשק תקניות, כספות ביטוחיות חזקות
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
                  <figcaption
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40"
                    aria-hidden="true"
                  >
                    <p className="text-white text-lg font-medium px-4 text-center whitespace-pre-line">
                      {safe.overlayText}
                    </p>
                  </figcaption>
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
            ב-Take Safe תמצאו מגוון רחב של כספות למכירה: <strong>כספת למשרד</strong> עם נעילה דיגיטלית וטביעת אצבע, 
            <strong> כספת נשק</strong> תקנית לאקדח ורובה לפי דרישות המשטרה, 
            <strong> כספת ביטוחית</strong> חזקה לכסף, תכשיטים ומסמכים חשובים. 
            כל הכספות שלנו באיכות גבוהה עם אחריות מלאה.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SafeTypes;