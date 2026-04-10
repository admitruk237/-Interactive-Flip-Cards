import { ComponentProps, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './form';
import { Input } from './input';
import { cn } from '@shared/lib/utils';

type Props = ComponentProps<typeof Input> & {
  name: string;
  label: string;
  containerClassName?: string;
  labelRight?: ReactNode;
};

export function FormInput({
  name,
  label,
  className,
  containerClassName,
  labelRight,
  ...props
}: Props) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn('space-y-1.5', containerClassName)}>
          <div className="flex justify-between items-center">
            <FormLabel className="text-text-secondary">{label}</FormLabel>
            {labelRight}
          </div>
          <FormControl>
            <Input {...field} className={className} {...props} />
          </FormControl>
          <FormMessage className="text-red-400" />
        </FormItem>
      )}
    />
  );
}
