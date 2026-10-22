export type GalleryFrame = {
  screen: string;
  label: string;
  image: string;
  status?: string;
};

export type GalleryProject = {
  projectName: string;
  demoUrl: string;
  sourceUrl: string;
  note: string;
  theme: "burgundy" | "cream";
  frames: readonly GalleryFrame[];
};

export const GIRL_MATH: GalleryProject = {
  projectName: "Girl Math",
  demoUrl: "https://girl-math-plum.vercel.app/",
  sourceUrl: "https://github.com/ananyaj1/girl-math",
  note: "Sample data",
  theme: "burgundy",
  frames: [
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
  ],
};

export const ON_THE_BALL: GalleryProject = {
  projectName: "On the Ball",
  demoUrl: "https://on-the-ball-phi.vercel.app/discover",
  sourceUrl: "https://github.com/ananyaj1/on-the-ball",
  note: "Captured from the local app · October 2026",
  theme: "cream",
  frames: [
    {
      screen: "Discover",
      label: "Discover",
      image: "on-the-ball/discover-following.jpg",
    },
    {
      screen: "Following",
      label: "Following",
      image: "on-the-ball/following.jpg",
    },
  ],
};

export const screenshotSrc = (image: string) =>
  `${import.meta.env.BASE_URL}play/screenshots/${image}`;
