import { FlipCard } from '@entities/card';
import type { Card } from '@entities/card/model/types';
import { useDragAndDrop } from '@shared/lib/hooks/useDragAndDrop';

type Props = {
  cards: Card[];
  onReorder: (cards: Card[]) => void;
  onDelete: (id: string) => void;
  onToggleFavorite: (id: string) => void;
};

export const CardGrid = ({ cards, onReorder, onDelete, onToggleFavorite }: Props) => {
  const { draggedIndex, handlers } = useDragAndDrop({
    items: cards,
    onReorder,
  });

  return (
    <div className="grid w-full max-w-[1200px] grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-items-center gap-6 p-4 sm:gap-8 sm:p-8 mx-auto">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`relative h-[420px] w-[300px] cursor-grab select-none transition-opacity duration-200 ease-in-out active:cursor-grabbing ${
            draggedIndex === index ? 'opacity-50' : ''
          }`}
          draggable
          onDragStart={() => handlers.onDragStart(index)}
          onDragOver={(e) => handlers.onDragOver(e, index)}
          onDragEnd={handlers.onDragEnd}
        >
          <FlipCard card={card} onDelete={onDelete} onToggleFavorite={onToggleFavorite} />
        </div>
      ))}
    </div>
  );
};
