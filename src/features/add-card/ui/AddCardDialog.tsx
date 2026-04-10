import { useState } from 'react';
import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';
import { AddCardForm } from './AddCardForm';
import type { Card } from '@/entities/card/model/types';

type Props = {
  onAdd: (card: Omit<Card, 'id' | 'isFavorite'>) => void;
};

export const AddCardDialog = ({ onAdd }: Props) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (card: Omit<Card, 'id' | 'isFavorite'>) => {
    onAdd(card);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="gradient" size="action">
          Add Card
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] max-h-[600px] overflow-y-auto pr-2">
        <DialogHeader>
          <DialogTitle>Add New Dragon Card</DialogTitle>
          <DialogDescription>
            Fill in the details to forge a new legendary dragon card for your collection.
          </DialogDescription>
        </DialogHeader>
        <AddCardForm onSubmit={handleSubmit} onCancel={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};
