import React, { useEffect, useState } from "react";
import { Flex, Heading, Spinner, Image, Center } from "@chakra-ui/react";
import { Card } from "./components";
import { getAllServices } from "@src/shared/api/service";
import Styles from "./styles.module.css";
import { useQuery } from "@tanstack/react-query";

const servicesList = [
  {
    servicesName: "Servicio 1",
    description: "Descripción del servicio 1",
    email: "service1@test.com",
    phoneNumber: "1111",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    servicesName: "Servicio 2",
    description: "Descripción del servicio 2",
    email: "service2@test.com",
    phoneNumber: "2222",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    servicesName: "Servicio 3",
    description: "Descripción del servicio 3",
    email: "service3@test.com",
    phoneNumber: "3333",
    tags: ["tag1", "tag2", "tag3"],
  },
];

const MainPage = () => {

  const { data, isLoading, error } = useQuery(["services-list"], () =>(
    getAllServices())
  );


  return (
    <>
      <Flex className={`${Styles.bg}`} h="140px" flexDirection={'row'}>
        <Image objectFit="cover" boxSize="80px" src={"/LogoWhite.png"} alt="logo" />
        <Heading as="h1" size="xl" color={"white"}>
          Conecta2
        </Heading>
      </Flex>
      <Flex m="40px 32px" justifyContent={"center"}>
      {isLoading ? (
          <Center marginTop={'20px'}>
            <Spinner thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'/>
          </Center>
        ) :
        <Flex wrap={"wrap"} gap='8px'>
          {data?.data?.map((service, i) => (
            <Card key={i} {...service} />
          ))}
        </Flex>}
      </Flex>
    </>
  );
};

export default MainPage;
