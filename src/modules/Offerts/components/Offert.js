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
import { getUser } from "@src/shared/api/user";
import { useQuery } from "@tanstack/react-query";
import { CheckIcon, CloseIcon, ViewIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { acceptOrder } from "@src/shared/api/order";

const Offert = ({offert, refetch, user}) => {
  const { language, t, switchLanguage } = useTranslation();

  const { data, isLoading, error } = useQuery(["user"], () =>
    getUser(offert.userProfileId)
  );


  const acceptOrdeOnclick = async () => {
    const response = await acceptOrder({serviceId: offert.serviceId, orderId: offert.id}, user.token);
    refetch();
    console.log(response);
  }


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
          <HStack justifyContent='space-between'>
            <Stack>
              <Text fontSize={"2xl"} fontWeight={800}>
                {data?.data?.vendorName}
              </Text>
              <Text>
                Fecha y hora: {offert.requiredDate}
              </Text>
              <Text>Detalle: {offert.description}</Text>
              <Text>Dirección: {offert.direction}</Text>
            </Stack>
            <Stack align={"right"} justify={"right"}>

              <Button
                leftIcon={<CheckIcon />}
                colorScheme="green"
                variant="solid"
                onClick={acceptOrdeOnclick}
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
