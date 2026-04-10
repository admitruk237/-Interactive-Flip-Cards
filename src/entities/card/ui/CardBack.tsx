import { type MouseEvent } from 'react';
import type { Card as CardType } from '../model/types';
import { Card, CardContent, CardHeader, CardTitle } from '@shared/ui/card';
import { Button } from '@shared/ui/button';
import { Progress } from '@shared/ui/progress';
import { Trash2, Star } from 'lucide-react';

type Props = {
  card: CardType;
  onDelete: (e: MouseEvent) => void;
  onToggleFavorite: (e: MouseEvent) => void;
};

export const CardBack = ({ card, onDelete, onToggleFavorite }: Props) => {
  return (
    <Card rarity={card.stats.rarity} className="absolute inset-0 flex h-full w-full flex-col overflow-hidden rounded-xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]">
      <CardHeader className="p-4 border-b border-border/50 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg">Stats: {card.title}</CardTitle>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hover:bg-background/20"
          onClick={onToggleFavorite}
        >
          <Star
            className={
              card.isFavorite ? 'fill-amber-400 text-amber-600 drop-shadow-sm' : 'text-muted-foreground/60'
            }
          />
        </Button>
      </CardHeader>

      <CardContent className="p-4 flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          <p className="text-xs italic text-muted-foreground line-clamp-3">{card.description}</p>

          <div className="space-y-3 pt-2">
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] uppercase font-bold">
                <span>Power</span>
                <span>{card.stats.power}%</span>
              </div>
              <Progress value={card.stats.power} className="h-1.5" />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[10px] uppercase font-bold">
                <span>Defense</span>
                <span>{card.stats.defense}%</span>
              </div>
              <Progress value={card.stats.defense} className="h-1.5" />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[10px] uppercase font-bold">
                <span>Speed</span>
                <span>{card.stats.speed}%</span>
              </div>
              <Progress value={card.stats.speed} className="h-1.5" />
            </div>
          </div>
        </div>

        <Button variant="destructive" size="sm" className="w-full mt-4" onClick={onDelete}>
          <Trash2 className="w-4 h-4 mr-2" />
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};
