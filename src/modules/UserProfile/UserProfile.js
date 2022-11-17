import React, { useEffect, useState } from "react";
import {
  Text,
  Flex,
  Box,
  useColorModeValue,
  Center,
  Spinner,
} from "@chakra-ui/react";

import { ServiceProfile, CoverPage } from "./components";

import { getUser } from "@src/shared/api/user";
import { useQuery } from "@tanstack/react-query";

const UserProfile = ({ userId }) => {
  const { data, isLoading, error, refetch } = useQuery(
    ["profile-services"],
    () => getUser(userId)
  );

  return (
    <Flex justifyContent="space-around">
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
        <Box
          w={"100%"}
          bg={"white"}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <CoverPage name={data?.data?.vendorName} />
          {data?.data?.services?.map((service, i) => (
            <ServiceProfile Service={service} key={i} />
          ))}
        </Box>
      )}
    </Flex>
  );
};

export default UserProfile;
