import React from "react";
import { useTranslation } from "@src/shared/hooks";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
  Button,
  Image,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";

const LanguagesModal = ({ isOpen, onClose }) => {
  const { language, t, switchLanguage } = useTranslation();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign='center' >{t("languagesModal.title")}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex justifyContent='space-between' alignItems='center' flexDirection='column' overflowY='scroll'>

            <Flex marginBottom={'12px'} width='80%' alignItems='center' as='button' onClick={()=>switchLanguage('es', false)}>
              <Image src='/images/flags/spain.png' w='80px' h='50px' marginRight='10px'/>
              <Text fontSize='2xl' >{t("global.language.es")}</Text>
            </Flex>
            
            <Flex width='80%' alignItems='center'  as='button' onClick={ ()=> switchLanguage('en', false)}>
              <Image src='/images/flags/usa.png'  w='80px' h='50px' marginRight='10px' />
              <Text fontSize='2xl' >{t("global.language.en")}</Text>
            </Flex>
            
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            {t("languagesModal.close")}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LanguagesModal;