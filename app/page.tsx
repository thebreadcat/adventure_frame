import {
  FrameButton,
  FrameContainer,
  FrameImage,
  FrameReducer,
  NextServerPageProps,
  getFrameMessage,
  getPreviousFrame,
  useFramesReducer,
} from "frames.js/next/server";
import Link from "next/link";
import { DEBUG_HUB_OPTIONS } from "./debug/constants";
import {defaultSlide, adventureData, startingSlide, AdventureData, ButtonData, Slide} from "./adventureData";

type State = {
  location: string;
};

const fetchAdventureSlide = (key: string, adventureData: AdventureData): Slide => {
  const slide = adventureData[key];
  if (!slide) {
    console.log(`Slide not found for key ${key}, using default slide.`);
    return defaultSlide;
  }
  return slide;
};

const reducer: FrameReducer<State> = (state, action) => {
  let newState = { ...state };
  const currentSlide = fetchAdventureSlide(state.location, adventureData);
  if (action.postBody?.untrustedData.buttonIndex !== undefined && currentSlide) {
    const buttonIndex = action.postBody.untrustedData.buttonIndex - 1;
    const optionValue = currentSlide.buttonStuff[buttonIndex]?.slideToNavigateTo;
    if (optionValue !== undefined) {
      newState.location = optionValue;
    } else {
      console.log("Option value is undefined, setting location to a default value.");
      newState.location = "intro";
    }
  }
  return newState;
};

export default async function Home({ params, searchParams }: NextServerPageProps) {
  const previousFrame = getPreviousFrame<State>(searchParams);
  const frameMessage = await getFrameMessage(previousFrame.postBody, {
    ...DEBUG_HUB_OPTIONS,
  });
  const initialState: State = { location: startingSlide };
  const [state, dispatch] = useFramesReducer<State>(reducer, initialState, previousFrame);

  const currentSlide = fetchAdventureSlide(state.location, adventureData);
  const baseUrl = process.env.NEXT_PUBLIC_HOST || "http://localhost:3000";
  const imageUrl = currentSlide ? `${baseUrl}/${currentSlide.image}` : "";

  return (
    <FrameContainer postUrl="/frames" pathname="/" state={state} previousFrame={previousFrame}>
      {currentSlide ? <FrameImage src={imageUrl} aspectRatio="1.91:1" /> : null}
      {currentSlide && currentSlide.buttonStuff[0] ? (
        <FrameButton key={currentSlide.buttonStuff[0].slideToNavigateTo}>
          {currentSlide.buttonStuff[0].buttonWords}
        </FrameButton>
      ) : null}
      {currentSlide && currentSlide.buttonStuff[1] ? (
        <FrameButton key={currentSlide.buttonStuff[1].slideToNavigateTo}>
          {currentSlide.buttonStuff[1].buttonWords}
        </FrameButton>
      ) : null}
      {currentSlide && currentSlide.buttonStuff[2] ? (
        <FrameButton key={currentSlide.buttonStuff[2].slideToNavigateTo}>
          {currentSlide.buttonStuff[2].buttonWords}
        </FrameButton>
      ) : null}
      {currentSlide && currentSlide.buttonStuff[3] ? (
        <FrameButton key={currentSlide.buttonStuff[3].slideToNavigateTo}>
          {currentSlide.buttonStuff[3].buttonWords}
        </FrameButton>
      ) : null}
    </FrameContainer>
  );
}
