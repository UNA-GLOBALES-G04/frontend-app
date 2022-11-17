import React, { useState, useEffect } from "react";
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

import { getRatingByServiceId } from "@src/shared/api/service";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";


const ServiceProfile = ({Service}) => {

  const { language, t, switchLanguage } = useTranslation();
  const { data, isLoading, error, refetch } = useQuery(["rating-service", Service.id], () =>(
    getRatingByServiceId(Service.id))
  );
  const router = useRouter();

  const [rating, setRating] = useState([]);

  useEffect(() => {

    if(data?.data?.rating){
      let rating = [];
    for (let i = 0; i < 5; i++) {
      if (i < data?.data?.rating) {
        rating.push(true);
      }else{
        rating.push(false);
      }
    }
    console.log('rating', rating)
    setRating(rating);
  }
    
  }, [data]);

  return (
    <Box
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
              {Service.serviceName}
            </Text>
            <Box>
              {rating.map((star, i) => {
                if (star) {
                  return (<StarIcon w={8} h={8} color="gold" key={i}></StarIcon>);
                } else {
                  return (<StarIcon w={8} h={8} color="grey" key={i}></StarIcon>);
                }
              })}
            </Box>
            <Text>{t("profileService.description")}: {Service.description}</Text>
          </Stack>
          <Stack align={"right"} justify={"right"}>
            <Button leftIcon={<ViewIcon />} colorScheme="blue" variant="solid" onClick={()=>router.push(`/service/${Service.id}`)}>
              {t("profileService.linkButton")}
            </Button>
          </Stack>
        </HStack>
      </Box>
    </Box>
  );
};

export default ServiceProfile;
