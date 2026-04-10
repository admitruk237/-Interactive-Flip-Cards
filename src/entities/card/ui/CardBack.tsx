import { type MouseEvent } from 'react';
import type { Card as CardType } from '../model/types';
import { Card, CardContent, CardHeader, CardTitle } from '@shared/ui/card';
import { Button } from '@shared/ui/button';
import { Progress } from '@shared/ui/progress';
import { Star, Trash2 } from 'lucide-react';

type Props = {
  card: CardType;
  onDelete: (e: MouseEvent) => void;
  onToggleFavorite: (e: MouseEvent) => void;
};

export const CardBack = ({ card, onDelete, onToggleFavorite }: Props) => {
  return (
    <Card
      rarity={card.stats.rarity}
      isFavorite={card.isFavorite}
      className="absolute inset-0 flex h-full w-full flex-col overflow-hidden rounded-xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]"
    >
      <CardHeader className="p-3 sm:p-4 border-b border-border/50 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-[12px] sm:text-lg truncate">Stats: {card.title}</CardTitle>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 sm:h-8 sm:w-8 hover:bg-background/20"
          onClick={onToggleFavorite}
        >
          <Star
            className={
              card.isFavorite
                ? 'fill-amber-400 text-amber-600 drop-shadow-sm'
                : 'text-muted-foreground/60'
            }
            size={14}
          />
        </Button>
      </CardHeader>

      <CardContent className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2 sm:space-y-4">
          <p className="text-[10px] sm:text-xs italic text-muted-foreground line-clamp-2 sm:line-clamp-3">
            {card.description}
          </p>

          <div className="space-y-2 sm:space-y-3 pt-1 sm:pt-2">
            <div className="space-y-1 sm:space-y-1">
              <div className="flex justify-between text-[10px] sm:text-[10px] uppercase font-bold">
                <span>Power</span>
                <span>{card.stats.power}%</span>
              </div>
              <Progress category="power" value={card.stats.power} className="h-1.5" />
            </div>

            <div className="space-y-1 sm:space-y-1">
              <div className="flex justify-between text-[10px] sm:text-[10px] uppercase font-bold">
                <span>Defense</span>
                <span>{card.stats.defense}%</span>
              </div>
              <Progress category="defense" value={card.stats.defense} className="h-1.5" />
            </div>

            <div className="space-y-1 sm:space-y-1">
              <div className="flex justify-between text-[10px] sm:text-[10px] uppercase font-bold">
                <span>Speed</span>
                <span>{card.stats.speed}%</span>
              </div>
              <Progress category="speed" value={card.stats.speed} className="h-1.5" />
            </div>
          </div>
        </div>

        <Button
          variant="destructive"
          size="sm"
          className="w-full mt-2 sm:mt-4 h-7 sm:h-9 text-[10px] sm:text-xs"
          onClick={onDelete}
        >
          <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};
