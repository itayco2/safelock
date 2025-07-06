import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CinematicSafeIntro = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [phase, setPhase] = useState("initial");

  useEffect(() => {
    const introPlayed = sessionStorage.getItem("introPlayed");
    if (introPlayed) {
      // Skip intro if already played this browser session
      setShowIntro(false);
    } else {
      // Show intro and mark it played after finished
      setShowIntro(true);

      const timer1 = setTimeout(() => setPhase("spinning"), 430);
      const timer2 = setTimeout(() => setPhase("opening"), 1290);
      const timer3 = setTimeout(() => setPhase("zooming"), 1720);
      const timer4 = setTimeout(() => setPhase("complete"), 2150);
      const timer5 = setTimeout(() => {
        setShowIntro(false);
        sessionStorage.setItem("introPlayed", "true");
      }, 2480);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
      };
    }
  }, []);

  if (!showIntro) return null;

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900 via-slate-800 to-black flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          {/* White zoom overlay */}
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: phase === "zooming" || phase === "complete" ? 100 : 0,
              opacity: phase === "zooming" || phase === "complete" ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: phase === "zooming" ? 0.15 : 0,
            }}
          />

          {/* Subtle radial background */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-blue-900/30 via-transparent to-transparent"
            animate={{
              opacity: phase === "opening" ? 1 : 0.4,
              scale: phase === "opening" ? 2 : 1,
            }}
            transition={{ duration: 0.6 }}
          />

          <div className="relative perspective-1000">
            <motion.div
              className="relative w-[700px] h-[700px] bg-gradient-to-br from-zinc-400 via-zinc-500 to-zinc-600 rounded-none shadow-2xl"
              style={{
                boxShadow:
                  "0 0 100px rgba(0,0,0,0.9), inset 0 0 50px rgba(255,255,255,0.2), 0 0 200px rgba(0,0,0,0.5)",
              }}
              initial={{ scale: 0.8 }}
              animate={{
                scale: phase === "zooming" || phase === "complete" ? 5 : 1,
              }}
              transition={{
                duration: phase === "zooming" ? 0.5 : 0.4,
                ease: "easeInOut",
              }}
            >
              {/* Safe door */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-zinc-300 via-zinc-400 to-zinc-500 origin-left"
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow:
                    "inset 0 0 50px rgba(0,0,0,0.4), inset 20px 0 60px rgba(255,255,255,0.15), inset -20px 0 60px rgba(0,0,0,0.15)",
                }}
                animate={{
                  rotateY:
                    phase === "opening" ||
                    phase === "zooming" ||
                    phase === "complete"
                      ? -120
                      : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 80,
                }}
              >
                {/* Door frame */}
                <div className="absolute inset-8 bg-gradient-to-br from-zinc-300 to-zinc-400 border-4 border-zinc-200/40 shadow-inner" />

                {/* Vault wheel: outer + spinning disc + center hub */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-80 h-80">
                    {/* Outer wheel */}
                    <div className="w-full h-full bg-gradient-to-br from-zinc-300 via-zinc-400 to-zinc-500 rounded-full shadow-2xl border-[6px] border-zinc-100 relative">
                      {/* Outer shine */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/20 rounded-full"></div>

                      {/* Spinning inner disc with handles */}
                      <motion.div
                        className="absolute inset-12 bg-gradient-to-br from-zinc-400 to-zinc-600 rounded-full shadow-inner border-[4px] border-zinc-200"
                        animate={{
                          rotate: phase === "spinning" ? -1440 : 0,
                        }}
                        transition={{
                          duration: 0.85,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-black/20 rounded-full"></div>

                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute bg-gradient-to-r from-zinc-600 to-zinc-800 shadow-lg rounded-full"
                            style={{
                              width: "10px",
                              height: "100px",
                              top: "50%",
                              left: "50%",
                              transformOrigin: "50% 100%",
                              transform: `translateX(-50%) translateY(-100px) rotate(${i * 60}deg)`,
                            }}
                          >
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-zinc-500 to-zinc-700 rounded-full shadow-lg">
                              <div className="absolute inset-1 bg-gradient-to-br from-zinc-400 to-zinc-600 rounded-full shadow-inner"></div>
                            </div>
                          </div>
                        ))}
                      </motion.div>

                      {/* Center hub */}
                      <div className="absolute inset-28 bg-gradient-to-br from-zinc-500 to-zinc-700 rounded-full shadow-inner border-2 border-zinc-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-black/30 rounded-full"></div>
                        <div className="absolute inset-4 bg-gradient-to-br from-zinc-400 to-zinc-600 rounded-full shadow-inner"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Interior reveal */}
              <motion.div
                className="absolute inset-0 bg-white overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{
                  opacity:
                    phase === "opening" ||
                    phase === "zooming" ||
                    phase === "complete"
                      ? 1
                      : 0,
                }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {/* Subtle glow */}
                <div className="absolute inset-0 bg-gradient-radial from-blue-50/40 via-transparent to-transparent"></div>

                {/* Light sweep effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "linear",
                  }}
                />

                {/* Sparkles */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full"
                    style={{
                      top: `${15 + Math.random() * 70}%`,
                      left: `${15 + Math.random() * 70}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.05,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicSafeIntro;
