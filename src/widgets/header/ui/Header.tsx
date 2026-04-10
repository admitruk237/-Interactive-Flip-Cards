import { useTheme } from '@/shared/lib/hooks/useTheme';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { Button } from '@/shared/ui/button';
import { Badge } from '@/shared/ui/badge';
import { Monitor, Moon, Sun } from 'lucide-react';
import type { Card } from '@/entities/card/model/types';

interface Props {
  cards: Card[];
}

export const Header = ({ cards }: Props) => {
  const { setTheme } = useTheme();
  const favoriteCount = cards.filter((c) => c.isFavorite).length;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-header-border bg-header-bg backdrop-blur-xl mb-6">
      <div className="flex items-center gap-1.5 sm:gap-3 justify-between w-full max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-md sm:text-2xl font-bold sm:leading-[32px] tracking-[0.07px] uppercase bg-[linear-gradient(90deg,#155DFC_0%,#9810FA_100%)] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(21,93,252,0.1)]">
              Card Collection
            </h1>
            <p className="text-[10px] sm:text-[12px] font-normal leading-[14px] sm:leading-[16px] text-[#6A7282] dark:text-[#99A1AF]">
              Hover or tap to flip
            </p>
          </div>
          <Badge variant="favorite" size="header" className="gap-2">
            <span className="text-lg">⭐</span>
            <span>
              {favoriteCount} / {cards.length}
            </span>
          </Badge>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-xl bg-toggle-bg shadow-sm hover:opacity-90 transition-all border-none outline-none focus:ring-0 focus-visible:ring-0"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-sky-500" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-40 rounded-xl border-border bg-background/90 backdrop-blur-lg"
          >
            <DropdownMenuItem onClick={() => setTheme('light')} className="gap-3 focus:bg-white/10">
              <Sun size={14} className="text-amber-500" /> Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')} className="gap-3 focus:bg-white/10">
              <Moon size={14} className="text-sky-500" /> Dark
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTheme('system')}
              className="gap-3 focus:bg-white/10"
            >
              <Monitor size={14} className="text-slate-500" /> System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
