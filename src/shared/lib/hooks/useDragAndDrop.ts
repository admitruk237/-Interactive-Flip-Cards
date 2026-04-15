import { type DragEvent, useRef, useState } from 'react';

export interface UseDragAndDropReturn {
  draggedIndex: number | null;
  handlers: {
    onDragStart: (e: DragEvent<HTMLElement>, index: number) => void;
    onDragOver: (e: DragEvent<HTMLElement>, index: number) => void;
    onDragEnd: (e: DragEvent<HTMLElement>) => void;
  };
}

interface Props<T> {
  items: T[];
  onReorder: (newItems: T[]) => void;
  isDisabled?: boolean;
}

export const useDragAndDrop = <T>({
  items,
  onReorder,
  isDisabled,
}: Props<T>): UseDragAndDropReturn => {
  const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);
  const draggedIndexRef = useRef<number | null>(null);

  const handleDragStart = (e: DragEvent<HTMLElement>, index: number) => {
    if (isDisabled) return;

    draggedIndexRef.current = index;
    setDraggedItemIndex(index);

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', index.toString());

    const target = e.currentTarget as HTMLElement;
    setTimeout(() => {
      target.style.opacity = '0.4';
      target.style.transform = 'scale(0.95)';
    }, 0);
  };

  const handleDragOver = (e: DragEvent<HTMLElement>, targetIndex: number) => {
    e.preventDefault();
    if (isDisabled) return;

    const sourceIndex = draggedIndexRef.current;

    if (sourceIndex === null || sourceIndex === targetIndex) return;

    const newItems = [...items];
    const draggedItem = newItems[sourceIndex];
    newItems.splice(sourceIndex, 1);
    newItems.splice(targetIndex, 0, draggedItem);

    draggedIndexRef.current = targetIndex;
    setDraggedItemIndex(targetIndex);
    onReorder(newItems);
  };

  const handleDragEnd = (e: DragEvent<HTMLElement>) => {
    draggedIndexRef.current = null;
    setDraggedItemIndex(null);
    const target = e.currentTarget as HTMLElement;
    target.style.opacity = '1';
    target.style.transform = 'scale(1)';
  };

  return {
    draggedIndex: draggedItemIndex,
    handlers: {
      onDragStart: handleDragStart,
      onDragOver: handleDragOver,
      onDragEnd: handleDragEnd,
    },
  };
};
