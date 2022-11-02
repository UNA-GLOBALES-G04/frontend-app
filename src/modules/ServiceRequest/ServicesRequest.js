import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
//import { useTranslation } from "../../../shared/hooks";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
  useDisclosure,
  Text,
  FormControl,
  FormLabel,
  Box,
  Input,
  Stack,
  HStack,
  Textarea,
  InputGroup,
  Flex,
  InputRightElement,
} from "@chakra-ui/react";

const ServicesRequest = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  return (
    <Flex>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Solicitar servicio
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Solicitar servicio</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl id="RequestName" isRequired>
                <FormLabel>Nombre de la solitud</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="details" isRequired>
                <FormLabel>Detalles</FormLabel>
                <Textarea placeholder="Presupuesto,duracion prevista,disponibilidad...." />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <HStack>
              <Box>
                <Button onClick="#">Realizar solicitud</Button>
              </Box>
              <Box>
                <Button onClick={onClose}>Cerrar</Button>
              </Box>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default ServicesRequest;
