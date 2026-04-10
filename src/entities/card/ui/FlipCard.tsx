import { useFlipCard } from '../model/useFlipCard';
import type { Card } from '../model/types';
import { CardFront } from './CardFront';
import { CardBack } from './CardBack';

type Props = {
  card: Card;
  onDelete: (id: string) => void;
  onToggleFavorite: (id: string) => void;
};

export const FlipCard = ({ card, onDelete, onToggleFavorite }: Props) => {
  const { isFlipped, handlers, actions } = useFlipCard({
    id: card.id,
    onDelete,
    onToggleFavorite,
  });

  return (
    <div className="group h-[420px] w-[300px] cursor-grab [perspective:1000px]" {...handlers}>
      <div 
        className={`relative h-full w-full transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
      >
        <CardFront card={card} />
        <CardBack card={card} onDelete={actions.onDelete} onToggleFavorite={actions.onFavorite} />
      </div>
    </div>
  );
};
