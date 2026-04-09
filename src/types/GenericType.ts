export const Section = {
  WORK: "work",
  ABOUT: "about",
  PLAY: "play",
} as const;

export type Section = (typeof Section)[keyof typeof Section];

export type FooterItem = {
  label: string;
  icon: string;
};
