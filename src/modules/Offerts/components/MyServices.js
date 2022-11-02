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

let myServices = ["Abogado", "Contador"];

const MyServices = () => {
  const { language, t, switchLanguage } = useTranslation();

  return (
    <Box
      maxW={"200px"}
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
            Mis Servicios
          </Text>
        </Stack>
      </Stack>

      <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
        <List spacing={3}>
          {myServices.map((serviceName, i) => {
            return (
              <ListItem key={i}>
                <ListIcon as={CheckIcon} color="green.400" />
                {serviceName}
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default MyServices;
