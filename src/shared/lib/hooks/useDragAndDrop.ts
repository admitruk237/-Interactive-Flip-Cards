import { type DragEvent, useState } from 'react';

export interface UseDragAndDropReturn {
  draggedIndex: number | null;
  handlers: {
    onDragStart: (index: number) => void;
    onDragOver: (e: DragEvent<HTMLDivElement>, index: number) => void;
    onDragEnd: () => void;
  };
}

interface Props<T> {
  items: T[];
  onReorder: (newItems: T[]) => void;
}

export const useDragAndDrop = <T>({ items, onReorder }: Props<T>): UseDragAndDropReturn => {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newItems = [...items];
    const draggedItem = newItems[draggedIndex];

    newItems.splice(draggedIndex, 1);
    newItems.splice(index, 0, draggedItem);

    setDraggedIndex(index);
    onReorder(newItems);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  return {
    draggedIndex,
    handlers: {
      onDragStart: handleDragStart,
      onDragOver: handleDragOver,
      onDragEnd: handleDragEnd,
    },
  };
};
