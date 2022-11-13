import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "../../../shared/hooks";

import {
  Heading,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box,
  HStack,
  Text,
  Button,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import { CheckIcon, CloseIcon, ViewIcon } from "@chakra-ui/icons";

import { StarIcon } from "@chakra-ui/icons";

const myLoader = ({ src, width, quality }) => {
  return `https://cdn-icons-png.flaticon.com/${src}?s=${width}`;
};

const ServiceProfile = () => {
  const { language, t, switchLanguage } = useTranslation();

  let Service = {
    serviceName: "Contador",
    ratingServices: "5",
    description: "Contabilidad de personal y empresarial",
  };

  let rating = [true, true, true, false, false];

  return (
    <Box
      maxW={"900px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
    >
      <Box bg={useColorModeValue("gray.50", "gray.900")} px={15} py={8}>
        <HStack>
          <Stack>
            <Text fontSize={"2xl"} fontWeight={800}>
              {Service.serviceName}
            </Text>
            <Box>
              {rating.map((star, i) => {
                let result = [];
                if (star) {
                  result.push(<StarIcon w={8} h={8} color="gold"></StarIcon>);
                } else {
                  result.push(<StarIcon w={8} h={8} color="grey"></StarIcon>);
                }
                return result;
              })}
            </Box>
            <Text>Descripcion: {Service.description}</Text>
          </Stack>
          <Stack align={"right"} justify={"right"}>
            <Button leftIcon={<ViewIcon />} colorScheme="blue" variant="solid">
              Ver servicio
            </Button>
          </Stack>
        </HStack>
      </Box>
    </Box>
  );
};

export default ServiceProfile;
