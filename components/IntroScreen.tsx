import React from 'react';
import { motion } from 'framer-motion';

interface IntroScreenProps {
  onOpen: () => void;
}

const Petal: React.FC = () => {
  const duration = Math.random() * 10 + 10;
  const delay = Math.random() * 8;
  const startX = Math.random() * 100;
  const endX = Math.random() * 100;
  const rotation = Math.random() * 360;

  return (
    <motion.div
      className="absolute text-3xl text-rose-300"
      style={{ left: `${startX}vw`, top: '-5vh' }}
      initial={{ opacity: 0 }}
      animate={{
        y: '105vh',
        x: [`${startX}vw`, `${endX}vw`],
        opacity: [0, 1, 1, 0],
        rotate: [rotation, rotation + 180, rotation + 360],
      }}
      transition={{
        duration,
        delay,
        ease: 'linear',
        repeat: Infinity,
      }}
    >
      🌸
    </motion.div>
  );
};


const IntroScreen: React.FC<IntroScreenProps> = ({ onOpen }) => {
  const petals = Array.from({ length: 20 });

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center h-screen w-full text-center p-4 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1 }}
    >
      {petals.map((_, i) => <Petal key={i} />)}
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1, type: 'spring' }}
      >
        <img 
          src="https://i.ibb.co/0yFX6YWD/z7135056489455-e174de9ddabdf0a43300b9d0a7fa990b.jpg" 
          alt="HDI English Students"
          className="w-64 md:w-80 h-auto rounded-2xl shadow-lg mb-8 border-4 border-white/50"
        />
      </motion.div>

      <motion.h1 
        className="font-title font-bold text-4xl md:text-6xl text-rose-800 mb-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        🌷 CHÚC MỪNG NGÀY PHỤ NỮ VIỆT NAM 20/10 🌷
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-2xl text-rose-600 mb-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Mỗi người phụ nữ đều là bông hoa rực rỡ nhất được sinh ra trong cuộc đời này.
      </motion.p>
      
      <motion.button
        onClick={onOpen}
        className="bg-rose-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-rose-600 transition-all transform hover:scale-105"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
      >
        💌 Mở Thiệp
      </motion.button>
    </motion.div>
  );
};

export default IntroScreen;
