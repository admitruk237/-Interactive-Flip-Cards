import { useState } from 'react';
import { FlipCard } from '@entities/card';
import type { Card } from '@entities/card/model/types';
import { useDragAndDrop } from '@shared/lib/hooks/useDragAndDrop';
import { ConfirmDeleteDialog } from '@features/delete-card/ui/ConfirmDeleteDialog';
import { cn } from '@shared/lib/utils';

type Props = {
  cards: Card[];
  onReorder: (cards: Card[]) => void;
  onDelete: (id: string) => void;
  onToggleFavorite: (id: string) => void;
};

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

export const CardGrid = ({ cards, onReorder, onDelete, onToggleFavorite }: Props) => {
  const [cardToDelete, setCardToDelete] = useState<Card | null>(null);

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
    <div className={GRID_LAYOUT_CLASSES} id="grid-container">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`relative aspect-[3/4.2] w-full max-w-[320px] cursor-grab select-none transition-all duration-200 ease-in-out active:cursor-grabbing ${
            draggedIndex === index ? 'opacity-50 scale-95' : 'hover:scale-[1.02]'
          }`}
          draggable
          onDragStart={() => handlers.onDragStart(index)}
          onDragOver={(e) => handlers.onDragOver(e, index)}
          onDragEnd={handlers.onDragEnd}
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
