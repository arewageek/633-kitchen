export interface MenuItem {
  name: string;
  image: string;
  description?: string;
  amount: number;
  category?: string;
}

export const menu: MenuItem[] = [
  {
    name: "Jollof Rice",
    image:
      "https://img.freepik.com/free-photo/side-view-pilaf-with-stewed-beef-meat-plate_141793-5057.jpg?semt=ais_hybrid&w=740",
    amount: 1100,
    description: "",
    category: "meals",
  },
  {
    name: "Semovita & Vegitable Soup",
    image:
      "https://i.pinimg.com/736x/72/f1/7d/72f17dece31b54d6ed2cc3607743f415.jpg",
    amount: 1100,
    description: "",
    category: "meals",
  },
  {
    name: "Spaghetti Jollof",
    image:
      "https://img.freepik.com/free-photo/cooked-italian-pasta-with-shrimps-inside-brown-plate-with-cutlery-wood_140725-29904.jpg",
    amount: 1100,
    description: "",
    category: "meals",
  },
  {
    name: "Cocacola",
    image:
      "https://indiandefencereview.com/wp-content/uploads/2025/03/coca-cola-bottles.jpg",
    amount: 500,
    description: "",
    category: "drinks",
  },
  {
    name: "Zobo",
    image: "https://lagrang.com/file/zobo.jpeg",
    amount: 400,
    description: "",
    category: "drinks",
  },
  {
    name: "Donut",
    image:
      "https://www.allrecipes.com/thmb/mUlAAjciUlRC1wbh0NFw9MrL79w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-72964-Easy-Homemade-Doughnuts-DDMFS-4x3-7828c70ff4104d58b994a5b017311e21.jpg",
    amount: 400,
    description: "",
    category: "snacks",
  },
  {
    name: "Cookies",
    image:
      "https://www.seriouseats.com/thmb/hPtnabt2rJXvkuB0WvibgHamNgY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__03__20170301-chocolate-digestives-mcvities-vicky-wasik-27-0aa23bca5815432598069c9cf528533a.jpg",
    amount: 800,
    description: "",
    category: "snacks",
  },
  {
    name: "Biscuit",
    image: "https://static.toiimg.com/thumb/62403305.cms?width=1200&height=900",
    amount: 800,
    description: "",
    category: "snacks",
  },
];
