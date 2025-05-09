import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PIC from "/pic.png";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative flex items-center justify-center dark:bg-gray-800
     min-h-screen bg-[#00425A] rounded-lg
     text-white mt-3  overflow-hidden"
    >
      <motion.img
        src={PIC}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: 0.5,
          scale: 1,
          y: [0, -10, 0], // float effect
        }}
        transition={{
          opacity: { delay: 0.4, duration: 2, ease: "easeInOut" },
          scale: { delay: 0.4, duration: 2 },
          y: {
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          },
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-0"
      />
      {/* Blur effect */}
      <div
        className="absolute w-[200px] h-[200px] bg-blue-600 blur-[150px] 
      rounded-full opacity-40 top-[-50px] right-[-100px]"
      />

      {/* Main Content */}
      <div className="z-10 text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Online Bcrypt Hash Generator & Checker
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Secure your passwords using bcrypt hashing & verification.
        </motion.p>
        <motion.button
          onClick={() => navigate("/tool")}
          className="mt-6 px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 transition"
          initial={{ x: 100, opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ delay: 0.7 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Go to Tool
        </motion.button>
      </div>
    </section>
  );
};

export default LandingPage;
