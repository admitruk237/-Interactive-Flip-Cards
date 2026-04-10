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

const GRID_LAYOUT_CLASSES = cn(
  'grid w-full grid-cols-[repeat(auto-fill,minmax(160px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 sm:gap-8 overflow-visible justify-items-center',
  /* 2 columns logic for larger screens */
  '[#grid-container]:sm:[&>div:nth-child(2n+1)]:justify-self-start',
  '[#grid-container]:sm:[&>div:nth-child(2n)]:justify-self-end',
  /* 3 columns logic */
  '[#grid-container]:lg:[&>div:nth-child(3n+1)]:justify-self-start',
  '[#grid-container]:lg:[&>div:nth-child(3n)]:justify-self-end',
  '[#grid-container]:lg:[&>div:nth-child(3n+2)]:justify-self-center'
);

export const CardGrid = ({ cards, onReorder, onDelete, onToggleFavorite, disableDrag }: Props) => {
  const [cardToDelete, setCardToDelete] = useState<Card | null>(null);
  const [parent, enableAnimations] = useAutoAnimate<HTMLDivElement>({
    duration: 700,
    easing: 'ease-out',
  });

  const { draggedIndex, handlers } = useDragAndDrop({
    items: cards,
    onReorder,
  });

  const handleConfirmDelete = () => {
    if (cardToDelete) {
      onDelete(cardToDelete.id);
      setCardToDelete(null);
    }
  };

  return (
    <div className={GRID_LAYOUT_CLASSES} id="grid-container" ref={parent}>
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={cn(
            'draggable-item relative aspect-[3/4.2] w-full max-w-[320px] select-none transition-all duration-200 ease-in-out',
            !disableDrag && 'cursor-grab active:cursor-grabbing hover:scale-[1.02]',
            draggedIndex === index && 'opacity-50 scale-95'
          )}
          draggable={!disableDrag}
          onDragStart={(e) => {
            if (disableDrag) {
              e.preventDefault();
              return;
            }
            enableAnimations(false);
            handlers.onDragStart(index);
          }}
          onDragOver={(e) => !disableDrag && handlers.onDragOver(e, index)}
          onDragEnd={() => {
            if (!disableDrag) {
              handlers.onDragEnd();
              enableAnimations(true);
            }
          }}
        >
          <FlipCard
            card={card}
            onDelete={() => setCardToDelete(card)}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
      ))}

      <ConfirmDeleteDialog
        card={cardToDelete}
        onClose={() => setCardToDelete(null)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};
