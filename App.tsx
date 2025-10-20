import React, { useState, useRef, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroScreen from './components/IntroScreen';
import GreetingCard from './components/GreetingCard';

const App: React.FC = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpenCard = useCallback(() => {
    setIsCardOpen(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        // Autoplay was prevented, user needs to interact first.
        // The toggle button will still work.
        console.error("Audio autoplay failed:", error);
      });
    }
  }, []);

  const toggleMusic = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  return (
    <>
      <audio ref={audioRef} loop>
        {/* Replaced the broken audio link and used the <source> tag for better compatibility */}
        <source src="https://cdn.pixabay.com/download/audio/2022/02/07/audio_8065b2f36d.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="bg-gradient-to-br from-rose-50 via-purple-50 to-amber-50 min-h-screen w-full overflow-hidden">
        <AnimatePresence mode="wait">
          {!isCardOpen ? (
            <IntroScreen key="intro" onOpen={handleOpenCard} />
          ) : (
            <GreetingCard key="card" isPlaying={isPlaying} toggleMusic={toggleMusic} />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;
