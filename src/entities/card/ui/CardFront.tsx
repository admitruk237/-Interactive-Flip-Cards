import { type MouseEvent } from 'react';
import type { Card as CardType } from '../model/types';
import { Card, CardContent, CardHeader, CardTitle } from '@shared/ui/card';
import { Button } from '@shared/ui/button';
import { Star } from 'lucide-react';

type Props = {
  card: CardType;
  onToggleFavorite: (e: MouseEvent) => void;
};

export const CardFront = ({ card, onToggleFavorite }: Props) => {
  return (
    <Card rarity={card.stats.rarity} className="card-face h-full flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-background/50 backdrop-blur-sm hover:bg-background/80"
          onClick={onToggleFavorite}
        >
          <Star
            className={
              card.isFavorite ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
            }
          />
        </Button>
      </div>

      <CardHeader className="p-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">{card.title}</CardTitle>
          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-secondary">
            {card.category}
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground text-xs uppercase tracking-tighter">
          Rarity: <span className="font-bold">{card.stats.rarity}</span>
        </p>
      </CardContent>
    </Card>
  );
};
