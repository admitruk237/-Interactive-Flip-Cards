import { CardGrid } from '@widgets/card-grid/ui/CardGrid';
import { Header } from '@widgets/header/ui/Header';
import { AddCardDialog } from '@features/add-card';
import { WelcomeModal } from '@features/welcome-modal/ui/WelcomeModal';
import { FilterBar } from '@features/filter-cards';
import { useCards } from '@entities/card/model/hooks/useCards';

const App = () => {
  const {
    cards,
    filteredCards,
    filter,
    setFilter,
    handleAddCard,
    handleDelete,
    handleToggleFavorite,
    handleReorder,
  } = useCards();

  return (
    <div className="min-h-screen flex flex-col font-inter">
      <WelcomeModal />
      <Header cards={cards} />

      <main className="w-full max-w-6xl mx-auto px-4 flex-1 flex flex-col">
        <div className="mb-8 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <FilterBar currentFilter={filter} onFilterChange={setFilter} />
          <AddCardDialog onAdd={handleAddCard} />
        </div>

        <div className="flex-1 w-full overflow-visible pb-20">
          <CardGrid
            cards={filteredCards}
            onReorder={handleReorder}
            onDelete={handleDelete}
            onToggleFavorite={handleToggleFavorite}
            disableDrag={filter !== 'all'}
          />
        </div>
      </main>
    </div>
  );
};
export default App;
