import React, { useEffect, useState } from "react";
import {useRouter} from 'next/router';
import { useFormik } from "formik";
import * as Yup from "yup";

import { FormControl } from "../../src/shared/components";
import { Waves } from "../../src/shared/components/Backgrounds";
import { signIn as signInApi } from "@src/shared/api/auth";
import { useUpdateUser, useHasHydrated } from "@src/shared/hooks";
import { withoutAuth } from '@src/shared/components';

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
    type: 'email',
    herlperText: 'esto es una ayudita',
  },
  {
    key: 'password',
    name: 'password',
    type: 'password',
    herlperText: 'esto es una ayudita',
  },
];

const SignIn = () => {
  const { language, t } = useTranslation();
  const [ isLoading, setIsLoading ] = useState(false);
  const router = useRouter();

  const { user, signIn } = useUpdateUser();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(t('global.error.required')),
    password: Yup.string().required(t('global.error.required')),
  });

  const onSubmit = async() => {
    try{
      setIsLoading(true);
      const response = await signInApi(values);
      await signIn(response.data);
      console.log('response', response);
    }
    catch(error){
      console.log('error', error);
    }
    setIsLoading(false);

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
    handleBlur,
    setFieldTouched,
    handleSubmit,
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
      
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} zIndex={2} width='400px'>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>{t('login.title')}</Heading>
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
                label={t(`login.${input.name}`)}
                value={values?.[input.key]}
                error={errors?.[input.key]}
                touched={touched?.[input.key]}
                onChange={handleChange}
                onBlur={handleBlur}
                type={input.type}
              />)
            )}
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "column" }}
                align={"start"}
                justify={"space-between"}
              >
                
                <Link color={"blue.400"}>{t('login.forgotPassword')}</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                isLoading={isLoading}
                onClick={handleSubmit}
              >
                {t('login.submitButton')}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default withoutAuth(SignIn);