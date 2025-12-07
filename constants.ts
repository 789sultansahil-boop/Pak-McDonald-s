
import { Product, StoreLocation, Modifier } from './types';

export const CATEGORIES = [
  { id: 'all', label: 'All Favorites' },
  { id: 'burgers', label: 'Burgers' },
  { id: 'chicken', label: 'Chicken & Fish' },
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'sides', label: 'Fries & Sides' },
  { id: 'beverages', label: 'Beverages' },
  { id: 'desserts', label: 'Desserts & Shakes' },
  { id: 'deals', label: 'Happy Meals & Deals' },
];

// Helper to get reliable images
const BURGER_IMGS = [
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1607018134336-6c17e089601d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1596626465784-54f45f3f7791?auto=format&fit=crop&w=800&q=80',
];
const CHICKEN_IMGS = [
  'https://images.unsplash.com/photo-1615557960916-5f4791effe9d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1619250914389-1301389e6eb7?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1562967965-6a607707d915?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1626082927389-e1b71959a48d?auto=format&fit=crop&w=800&q=80',
];
const BREAKFAST_IMGS = [
  'https://images.unsplash.com/photo-1525351484163-7529414395d8?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1550507992-eb63ffe08025?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1533089862017-5614a9579cf4?auto=format&fit=crop&w=800&q=80', // Pancakes
  'https://images.unsplash.com/photo-1626573865660-3cb834f8202d?auto=format&fit=crop&w=800&q=80',
];
const SIDE_IMGS = [
  'https://images.unsplash.com/photo-1573080496987-a199f8cd4054?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1548340748-43807517a633?auto=format&fit=crop&w=800&q=80',
];
const DRINK_IMGS = [
  'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80', // Coke
  'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80', // Coffee
  'https://images.unsplash.com/photo-1572442388796-11668a67e569?auto=format&fit=crop&w=800&q=80', // Frappe
];
const DESSERT_IMGS = [
  'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=800&q=80',
];

export const MOCK_MENU: Product[] = [
  // --- BURGERS (15 items) ---
  {
    id: 'b1',
    name: 'The Big Arch',
    description: 'Two quarter-pound beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.',
    price: 6.49,
    calories: 550,
    image: BURGER_IMGS[0],
    category: 'burgers',
    isNew: true
  },
  {
    id: 'b2',
    name: 'Classic Cheeseburger',
    description: '100% pure beef patty seasoned with just a pinch of salt and pepper.',
    price: 2.99,
    calories: 300,
    image: BURGER_IMGS[1],
    category: 'burgers'
  },
  {
    id: 'b3',
    name: 'Double Cheeseburger',
    description: 'Two 100% pure beef patties seasoned with just a pinch of salt and pepper.',
    price: 3.89,
    calories: 450,
    image: BURGER_IMGS[2],
    category: 'burgers'
  },
  {
    id: 'b4',
    name: 'Quarter Pounder with Cheese',
    description: 'Features a ¼ lb.* of 100% fresh beef that’s cooked when you order.',
    price: 5.49,
    calories: 520,
    image: BURGER_IMGS[3],
    category: 'burgers'
  },
  {
    id: 'b5',
    name: 'Double Quarter Pounder with Cheese',
    description: 'Two quarter pound 100% fresh beef patties that are hot and juicy.',
    price: 7.29,
    calories: 740,
    image: BURGER_IMGS[4],
    category: 'burgers'
  },
  {
    id: 'b6',
    name: 'Big Arch Bacon',
    description: 'The Big Arch with crispy applewood smoked bacon.',
    price: 7.19,
    calories: 630,
    image: BURGER_IMGS[5],
    category: 'burgers'
  },
  {
    id: 'b7',
    name: 'Hamburger',
    description: 'The classic burger. 100% pure beef patty with pickles, onions, ketchup, and mustard.',
    price: 2.49,
    calories: 250,
    image: BURGER_IMGS[1],
    category: 'burgers'
  },
  {
    id: 'b8',
    name: 'McDouble',
    description: 'Two 100% pure beef patties seasoned with just a pinch of salt and pepper.',
    price: 3.49,
    calories: 400,
    image: BURGER_IMGS[2],
    category: 'burgers'
  },
  {
    id: 'b9',
    name: 'Bacon McDouble',
    description: 'The McDouble you know and love, plus thick cut Applewood smoked bacon.',
    price: 4.19,
    calories: 460,
    image: BURGER_IMGS[5],
    category: 'burgers'
  },
  {
    id: 'b10',
    name: 'Triple Cheeseburger',
    description: 'Three 100% pure beef patties with two slices of melty American cheese.',
    price: 5.19,
    calories: 580,
    image: BURGER_IMGS[4],
    category: 'burgers'
  },
  {
    id: 'b11',
    name: 'Daily Double',
    description: 'Two 100% beef patties, slivered onions, tomato, lettuce and mayo.',
    price: 3.99,
    calories: 440,
    image: BURGER_IMGS[1],
    category: 'burgers'
  },
  {
    id: 'b12',
    name: 'Jalapeño Crunch Burger',
    description: 'Double beef with crispy jalapeños, spicy mayo, and pepper jack cheese.',
    price: 6.29,
    calories: 610,
    image: BURGER_IMGS[0],
    category: 'burgers',
    isNew: true
  },
  {
    id: 'b13',
    name: 'Mushroom Swiss Burger',
    description: 'Quarter pound beef patty with sautéed mushrooms and swiss cheese.',
    price: 5.99,
    calories: 580,
    image: BURGER_IMGS[3],
    category: 'burgers'
  },
  {
    id: 'b14',
    name: 'BBQ Bacon Burger',
    description: 'Savory beef patty topped with BBQ sauce, onion rings, and bacon.',
    price: 6.79,
    calories: 650,
    image: BURGER_IMGS[5],
    category: 'burgers'
  },
  {
    id: 'b15',
    name: 'The Grand Mac',
    description: 'Everything you love about the Big Arch, but bigger.',
    price: 7.99,
    calories: 850,
    image: BURGER_IMGS[4],
    category: 'burgers'
  },

  // --- CHICKEN & FISH (15 items) ---
  {
    id: 'c1',
    name: 'Spicy Chicken Deluxe',
    description: 'Crispy chicken breast with spicy pepper sauce and crinkle cut pickles.',
    price: 5.89,
    calories: 480,
    image: CHICKEN_IMGS[0],
    category: 'chicken'
  },
  {
    id: 'c2',
    name: 'McChicken',
    description: 'Classic crispy chicken patty topped with mayonnaise and shredded lettuce.',
    price: 2.89,
    calories: 400,
    image: CHICKEN_IMGS[1],
    category: 'chicken'
  },
  {
    id: 'c3',
    name: 'Filet-O-Fish',
    description: 'Wild-caught fish filet, melty American cheese and creamy tartar sauce.',
    price: 4.79,
    calories: 380,
    image: CHICKEN_IMGS[2],
    category: 'chicken'
  },
  {
    id: 'c4',
    name: 'Chicken McNuggets (4 pc)',
    description: 'Four tender, juicy, white meat chicken nuggets.',
    price: 2.49,
    calories: 170,
    image: CHICKEN_IMGS[2],
    category: 'chicken'
  },
  {
    id: 'c5',
    name: 'Chicken McNuggets (6 pc)',
    description: 'Six tender, juicy, white meat chicken nuggets.',
    price: 3.49,
    calories: 250,
    image: CHICKEN_IMGS[2],
    category: 'chicken'
  },
  {
    id: 'c6',
    name: 'Chicken McNuggets (10 pc)',
    description: 'Ten tender, juicy, white meat chicken nuggets.',
    price: 5.49,
    calories: 420,
    image: CHICKEN_IMGS[2],
    category: 'chicken'
  },
  {
    id: 'c7',
    name: 'Chicken McNuggets (20 pc)',
    description: 'Twenty tender, juicy, white meat chicken nuggets.',
    price: 8.99,
    calories: 830,
    image: CHICKEN_IMGS[2],
    category: 'chicken'
  },
  {
    id: 'c8',
    name: 'McCrispy',
    description: 'Southern style fried chicken breast on a potato roll.',
    price: 5.19,
    calories: 470,
    image: CHICKEN_IMGS[4],
    category: 'chicken'
  },
  {
    id: 'c9',
    name: 'Spicy McCrispy',
    description: 'Southern style fried chicken breast with spicy pepper sauce.',
    price: 5.39,
    calories: 530,
    image: CHICKEN_IMGS[0],
    category: 'chicken'
  },
  {
    id: 'c10',
    name: 'Grilled Chicken Sandwich',
    description: 'Herb-seasoned grilled chicken breast with lettuce and tomato.',
    price: 5.69,
    calories: 380,
    image: CHICKEN_IMGS[3],
    category: 'chicken'
  },
  {
    id: 'c11',
    name: 'Buttermilk Crispy Tenders (4pc)',
    description: 'Crispy, tender chicken strips made with buttermilk.',
    price: 4.99,
    calories: 440,
    image: CHICKEN_IMGS[4],
    category: 'chicken'
  },
  {
    id: 'c12',
    name: 'Classic Chicken Wrap',
    description: 'Crispy chicken, lettuce, shredded cheese, and ranch in a tortilla.',
    price: 3.29,
    calories: 350,
    image: CHICKEN_IMGS[1],
    category: 'chicken'
  },
  {
    id: 'c13',
    name: 'Spicy Chicken Wrap',
    description: 'Crispy chicken, lettuce, and spicy sauce in a tortilla.',
    price: 3.29,
    calories: 360,
    image: CHICKEN_IMGS[0],
    category: 'chicken'
  },
  {
    id: 'c14',
    name: 'Double Filet-O-Fish',
    description: 'Two wild-caught fish filets, melty cheese and tartar sauce.',
    price: 6.79,
    calories: 590,
    image: CHICKEN_IMGS[2],
    category: 'chicken'
  },
  {
    id: 'c15',
    name: 'Chicken Selects (3pc)',
    description: 'Premium breast strips served with your choice of dip.',
    price: 4.59,
    calories: 380,
    image: CHICKEN_IMGS[4],
    category: 'chicken'
  },

  // --- SIDES (10 items) ---
  {
    id: 's1',
    name: 'World Famous Fries (Small)',
    description: 'Premium potatoes, fried to a crispy golden brown.',
    price: 2.19,
    calories: 220,
    image: SIDE_IMGS[0],
    category: 'sides'
  },
  {
    id: 's2',
    name: 'World Famous Fries (Medium)',
    description: 'Premium potatoes, fried to a crispy golden brown.',
    price: 3.29,
    calories: 320,
    image: SIDE_IMGS[0],
    category: 'sides'
  },
  {
    id: 's3',
    name: 'World Famous Fries (Large)',
    description: 'Premium potatoes, fried to a crispy golden brown.',
    price: 3.99,
    calories: 490,
    image: SIDE_IMGS[1],
    category: 'sides'
  },
  {
    id: 's4',
    name: 'Apple Slices',
    description: 'Crisp, juicy apple slices.',
    price: 1.29,
    calories: 15,
    image: SIDE_IMGS[2],
    category: 'sides'
  },
  {
    id: 's5',
    name: 'Side Salad',
    description: 'Fresh lettuce, carrots, and tomatoes.',
    price: 2.59,
    calories: 20,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    category: 'sides'
  },
  {
    id: 's6',
    name: 'Mozzarella Sticks (3pc)',
    description: 'Real mozzarella cheese, breaded and fried golden brown.',
    price: 2.89,
    calories: 280,
    image: SIDE_IMGS[3],
    category: 'sides'
  },
  {
    id: 's7',
    name: 'Onion Rings',
    description: 'Golden fried onion rings.',
    price: 2.99,
    calories: 320,
    image: SIDE_IMGS[1],
    category: 'sides'
  },
  {
    id: 's8',
    name: 'Hash Brown',
    description: 'Crispy, golden brown shredded potato patty.',
    price: 1.89,
    calories: 140,
    image: SIDE_IMGS[0],
    category: 'sides'
  },
  {
    id: 's9',
    name: 'Fruit Bag',
    description: 'Selection of seasonal fruits.',
    price: 1.99,
    calories: 45,
    image: SIDE_IMGS[2],
    category: 'sides'
  },
  {
    id: 's10',
    name: 'Mac & Cheese Cup',
    description: 'Creamy macaroni and cheese.',
    price: 2.49,
    calories: 190,
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',
    category: 'sides'
  },

  // --- BREAKFAST (15 items) ---
  {
    id: 'bk1',
    name: 'Egg & Cheese Muffin',
    description: 'Fresh cracked egg and melted American cheese on a toasted English Muffin.',
    price: 3.99,
    calories: 300,
    image: BREAKFAST_IMGS[0],
    category: 'breakfast'
  },
  {
    id: 'bk2',
    name: 'Sausage Muffin',
    description: 'Savory hot sausage and melted cheese on a toasted English Muffin.',
    price: 2.59,
    calories: 400,
    image: BREAKFAST_IMGS[1],
    category: 'breakfast'
  },
  {
    id: 'bk3',
    name: 'Sausage Muffin with Egg',
    description: 'Savory sausage, a fresh cracked egg, and melted cheese on a toasted English Muffin.',
    price: 4.49,
    calories: 480,
    image: BREAKFAST_IMGS[1],
    category: 'breakfast'
  },
  {
    id: 'bk4',
    name: 'Bacon, Egg & Cheese Biscuit',
    description: 'Thick cut applewood smoked bacon, a fluffy egg, and cheese on a buttermilk biscuit.',
    price: 4.29,
    calories: 460,
    image: BREAKFAST_IMGS[3],
    category: 'breakfast'
  },
  {
    id: 'bk5',
    name: 'Sausage Biscuit',
    description: 'Sizzling hot sausage on a warm buttermilk biscuit.',
    price: 2.29,
    calories: 460,
    image: BREAKFAST_IMGS[3],
    category: 'breakfast'
  },
  {
    id: 'bk6',
    name: 'Sausage Biscuit with Egg',
    description: 'Sausage and a fluffy egg on a buttermilk biscuit.',
    price: 3.49,
    calories: 530,
    image: BREAKFAST_IMGS[3],
    category: 'breakfast'
  },
  {
    id: 'bk7',
    name: 'Hotcakes',
    description: 'Three golden brown, melt-in-your-mouth hotcakes.',
    price: 3.89,
    calories: 590,
    image: BREAKFAST_IMGS[2],
    category: 'breakfast'
  },
  {
    id: 'bk8',
    name: 'Hotcakes & Sausage',
    description: 'Three hotcakes and a side of savory hot sausage.',
    price: 4.69,
    calories: 780,
    image: BREAKFAST_IMGS[2],
    category: 'breakfast'
  },
  {
    id: 'bk9',
    name: 'Big Breakfast',
    description: 'Warm biscuit, savory hot sausage, scrambled eggs, and hash browns.',
    price: 5.69,
    calories: 760,
    image: BREAKFAST_IMGS[0],
    category: 'breakfast'
  },
  {
    id: 'bk10',
    name: 'Big Breakfast with Hotcakes',
    description: 'Big Breakfast with three hotcakes.',
    price: 6.99,
    calories: 1340,
    image: BREAKFAST_IMGS[2],
    category: 'breakfast'
  },
  {
    id: 'bk11',
    name: 'Sausage Burrito',
    description: 'Scrambled egg, sausage, cheese, green chiles and onions in a flour tortilla.',
    price: 1.99,
    calories: 310,
    image: BREAKFAST_IMGS[3],
    category: 'breakfast'
  },
  {
    id: 'bk12',
    name: 'Fruit & Maple Oatmeal',
    description: 'Whole grain oats, cream, brown sugar, apples, and cranberries.',
    price: 2.89,
    calories: 320,
    image: SIDE_IMGS[2],
    category: 'breakfast'
  },
  {
    id: 'bk13',
    name: 'Bacon, Egg & Cheese McGriddles',
    description: 'Soft, warm griddle cakes with the sweet taste of maple, holding bacon, egg, and cheese.',
    price: 4.59,
    calories: 420,
    image: BREAKFAST_IMGS[2],
    category: 'breakfast'
  },
  {
    id: 'bk14',
    name: 'Sausage McGriddles',
    description: 'Soft, warm griddle cakes with sausage.',
    price: 3.19,
    calories: 430,
    image: BREAKFAST_IMGS[2],
    category: 'breakfast'
  },
  {
    id: 'bk15',
    name: 'Chicken McGriddles',
    description: 'Soft, warm griddle cakes with a crispy chicken patty.',
    price: 3.49,
    calories: 390,
    image: CHICKEN_IMGS[4],
    category: 'breakfast'
  },

  // --- BEVERAGES (25 items) ---
  {
    id: 'bev1',
    name: 'Coca-Cola (Small)',
    description: 'Ice cold Coca-Cola.',
    price: 1.29,
    calories: 150,
    image: DRINK_IMGS[0],
    category: 'beverages'
  },
  {
    id: 'bev2',
    name: 'Coca-Cola (Medium)',
    description: 'Ice cold Coca-Cola.',
    price: 1.69,
    calories: 220,
    image: DRINK_IMGS[0],
    category: 'beverages'
  },
  {
    id: 'bev3',
    name: 'Coca-Cola (Large)',
    description: 'Ice cold Coca-Cola.',
    price: 1.99,
    calories: 290,
    image: DRINK_IMGS[0],
    category: 'beverages'
  },
  {
    id: 'bev4',
    name: 'Diet Coke (Medium)',
    description: 'Ice cold Diet Coke.',
    price: 1.69,
    calories: 0,
    image: DRINK_IMGS[0],
    category: 'beverages'
  },
  {
    id: 'bev5',
    name: 'Sprite (Medium)',
    description: 'Lemon-lime sparkling soda.',
    price: 1.69,
    calories: 210,
    image: DRINK_IMGS[1],
    category: 'beverages'
  },
  {
    id: 'bev6',
    name: 'Fanta Orange (Medium)',
    description: 'Fruity orange soda.',
    price: 1.69,
    calories: 230,
    image: DRINK_IMGS[3],
    category: 'beverages'
  },
  {
    id: 'bev7',
    name: 'Dr Pepper (Medium)',
    description: 'Unique blend of 23 flavors.',
    price: 1.69,
    calories: 210,
    image: DRINK_IMGS[0],
    category: 'beverages'
  },
  {
    id: 'bev8',
    name: 'Iced Tea (Medium)',
    description: 'Freshly brewed iced tea.',
    price: 1.49,
    calories: 10,
    image: DRINK_IMGS[1],
    category: 'beverages'
  },
  {
    id: 'bev9',
    name: 'Sweet Tea (Medium)',
    description: 'Freshly brewed sweet tea.',
    price: 1.49,
    calories: 180,
    image: DRINK_IMGS[1],
    category: 'beverages'
  },
  {
    id: 'bev10',
    name: 'Premium Roast Coffee (Small)',
    description: 'Hot, freshly brewed coffee.',
    price: 1.29,
    calories: 5,
    image: DRINK_IMGS[2],
    category: 'beverages'
  },
  {
    id: 'bev11',
    name: 'Premium Roast Coffee (Medium)',
    description: 'Hot, freshly brewed coffee.',
    price: 1.59,
    calories: 5,
    image: DRINK_IMGS[2],
    category: 'beverages'
  },
  {
    id: 'bev12',
    name: 'Premium Roast Coffee (Large)',
    description: 'Hot, freshly brewed coffee.',
    price: 1.89,
    calories: 5,
    image: DRINK_IMGS[2],
    category: 'beverages'
  },
  {
    id: 'bev13',
    name: 'Iced Coffee (Medium)',
    description: 'Cold and refreshing iced coffee.',
    price: 2.29,
    calories: 140,
    image: DRINK_IMGS[3],
    category: 'beverages'
  },
  {
    id: 'bev14',
    name: 'Caramel Macchiato (Medium)',
    description: 'Espresso with steamed milk and caramel flavor.',
    price: 3.49,
    calories: 280,
    image: DRINK_IMGS[3],
    category: 'beverages'
  },
  {
    id: 'bev15',
    name: 'Cappuccino (Medium)',
    description: 'Rich espresso with steamed milk and foam.',
    price: 3.29,
    calories: 120,
    image: DRINK_IMGS[2],
    category: 'beverages'
  },
  {
    id: 'bev16',
    name: 'Hot Chocolate (Medium)',
    description: 'Rich chocolate flavor with steamed milk.',
    price: 2.79,
    calories: 380,
    image: DRINK_IMGS[2],
    category: 'beverages'
  },
  {
    id: 'bev17',
    name: 'Orange Juice',
    description: '100% pure orange juice.',
    price: 2.49,
    calories: 160,
    image: DRINK_IMGS[3],
    category: 'beverages'
  },
  {
    id: 'bev18',
    name: 'Apple Juice',
    description: '100% pure apple juice box.',
    price: 1.59,
    calories: 100,
    image: DRINK_IMGS[3],
    category: 'beverages'
  },
  {
    id: 'bev19',
    name: 'Milk',
    description: 'Low fat milk jug.',
    price: 1.59,
    calories: 100,
    image: DRINK_IMGS[3],
    category: 'beverages'
  },
  {
    id: 'bev20',
    name: 'Chocolate Milk',
    description: 'Low fat chocolate milk jug.',
    price: 1.59,
    calories: 130,
    image: DRINK_IMGS[3],
    category: 'beverages'
  },
  {
    id: 'bev21',
    name: 'Bottled Water',
    description: 'Purified drinking water.',
    price: 1.79,
    calories: 0,
    image: DRINK_IMGS[1],
    category: 'beverages'
  },
  {
    id: 'bev22',
    name: 'Strawberry Banana Smoothie (Medium)',
    description: 'Real fruit smoothie.',
    price: 3.49,
    calories: 220,
    image: DESSERT_IMGS[0],
    category: 'beverages'
  },
  {
    id: 'bev23',
    name: 'Mango Pineapple Smoothie (Medium)',
    description: 'Tropical real fruit smoothie.',
    price: 3.49,
    calories: 230,
    image: DESSERT_IMGS[0],
    category: 'beverages'
  },
  {
    id: 'bev24',
    name: 'Mocha Frappé (Medium)',
    description: 'Blended coffee with chocolate flavor.',
    price: 3.79,
    calories: 450,
    image: DRINK_IMGS[3],
    category: 'beverages'
  },
  {
    id: 'bev25',
    name: 'Caramel Frappé (Medium)',
    description: 'Blended coffee with caramel flavor.',
    price: 3.79,
    calories: 440,
    image: DRINK_IMGS[3],
    category: 'beverages'
  },

  // --- DESSERTS (15 items) ---
  {
    id: 'd1',
    name: 'Vanilla Shake (Medium)',
    description: 'Creamy vanilla soft serve blended with milk.',
    price: 3.49,
    calories: 520,
    image: DESSERT_IMGS[0],
    category: 'desserts'
  },
  {
    id: 'd2',
    name: 'Chocolate Shake (Medium)',
    description: 'Chocolatey soft serve blended with milk.',
    price: 3.49,
    calories: 560,
    image: DESSERT_IMGS[0],
    category: 'desserts'
  },
  {
    id: 'd3',
    name: 'Strawberry Shake (Medium)',
    description: 'Creamy soft serve with strawberry syrup.',
    price: 3.49,
    calories: 540,
    image: DESSERT_IMGS[0],
    category: 'desserts'
  },
  {
    id: 'd4',
    name: 'McFlurry with OREO® Cookies',
    description: 'Soft serve mixed with crunchy OREO pieces.',
    price: 3.89,
    calories: 510,
    image: DESSERT_IMGS[1],
    category: 'desserts'
  },
  {
    id: 'd5',
    name: 'McFlurry with M&Ms®',
    description: 'Soft serve mixed with colorful M&M candies.',
    price: 3.89,
    calories: 630,
    image: DESSERT_IMGS[1],
    category: 'desserts'
  },
  {
    id: 'd6',
    name: 'Hot Fudge Sundae',
    description: 'Vanilla soft serve with rich hot fudge.',
    price: 2.39,
    calories: 330,
    image: DESSERT_IMGS[1],
    category: 'desserts'
  },
  {
    id: 'd7',
    name: 'Caramel Sundae',
    description: 'Vanilla soft serve with buttery caramel topping.',
    price: 2.39,
    calories: 330,
    image: DESSERT_IMGS[1],
    category: 'desserts'
  },
  {
    id: 'd8',
    name: 'Baked Apple Pie',
    description: 'Crispy pastry with warm apple filling.',
    price: 1.49,
    calories: 230,
    image: DESSERT_IMGS[2],
    category: 'desserts'
  },
  {
    id: 'd9',
    name: 'Strawberry & Creme Pie',
    description: 'Sweet strawberry and creamy filling in a crust.',
    price: 1.69,
    calories: 280,
    image: DESSERT_IMGS[2],
    category: 'desserts'
  },
  {
    id: 'd10',
    name: 'Vanilla Cone',
    description: 'Classic creamy vanilla soft serve in a crispy cone.',
    price: 1.59,
    calories: 200,
    image: DESSERT_IMGS[3],
    category: 'desserts'
  },
  {
    id: 'd11',
    name: 'Chocolate Chip Cookie',
    description: 'Warm, gooey chocolate chip cookie.',
    price: 1.19,
    calories: 170,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    category: 'desserts'
  },
  {
    id: 'd12',
    name: 'Chocolate Chip Cookie Tote (13pc)',
    description: '13 warm chocolate chip cookies to share.',
    price: 6.99,
    calories: 2210,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    category: 'desserts'
  },
  {
    id: 'd13',
    name: 'Blueberry Muffin',
    description: 'Soft muffin with real blueberries.',
    price: 2.39,
    calories: 420,
    image: DESSERT_IMGS[2],
    category: 'desserts'
  },
  {
    id: 'd14',
    name: 'Cinnamon Roll',
    description: 'Warm cinnamon roll with cream cheese icing.',
    price: 2.59,
    calories: 510,
    image: DESSERT_IMGS[2],
    category: 'desserts'
  },
  {
    id: 'd15',
    name: 'Apple Fritter',
    description: 'Fried dough with apple and cinnamon glaze.',
    price: 2.49,
    calories: 500,
    image: DESSERT_IMGS[2],
    category: 'desserts'
  },

  // --- HAPPY MEALS / DEALS (5 items) ---
  {
    id: 'h1',
    name: 'Hamburger Happy Meal',
    description: 'Hamburger, Kids Fries, Apple Slices, and a drink.',
    price: 4.59,
    calories: 475,
    image: BURGER_IMGS[0],
    category: 'deals'
  },
  {
    id: 'h2',
    name: '4pc McNuggets Happy Meal',
    description: '4 McNuggets, Kids Fries, Apple Slices, and a drink.',
    price: 4.89,
    calories: 395,
    image: CHICKEN_IMGS[2],
    category: 'deals'
  },
  {
    id: 'h3',
    name: '6pc McNuggets Happy Meal',
    description: '6 McNuggets, Kids Fries, Apple Slices, and a drink.',
    price: 5.39,
    calories: 475,
    image: CHICKEN_IMGS[2],
    category: 'deals'
  },
  {
    id: 'h4',
    name: 'Family Meal Deal',
    description: '2 Big Arch, 2 Cheeseburgers, 4 Small Fries, and 4 Small Drinks.',
    price: 24.99,
    calories: 3200,
    image: BURGER_IMGS[1],
    category: 'deals'
  },
  {
    id: 'h5',
    name: '2 Cheeseburger Meal',
    description: 'Two Cheeseburgers, Medium Fries, and Medium Drink.',
    price: 8.99,
    calories: 1120,
    image: BURGER_IMGS[2],
    category: 'deals'
  }
];

export const AVAILABLE_MODIFIERS: Modifier[] = [
  { id: 'size-l', name: 'Large Size', price: 1.00, type: 'size' },
  { id: 'bacon', name: 'Add Bacon', price: 1.50, type: 'topping' },
  { id: 'cheese', name: 'Extra Cheese', price: 0.80, type: 'topping' },
  { id: 'tomato', name: 'Add Tomato', price: 0.50, type: 'topping' },
  { id: 'lettuce', name: 'Extra Lettuce', price: 0.30, type: 'topping' },
  { id: 'no-onion', name: 'No Onions', price: 0.00, type: 'remove' },
  { id: 'no-pickle', name: 'No Pickles', price: 0.00, type: 'remove' },
  { id: 'no-ice', name: 'No Ice', price: 0.00, type: 'remove' },
];

export const MOCK_STORES: StoreLocation[] = [
  {
    id: 's1',
    name: 'Gulberg Galleria',
    address: '18 Main Blvd Gulberg, Lahore, Punjab',
    distance: 1.2,
    isOpen: true,
    features: ['24/7', 'Drive-Thru', 'Indoor Seating', 'Free Wi-Fi'],
    coordinates: { lat: 31.5204, lng: 74.3587 }
  },
  {
    id: 's2',
    name: 'Seaview Clifton',
    address: 'Abdul Sattar Edhi Ave, DHA Phase 5, Karachi',
    distance: 3.5,
    isOpen: true,
    features: ['PlayPlace', 'Drive-Thru', 'Indoor Seating', 'Free Wi-Fi'],
    coordinates: { lat: 24.7966, lng: 67.0628 }
  },
  {
    id: 's3',
    name: 'Centaurus Mall',
    address: 'Jinnah Avenue, F-8, Islamabad',
    distance: 8.0,
    isOpen: false,
    features: ['Kiosk Only', 'Breakfast All Day', 'Free Wi-Fi', 'Indoor Seating'],
    coordinates: { lat: 33.7077, lng: 73.0501 }
  }
];
