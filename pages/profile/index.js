//import flex from chakra-ui
import { Flex, Box, Center, Heading, Stack, Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useTranslation } from "../../src/shared/hooks";
import { FormControl } from "../../src/shared/components";
import { withAuth } from "../../src/shared/components";

const InpustData = [
  {
    key: 'email',
    name: 'email',
    type: 'email',
  },
  {
    key: 'password',
    name: 'password',
    type: 'password',
  },
  {
    key: 'fullName',
    name: 'fullName',
    type: 'text',
  },
  {
    key: 'legalDocumentId',
    name: 'legalDocumentId',
    type: 'text',
  },

];

const Profile = () => {

  const { language, t, switchLanguage } = useTranslation();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({

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
    handleBlur,
  } = formikProps;

  return (
    <Flex m='40px 32px' direction='column' alignItems='center'>
      <Heading as='h1' textAlign='center' w={'100%'} mb='20px'>
        {t('profileSettings.title')}
      </Heading>
      <Flex direction='column' w='500px' >
        <Stack spacing={4} mb='40px'>
          {InpustData.map((input, index) => (
            <FormControl
              key={`${input.key}-${index}`}
              name={input.name}
              label={t(`profileSettings.${input.name}`)}
              value={values?.[input.key]}
              error={errors?.[input.key]}
              touched={touched?.[input.key]}
              onChange={handleChange}
              onBlur={handleBlur}
              type={input.type}
            />))}
        </Stack>
        <Button
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
        >
          {t('profileSettings.updateButton')}
        </Button>
      </Flex>
    </Flex>
  );
}

export default withAuth(Profile);