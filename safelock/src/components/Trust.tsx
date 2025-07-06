const Trust = () => {
  return (
    <section
      className="py-16 px-4 bg-blue-900 text-white"
      aria-labelledby="trust-heading"
      lang="he"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div
            className="flex justify-center items-center space-x-4 mb-6"
            aria-hidden="true"
          >
            <div className="flex -space-x-2">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center font-semibold text-lg">
                👤
              </div>
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center font-semibold text-lg">
                👤
              </div>
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center font-semibold text-lg">
                👤
              </div>
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center font-semibold text-lg">
                +
              </div>
            </div>
          </div>

          <h2
            id="trust-heading"
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            מאות לקוחות מרוצים – ניסיון של שנים בתחום האבטחה והפריצות
          </h2>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            אנחנו גאים בשירות המקצועי שלנו ובאמון שלקוחותינו נותנים בנו. מעסקים
            קטנים ועד חברות גדולות - כולם בוחרים ב-Take Safe.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          role="list"
          aria-label="נתוני ביצועים"
        >
          <div role="listitem" className="text-center">
            <div className="text-3xl font-bold text-white mb-2" aria-label="500 פלוס כספות הותקנו">
              500+
            </div>
            <div className="text-blue-200">כספות הותקנו</div>
          </div>
          <div role="listitem" className="text-center">
            <div className="text-3xl font-bold text-white mb-2" aria-label="זמינות שירות 24 שבעה">
              24/7
            </div>
            <div className="text-blue-200">שירות זמינות</div>
          </div>
          <div role="listitem" className="text-center">
            <div className="text-3xl font-bold text-white mb-2" aria-label="שביעות רצון 100 אחוז">
              100%
            </div>
            <div className="text-blue-200">שביעות רצון</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
