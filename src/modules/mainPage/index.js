import React, { useEffect, useState } from "react";
import { Flex, Heading, Spinner, Image, Center } from "@chakra-ui/react";
import { Card } from "./components";
import { getAllServices } from "@src/shared/api/service";
import Styles from "./styles.module.css";
import { useQuery } from "@tanstack/react-query";

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
