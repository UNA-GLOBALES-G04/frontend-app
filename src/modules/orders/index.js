import { useTranslation } from "../../shared/hooks";

import {
  Heading,
  Box,
  Stack,
  ListIcon,
  Center,
  Flex,
  HStack,
  useColorModeValue,
  Spinner,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getMyOrders } from "@src/shared/api/order";
import { MyServices, Offert } from "../Offerts/components";
import { useUpdateUser } from "@src/shared/hooks";
import { useEffect } from "react";

const OrdersOtherUser = () => {
  const { language, t, switchLanguage } = useTranslation();

  const { user } = useUpdateUser();

  const { data, isLoading, error, refetch } = useQuery(
    ["my-orders"],
    () => getMyOrders(user.token),
    { enabled: !!user?.token }
  );

  useEffect(() => {
    if (user?.token) {
      console.log('user: ', user);
      refetch();
    }
  }, [user]);

  return (
    <Flex flexWrap="wrap" m="40px 32px">
      <Flex
        flexDirection="column"
        minW="600px"
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Heading bg={useColorModeValue("tranparent", "tranparent")} marginBottom='20px' marginLeft='20px'>
          {t("orderList.titleOrderOtherUser")}
        </Heading>

        {isLoading ? (
          <Center marginTop={"20px"}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Center>
        ) : (
          data?.data?.map((offert, i) => {
            return (
              <div key={i}>
                <Offert offert={offert} user={user} refetch={refetch} otherUser={true} />
                <br/>
              </div>
            );
          })
        )}
      </Flex>
    </Flex>
  );
};

export default OrdersOtherUser;
