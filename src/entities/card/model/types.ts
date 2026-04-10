export type Category = 'fire' | 'water' | 'earth' | 'air';
export type Rarity = 'common' | 'rare' | 'epic' | 'legendary';

export interface CardStats {
  power: number;
  defense: number;
  speed: number;
  rarity: Rarity;
}

export interface Card {
  id: string;
  title: string;
  image: string;
  description: string;
  stats: CardStats;
  category: Category;
  isFavorite: boolean;
}

export interface UseCardsReturn {
  cards: Card[];
  handleAddCard: (card: Omit<Card, 'id' | 'isFavorite'>) => void;
  handleDelete: (id: string) => void;
  handleToggleFavorite: (id: string) => void;
  handleReorder: (newCards: Card[]) => void;
}

export interface UseFlipCardReturn {
  isFlipped: boolean;
  handlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onClick: () => void;
  };
  actions: {
    onFavorite: (e: import('react').MouseEvent) => void;
    onDelete: (e: import('react').MouseEvent) => void;
  };
}
