export const products = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  image: `https://picsum.photos/400/500?random=${index + 1}`,
  name: [
    "Classic T-Shirt",
    "Slim Fit Jeans",
    "Hoodie",
    "Summer Dress",
    "Leather Jacket",
    "Sport Shorts",
    "Casual Shirt",
    "Winter Coat",
    "Sneakers",
    "Polo Shirt",
    "Classic Cotton Crew Neck T-Shirt",
    "Slim Fit Stretch Denim Jeans",
    "Oversized Fleece Pullover Hoodie",
    "Floral Print Summer Midi Dress",
    "Premium Genuine Leather Biker Jacket",
    "Lightweight Performance Sport Shorts",
    "Casual Long Sleeve Button-Up Shirt",
    "Warm Quilted Winter Puffer Coat",
    "Comfortable Everyday Running Sneakers",
    "Classic Cotton Piqué Polo Shirt Classic Cotton Piqué Polo Shirt Classic Cotton Piqué Polo Shirt",
  ][index % 20],

  rating: {
    stars: +(Math.random() * 2 + 3).toFixed(1), // 3.0 - 5.0
    count: Math.floor(Math.random() * 1000) + 10,
  },

  price: +(Math.random() * 150 + 10).toFixed(2),

  keywords: [
    ["fashion", "casual", "men"],
    ["fashion", "women", "summer"],
    ["streetwear", "hoodie", "trendy"],
    ["sport", "fitness", "activewear"],
    ["premium", "jacket", "winter"],
    ["shirt", "cotton", "comfortable"],
    ["jeans", "denim", "classic"],
    ["dress", "elegant", "party"],
    ["shoes", "sneakers", "running"],
    ["coat", "warm", "outdoor"],
  ][index % 10],
}));
