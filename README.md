# Adventure Frame!

This is a choose your own adventure frame built by @breadcat using `frames.js`

Just clone this repo into your computer and get to adventuring!

## Quickstart
### Wanna make an adventure?!

#### **Art Stuff**
1. Draw out your adventure tree (paper!)
2. Make art for each slide & the button names you want.
3. Drop your art images into `/public` folder.

#### **Code stuff**
4. Change the title/Description in `app/layout.tsx`
5. Edit `app/adventureData.tsx` and swap your adventure for what's there!
6. Test your adventure! (More info below)
7. Adjust as needed
8. Deploy it!
9. Cast it!
10. Bask in all your adventurers journeys!

## Creating Your Adventure
### **AKA. The code stuff**
This is from `app/adventureData.tx` file.  Just some examples to show you the format:
```javascript
// This is the default slide!

const defaultSlide = {
  image: "0-adventure.jpg",
  buttonStuff: [
    { buttonWords: "PLAY", slideToNavigateTo: "1" },
  ]
};

// This is the rest of your slides!

const adventureData = {
  "0": defaultSlide,
  "1": {
    image: "1-adventure.jpg",
    buttonStuff: [
      { buttonWords: "MOUNTAIN", slideToNavigateTo: "2A" },
      { buttonWords: "CRATER", slideToNavigateTo: "2B" }
    ]
  },
};
```
## Breaking down the code
Looking above, every slide has an name (`0`, `1`, but can be text like `2A` etc in the example), `image`, and `buttonStuff` data elements.

**Name** -- The `name` can be any text string.  This `name` is how you'll reference the particular slide from buttons.

**Image** -- Images (`image`) is just the filename for your images for that slide. (No need to add directories, the code is pre-wired to look for all that just the file name and make sure the files are in the `/public` directory)

**Button Stuff** -- `buttonStuff` controls the buttons for that slide. They'll appear in the order you specify with whatever `buttonWords` says is what the button will say and whatever the `slideToNavigateTo` specifies will be the slide it goes to when you click that button.  You can have a MAXIMUM of 4 buttons per slide. Minimum would be 1 I guess.

## Done? Now Test the adventure out!
***(clone the repo if you haven't already and goto the folder using ``cd folder_name`` )***
1. Install dependencies `yarn install`
2. Run the dev server `yarn dev`
3. Visit [http://localhost:3000/debug](http://localhost:3000/debug) then enter https://localhost:3000 as the url you want to debug.  This will show you your adventure frame for testing!

> [!NOTE]
> If you goto the normal URL and it's just blank -- that's actually ok because it's just rendering the fancy metadata fields that will control your frame, the browser just doesn't render it as a frame if it's not cast to Farcaster.  Add `/debug` to the url and it'll render it as a frame for you to test on.

## Docs, Questions and Help

- [Ask @breadcat on FC](https://warpcast.com/breadcat)
- Join the [/frames-dev](https://warpcast.com/~/channel/frames-devs) channel on Farcaster to ask questions

## Deploy and Testing!

You can host the frame many places but a lot of folks use the free tier of [Vercel](https://vercel.com) to host frames.  Signup for an account and install the command line tools if you haven't already:
```bash
yarn global add vercel
```
Once you have the command line tools installed you can just simply type this and it will walk you through deploying.  Note: you may have to "login" via the command line to have this work fully -- once you do that though it's set going forward and should be even easier.
```bash
vercel
```

Let it do it's thing and you'll get a URL to view it.  You're nearly done there's just two major things to set up so that you can post your form.

1. ***Setting up an enviroment variable in Vercel***.  We use the term ``NEXT_PUBLIC_HOST`` and you'll want to set it up by going into your Vercel account and navigating to your project and going to `Settings` > `Environment Variables` >  Then you can scroll down and add one.  Make the key ``NEXT_PUBLIC_HOST`` and the value should be your Vercel URL for your project.
2. ***Turn off Deployment Authentication*** This is a feature to make your Vercel application only available to you or people you grant access to.  Not a great idea for frames on Farcaster.  Instead you'll want to navigate to your project within Vercel's backend and goto ```Settings``` > ```Deployment Protection``` then turn off the big switch at the top.

Once you've done the above steps you should be able to test your frame out once more before Casting.   You can do this by going to the [Framesjs public debugger](https://debugger.framesjs.org/debug) and entering in your hosted Vercel URL.  If it looks good -- CAST AWAY! and let people enjoy the adventure you made.  If it doesn't that's ok.  Modify it to your liking and follow the Deployment steps again, your URL will change everytime you push up to Vercel so you'll have to update your Enviroment Variable again each time.

## **BONUS** Tips!
Frames are smaller... make your frames behave more kindly and load more rapidly by resizing them to something smaller width and compress your images as you see fit.  JPG files are preferred.



## What started all this!?
This was originally a collaboration between [Popwonder](https://warpcast.com/popwonder) and [Brock (breadcat)](https://warpcast.com/breadcat) that was for fun but Brock figured more people would want adventure frames so it's now open source.  Horay!  Here's the [Original Adventure by PopWonder](https://warpcast.com/popwonder/0xff5a1960) that you can take!  As a bonus we've included Popwonder's original art in this repo for you to use as a guide and swap out as you see fit!

## This is awesome! Can I support you?!
You can just drop [Popwonder](https://warpcast.com/popwonder) and [Brock (breadcat)](https://warpcast.com/breadcat) a follow if you want.  Tag us in what you make, we'd love to check it out.  We also take tips in [$DEGEN](https://degen.tips) or you can jump into Brock's wild and crazy fun project by minting a Feesh here: [Feeshes](https://feeshes.com)

## Shout Outs
Thanks to Frames.js team for making a great springboard to make super fun frames.  If you'd like to hear more about them visit: [FramesJs.Org](https://framesjs.org/) and check out their docs.  You can also see other awesome projects people have build here: [Awesome Frames](https://github.com/davidfurlong/awesome-frames)!  Thanks to Farcaster and Warpcast for bringing fun back to social media!   Thanks to anyone who took a chance to create an adventure.  You're awesome.

xoxo,

-Brock