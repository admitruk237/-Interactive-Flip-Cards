import { useFlipCard } from '../model/useFlipCard';
import type { Card } from '../model/types';
import { CardFront } from './CardFront';
import { CardBack } from './CardBack';
import './FlipCard.css';

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
    <div className="card-container h-[420px] w-[300px] cursor-pointer" {...handlers}>
      <div className={`card-inner w-full h-full ${isFlipped ? 'card-inner--flipped' : ''}`}>
        <CardFront card={card} onToggleFavorite={actions.onFavorite} />
        <CardBack card={card} onDelete={actions.onDelete} />
      </div>
    </div>
  );
};
