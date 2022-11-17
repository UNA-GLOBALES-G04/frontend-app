import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "../../shared/hooks";
import React, { useState, useEffect } from "react";

import {
  Heading,
  Text,
  Grid,
  GridItem,
  List,
  ListItem,
  Box,
  Stack,
  HStack,
  ListIcon,
  Center,
  useColorModeValue,
  Flex,
  Spinner
} from "@chakra-ui/react";

import { Experience, PortfolioItem, Education, Schedule } from "./components";

import { getRatingByServiceId, getServiceById } from "@src/shared/api/service";
import { useQuery } from "@tanstack/react-query";

import { PhoneIcon, AddIcon, StarIcon } from "@chakra-ui/icons";
import ServicesRequest from "@src/modules/ServiceRequest/ServicesRequest";

const ServiceOfferedCopy = ({ serviceId }) => {
  const { language, t, switchLanguage } = useTranslation();

  const {
    data: dataRating,
    isLoadingRating,
    errorRating,
  } = useQuery(["rating-service", serviceId], () =>
    getRatingByServiceId(serviceId)
  );

  const { data, isLoading, error } = useQuery(["service", serviceId], () =>
    getServiceById(serviceId)
  );

  const [rating, setRating] = useState([]);

  useEffect(() => {
    if (dataRating?.data?.rating) {
      let rating = [];
      for (let i = 0; i < 5; i++) {
        if (i < dataRating?.data?.rating) {
          rating.push(true);
        } else {
          rating.push(false);
        }
      }
      console.log("rating", rating);
      setRating(rating);
    }
  }, [dataRating]);

  return (
    <div>
      <Flex py={6} flexWrap="wrap" gap="8px" justifyContent="space-around">
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
            maxW={"900px"}
            w={["100%", "100%", "65%"]}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Box bg={useColorModeValue("white", "white")} px={6} py={10}>
              <Text fontSize={"2xl"} fontWeight={800}>
                {data?.data?.serviceName}
              </Text>
              {rating.map((star, i) => {
                let result = [];
                if (star) {
                  result.push(<StarIcon w={8} h={8} color="gold"></StarIcon>);
                } else {
                  result.push(<StarIcon w={8} h={8} color="grey"></StarIcon>);
                }
                return result;
              })}
              <br />
              <br />
              <Text>{data?.data?.description}</Text>
            </Box>

            <HStack
              textAlign={"left"}
              p={6}
              color={useColorModeValue("gray.800", "white")}
              align={"left"}
              bg={useColorModeValue("gray.50", "gray.900")}
              spacing="20px"
            >
              <Stack direction={"column"} align={"left"} justify={"left"}>
                <Text fontSize={"2xl"} fontWeight={800}>
                  Informacion de contacto
                </Text>
                <Stack direction={"row"} align={"left"} justify={"left"}>
                  <Text fontWeight={600}>Email: </Text>
                  <Text>{data?.data?.email}</Text>
                </Stack>
                <Stack direction={"row"} align={"left"} justify={"left"}>
                  <Text fontWeight={600}>Phone number: </Text>
                  <Text>{data?.data?.phoneNumber}</Text>
                </Stack>
              </Stack>
              <Center w='50%'>
                <ServicesRequest serviceId={serviceId} />
              </Center>
            </HStack>
            {/* <Box bg={useColorModeValue("white", "white")} px={6} py={10}>
              <Experience />
            </Box>
            <Stack
              textAlign={"left"}
              p={6}
              color={useColorModeValue("gray.800", "white")}
              align={"left"}
              bg={useColorModeValue("gray.50", "gray.900")}
            >
              <Stack direction={"row"} align={"left"} justify={"left"}>
                <Text fontSize={"2xl"} fontWeight={800}>
                  Algunos de mis proyectos
                </Text>
              </Stack>
            </Stack> 
            <Box bg={useColorModeValue("white", "white")} px={6} py={10}>
              <Flex overflowX='scroll'>
                <PortfolioItem />
              </Flex>
            </Box>*/}
          </Box>
        )}
        {/*<Box   w={["100%","100%","30%"]}>
          <Education />
        </Box>
        */}
      </Flex>
    </div>
  );
};

export default ServiceOfferedCopy;
