import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "../../shared/hooks";

import {
  Heading,
  Text,
  Grid,
  GridItem,
  List,
  ListItem,
  Stack,
  ListIcon,
} from "@chakra-ui/react";

import { Experience, PortfolioItem, Education, Schedule } from "./components";

const myLoader = ({ src, width, quality }) => {
  return `https://cdn-icons-png.flaticon.com/${src}?s=${width}`;
};

import { PhoneIcon, AddIcon, StarIcon } from "@chakra-ui/icons";

let rating = [true, true, false, false, false];

const ServiceOffered = ({ text, href, active }) => {
  const { language, t, switchLanguage } = useTranslation();

  return (
    <div>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={4} bg="papayawhip">
          <Heading>Marido en alquiler</Heading>
          {rating.map((star, i) => {
            let result = [];
            if (star) {
              result.push(<StarIcon w={8} h={8} color="gold"></StarIcon>);
            } else {
              result.push(<StarIcon w={8} h={8} color="grey"></StarIcon>);
            }
            return result;
          })}
          <br />
          <Text>Realizo cualquier tipo de arreglo en el hogar</Text>
          <Experience />
          <PortfolioItem />
          <Schedule />
        </GridItem>
        <GridItem colSpan={1} bg="papayawhip">
          <Education />
        </GridItem>
        <GridItem rowSpan={2} colSpan={6} bg="tomato">
          <Schedule />
        </GridItem>
      </Grid>
    </div>
  );
};

export default ServiceOffered;
