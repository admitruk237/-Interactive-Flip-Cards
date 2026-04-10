import type { Card as CardType } from '../model/types';
import { Card, CardContent, CardHeader, CardTitle } from '@shared/ui/card';
import { Badge } from '@shared/ui/badge';

type Props = {
  card: CardType;
};

export const CardFront = ({ card }: Props) => {
  return (
    <Card 
      rarity={card.stats.rarity} 
      className="absolute inset-0 flex h-full w-full flex-col overflow-hidden rounded-xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] after:pointer-events-none after:absolute after:inset-0 after:z-10 after:-translate-x-full after:bg-[linear-gradient(105deg,transparent_20%,rgba(255,255,255,0.4)_45%,rgba(255,255,255,0.5)_50%,rgba(255,255,255,0.4)_55%,transparent_80%)] after:transition-transform after:duration-[600ms] after:content-[''] group-hover:after:translate-x-full"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>

      <CardHeader className="p-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">{card.title}</CardTitle>
          <Badge variant="secondary" className="text-[10px] uppercase font-bold">
            {card.category}
          </Badge>
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
