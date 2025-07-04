import { useState, useEffect } from 'react';

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);

  const clients = [
    { logo: <img src="assets/images/universitytlv.png" alt="אוניברסיטת תל אביב" style={{ display: "inline-block", height: "2.5em" }} /> },
    { logo: <img src="assets/images/bankhapoalim.jpg" alt="בנק הפועלים" style={{ display: "inline-block", height: "2.5em" }} /> },
    { logo: <img src="assets/images/police.png" alt="משטרת ישראל" style={{ display: "inline-block", height: "2.5em" }} /> },
    { logo: <img src="assets/images/hospital.png" alt="איכילוב" style={{ display: "inline-block", height: "2.5em" }} /> },
    { logo: <img src="assets/images/powercompany.png" alt="חברת החשמל" style={{ display: "inline-block", height: "2.5em" }} /> },
    { logo: <img src="assets/images/tlvcityhall.png" alt="עיריית תל אביב" style={{ display: "inline-block", height: "2.5em" }} /> },
    { logo: <img src="assets/images/macabi.jpg" alt="מכבי שירותי בריאות" style={{ display: "inline-block", height: "2.5em" }} /> },
    { logo: <img src="assets/images/elbit.png" alt="אלביט מערכות" style={{ display: "inline-block", height: "2.5em" }} /> },
    { logo: <img src="assets/images/cafecafe.png" alt="קפה קפה" style={{ display: "inline-block", height: "2.5em" }} /> },
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

  // Infinite loop carousel
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

  return (
    <section id="clients" className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            הלקוחות שלנו
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            מאות לקוחות מרוצים סומכים עלינו לאבטחת הנכסים החשובים ביותר שלהם
          </p>
        </div>

        {/* Clients Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out">
            {getVisibleClients().map((client, index) => (
              <div
                key={(currentIndex + index) % clients.length}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300 h-24 flex items-center justify-center">
                  {client.logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 gap-3">
          {clients.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 w-4 h-4'
                  : 'bg-gray-400/50 hover:bg-gray-500'
              }`}
              aria-label={`Go to logo ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-slate-600 font-medium">
            "Safe Lock תוכל לדאוג לביטחון שלך"
          </p>
          <p className="text-slate-500 mt-2">מאות לקוחות מרוצים</p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
