import Link from "next/link";
//import Image from "next/image";
import { useTranslation } from "../../../shared/hooks";

import { Heading, Image, Stack } from "@chakra-ui/react";

const myLoader = ({ src, width, quality }) => {
  return `https://cdn-icons-png.flaticon.com/${src}?s=${width}`;
};

const PortfolioItem = () => {
  const { language, t, switchLanguage } = useTranslation();

  return (
    <div>
      <Stack direction="row">
        <Image
          boxSize="200px"
          objectFit="cover"
          src="https://www.tribuna.com.mx/u/fotografias/m/2021/2/15/f768x1-182456_182583_79.jpg"
          alt="Dan Abramov"
        />
        <Image
          boxSize="200px"
          objectFit="cover"
          src="https://formatoapa.com/wp-content/uploads/2020/12/c350233cda19a825ab77e8b700187b90-1.jpg"
          alt="Dan Abramov"
        />
        <Image
          boxSize="200px"
          src="https://ideaydetalle.com/wp-content/uploads/2019/10/fotos-de-cortes-de-pelo-para-ninos-varones-modernos.jpg"
          alt="Dan Abramov"
        />
      </Stack>
    </div>
  );
};

export default PortfolioItem;
