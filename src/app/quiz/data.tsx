export interface Item {
  id: number;
  name: string;
}

export interface Profile {
  id: number;
  combination: number[];
  name: string;
  description: string;
  startersCombo: number[];
  mainCombo: number[];
  drinkCombo: number[];
}

export const starters: Item[] = [
  { id: 1, name: "Vegan Salad" },
  { id: 2, name: "Beer bathed Prawns" },
  { id: 3, name: "Summer rolls" },
  { id: 4, name: "Chicken Salad" },
  { id: 5, name: "Chicken in Fishsauce" },
  { id: 6, name: "Betel Beef" },
  { id: 7, name: "Rare beef salad" },
  { id: 8, name: "Fried Tofu" },
  { id: 9, name: "Salted Chicken" },
  { id: 10, name: "Grilled chicken with honey" },
  { id: 11, name: "Belly Pork" },
  { id: 12, name: "Spring rolls" },
  { id: 13, name: "Chicken wings" },
  { id: 14, name: "King prawns salt" },
  { id: 15, name: "Side Pork sesame" },
  { id: 16, name: "Stir fried Beef" },
  { id: 17, name: "Beef Pepper" },
  { id: 18, name: "Water Spinach" },
  { id: 19, name: "Chicken Mac Khen" },
  { id: 20, name: "Golden prawns" },
  { id: 21, name: "Steamed Rice" },
  { id: 22, name: "Beef tongue" },
  { id: 23, name: "Mushroom tofu salted" },
  { id: 24, name: "Shaking Beef" },
  { id: 25, name: "King Grilled Prawns" },
  { id: 26, name: "Water Spinach" },
  { id: 27, name: "Stir fried Whelk" },
  { id: 28, name: "Stir fried Goat" },
  { id: 29, name: "Pork cartilage" },
  { id: 30, name: "Steamed Rice rolls" },
];

export const drinks: Item[] = [
  { id: 1, name: "Juice" },
  { id: 2, name: "Soul Hanoi" },
  { id: 3, name: "Milk coffee" },
  { id: 4, name: "Salted Apricot" },
  { id: 5, name: "Lime Juice" },
  { id: 6, name: "Hanoi Beer" },
  { id: 7, name: "Coffee" },
  { id: 8, name: "Red Berry" },
  { id: 9, name: "Beer" },
  { id: 10, name: "Red Wine" },
  { id: 11, name: "Avocado" },
  { id: 12, name: "Salted Coffee" },
  { id: 13, name: "Coconut Coffee" },
];

export const mainCourses: Item[] = [
  { id: 1, name: "Prawn bun soup" },
  { id: 2, name: "Egg fried rice" },
  { id: 3, name: "Beef shin Pho" },
  { id: 4, name: "Stir fried noodles" },
  { id: 5, name: "Stir fried Beefshin" },
  { id: 6, name: "Salmon Fried Rice" },
  { id: 7, name: "Brisket Beef Pho" },
  { id: 8, name: "Grilled pork bun" },
  { id: 9, name: "Stir fried Beef Bun" },
  { id: 10, name: "Stir fried noodles prawn" },
  { id: 11, name: "Beef Fried Rice" },
  { id: 12, name: "Grilled Pork Bun" },
  { id: 13, name: "Prawn Rice" },
  { id: 14, name: "Grilled Eels Bun" },
  { id: 15, name: "Spring rolls grilled pork bun" },
  { id: 16, name: "Duck bamboo shoot" },
  { id: 17, name: "Glass noodles" },
  { id: 18, name: "Salmon Bun Soup" },
  { id: 19, name: "Spicy Beef Bun" },
  { id: 20, name: "House special fried rice" },
  { id: 21, name: "Vegan fried Rice" },
  { id: 22, name: "Cha ca la vong" },
  { id: 23, name: "Apple snail" },
  { id: 24, name: "Claypot Rice" },
];

export const profiles: Profile[] = [
  {
    id: 1,
    combination: [0, 0, 0, 0],
    name: "Bà Nội Trợ Trên Mạng (Social Media Mom)",
    description:
      "The social media-savvy mom who shares comforting, traditional recipes on YouTube, keeping the whole family (and her followers) happy with simple, delicious meals.",
    startersCombo: [1, 2, 3],
    mainCombo: [1, 2, 3],
    drinkCombo: [1, 2, 3],
  },
  {
    id: 2,
    combination: [0, 0, 0, 1],
    name: "Chị Đại Khu Phố (Neighborhood Auntie)",
    description:
      "The stylish, respected neighborhood auntie who throws elaborate dinners with traditional dishes that make everyone go 'wow' while sharing the latest gossip.",
    startersCombo: [4, 5, 6],
    mainCombo: [4, 5, 6],
    drinkCombo: [4, 5, 6],
  },
  {
    id: 3,
    combination: [0, 0, 1, 0],
    name: "Thầy Giáo Làng (Village Teacher)",
    description:
      "A cheerful mix of summer rolls and beef pho with refreshing coffee, reminiscent of simple school lunches.",
    startersCombo: [7, 8, 9],
    mainCombo: [7, 8, 9],
    drinkCombo: [6, 4, 2],
  },
  {
    id: 4,
    combination: [0, 0, 1, 1],
    name: "Phượt Thủ Xịn (Pro Backpacker)",
    description:
      "A variety of chicken dishes with noodles and a fruity drink, perfect for refueling after a long journey.",
    startersCombo: [10, 11, 12],
    mainCombo: [10, 11, 3],
    drinkCombo: [7, 8, 9],
  },
  {
    id: 5,
    combination: [0, 1, 0, 0],
    name: "Nhà Thám Hiểm Cần Thơ (Cần Thơ Explorer)",
    description:
      "An adventurous mix of chicken, seafood, and beef pho with a zesty citrus drink, exploring diverse flavors.",
    startersCombo: [13, 14, 30],
    mainCombo: [5, 12, 13],
    drinkCombo: [5, 9, 2],
  },
  {
    id: 6,
    combination: [0, 1, 0, 1],
    name: "Đầu Bếp Đỉnh (Master Chef)",
    description:
      "A sophisticated combo of beef and pork with grilled options and beer, pushing culinary boundaries.",
    startersCombo: [6, 12, 15],
    mainCombo: [12, 1, 14],
    drinkCombo: [6, 4, 2],
  },
  {
    id: 7,
    combination: [0, 1, 1, 0],
    name: "Tín Đồ Ăn Vặt (Street Food Fanatic)",
    description:
      "A street food lover's dream with various beef dishes, pho, and coffee, perfect for a food crawl.",
    startersCombo: [16, 17, 18],
    mainCombo: [15, 8, 17],
    drinkCombo: [7, 8, 9],
  },
  {
    id: 8,
    combination: [0, 1, 1, 1],
    name: "Blogger Ẩm Thực (Food Blogger)",
    description:
      "A refined selection of spicy chicken, beef, and salmon dishes with wine, ideal for a drool-worthy post.",
    startersCombo: [17, 19, 20],
    mainCombo: [18, 19, 20],
    drinkCombo: [9, 10, 8],
  },
  {
    id: 9,
    combination: [1, 0, 0, 0],
    name: "Nhà Sư Thanh Tịnh (Zen Monk)",
    description:
      "A balanced mix of tofu and seafood with pho and beer, offering both simplicity and flavor.",
    startersCombo: [21, 2, 8],
    mainCombo: [13, 3, 1],
    drinkCombo: [9, 10, 8],
  },
  {
    id: 10,
    combination: [1, 0, 0, 1],
    name: "Chủ Quán Trà Chanh (Lemon Tea Shop Owner)",
    description:
      "A creative duo of pork and chicken with duck and an avocado drink, perfect for a trendy tea shop menu.",
    startersCombo: [3, 4, 15],
    mainCombo: [16, 15, 21],
    drinkCombo: [11, 12, 2],
  },
  {
    id: 11,
    combination: [1, 0, 1, 0],
    name: "Nghệ Sĩ Hài (Comedian)",
    description:
      "A lively platter of various chicken dishes with specialty noodles and coffee, bringing joy to every bite.",
    startersCombo: [3, 9, 13],
    mainCombo: [22, 4, 9],
    drinkCombo: [3, 9, 4],
  },
  {
    id: 12,
    combination: [1, 0, 1, 1],
    name: "Nhà Khoa Học Điên (Mad Scientist)",
    description:
      "An experimental combination of exotic meats with salmon and fruity drinks, a true culinary adventure.",
    startersCombo: [22, 19, 23],
    mainCombo: [18, 1, 23],
    drinkCombo: [8, 9, 1],
  },
  {
    id: 13,
    combination: [1, 1, 0, 0],
    name: "Chị Chủ Vườn (Garden Enthusiast)",
    description:
      "Fresh seafood dishes with prawn rice and coconut coffee, inspired by homegrown ingredients.",
    startersCombo: [24, 25, 11],
    mainCombo: [5, 12, 13],
    drinkCombo: [4, 7, 13],
  },
  {
    id: 14,
    combination: [1, 1, 0, 1],
    name: "Ông Trùm Cafe (Coffee Connoisseur)",
    description:
      "A harmonious blend of vegetables and beef with salmon, paired with berry-infused drinks for complex flavors.",
    startersCombo: [26, 6, 15],
    mainCombo: [18, 5, 17],
    drinkCombo: [8, 9, 1],
  },
  {
    id: 15,
    combination: [1, 1, 1, 0],
    name: "Cậu Ấm Sài Gòn (Saigon Socialite)",
    description:
      "A trendy medley of chicken and seafood with pho and citrus drinks, perfect for the high-end foodie.",
    startersCombo: [19, 27, 28],
    mainCombo: [18, 3, 23],
    drinkCombo: [2, 9, 8],
  },
  {
    id: 16,
    combination: [1, 1, 1, 1],
    name: "Nhạc Sĩ Phố Cổ (Old Quarter Musician)",
    description:
      "An eclectic mix of seafood and meat with beer, blending traditional and modern flavors like a well-composed song.",
    startersCombo: [20, 28, 29],
    mainCombo: [18, 24, 15],
    drinkCombo: [5, 8, 9],
  },
];
