
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/5371994a-ea13-4b33-a94e-dd79a9caec70.png" 
                alt="Safe Lock Logo"
                className="w-12 h-12 mr-3"
              />
              <h3 className="text-2xl font-bold">Safe Lock</h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              מומחים בכספות ופריצות עם ניסיון של שנים. 
              אנחנו כאן כדי לשמור על הבטחון שלכם.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">השירותים שלנו</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• מכירת כספות לעסקים</li>
              <li>• כספות לבעלי נשק</li>
              <li>• התקנה מקצועית</li>
              <li>• שירות פריצה</li>
              <li>• תחזוקה ותיקונים</li>
              <li>• השכרת כספות</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">צרו קשר</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:050-1234567" className="hover:text-white transition-colors">
                  050-1234567
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✉️</span>
                <a href="mailto:info@safelock.co.il" className="hover:text-white transition-colors">
                  info@safelock.co.il
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">💬</span>
                <a href="https://wa.me/972501234567" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">כתובת ושעות פעילות</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start">
                <span className="mr-2">📍</span>
                <div>
                  <p>בן־גוריון 190</p>
                  <p>גבעתיים</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="mr-2">🕒</span>
                <div>
                  <p>א׳-ה׳: 08:00-18:00</p>
                  <p>ו׳: 08:00-14:00</p>
                  <p>חירום: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              © 2024 Safe Lock. כל הזכויות שמורות.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                תנאי שימוש
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                מדיניות פרטיות
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
