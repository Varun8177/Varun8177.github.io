import { Flex, IconButton, Image } from "@chakra-ui/react";
import { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import image1 from "../../images/Shoperz_banner_1.png";
import image2 from "../../images/Shoperz_banner_2.png";

export default function CaptionCarousel() {
  const [i, setI] = useState(0);

  const cards = [image1, image2];

  return (
    <Flex
      height={"570px"}
      width={"100%"}
      alignItems={"center"}
      //   border={"1px solid red"}
    >
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        transform={"translate(0%, -50%)"}
        // zIndex={2}
        onClick={() => {
          i === 0 ? setI(cards.length - 1) : setI(i - 1);
        }}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <Image
        transform={"transform .6s"}
        _hover={{ transform: "scale(1.4)", zIndex: "4" }}
        overflow={"hidden"}
        src={cards[i]}
        boxShadow={"lg"}
      />
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        transform={"translate(0%, -50%)"}
        // zIndex={2}
        onClick={() => {
          i === cards.length - 1 ? setI(0) : setI(i + 1);
        }}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
    </Flex>
  );
}
