import type { Card } from "@/entities/card/model/types";

export const INITIAL_CARDS: Card[] = [
  {
    id: "1",
    title: "Fire Dragon",
    image: "https://images.unsplash.com/photo-1577493322601-3ae1f30dc05a?q=80&w=400&auto=format&fit=crop",
    description: "A powerful dragon that commands the flames of the deep mountains.",
    category: "fire",
    isFavorite: false,
    stats: {
      power: 95,
      defense: 70,
      speed: 85,
      rarity: "legendary"
    }
  },
  {
    id: "2",
    title: "Sea Serpent",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop",
    description: "A mysterious creature that dwells in the dark depths of the ocean.",
    category: "water",
    isFavorite: true,
    stats: {
      power: 80,
      defense: 90,
      speed: 60,
      rarity: "rare"
    }
  },
  {
    id: "3",
    title: "Earth Golem",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop",
    description: "An ancient giant made of rock and moss, guardian of the forest.",
    category: "earth",
    isFavorite: false,
    stats: {
      power: 70,
      defense: 95,
      speed: 30,
      rarity: "common"
    }
  },
  {
    id: "4",
    title: "Sky Griffin",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=400&auto=format&fit=crop",
    description: "Queen of the clouds, lightning fast and sharp-eyed.",
    category: "air",
    isFavorite: false,
    stats: {
      power: 85,
      defense: 65,
      speed: 98,
      rarity: "epic"
    }
  },
  {
    id: "5",
    title: "Forest Spirit",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400&auto=format&fit=crop",
    description: "A gentle spirit that protects the flora and fauna of the ancient woods.",
    category: "earth",
    isFavorite: true,
    stats: {
      power: 50,
      defense: 60,
      speed: 75,
      rarity: "rare"
    }
  }
];
