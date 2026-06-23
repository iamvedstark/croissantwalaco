export type MenuItem = {
  id: string;
  name: string;
  price: number;
  description?: string;
  category: string;
};

export const CATEGORIES = [
  { id: "croissants", name: "The Croissants", note: "Baked all day · 100% eggless" },
  { id: "sandwiches", name: "Croissant Sandwiches", note: "Folded, filled, grilled" },
  { id: "pizzas", name: "Mini Pizzas", note: "Wood-base, freshly baked" },
  { id: "drinks", name: "Coffee & Chai", note: "Brewed to order" },
] as const;

export const MENU: MenuItem[] = [
  // Croissants
  { id: "c-classic", name: "Classic Croissant", price: 110, category: "croissants", description: "Pure French-butter lamination, crackling shell, honeycomb crumb." },
  { id: "c-cheese", name: "Cheese Croissant", price: 150, category: "croissants", description: "Aged cheddar folded through the layers." },
  { id: "c-cinnamon", name: "Cinnamon Croissant", price: 150, category: "croissants", description: "Warm cinnamon sugar, glazed and golden." },
  { id: "c-cheesechilli", name: "Cheese Chilli Croissant", price: 170, category: "croissants", description: "Cheese, fresh chilli, a little kick." },
  { id: "c-raspberry", name: "Raspberry & Pistachio", price: 210, category: "croissants", description: "Raspberry preserve, pistachio cream." },
  { id: "c-chocpb", name: "Chocolate Peanut Butter", price: 210, category: "croissants", description: "Dark chocolate ganache, salted peanut butter." },
  { id: "c-benoff", name: "Benoff Croissant", price: 220, category: "croissants", description: "Banana, toffee sauce, whipped cream." },
  { id: "c-nutella", name: "Nutella Croissant", price: 210, category: "croissants", description: "Hazelnut chocolate, all the way through." },
  { id: "c-mini", name: "Mini Croissant", price: 60, category: "croissants", description: "Bite-sized, perfect with chai." },
  { id: "c-pudding", name: "Croissant Pudding", price: 230, category: "croissants", description: "Bread pudding, croissant style." },
  { id: "c-choc", name: "Chocolate Croissant", price: 230, category: "croissants", description: "Dark chocolate batons baked into the spiral." },

  // Sandwiches
  { id: "s-mushroom", name: "Creamy Cheese Mushroom", price: 230, category: "sandwiches", description: "Sautéed mushrooms, creamy cheese sauce." },
  { id: "s-paneer", name: "Grilled Paneer & Veggies", price: 230, category: "sandwiches", description: "Tandoor-spiced paneer, peppers, onions." },
  { id: "s-paprika-paneer", name: "Paprika Paneer Sandwich", price: 230, category: "sandwiches", description: "Smoked paprika paneer, fresh greens." },
  { id: "s-creamy-mushroom", name: "Creamy Mushroom Sandwich", price: 230, category: "sandwiches", description: "Slow-cooked mushrooms, herb butter." },
  { id: "s-egg-salad", name: "Egg Salad Sandwich", price: 230, category: "sandwiches", description: "Soft-boiled egg, mayo, chives." },
  { id: "s-scrambled", name: "Scrambled Egg & Cheese", price: 230, category: "sandwiches", description: "Buttery scramble, melted cheese." },
  { id: "s-smoked-chicken", name: "Smoked Chicken Avocado", price: 265, category: "sandwiches", description: "Smoked chicken, ripe avocado, lemon." },
  { id: "s-bbq-chicken", name: "BBQ Chicken Sandwich", price: 265, category: "sandwiches", description: "Pulled chicken, smoky BBQ glaze." },
  { id: "s-grilled-chicken", name: "Grilled Chicken Sandwich", price: 265, category: "sandwiches", description: "Char-grilled chicken, herb mayo." },
  { id: "s-paprika-chicken", name: "Paprika Chicken & Veggies", price: 265, category: "sandwiches", description: "Smoked paprika chicken, roasted veg." },

  // Pizzas
  { id: "p-margherita", name: "Margherita", price: 180, category: "pizzas", description: "San Marzano, fior di latte, basil." },
  { id: "p-veg-hyd", name: "Veg Hyderabadi Dum", price: 220, category: "pizzas", description: "Dum-spiced veg, cheese pull." },
  { id: "p-paneer-tikka", name: "Paneer Tikka", price: 220, category: "pizzas", description: "Tandoori paneer, onions, mint." },
  { id: "p-tandoori-paneer", name: "Tandoori Paneer", price: 220, category: "pizzas", description: "Smoky tandoor paneer, capsicum." },
  { id: "p-chicken-hyd", name: "Chicken Hyderabadi", price: 260, category: "pizzas", description: "Hyderabadi-spiced chicken, cheese." },
  { id: "p-butter-chicken", name: "Butter Chicken", price: 260, category: "pizzas", description: "Makhani sauce, tender chicken." },
  { id: "p-chicken-tikka", name: "Chicken Tikka", price: 260, category: "pizzas", description: "Tikka-marinated chicken, onions." },

  // Drinks
  { id: "d-filter", name: "Filter Coffee", price: 90, category: "drinks", description: "South-Indian style, frothy decoction." },
  { id: "d-cappuccino", name: "Cappuccino", price: 140, category: "drinks", description: "Espresso, steamed milk, foam." },
  { id: "d-latte", name: "Latte", price: 150, category: "drinks", description: "Silky steamed milk over espresso." },
  { id: "d-espresso", name: "Espresso", price: 110, category: "drinks", description: "Double shot, single origin." },
  { id: "d-hotchoc", name: "Hot Chocolate", price: 170, category: "drinks", description: "Melted dark chocolate, warm milk." },
  { id: "d-chai", name: "Masala Chai", price: 70, category: "drinks", description: "Whole spices, ginger, full-cream milk." },
  { id: "d-cutting", name: "Bombay Cutting", price: 60, category: "drinks", description: "Strong, sweet, half-glass." },
  { id: "d-iced-am", name: "Iced Americano", price: 150, category: "drinks", description: "Espresso over ice, cold water." },
];
