import React, {useEffect, useState} from 'react';
import { Flex } from "@chakra-ui/react";
import { Card } from "./components";
import { getAllServices } from "@src/shared/api/service";

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

  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchServices = async () => {
      const response = await getAllServices();
      setServices(response.data);
    };
    fetchServices();
  }, [])

  useEffect(() => {
    console.log('services', services);
  }, [services])
  
  

  return (
    <Flex wrap={'wrap'} >
      {servicesList.map((service , i) => (
        <Card key={i} {...service} />
      ))}
    </Flex>
  );
};

export default MainPage;
