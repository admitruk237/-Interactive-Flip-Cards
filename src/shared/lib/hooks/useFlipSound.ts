import { useRef } from 'react';

export const useFlipSound = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playFlip = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/sounds/flip.wav');
      audioRef.current.volume = 0.3;
    }

    const audio = audioRef.current;

    audio.currentTime = 0;

    audio.play().catch((err) => {
      console.warn('Audio play blocked or failed:', err);
    });
  };

  return { playFlip };
};
