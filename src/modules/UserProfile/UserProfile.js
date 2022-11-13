import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
//import { useTranslation } from "../../../shared/hooks";

import { Text, Flex, Box, useColorModeValue } from "@chakra-ui/react";

import { ServiceProfile, CoverPage } from "./components";

const UserProfile = () => {
  return (
    <Flex>
      <Box
        minW="600px"
        maxW={"900px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <CoverPage />
        <ServiceProfile />
        <ServiceProfile />
      </Box>
    </Flex>
  );
};

export default UserProfile;
