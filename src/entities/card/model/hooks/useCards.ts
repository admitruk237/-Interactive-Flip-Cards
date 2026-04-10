import { useEffect, useMemo, useState } from 'react';
import type { Card, Category, UseCardsReturn } from '../types';
import { INITIAL_CARDS } from '../constants';

const STORAGE_KEY = 'dragon-collection-cards';

export const useCards = (): UseCardsReturn => {
  const [cards, setCards] = useState<Card[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : INITIAL_CARDS;
    } catch (e) {
      console.error('Failed to load cards from localStorage', e);
      return INITIAL_CARDS;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
  }, [cards]);

  const [filter, setFilter] = useState<Category | 'all'>('all');

  const filteredCards = useMemo(() => {
    if (filter === 'all') return cards;
    return cards.filter((c) => c.category === filter);
  }, [cards, filter]);

  const handleAddCard = (newCardData: Omit<Card, 'id' | 'isFavorite'>) => {
    const newCard: Card = {
      ...newCardData,
      id: crypto.randomUUID(),
      isFavorite: false,
    };
    setCards((prev) => [newCard, ...prev]);
  };

  const handleDelete = (id: string) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
  };

  const handleToggleFavorite = (id: string) => {
    setCards((prev) => prev.map((c) => (c.id === id ? { ...c, isFavorite: !c.isFavorite } : c)));
  };

  const handleReorder = (newCards: Card[]) => {
    setCards(newCards);
  };

  return {
    cards,
    filteredCards,
    filter,
    setFilter,
    handleAddCard,
    handleDelete,
    handleToggleFavorite,
    handleReorder,
  };
};
