import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "@src/shared/hooks";

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
  FormControl as ChakraFormControl,
  FormLabel,
  Box,
  Input,
  Stack,
  HStack,
  Textarea,
  InputGroup,
  Flex,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";

import { useUpdateUser } from "@src/shared/hooks";
import { FormControl } from "@src/shared/components";
import { createOrder } from "@src/shared/api/order";

const InpustData = [
  {
    key: "direction",
    name: "direction",
    type: "text",
    isRequired: true,
  },
  {
    key: "requiredDate",
    name: "requiredDate",
    type: "datetime-local",
    isRequired: true,
  },
  {
    key: "description",
    name: "description",
    type: "text",
    isRequired: true,
  },
];

const ServicesRequest = ({ serviceId }) => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const [isLoading, setIsLoading] = useState(false);

  const { language, t, switchLanguage } = useTranslation();
  const { user } = useUpdateUser();
  const toast = useToast();

  const initialValues = {
    direction: "",
    description: "",
    requiredDate: "",
  };

  const validationSchema = Yup.object().shape({});

  const onSubmit = async () => {
    setIsLoading(true);
    const { requiredDate, direction, description } = values;
    try {
      await createOrder(
        {
          serviceId,
          requiredDate: `${requiredDate}:00Z`,
          direction,
          description,
        },
        user.token
      );
      onClose();
      setIsLoading(false);
      toast({
        title: t("orderToast.title"),
        description: t("orderToast.message"),
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: t("orderToast.title"),
        description: t("orderToast.errorMessage"),
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      console.log(error);
    }
    setIsLoading(false);
  };

  const formikProps = useFormik({
    onSubmit,
    validationSchema,
    initialValues,
    enableReinitialize: true,
  });
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    formikProps;

  return (
    <Flex>
      <Button
        disabled={!user}
        flex={1}
        fontSize={"sm"}
        rounded={"full"}
        bg={"blue.400"}
        color={"white"}
        boxShadow={
          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
        }
        _hover={{
          bg: "blue.500",
        }}
        _focus={{
          bg: "blue.500",
        }}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        {t("orderModal.title")}
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader> {t("orderModal.title")}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              {InpustData.map((input, index) => (
                <FormControl
                  key={`${input.key}-${index}`}
                  name={input.name}
                  label={t(`orderModal.${input.name}`)}
                  value={values?.[input.key]}
                  error={errors?.[input.key]}
                  touched={touched?.[input.key]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type={input.type}
                />
              ))}
            </Stack>
          </ModalBody>
          <ModalFooter>
            <HStack>
              <Box>
                <Button onClick={onClose}> {t("orderModal.close")}</Button>
              </Box>
              <Box>
                <Button onClick={handleSubmit} isLoading={isLoading}>
                  {t("orderModal.submitButton")}
                </Button>
              </Box>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default ServicesRequest;
