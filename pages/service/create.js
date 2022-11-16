import React, {useEffect, useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  Flex,
  Box,
  FormControl as ChakraFormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { withoutAuth } from '@src/shared/components';
import { useRouter } from 'next/router';
import { FormControl } from "@src/shared/components";
import {useTranslation} from '../../src/shared/hooks';
import { createService } from "@src/shared/api/service";
import { useUpdateUser } from "@src/shared/hooks";



const InpustData = [
  {
    key: 'serviceName',
    name: 'serviceName',
    type: 'text',
    isRequired: true,
  },
  {
    key: 'description',
    name: 'description',
    type: 'text',
    isRequired: true,
  },
  {
    key: 'email',
    name: 'email',
    type: 'email',
    isRequired: true,
  },
  {
    key: 'phoneNumber',
    name: 'phoneNumber',
    type: 'text',
    isRequired: true,
  },
  {
    key: 'tags',
    name: 'tags',
    type: 'tags',
    isRequired: true,
  }

];


const CreateService = () => {

  const { language, t, switchLanguage} = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const { user, signIn } = useUpdateUser();


  const initialValues = {
    serviceName: '',
    description: '',
    email: '',
    phoneNumber: '',
    tags: '',
    multimedia: []
  }


  const validationSchema = Yup.object().shape({
    
  })

  const onSubmit = async () => {
    console.log(values)
    const { tags } = values;

    const tagsArray = tags.split(',');

    setIsLoading(true);
    try{
      await createService({...values, tags: tagsArray}, user.token);
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
    setFieldValue,
    setFieldTouched,
    handleBlur,
    handleSubmit,
    validateForm,
  } = formikProps;

  useEffect(() => {
    console.log('values', values);
  }, [values]);
  
  
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            {t('createService.title')}
          </Heading>

        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          minW='400px'>
          <Stack spacing={4}>
            {InpustData.map((input, index) => (
              <FormControl
                key={`${input.key}-${index}`}
                name={input.name}
                label={t(`createService.${input.name}`)}
                value={values?.[input.key]}
                error={errors?.[input.key]}
                touched={touched?.[input.key]}
                onChange={handleChange}
                onBlur={handleBlur}
                type={input.type}
                isRequired={input.isRequired}
              />)
            )}
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}
                isLoading={isLoading} >
                {t(`createService.submitButton`)}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default (CreateService);