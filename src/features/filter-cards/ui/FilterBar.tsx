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
    <div className="flex flex-wrap gap-2 p-1 bg-background/50 border border-border/50 rounded-xl backdrop-blur-sm">
      {FILTER_OPTIONS.map((cat) => (
        <Button
          key={cat.value}
          variant={currentFilter === cat.value ? 'default' : 'ghost'}
          size="sm"
          className={`rounded-lg transition-all ${
            currentFilter !== cat.value
              ? 'hover:bg-background/80 text-muted-foreground hover:text-foreground'
              : ''
          }`}
          onClick={() => onFilterChange(cat.value)}
        >
          {cat.label}
        </Button>
      ))}
    </div>
  );
};
