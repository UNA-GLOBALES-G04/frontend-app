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
  useToast,
} from "@chakra-ui/react";
import { getUser } from "@src/shared/api/user";
import { useQuery } from "@tanstack/react-query";
import { CheckIcon, CloseIcon, ViewIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { acceptOrder, completeOrder, rejectOrder } from "@src/shared/api/order";

const Offert = ({ offert, refetch, user, otherUser = false }) => {
  const { language, t, switchLanguage } = useTranslation();
  const toast = useToast();
  const { data, isLoading, error } = useQuery(["user"], () =>
    getUser(offert.userProfileId)
  );

  const acceptOrderOnclick = async () => {
    const response = await acceptOrder(
      { serviceId: offert.serviceId, orderId: offert.id },
      user.token
    );
    toast({
      title: t("orderList.acceptToastTitle"),
      description: t("orderList.acceptToastDescription"),
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    refetch();
    console.log(response);
  };

  const completeOrderOnclick = async () => {
    const response = await completeOrder(
      { serviceId: offert.serviceId, orderId: offert.id },
      user.token
    );
    toast({
      title: t("orderList.completeToastTitle"),
      description: t("orderList.completeToastDescription"),
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    refetch();
    console.log(response);
  };

  const rejectOrderOnclick = async () => {
    const response = await rejectOrder(
      { serviceId: offert.serviceId, orderId: offert.id },
      user.token
    );
    toast({
      title: t("orderList.rejectToastTitle"),
      description: t("orderList.rejectToastDescription"),
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    refetch();
    console.log(response);
  };

  return (
    <div>
      <Box
        maxW={"900px"}
        w={"full"}
        margin="auto"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box bg={useColorModeValue("gray.50", "gray.900")} px={15} py={8}>
          <HStack justifyContent="space-between">
            <Stack>
              <Text fontSize={"2xl"} fontWeight={800}>
                {data?.data?.vendorName}
              </Text>
              <Text>Fecha y hora: {offert.requiredDate}</Text>
              <Text>Detalle: {offert.description}</Text>
              <Text>Dirección: {offert.direction}</Text>
              <Text>Dirección: {offert.current_status}</Text>
            </Stack>
            {offert.current_status !== "COMPLETED" &&
              offert.current_status !== "REJECT" &&
              !otherUser && (
                <Stack align={"right"} justify={"right"}>
                  {offert.current_status === "ACCEPTED" ? (
                    <Button
                      leftIcon={<CheckIcon />}
                      colorScheme="green"
                      variant="solid"
                      onClick={completeOrderOnclick}
                    >
                      {t("orderList.completeButton")}
                    </Button>
                  ) : (
                    <Button
                      leftIcon={<CheckIcon />}
                      colorScheme="green"
                      variant="solid"
                      onClick={acceptOrderOnclick}
                    >
                      {t("orderList.acceptButton")}
                    </Button>
                  )}
                  <Button
                    leftIcon={<CloseIcon />}
                    colorScheme="red"
                    variant="solid"
                    onClick={rejectOrderOnclick}
                  >
                    {t("orderList.rejectButton")}
                  </Button>
                </Stack>
              )}
          </HStack>
        </Box>
      </Box>
    </div>
  );
};

export default Offert;
