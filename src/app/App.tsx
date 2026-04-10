import { useState } from 'react';
import { CardGrid } from '@/widgets/card-grid/ui/CardGrid';
import { INITIAL_CARDS } from '@/shared/data/cards';
import type { Card } from '@/entities/card/model/types';

function App() {
  const [cards, setCards] = useState<Card[]>(INITIAL_CARDS as Card[]);

  const handleDelete = (id: string) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
  };

  const handleToggleFavorite = (id: string) => {
    setCards((prev) => prev.map((c) => (c.id === id ? { ...c, isFavorite: !c.isFavorite } : c)));
  };

  const handleReorder = (newCards: Card[]) => {
    setCards(newCards);
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-slate-950 p-10">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-black tracking-widest text-white uppercase italic">
          Dragon Collection
        </h1>
        <p className="text-muted-foreground text-sm mt-2">
          ⭐ {cards.filter((c) => c.isFavorite).length} / {cards.length} Favorites
        </p>
      </header>

      <CardGrid
        cards={cards}
        onReorder={handleReorder}
        onDelete={handleDelete}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}

export default App;
