import { Flex, IconButton, Image } from "@chakra-ui/react";
import { useState } from "react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import image1 from "../../images/Shoperz_banner_1.png";
import image2 from "../../images/Shoperz_banner_2.png";

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  //   const [slider, setSlider] = (React.useState < Slider) | (null > null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const [i, setI] = useState(0);
  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [image1, image2];

  return (
    <Flex
      position={"relative"}
      height={"600px"}
      width={"70%"}
      alignItems={"center"}
    >
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => {}}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <Image src={cards[i]} h={"60vh"} />
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => {
          i === cards.length - 1 ? setI(0) : setI(i + 1);
        }}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
    </Flex>
  );
}
