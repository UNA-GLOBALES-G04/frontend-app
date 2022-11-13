import React, {useState} from 'react';
import { Flex, Box, Center, Heading, Stack, Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useTranslation } from "../../src/shared/hooks";
import { FormControl } from "../../src/shared/components";
import { withAuth } from "../../src/shared/components";
import { updateUser } from "@src/shared/api/user";
import { useUpdateUser } from "@src/shared/hooks";

const InpustData = [
  {
    key: 'fullName',
    name: 'fullName',
    type: 'text',
    isRequired: true,
  },
  {
    key: 'legalDocumentId',
    name: 'legalDocumentId',
    type: 'text',
    isRequired: true,
  },
  {
    key: 'birthday',
    name: 'birthday',
    type: 'date',
    isRequired: true,
  },
  {
    key: 'address',
    name: 'address',
    type: 'text',
    isRequired: true,
  },
  {
    key: 'email',
    name: 'email',
    type: 'email',
    isRequired: true,
  },{
    key: 'password',
    name: 'password',
    type: 'password',
    isRequired: true,
  },

];

const Profile = () => {

  const { language, t, switchLanguage } = useTranslation();
  const [ isLoading, setIsLoading ] = useState(false);
  const { user } = useUpdateUser();

  const initialValues = {
    fullName: '',
    legalDocumentId: '',
    birthday: '',
    email: '',
    password: '',
    address: '',
  }

  const validationSchema = Yup.object().shape({

  });

  const onSubmit = async () => {
    const { fullName, legalDocumentId, birthday, email, address } = values;
    setIsLoading(true);
    try{
      console.log('token', user);
      await updateUser({ fullName, legalDocumentId, birthDate: `${birthday}T00:00:00Z`, email, address, profilePictureID: '' },user.token);
      setIsLoading(false);
    }
    catch(error){
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
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = formikProps;

  return (
    <Flex m='40px 32px' direction='column' alignItems='center'>
      <Heading as='h1' textAlign='center' w={'100%'} mb='20px'>
        {t('profileSettings.title')}
      </Heading>
      <Flex direction='column' w={['280px', '500px', '500px']} >
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
          onClick={handleSubmit}
        >
          {t('profileSettings.updateButton')}
        </Button>
      </Flex>
    </Flex>
  );
}

export default withAuth(Profile);
