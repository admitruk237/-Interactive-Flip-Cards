import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@shared/ui/dialog';
import { Button } from '@shared/ui/button';
import { AlertCircle } from 'lucide-react';
import type { Card } from '@entities/card/model/types';

interface Props {
  card: Card | null;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmDeleteDialog = ({ card, onClose, onConfirm }: Props) => {
  return (
    <Dialog open={Boolean(card)} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
            <AlertCircle className="text-red-500" size={24} />
          </div>
          <DialogTitle>Delete Card?</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete{' '}
            <span className="font-bold text-text-primary">"{card?.title}"</span>? This action cannot
            be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-3">
          <Button variant="glass" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button variant="destructive" onClick={onConfirm} className="flex-1">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
