import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { FormControl } from "../../src/shared/components";
import { Waves } from "../../src/shared/components/Backgrounds";

import {
  Flex,
  Box,
  FormControl as FormControlCK,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  FormErrorMessage,
  FormHelperText,
  useColorModeValue,
} from "@chakra-ui/react";

import { useTranslation } from "../../src/shared/hooks";

const InpustData = [
  {
    key: 'email',
    name: 'email',
    label: 'Email',
    type: 'email',
    herlperText: 'esto es una ayudita',
  },
  {
    key: 'password',
    name: 'password',
    label: 'Password',
    type: 'password',
    herlperText: 'esto es una ayudita',
  },
];

const SignIn = () => {
  const { language, t, switchLanguage } = useTranslation();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const formikProps = useFormik({
    onSubmit,
    validationSchema,
    initialValues,
    enableReinitialize: true,
  });
  const {
    values,
    errors,
    touched,
    handleChange,
    setFieldValue,
    setFieldTouched,
    handleBlur,
    handleSubmit,
    validateForm,
  } = formikProps;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Waves/>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} zIndex={2}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            {InpustData.map((input, index) => (
              <FormControl
                key={`${input.key}-${index}`}
                name={input.name}
                label={input.label}
                value={values?.[input.key]}
                error={errors?.[input.key]}
                herlperText={"esto es una ayudita"}
                touched={touched?.[input.key]}
                onChange={handleChange}
                onBlur={handleBlur}
                type={input.type}
              />)
            )}
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignIn;