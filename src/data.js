import { v4 as uuidv4 } from "uuid";

export default function ChillPop() {
  return [
    {
      name: "Les Mouvements d'Hiver",
      artist: "L'Indécis, sadtoi",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/d2898bc0ef36b5d67d6793062d588d208a90421c-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10351",
      id: uuidv4(),
      color: ["#DB9FBB", "#43538A"],
      active: true,
    },
    {
      name: "Zenith",
      artist: "Leavv",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9927",
      id: uuidv4(),
      color: ["#5AA273", "#DCDAA8"],
      active: false,
    },
    {
      name: "Chinatown",
      artist: "SwuM",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ccad9b1271d1a9701f84380bb217da7d923a6c4f-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7991",
      id: uuidv4(),
      color: ["#C27470", "#F6E7D1"],
      active: false,
    },
    {
      name: "Maple Leaf Pt.2",
      artist: "Philanthrope",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10243",
      id: uuidv4(),
      color: ["#AA4438", "#E38A67"],
      active: false,
    },
    {
      name: "Sodium",
      artist: "Philanthrope, Tesk",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9149",
      id: uuidv4(),
      color: ["#5B99E6", "#1D1F38"],
      active: false,
    },
    {
      name: "Yesterday",
      artist: "Mo Anando",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/b6e48e6cfb2a90723b9cf1b108a6d305f9204eb4-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9281",
      id: uuidv4(),
      color: ["#FCADB3", "#99E2C5"],
      active: false,
    },
    {
      name: "Vinho Verde",
      artist: "Clap Cotton",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ae91385fc2d92e40dd4bf337867dee16fb5648d2-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9447",
      id: uuidv4(),
      color: ["#E8F8B7", "#C4F5E0"],
      active: false,
    },
    {
      name: "fiveyearsago",
      artist: "Psalm Trees",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/05/861564cb8a53229de4e63541a44f507c8b0da6ec-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9021",
      id: uuidv4(),
      color: ["#FFC772", "#EF4A2E"],
      active: false,
    },
  ];
}
