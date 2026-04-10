import { Header } from '@/widgets/header/ui/Header';
import { CardGrid } from '@/widgets/card-grid/ui/CardGrid';
import { AddCardDialog } from '@/features/add-card';
import { useCards } from '@/entities/card/model/hooks/useCards';

const App = () => {
  const { cards, handleAddCard, handleDelete, handleToggleFavorite, handleReorder } = useCards();

  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Header cards={cards} />

      <main className="w-full max-w-6xl mx-auto px-4 flex-1 flex flex-col">
        <div className="mb-8 w-full flex justify-start">
          <AddCardDialog onAdd={handleAddCard} />
        </div>

        <div className="flex-1 w-full overflow-visible pb-20">
          <CardGrid
            cards={cards}
            onReorder={handleReorder}
            onDelete={handleDelete}
            onToggleFavorite={handleToggleFavorite}
          />
        </div>
      </main>
    </div>
  );
};
export default App;
