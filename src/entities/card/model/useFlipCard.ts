import { useState, type MouseEvent } from 'react';
import { useDeviceType } from '@shared/lib/hooks/useIsMobile';

type Props = {
  id: string;
  onDelete: (id: string) => void;
  onToggleFavorite: (id: string) => void;
};

export function useFlipCard({ id, onDelete, onToggleFavorite }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { isTablet } = useDeviceType();

  const handleToggleFlip = () => {
    if (isTablet) {
      setIsFlipped((prev) => !prev);
    }
  };

  const handleMouseEnter = () => {
    if (!isTablet) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isTablet) {
      setIsFlipped(false);
    }
  };

  const handleFavorite = (e: MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(id);
  };

  const handleDelete = (e: MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('Delete this card?')) {
      onDelete(id);
    }
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
