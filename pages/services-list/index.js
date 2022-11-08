import React, {useEffect, useState, useMemo} from 'react';
import { Flex, Input } from "@chakra-ui/react";
import debounce from 'lodash.debounce';

import { Card } from "@src/modules/mainPage/components";
import { getAllServices } from "@src/shared/api/service";
import { useTranslation } from "@src/shared/hooks";

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

export default function ServicesList() {
  const { language, t, switchLanguage } = useTranslation();

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log('searchTerm', searchTerm);
  }, [searchTerm])

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <>
      <Flex m="40px 32px" alignItems='center' flexDirection='column'>
        <Input placeholder="Buscar" maxW='600px' onChange={debouncedResults} />
        <Flex wrap={"wrap"}>
          {servicesList.map((service, i) => (
            <Card key={i} {...service} />
          ))}
        </Flex>
      </Flex>
    </>
  );
}
