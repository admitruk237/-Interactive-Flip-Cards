import { type Control, type Path, useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/shared/ui/button';
import { Form } from '@/shared/ui/form';
import { FormInput } from '@/shared/ui/form-input';
import { FormSelect } from '@/shared/ui/form-select';
import {
  CATEGORIES,
  CATEGORY_OPTIONS,
  DEFAULT_CARD_IMAGE,
  RARITIES,
  RARITY_OPTIONS,
  STAT_KEYS,
} from '@/entities/card/model/constants';
import type { Card } from '@/entities/card/model/types';

const statSchema = z.number().min(0).max(100, 'Max 100');

const formSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters').max(30, 'Title is too long'),
  category: z.enum(CATEGORIES),
  image: z.string().url('Please enter a valid image URL'),
  description: z.string().max(200, 'Description is too long').optional(),
  stats: z.object({
    power: statSchema,
    defense: statSchema,
    speed: statSchema,
    rarity: z.enum(RARITIES),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const StatValue = ({ name, control }: { name: Path<FormValues>; control: Control<FormValues> }) => {
  const value = useWatch({
    control,
    name,
  });
  return <span className="text-xs font-mono text-text-muted">{String(value ?? 0)}%</span>;
};

interface Props {
  onSubmit: (card: Omit<Card, 'id' | 'isFavorite'>) => void;
  onCancel: () => void;
}

export const AddCardForm = ({ onSubmit, onCancel }: Props) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      category: CATEGORIES[0],
      image: DEFAULT_CARD_IMAGE,
      description: '',
      stats: {
        power: 50,
        defense: 50,
        speed: 50,
        rarity: RARITIES[0],
      },
    },
  });

  const handleFormSubmit = (values: FormValues) => {
    onSubmit({
      title: values.title,
      category: values.category,
      image: values.image,
      description: values.description || '',
      stats: {
        power: values.stats.power,
        defense: values.stats.defense,
        speed: values.stats.speed,
        rarity: values.stats.rarity,
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted">
              General Info
            </h3>
            <FormInput
              name="title"
              label="Card Title"
              placeholder="e.g. Ancient Ember"
              className="bg-input-bg border-border"
            />
            <FormSelect
              name="category"
              label="Category"
              placeholder="Select category"
              options={CATEGORY_OPTIONS}
            />
            <FormSelect
              name="stats.rarity"
              label="Rarity"
              placeholder="Select rarity"
              options={RARITY_OPTIONS}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted">
              Attributes
            </h3>
            <div className="grid grid-cols-1 gap-4 rounded-xl bg-input-bg p-4 border border-border">
              {STAT_KEYS.map((stat) => (
                <FormInput
                  key={stat}
                  name={`stats.${stat}`}
                  label={stat.charAt(0).toUpperCase() + stat.slice(1)}
                  labelRight={<StatValue name={`stats.${stat}`} control={form.control} />}
                  type="number"
                  className="h-8 bg-background/50 border-border"
                  onChange={(e) => form.setValue(`stats.${stat}`, Number(e.target.value))}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-border">
          <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted">
            Visuals & Legend
          </h3>
          <FormInput
            name="image"
            label="Image URL"
            placeholder="https://..."
            className="bg-input-bg border-border"
          />
          <FormInput
            name="description"
            label="Short Lore"
            placeholder="Describe your dragon..."
            className="bg-input-bg border-border"
          />
        </div>

        <div className="flex justify-end gap-3 pt-6">
          <Button type="button" variant="glass" size="action" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="gradient" size="action">
            Forge Card
          </Button>
        </div>
      </form>
    </Form>
  );
};
