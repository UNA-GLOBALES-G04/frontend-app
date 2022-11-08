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

const myLoader = ({ src, width, quality }) => {
  return `https://cdn-icons-png.flaticon.com/${src}?s=${width}`;
};

const Offert = () => {
  const { language, t, switchLanguage } = useTranslation();

  let Offert = {
    userName: "Jose Montero Molina",
    profesion: "Se busca arquitecto",
    date: "28/10/2022",
    time: "8:00 PM",
    details:
      "Se requiere un plano para una segunda planta a una casa con el fin de colocra dos curatos, sala star y un bano compelto, con un presupuesto de 20 millones",
  };

  return (
    <div>
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
                {Offert.userName}
              </Text>
              <Text>{Offert.profesion}</Text>
              <Text>
                Fecha: {Offert.date} Hora: {Offert.time}
              </Text>
              <Text>Detalle: {Offert.details}</Text>
            </Stack>
            <Stack align={"right"} justify={"right"}>
              <Button
                leftIcon={<ViewIcon />}
                colorScheme="blue"
                variant="solid"
              >
                Ver oferta
              </Button>
              <Button
                leftIcon={<CheckIcon />}
                colorScheme="green"
                variant="solid"
              >
                Aceptar
              </Button>
              <Button
                leftIcon={<CloseIcon />}
                colorScheme="red"
                variant="solid"
              >
                Rechazar
              </Button>
            </Stack>
          </HStack>
        </Box>
      </Box>
    </div>
  );
};

export default Offert;
