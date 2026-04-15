import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@shared/ui/dialog';
import { Button } from '@shared/ui/button';
import { Volume2 } from 'lucide-react';

export const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
            <Volume2 className="text-amber-500" size={24} />
          </div>
          <DialogTitle className="text-xl">Welcome to Card Collection!</DialogTitle>
          <DialogDescription className="text-text-secondary mt-2">
            This application uses high-quality 3D animations and sound effects for an immersive
            experience. For the best experience, please ensure your sound is on.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center mt-4">
          <Button
            variant="gradient"
            size="lg"
            onClick={handleClose}
            className="w-full sm:w-auto px-12"
          >
            Got it!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
