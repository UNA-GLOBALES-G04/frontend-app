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
  Flex,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";

import { MyServices, Offert } from "./components";

const myLoader = ({ src, width, quality }) => {
  return `https://cdn-icons-png.flaticon.com/${src}?s=${width}`;
};

//import { PhoneIcon, AddIcon, StarIcon } from "@chakra-ui/icons";

let AllOfferts = [true, true, false, false, false];

const Offerts = () => {
  const { language, t, switchLanguage } = useTranslation();

  return (
    <Center>
      <HStack>
        <MyServices />
        <Box
          maxW={"900px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Heading bg={useColorModeValue("tranparent", "tranparent")}>
            Solicitudes
          </Heading>
          <br />
          <Offert></Offert>
          <br />
          <Offert></Offert>
          <br />
          <Offert></Offert>
        </Box>
      </HStack>
    </Center>
  );
};

export default Offerts;
