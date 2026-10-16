export const GIRL_MATH_FRAMES = [
  { screen: "Overview", label: "Overview", image: "overview.jpg" },
  { screen: "The Receipts", label: "The Receipts", image: "receipts.jpg" },
  {
    screen: "Bills, Bills, Bills",
    label: "Bills, Bills, Bills",
    image: "bills.jpg",
  },
  { screen: "On Replay", label: "On Replay", image: "replay.jpg" },
  {
    screen: "The Fame Fund",
    label: "The Fame Fund",
    image: "fame.jpg",
    status: "In progress",
  },
];

export const GIRL_MATH_DEMO_URL = "https://girl-math-plum.vercel.app/";

export const girlMathScreenshotSrc = (image: string) =>
  `${import.meta.env.BASE_URL}play/screenshots/${image}`;
