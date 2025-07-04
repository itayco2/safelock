
const Trust = () => {
  return (
    <section className="py-16 px-4 bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="flex -space-x-2">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center font-semibold">👤</div>
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center font-semibold">👤</div>
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center font-semibold">👤</div>
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center font-semibold">+</div>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            מאות לקוחות מרוצים – ניסיון של שנים בתחום האבטחה והפריצות
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            אנחנו גאים בשירות המקצועי שלנו ובאמון שלקוחותינו נותנים בנו. 
            מעסקים קטנים ועד חברות גדולות - כולם בוחרים ב-Safe Lock.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-blue-200">כספות הותקנו</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-blue-200">שירות זמינות</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-blue-200">שביעות רצון</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
