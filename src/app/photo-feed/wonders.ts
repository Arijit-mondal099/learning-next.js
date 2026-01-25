import { StaticImageData } from "next/image";
import photo1 from "./photos/doc1.png";
import photo2 from "./photos/doc2.png";
import photo3 from "./photos/doc3.png";
import photo4 from "./photos/doc4.png";
import photo5 from "./photos/doc5.png";
import photo6 from "./photos/doc6.png";
import photo7 from "./photos/doc7.png";
import photo8 from "./photos/doc8.png";
import photo9 from "./photos/doc9.png";
import photo10 from "./photos/doc10.png";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "Great Wall of China",
    src: photo1,
    photographer: "Photo by Max van den Oetelaar on Unsplash",
    location: "China",
  },
  {
    id: "2",
    name: "Petra",
    src: photo2,
    photographer: "Photo by Reiseuhu on Unsplash",
    location: "Jordan",
  },
  {
    id: "3",
    name: "Christ the Redeemer",
    src: photo3,
    photographer: "Photo by Andrea Leopardi on Unsplash",
    location: "Brazil",
  },
  {
    id: "4",
    name: "Machu Picchu",
    src: photo4,
    photographer: "Photo by Jared Schwitzke on Unsplash",
    location: "Peru",
  },
  {
    id: "5",
    name: "Chichen Itza",
    src: photo5,
    photographer: "Photo by E Mens on Unsplash",
    location: "Mexico",
  },
  {
    id: "6",
    name: "Roman Colosseum",
    src: photo6,
    photographer: "Photo by Andrea Cipriano on Unsplash",
    location: "Italy",
  },
  {
    id: "7",
    name: "Taj Mahal",
    src: photo7,
    photographer: "Photo by Su San Lee on Unsplash",
    location: "India",
  },
  {
    id: "8",
    name: "Taj Mahal",
    src: photo8,
    photographer: "Photo by Su San Lee on Unsplash",
    location: "India",
  },
  {
    id: "9",
    name: "Taj Mahal",
    src: photo9,
    photographer: "Photo by Su San Lee on Unsplash",
    location: "India",
  },
  {
    id: "10",
    name: "Taj Mahal",
    src: photo10,
    photographer: "Photo by Su San Lee on Unsplash",
    location: "India",
  },
];

export default wondersImages;
