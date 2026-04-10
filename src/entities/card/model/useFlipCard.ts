import { useState } from 'react';
import { useDeviceType } from '@shared/lib/hooks/useIsMobile';
import { useFlipSound } from '@shared/lib/hooks/useFlipSound';

type Props = {
  id: string;
  onDelete: (id: string) => void;
  onToggleFavorite: (id: string) => void;
};

export function useFlipCard({ id, onDelete, onToggleFavorite }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { isTablet } = useDeviceType();
  const { playFlip } = useFlipSound();

  const handleToggleFlip = () => {
    if (isTablet) {
      setIsFlipped((prev) => !prev);
      playFlip();
    }
  };

  const handleMouseEnter = () => {
    if (!isTablet) {
      setIsFlipped(true);
      playFlip();
    }
  };

  const handleMouseLeave = () => {
    if (!isTablet) {
      setIsFlipped(false);
      playFlip();
    }
  };

  const handleFavorite = (e: MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(id);
  };

  const handleDelete = (e: MouseEvent) => {
    e.stopPropagation();
    onDelete(id);
  };

  return {
    isFlipped,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onClick: handleToggleFlip,
    },
    actions: {
      onFavorite: handleFavorite,
      onDelete: handleDelete,
    },
  };
}
