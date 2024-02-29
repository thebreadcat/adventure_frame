/**
 * START YOUR ADVENTURE HERE!
 */
export const startingSlide = '0';

export const defaultSlide = {
  image: "0-adventure.jpg",
  buttonStuff: [ // was options
    { buttonWords: "PLAY", slideToNavigateTo: "1" },
  ]
};
export const adventureData = {
  "0": defaultSlide,
  "1": {
    image: "1-adventure.jpg",
    buttonStuff: [
      { buttonWords: "MOUNTAIN", slideToNavigateTo: "2A" },
      { buttonWords: "CRATER", slideToNavigateTo: "2B" }
    ]
  },
  "2A": {
    image: "2A-adventure.jpg",
    buttonStuff: [
      { buttonWords: "CLIMB", slideToNavigateTo: "3A" },
      { buttonWords: "FALL", slideToNavigateTo: "3B" }
    ]
  },
  "2B": {
    image: "2B-adventure.jpg",
    buttonStuff: [
      { buttonWords: "CAVE", slideToNavigateTo: "3C" },
      { buttonWords: "FIGHT", slideToNavigateTo: "3D" }
    ]
  },
  "3A": {
    image: "3A-adventure.jpg",
    buttonStuff: [
      { buttonWords: "ROCK", slideToNavigateTo: "4A" },
      { buttonWords: "ROOT", slideToNavigateTo: "4B" }
    ]
  },
  "3B": {
    image: "3B-adventure.jpg",
    buttonStuff: [
      { buttonWords: "MOSS", slideToNavigateTo: "4C" },
      { buttonWords: "POND", slideToNavigateTo: "4D" }
    ]
  },
  "3C": {
    image: "3C-adventure.jpg",
    buttonStuff: [
      { buttonWords: "RED", slideToNavigateTo: "4E" },
      { buttonWords: "GREEN", slideToNavigateTo: "4F" }
    ]
  },
  "3D": {
    image: "3D-adventure.jpg",
    buttonStuff: [
      { buttonWords: "TREASURE", slideToNavigateTo: "4G" },
      { buttonWords: "TICKLE", slideToNavigateTo: "4H" }
    ]
  },
  "4A": {
    image: "4A-adventure.jpg",
    buttonStuff: [
      { buttonWords: "START OVER", slideToNavigateTo: "1" },
    ]
  },
  "4B": {
    image: "4B-adventure.jpg",
    buttonStuff: [
      { buttonWords: "START OVER", slideToNavigateTo: "1" },
    ]
  },
  "4C": {
    image: "4C-adventure.jpg",
    buttonStuff: [
      { buttonWords: "START OVER", slideToNavigateTo: "1" },
    ]
  },
  "4D": {
    image: "4D-adventure.jpg",
    buttonStuff: [
      { buttonWords: "START OVER", slideToNavigateTo: "1" },
    ]
  },
  "4E": {
    image: "4E-adventure.jpg",
    buttonStuff: [
      { buttonWords: "START OVER", slideToNavigateTo: "1" },
    ]
  },
  "4F": {
    image: "4F-adventure.jpg",
    buttonStuff: [
      { buttonWords: "START OVER", slideToNavigateTo: "1" },
    ]
  },
  "4G": {
    image: "4G-adventure.jpg",
    buttonStuff: [
      { buttonWords: "START OVER", slideToNavigateTo: "1" },
    ]
  },
  "4H": {
    image: "4H-adventure.jpg",
    buttonStuff: [
      { buttonWords: "START OVER", slideToNavigateTo: "1" },
    ]
  },
};

/***
 * GOOD JOB!  LEAVE THE REST OF THIS FILE ALONE.
 */

export type ButtonData = {
  buttonWords: string; // was label
  slideToNavigateTo: string; // was value
};

export type Slide = {
  image: string;
  buttonStuff: ButtonData[]; // was options
};

export type AdventureData = {
  [key: string]: Slide;
};
