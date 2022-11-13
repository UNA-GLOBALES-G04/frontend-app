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
  Box,
  Stack,
  ListIcon,
  Center,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

import { Experience, PortfolioItem, Education, Schedule } from "./components";

const myLoader = ({ src, width, quality }) => {
  return `https://cdn-icons-png.flaticon.com/${src}?s=${width}`;
};

import { PhoneIcon, AddIcon, StarIcon } from "@chakra-ui/icons";

let rating = [true, true, false, false, false];

const ServiceOfferedCopy = () => {
  const { language, t, switchLanguage } = useTranslation();

  return (
    <div>
      <Flex py={6} flexWrap='wrap' gap='8px' justifyContent='space-around'>
        <Box

          maxW={"900px"}
          w={["100%","100%","65%"]}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Box bg={useColorModeValue("white", "white")} px={6} py={10}>
            <Text fontSize={"2xl"} fontWeight={800}>
              Barbero profesional
            </Text>
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
            <br />
            <Text>Cortes de cabello para adulto o niño</Text>
          </Box>

          <Stack
            textAlign={"left"}
            p={6}
            color={useColorModeValue("gray.800", "white")}
            align={"left"}
            bg={useColorModeValue("gray.50", "gray.900")}
          >
            <Stack direction={"row"} align={"left"} justify={"left"}>
              <Text fontSize={"2xl"} fontWeight={800}>
                Experiencia
              </Text>
            </Stack>
          </Stack>
          <Box bg={useColorModeValue("white", "white")} px={6} py={10}>
            <Experience />
          </Box>
          <Stack
            textAlign={"left"}
            p={6}
            color={useColorModeValue("gray.800", "white")}
            align={"left"}
            bg={useColorModeValue("gray.50", "gray.900")}
          >
            <Stack direction={"row"} align={"left"} justify={"left"}>
              <Text fontSize={"2xl"} fontWeight={800}>
                Algunos de mis proyectos
              </Text>
            </Stack>
          </Stack>
          <Box bg={useColorModeValue("white", "white")} px={6} py={10}>
            <Flex overflowX='scroll'>
              <PortfolioItem />
            </Flex>
          </Box>
        </Box>
        <Box   w={["100%","100%","30%"]}>
          <Education />
        </Box>
      </Flex>
    </div>
  );
};

export default ServiceOfferedCopy;
