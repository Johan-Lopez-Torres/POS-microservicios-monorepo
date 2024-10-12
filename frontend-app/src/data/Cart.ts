type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export const initialCartItems: Product[] = [
  {
    id: 1,
    name: "Nike Men's Joyride Run Flyknit Shoes",
    price: 180.0,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Adidas Ultraboost 21",
    price: 200.0,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
