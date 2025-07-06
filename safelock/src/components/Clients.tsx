import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);

  const clients = [
    { name: "אוניברסיטת תל אביב", logoSrc: "/assets/images/universitytlv.png" },
    { name: "בנק הפועלים", logoSrc: "/assets/images/bankhapoalim.jpg" },
    { name: "משטרת ישראל", logoSrc: "/assets/images/police.png" },
    { name: "איכילוב", logoSrc: "/assets/images/hospital.png" },
    { name: "חברת החשמל", logoSrc: "/assets/images/powercompany.png" },
    { name: "עיריית תל אביב", logoSrc: "/assets/images/tlvcityhall.png" },
    { name: "מכבי שירותי בריאות", logoSrc: "/assets/images/macabi.jpg" },
    { name: "אלביט מערכות", logoSrc: "/assets/images/elbit.png" },
    { name: "קפה קפה", logoSrc: "/assets/images/cafecafe.png" },
  ];

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(5);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(4);
      } else {
        setItemsPerView(2);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [clients.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getVisibleClients = () => {
    const endIndex = currentIndex + itemsPerView;
    if (endIndex <= clients.length) {
      return clients.slice(currentIndex, endIndex);
    } else {
      return [
        ...clients.slice(currentIndex, clients.length),
        ...clients.slice(0, endIndex - clients.length),
      ];
    }
  };

  // Enhanced JSON-LD with more details
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "לקוחות Take Safe - כספות לעסקים ומוסדות",
    "description": "לקוחות Take Safe כוללים מוסדות ציבוריים גדולים, בנקים, בתי חולים, אוניברסיטאות ועסקים מובילים בישראל",
    "publisher": {
      "@type": "Organization",
      "name": "Take Safe",
      "url": "https://www.takesafe.co.il",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.takesafe.co.il/assets/images/logo.jpg"
      },
      "telephone": "+972-53-3570350",
      "email": "Takesafe67@gmail.com"
    },
    "itemListElement": clients.map((client, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": client.name,
      "description": `${client.name} - לקוח מרוצה של Take Safe לשירותי כספות ואבטחה`
    })),
  };

  return (
    <>
      <Helmet>
        <title>לקוחות Take Safe | אבטחת כספות לעסקים גדולים | מוסדות ציבוריים | בנקים</title>
        <meta
          name="description"
          content="לקוחות Take Safe: אוניברסיטת תל אביב, בנק הפועלים, משטרת ישראל, איכילוב, חברת החשמל ועוד. מאות לקוחות מרוצים בישראל בוחרים בנו לאבטחת כספות מקצועית."
        />
        <meta name="keywords" content="לקוחות כספות, כספות לעסקים, כספות למוסדות, כספות לבנקים, כספות לאוניברסיטאות, כספות לבתי חולים, Take Safe לקוחות, המלצות כספות" />
        <meta property="og:title" content="לקוחות Take Safe - מוסדות ועסקים גדולים בישראל" />
        <meta property="og:description" content="הצטרפו למאות לקוחות מרוצים שבחרו ב-Take Safe" />
        <html lang="he" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section id="clients" className="py-20 px-4 bg-slate-50" aria-label="לקוחות Take Safe">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              הלקוחות שלנו
            </h1>
            <h2 className="text-xl text-slate-600 max-w-2xl mx-auto">
              מאות לקוחות מרוצים סומכים על Take Safe לאבטחת כספות, פריצת כספות ושמירה על הנכסים החשובים ביותר שלהם.
            </h2>
          </div>

          {/* Clients Carousel */}
          <div
            className="relative overflow-hidden"
            role="region"
            aria-roledescription="carousel"
            aria-label="לקוחות"
          >
            <ul
              className="flex transition-transform duration-500 ease-in-out"
              aria-live="polite"
            >
              {getVisibleClients().map((client, index) => (
                <li
                  key={(currentIndex + index) % clients.length}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsPerView}%` }}
                  aria-label={client.name}
                  role="group"
                  itemScope
                  itemType="https://schema.org/Organization"
                >
                  <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300 h-24 flex items-center justify-center">
                    <img
                      src={client.logoSrc}
                      alt={`${client.name} - לקוח Take Safe שירות אבטחת כספות`}
                      style={{ display: "inline-block", height: "2.5em" }}
                      loading="lazy"
                      decoding="async"
                      itemProp="logo"
                    />
                    <meta itemProp="name" content={client.name} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Dots Navigation */}
          <div
            className="flex justify-center mt-8 gap-3"
            role="tablist"
            aria-label="בחר לוגו לקוח"
          >
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 w-4 h-4'
                    : 'bg-gray-400/50 hover:bg-gray-500'
                }`}
                aria-label={`הצג לוגו מספר ${index + 1}`}
                role="tab"
                aria-selected={index === currentIndex}
                tabIndex={index === currentIndex ? 0 : -1}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-slate-600 font-medium">
              "Take Safe - אבטחת כספות לעסקים, מוסדות ובתים פרטיים"
            </p>
            <p className="text-slate-500 mt-2">מאות לקוחות מרוצים בישראל</p>
            <button
              onClick={scrollToContact}
              className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              aria-label="צור קשר לקבלת הצעת מחיר"
            >
              צור קשר עכשיו
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;