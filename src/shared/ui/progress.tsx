import * as React from 'react';
import { Progress as ProgressPrimitive } from 'radix-ui';

import { cn } from '@shared/lib/utils';

type Category = 'power' | 'defense' | 'speed';

function Progress({
  className,
  value,
  category,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & { category: Category }) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        'relative flex h-1 w-full items-center overflow-x-hidden rounded-full',
        category === 'power' && 'bg-red-500',
        category === 'defense' && 'bg-blue-500',
        category === 'speed' && 'bg-green-500',
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="size-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
