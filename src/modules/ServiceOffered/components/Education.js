import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "../../../shared/hooks";

import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import { CheckIcon } from "@chakra-ui/icons";

const myLoader = ({ src, width, quality }) => {
  return `https://cdn-icons-png.flaticon.com/${src}?s=${width}`;
};

let educations = {
  titles: ["Primaria completa", "Secundaria completa"],
  othersTitles: ["Servico al cliente-INA", "Tintes-INA", "Alisets-BarberGold"],
  skills: ["Costes clasicos", "Degradados", "Cejas", "Barba", "Alisets"],
};

const Education = () => {
  const { language, t, switchLanguage } = useTranslation();

  return (
    <div>
      <Center py={6}>
        <Box
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Stack
            textAlign={"left"}
            p={6}
            color={useColorModeValue("gray.800", "white")}
            align={"left"}
          >
            <Stack direction={"row"} align={"left"} justify={"left"}>
              <Text fontSize={"2xl"} fontWeight={800}>
                Educacion Formal
              </Text>
            </Stack>
          </Stack>

          <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
            <List spacing={3}>
              {educations.titles.map((title, i) => {
                return (
                  <ListItem key={i}>
                    <ListIcon as={CheckIcon} color="green.400" />
                    {title}
                  </ListItem>
                );
              })}
            </List>
          </Box>

          <Stack
            textAlign={"left"}
            p={6}
            color={useColorModeValue("gray.800", "white")}
            align={"left"}
          >
            <Stack direction={"row"} align={"left"} justify={"left"}>
              <Text fontSize={"2xl"} fontWeight={800}>
                Otros titulos
              </Text>
            </Stack>
          </Stack>
          <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
            <List spacing={3}>
              {educations.othersTitles.map((title, i) => {
                return (
                  <ListItem key={i}>
                    <ListIcon as={CheckIcon} color="green.400" />
                    {title}
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Stack
            textAlign={"left"}
            p={6}
            color={useColorModeValue("gray.800", "white")}
            align={"left"}
          >
            <Stack direction={"row"} align={"left"} justify={"left"}>
              <Text fontSize={"2xl"} fontWeight={800}>
                Conocimientos
              </Text>
            </Stack>
          </Stack>
          <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
            <List spacing={3}>
              {educations.skills.map((skill, i) => {
                return (
                  <ListItem key={i}>
                    <ListIcon as={CheckIcon} color="green.400" />
                    {skill}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>
      </Center>
    </div>
  );
};

export default Education;
