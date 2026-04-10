import { type MouseEvent } from 'react';
import type { Card as CardType } from '../model/types';
import { CATEGORY_EMOJIS } from '../model/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@shared/ui/card';
import { Badge } from '@shared/ui/badge';
import { Button } from '@/shared/ui/button';
import { Star } from 'lucide-react';

type Props = {
  card: CardType;
  onToggleFavorite: (e: MouseEvent) => void;
};

export const CardFront = ({ card, onToggleFavorite }: Props) => {
  return (
    <Card
      rarity={card.stats.rarity}
      isFavorite={card.isFavorite}
      className="absolute inset-0 flex h-full w-full flex-col overflow-hidden rounded-xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] after:pointer-events-none after:absolute after:inset-0 after:z-10 after:-translate-x-full after:bg-[linear-gradient(105deg,transparent_20%,rgba(255,255,255,0.4)_45%,rgba(255,255,255,0.5)_50%,rgba(255,255,255,0.4)_55%,transparent_80%)] after:transition-transform after:duration-[600ms] after:content-[''] group-hover:after:translate-x-full"
    >
      <div className="relative h-[55%] w-full overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-20 h-8 w-8 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white"
          onClick={onToggleFavorite}
        >
          <Star
            className={
              card.isFavorite ? 'fill-amber-400 text-amber-400 drop-shadow-sm' : 'text-white'
            }
            size={18}
          />
        </Button>
      </div>

      <CardHeader className="p-3 sm:p-4">
        <div className="flex justify-between items-center gap-1">
          <CardTitle className="text-sm sm:text-xl truncate">{card.title}</CardTitle>
          <div className="flex items-center gap-1.5 ">
            <span className="text-xs sm:text-lg filter drop-shadow-sm">
              {CATEGORY_EMOJIS[card.category]}
            </span>
            <Badge
              variant="secondary"
              className="text-[10px] sm:text-xs uppercase font-bold px-1.5 sm:px-2.5 h-5 sm:h-6 whitespace-nowrap"
            >
              {card.category}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-3 sm:p-4 pt-0">
        <p className="text-black/50 text-[10px] sm:text-xs uppercase tracking-tighter">
          Rarity: <span className="font-bold">{card.stats.rarity}</span>
        </p>
      </CardContent>
    </Card>
  );
};
