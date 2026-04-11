import { useState } from 'react';
import { FlipCard } from '@entities/card';
import type { Card } from '@entities/card/model/types';
import { useDragAndDrop } from '@shared/lib/hooks/useDragAndDrop';
import { ConfirmDeleteDialog } from '@features/delete-card/ui/ConfirmDeleteDialog';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { cn } from '@shared/lib/utils';

interface Props {
  cards: Card[];
  onReorder: (cards: Card[]) => void;
  onDelete: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  disableDrag?: boolean;
}

export const CardGrid = ({ cards, onReorder, onDelete, onToggleFavorite, disableDrag }: Props) => {
  const [cardToDelete, setCardToDelete] = useState<{ id: string; title: string } | null>(null);
  const [parent, enableAnimations] = useAutoAnimate<HTMLDivElement>({
    duration: 700,
    easing: 'ease-out',
  });

  const { draggedIndex, handlers } = useDragAndDrop({
    items: cards,
    onReorder,
    isDisabled: disableDrag,
  });

  const handleConfirmDelete = () => {
    if (cardToDelete) {
      onDelete(cardToDelete.id);
      setCardToDelete(null);
    }
  };

  const handleDragStart = (index: number) => (e: React.DragEvent<HTMLElement>) => {
    if (disableDrag) {
      e.preventDefault();
      return;
    }
    enableAnimations(false);
    handlers.onDragStart(e, index);
  };

  const handleDragOver = (index: number) => (e: React.DragEvent<HTMLElement>) => {
    if (disableDrag) return;
    handlers.onDragOver(e, index);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLElement>) => {
    if (disableDrag) return;
    handlers.onDragEnd(e);
    enableAnimations(true);
  };

  return (
    <div
      className="grid w-full grid-cols-[repeat(auto-fill,minmax(160px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 sm:gap-8 overflow-visible justify-items-center"
      id="grid-container"
      ref={parent}
    >
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={cn(
            'draggable-item relative aspect-[3/4.2] w-full max-w-[320px] select-none transition-all duration-200 ease-in-out',
            !disableDrag && 'cursor-grab active:cursor-grabbing hover:scale-[1.02]',
            draggedIndex === index && 'opacity-50 scale-95'
          )}
          draggable={!disableDrag}
          onDragStart={handleDragStart(index)}
          onDragOver={handleDragOver(index)}
          onDragEnd={handleDragEnd}
        >
          <FlipCard
            card={card}
            onDelete={() => setCardToDelete({ id: card.id, title: card.title })}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
      ))}

      <ConfirmDeleteDialog
        isOpen={Boolean(cardToDelete)}
        cardTitle={cardToDelete?.title || ''}
        onClose={() => setCardToDelete(null)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};
