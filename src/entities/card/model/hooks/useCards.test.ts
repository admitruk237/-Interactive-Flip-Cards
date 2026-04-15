import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useCards } from './useCards';

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('хук useCards', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('має ініціалізуватися з 5 картками за замовчуванням', () => {
    const { result } = renderHook(() => useCards());
    expect(result.current.cards.length).toBe(5);
  });

  it('має коректно додавати нову картку', () => {
    const { result } = renderHook(() => useCards());

    act(() => {
      result.current.handleAddCard({
        title: 'New Dragon',
        image: 'test.jpg',
        description: 'Testing description',
        category: 'fire',
        stats: {
          power: 80,
          defense: 60,
          speed: 70,
          rarity: 'rare',
        },
      });
    });

    expect(result.current.cards.length).toBe(6);
    expect(result.current.cards[0].title).toBe('New Dragon');
  });

  it('має коректно видаляти картку', () => {
    const { result } = renderHook(() => useCards());
    const initialId = result.current.cards[0].id;

    act(() => {
      result.current.handleDelete(initialId);
    });

    expect(result.current.cards.length).toBe(4);
    expect(result.current.cards.find((c) => c.id === initialId)).toBeUndefined();
  });

  it('має перемикати статус улюбленої картки', () => {
    const { result } = renderHook(() => useCards());
    const initialId = result.current.cards[0].id;
    const initialFavorite = result.current.cards[0].isFavorite;

    act(() => {
      result.current.handleToggleFavorite(initialId);
    });

    expect(result.current.cards[0].isFavorite).toBe(!initialFavorite);
  });
});
