import Link from "next/link";

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
  Image,
  Button,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

const myLoader = ({ src, width, quality }) => {
  return `https://cdn-icons-png.flaticon.com/${src}?s=${width}`;
};

const CoverPage = () => {
  const { language, t, switchLanguage } = useTranslation();

  let Profile = {
    UserName: "Michael Jordan Soto Sibaja",
    ProfecionalDescription: "Abogado y Contador",
  };

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
            <Image
              boxSize="200px"
              objectFit="cover"
              src="https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280-580x580.jpg"
              alt="Dan Abramov"
            />
          </Stack>
          <Stack>
            <Text fontSize={"2xl"} fontWeight={800}>
              {Profile.UserName}
            </Text>
            <Text>{Profile.ProfecionalDescription}</Text>
          </Stack>
        </HStack>
      </Box>
    </Box>
  );
};

export default CoverPage;
