import { useRef } from 'react';

export const useFlipSound = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playFlip = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/sounds/flip.mp3');
      audioRef.current.volume = 0.3;
    }

    const audio = audioRef.current;
    
    // Reset to start for rapid clicks
    audio.currentTime = 0;
    
    audio.play().catch((err) => {
      // Browser autoplay policy might block this until user interaction
      console.warn('Audio play blocked or failed:', err);
    });
  };

  return { playFlip };
};
