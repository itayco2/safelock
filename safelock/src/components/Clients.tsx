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

      <section id="clients" className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white" aria-label="לקוחות Take Safe">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold mb-6">
              לקוחותינו המרוצים
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              הלקוחות שלנו
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
                  <div className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 h-32 flex items-center justify-center border border-gray-100 hover:border-blue-200 hover:-translate-y-1 group">
                    <img
                      src={client.logoSrc}
                      alt={`${client.name} - לקוח Take Safe שירות אבטחת כספות`}
                      className="max-h-16 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
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

          <div className="text-center mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-10 shadow-2xl">
            <p className="text-xl text-white font-semibold mb-2">
              "Take Safe - אבטחת כספות לעסקים, מוסדות ובתים פרטיים"
            </p>
            <p className="text-blue-100 text-lg mb-8">מאות לקוחות מרוצים בישראל</p>
            <button
              onClick={scrollToContact}
              className="inline-block px-10 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
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