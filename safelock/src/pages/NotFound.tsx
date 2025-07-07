import { Shield, Home, Lock, AlertTriangle, Key } from "lucide-react";
import { useState, useEffect } from "react";

const NotFound = () => {
  const [rotation, setRotation] = useState(0);
  const [showLock, setShowLock] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 1);
    }, 50);
    
    const lockInterval = setInterval(() => {
      setShowLock(prev => !prev);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(lockInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative flex items-center justify-center px-4" dir="rtl">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating Keys */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${10 + i * 2}s`
            }}
          >
            <Key className="w-8 h-8 text-blue-500 opacity-20" />
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Animated Safe Icon */}
        <div className="relative mb-8">
          <div className="w-48 h-48 mx-auto relative">
            {/* Static Shield */}
            <Shield 
              className="w-48 h-48 text-blue-500 absolute inset-0 transition-all duration-300"
            />
            
            {/* Pulsing Lock */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${showLock ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}>
              <Lock className="w-24 h-24 text-white drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
            </div>
          </div>
        </div>

        {/* Glowing 404 */}
        <h1 
          className="text-9xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 bg-clip-text text-transparent animate-gradient-x"
          style={{
            textShadow: '0 0 40px rgba(59, 130, 246, 0.5)',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
        >
          404
        </h1>
        
        {/* Error Message with Typewriter Effect */}
        <h2 className="text-4xl font-bold text-white mb-4 tracking-wide">
          <span className="inline-block animate-pulse">🔒</span> הכספת הזו נעולה! <span className="inline-block animate-pulse">🔒</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
          נראה שניסית לפרוץ לדף שלא קיים במערכת שלנו.
          <br />
          <span className="text-2xl mt-2 block text-blue-400 font-semibold">
            רק אנחנו יודעים לפרוץ כספות - לא דפי אינטרנט! 😎
          </span>
        </p>

        {/* Impressive Home Button */}
        <a
          href="/"
          className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-full bg-blue-600 text-white font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.8)]"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative flex items-center">
            <Home className="w-6 h-6 ml-3" />
            חזרה לבית הכספות
          </span>
        </a>

        {/* Security Scanner Animation */}
        <div className="mt-16 relative">
          <div className="h-1 w-64 mx-auto bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full w-8 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-scanner"></div>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            סורק אבטחה פעיל 24/7
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes scanner {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(800%); }
        }
        
        .animate-float {
          animation: float ease-in-out infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-scanner {
          animation: scanner 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFound;