import { type MouseEvent } from 'react';
import type { Card as CardType } from '../model/types';
import { Card, CardContent, CardHeader, CardTitle } from '@shared/ui/card';
import { Button } from '@shared/ui/button';
import { Progress } from '@shared/ui/progress';
import { Trash2 } from 'lucide-react';

type Props = {
  card: CardType;
  onDelete: (e: MouseEvent) => void;
};

export const CardBack = ({ card, onDelete }: Props) => {
  return (
    <Card rarity={card.stats.rarity} className="card-face card-face--back h-full flex flex-col">
      <CardHeader className="p-4 border-b border-border/50">
        <CardTitle className="text-lg">Stats: {card.title}</CardTitle>
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
