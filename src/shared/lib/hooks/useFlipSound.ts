import { useRef, useEffect } from 'react';

export function useFlipSound(soundPath: string = '/sounds/flip.wav') {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(soundPath);
    audioRef.current.volume = 0.3;
  }, [soundPath]);

  const playFlip = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.warn('Autoplay was prevented. Interaction required first.', error);
      });
    }
  };

  return { playFlip };
}
