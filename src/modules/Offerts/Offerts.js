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
import { getMyOrdersVendor } from "@src/shared/api/order";
import { MyServices, Offert } from "./components";
import { useUpdateUser } from "@src/shared/hooks";
import { useEffect } from "react";

const Offerts = () => {
  const { language, t, switchLanguage } = useTranslation();

  const { user } = useUpdateUser();

  const { data, isLoading, error, refetch } = useQuery(
    ["offers-list"],
    () => getMyOrdersVendor(user.token, 'PENDING'),
    { enabled: !!user?.token }
  );

  useEffect(() => {
    if (user?.token) {
      refetch();
    }
  }, [user]);

  return (
    <Flex flexWrap="wrap" m="40px 32px">
      {/* <MyServices /> */}
      <Box
        minW="600px"
        maxW={"900px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Heading bg={useColorModeValue("tranparent", "tranparent")} marginBottom='20px'>
          Solicitudes
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
                <Offert offert={offert} user={user} refetch={refetch}/>
                <br/>
              </div>
            );
          })
        )}
      </Box>
    </Flex>
  );
};

export default Offerts;
