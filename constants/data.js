const Images = [
  { image: require("../assets/images/service_makeup1.jpg") },
  { image: require("../assets/images/service_makeup.jpg") },
  { image: require("../assets/images/service_haircolor.jpg") },
  { image: require("../assets/images/service_haircut.jpeg") },
  { image: require("../assets/images/service_braids.jpg") },
];

 const data = [
  {
    id: "1",
    coordinate: {
      latitude: 22.6293867,
      longitude: 88.4354486,
    },
    title: "Hair Styling",
    description: `1 Hour`,
    image: Images[0].image,
    rating: 4,
    reviews: 99,
    categories: ["Restaurant", "Hotel", "Dineout"],
  },
  {
    id: "2",
    coordinate: {
      latitude: 22.6345648,
      longitude: 88.4377279,
    },
    title: "Take-care Eyebrow",
    description: `1 Hour `,
    image: Images[1].image,
    rating: 5,
    reviews: 102,
    categories: ["Restaurant", "Fastfood Center", "Snacks Corner"],
  },
  {
    id: "3",
    coordinate: {
      latitude: 22.6281662,
      longitude: 88.4410113,
    },
    title: "Change Hair color",
    description: `1 Hour `,
    image: Images[2].image,
    rating: 3,
    reviews: 220,
    categories: ["Restaurant", "Hotel", "Dineout"],
  },
  {
    id: "4",
    coordinate: {
      latitude: 22.6341137,
      longitude: 88.4497463,
    },
    title: "Haircut",
    description: `1 Hour `,
    image: Images[3].image,
    rating: 4,
    reviews: 48,
    categories: ["Restaurant", "Fastfood Center", "Snacks Corner"],
  },
  {
    id: "5",
    coordinate: {
      latitude: 22.6292757,
      longitude: 88.444781,
    },
    title: "Hair Styling",
    description: `1 Hour `,
    image: Images[4].image,
    rating: 4,
    reviews: 178,
    categories: ["Restaurant", "Hotel", "Dineout"],
  },
];

export default data;
