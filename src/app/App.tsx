import React, { useState } from 'react';
import { FlipCard } from '@/entities/card';
import { INITIAL_CARDS } from '@/shared/data/cards';

function App() {
  const [cards, setCards] = useState(INITIAL_CARDS);

  const handleDelete = (id: string) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
  };

  const handleToggleFavorite = (id: string) => {
    setCards((prev) =>
      prev.map((c) => (c.id === id ? { ...c, isFavorite: !c.isFavorite } : c))
    );
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-slate-950 p-10">
      <h1 className="mb-10 text-4xl font-black tracking-widest text-white uppercase italic">
        Dragon Collection
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {cards.map((card) => (
          <div key={card.id} className="relative transition-transform hover:scale-105 duration-300">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-lg"></div>
            <FlipCard 
              card={card} 
              onDelete={handleDelete} 
              onToggleFavorite={handleToggleFavorite} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
