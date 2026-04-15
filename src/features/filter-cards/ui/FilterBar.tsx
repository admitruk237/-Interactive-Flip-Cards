import { motion } from 'framer-motion';
import { Button } from '@shared/ui/button';
import { CATEGORY_OPTIONS } from '@entities/card/model/constants';
import type { Category } from '@entities/card/model/types';

interface Props {
  currentFilter: Category | 'all';
  onFilterChange: (filter: Category | 'all') => void;
}

const FILTER_OPTIONS: { label: string; value: Category | 'all' }[] = [
  { label: 'All', value: 'all' },
  ...CATEGORY_OPTIONS,
];

export const FilterBar = ({ currentFilter, onFilterChange }: Props) => {
  return (
    <nav
      aria-label="Card category filter"
      className="flex flex-wrap gap-2 p-1 bg-background/50 border border-border/50 rounded-xl backdrop-blur-sm"
    >
      <ul className="flex flex-wrap gap-2 list-none m-0 p-0 relative">
        {FILTER_OPTIONS.map((cat) => {
          const isActive = currentFilter === cat.value;
          return (
            <li key={cat.value} className="relative">
              {isActive && (
                <motion.div
                  layoutId="active-filter-pill"
                  className="absolute inset-0 bg-[var(--dropdown-hover)] rounded-lg"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                />
              )}
              <Button
                variant="ghost"
                size="sm"
                className={`relative z-10 rounded-lg transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? 'text-[var(--dropdown-text)]'
                    : 'text-muted-foreground hover:text-[var(--dropdown-text)]'
                }`}
                onClick={() => onFilterChange(cat.value)}
              >
                {cat.label}
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
