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

interface Props {
  cardTitle: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmDeleteDialog = ({ cardTitle, isOpen, onClose, onConfirm }: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
            <AlertCircle className="text-red-500" size={24} />
          </div>
          <DialogTitle>Delete Card?</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete{' '}
            <span className="font-bold text-text-primary">"{cardTitle}"</span>? This action cannot
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
