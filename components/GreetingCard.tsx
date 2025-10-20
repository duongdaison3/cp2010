import React, { useState } from 'react';
// FIX: Import 'Variants' and 'AnimatePresence' from framer-motion.
import { motion, Variants, AnimatePresence } from 'framer-motion';
import SoundOnIcon from './icons/SoundOnIcon';
import SoundOffIcon from './icons/SoundOffIcon';
import FacebookIcon from './icons/FacebookIcon';
import ZaloIcon from './icons/ZaloIcon';
import LinkIcon from './icons/LinkIcon';
import Logo from './Logo';

interface GreetingCardProps {
  isPlaying: boolean;
  toggleMusic: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.5,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.8,
      staggerChildren: 0.1,
    } 
  },
};

const textLineVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

const GreetingCard: React.FC<GreetingCardProps> = ({ isPlaying, toggleMusic }) => {
  const [copied, setCopied] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const shareToFacebook = () => {
     window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const shareToZalo = () => {
    copyLink();
    alert("Đã sao chép liên kết! Bạn có thể dán vào Zalo để chia sẻ.");
  };

  return (
    <>
      <motion.div
        className="flex items-center justify-center min-h-screen p-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="relative w-full max-w-4xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 md:p-10 text-center ring-1 ring-rose-100">
          <button onClick={toggleMusic} className="absolute top-4 right-4 text-rose-500 hover:text-rose-700">
            {isPlaying ? <SoundOnIcon /> : <SoundOffIcon />}
          </button>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="bg-cover bg-center rounded-lg p-4 sm:p-6"
              style={{backgroundImage: 'url(https://picsum.photos/id/1025/1200/800?blur=2)'}}
            >
              <div className="bg-white/90 rounded-lg p-4 sm:p-6">
                <motion.div 
                  className="grid md:grid-cols-2 gap-8 text-left"
                  variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.5 } }
                  }}
                >
                  {/* Vietnamese Version */}
                  <motion.div variants={itemVariants} className="space-y-4 text-gray-700">
                    <motion.h2 variants={textLineVariants} className="font-title font-bold text-xl sm:text-2xl md:text-3xl text-rose-800">Chúc mừng Ngày Phụ nữ Việt Nam 20/10!</motion.h2>
                    <motion.p variants={textLineVariants}>Ngày 20 tháng 10 là dịp đặc biệt để bày tỏ lòng biết ơn và trân trọng tới những người phụ nữ tuyệt vời – những người mang đến yêu thương, sức mạnh và nguồn cảm hứng cho cuộc sống này.</motion.p>
                    <motion.p variants={textLineVariants}>Mỗi người phụ nữ đều là một bông hoa rực rỡ nhất được sinh ra để làm đẹp cho cuộc đời.</motion.p>
                    <motion.p variants={textLineVariants}>Nhân ngày 20/10, Team Anh em HDI English Linh Đàm xin gửi lời chúc tới tất cả những người phụ nữ – các bà, các mẹ, các chị và những nàng công chúa nhỏ của đại gia đình HDI – luôn ngập tràn niềm vui, hạnh phúc và rạng rỡ hơn cả những đóa hoa xinh đẹp nhất.</motion.p>
                  </motion.div>

                  {/* English Version */}
                  <motion.div variants={itemVariants} className="space-y-4 text-gray-700">
                    <motion.h2 variants={textLineVariants} className="font-title font-bold text-xl sm:text-2xl md:text-3xl text-blue-800">Happy Vietnamese Women’s Day 20/10!</motion.h2>
                    <motion.p variants={textLineVariants}>October 20th is a truly special time — a day to express gratitude and admiration for the amazing women who bring love, strength, and inspiration into our lives.</motion.p>
                    <motion.p variants={textLineVariants}>Every woman is a radiant flower, beautifully blooming in her own way.</motion.p>
                    <motion.p variants={textLineVariants}>On this special day, Men's Team HDI English Linh Dam wishes all wonderful women — the grandmothers, mothers, sisters, and little princesses of our HDI family — endless joy, beauty, and happiness that shines brighter than the most brilliant flowers.</motion.p>
                  </motion.div>
                </motion.div>

                <motion.p variants={itemVariants} className="font-title font-bold text-2xl sm:text-3xl text-rose-600 mt-8">
                  💗 Chúc mừng 20/10! 💗
                </motion.p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8">
              <motion.button
                onClick={() => setShowThankYou(true)}
                className="bg-rose-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-rose-600 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Thank you
              </motion.button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-8">
               <Logo />
              <p className="mt-4 text-sm text-gray-700">Trung tâm Anh ngữ HDI English Linh Đàm trực thuộc HDI Education Group</p>
              <div className="text-xs text-gray-600 mt-2 space-y-1">
                <p>📍 Số 04 lô D - TT3, KĐT Tây Nam Linh Đàm, Hoàng Liệt, Hà Nội</p>
                <p>📞 Hotline: 0965 992 389 | 🌐 <a href="http://linhdam.hdienglish.edu.vn" target="_blank" rel="noopener noreferrer" className="hover:underline">linhdam.hdienglish.edu.vn</a></p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6 flex justify-center items-center space-x-4">
                <div className="relative group">
                  <button onClick={shareToFacebook} className="p-2 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition-colors"><FacebookIcon /></button>
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Share on Facebook
                  </span>
                </div>
                <div className="relative group">
                  <button onClick={shareToZalo} className="p-2 rounded-full bg-gray-200 hover:bg-blue-400 hover:text-white transition-colors"><ZaloIcon /></button>
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Share on Zalo
                  </span>
                </div>
                <div className="relative group">
                  <button onClick={copyLink} className="p-2 rounded-full bg-gray-200 hover:bg-gray-500 hover:text-white transition-colors"><LinkIcon /></button>
                  <span className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${copied ? 'bg-green-600' : 'bg-gray-800'}`}>
                    {copied ? 'Đã sao chép!' : 'Copy Link'}
                  </span>
                </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showThankYou && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowThankYou(false)}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 sm:p-12 text-center shadow-2xl relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
                <h2 className="font-title font-bold text-2xl sm:text-4xl text-rose-800">HAPPY VIETNAMESE WOMEN'S DAY</h2>
                <p className="mt-4 text-lg sm:text-xl text-gray-700">- From HDI English -</p>
                 <button 
                  onClick={() => setShowThankYou(false)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 p-1"
                  aria-label="Close"
                 >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                 </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GreetingCard;
