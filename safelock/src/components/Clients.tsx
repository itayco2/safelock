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

  // Updated JSON-LD with correct domain and logo path
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "לקוחות Take Safe",
    "publisher": {
      "@type": "Organization",
      "name": "Take Safe",
      "url": "https://www.takesafe.co.il",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.takesafe.co.il/assets/images/logo.jpg"
      }
    },
    "itemListElement": clients.map((client, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": client.name
    })),
  };

  return (
    <>
      <Helmet>
        <title>לקוחות Take Safe - אבטחת כספות לעסקים ומוסדות</title>
        <meta
          name="description"
          content="לקוחות Take Safe כוללים מוסדות ציבוריים ועסקים גדולים בישראל. הצטרפו למאות לקוחות מרוצים שבחרו בנו לאבטחת כספות מקצועית."
        />
        <html lang="he" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section id="clients" className="py-20 px-4 bg-slate-50" aria-label="לקוחות Take Safe">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              הלקוחות שלנו
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              מאות לקוחות מרוצים סומכים על Take Safe לאבטחת כספות, פריצת כספות ושמירה על הנכסים החשובים ביותר שלהם.
            </p>
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
                >
                  <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300 h-24 flex items-center justify-center">
                    <img
                      src={client.logoSrc}
                      alt={`${client.name} - לקוח Take Safe שירות אבטחת כספות`}
                      style={{ display: "inline-block", height: "2.5em" }}
                      loading="lazy"
                      decoding="async"
                    />
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
            <a
              href="/contact"
              className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              צור קשר עכשיו
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;