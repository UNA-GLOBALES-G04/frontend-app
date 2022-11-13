import React, {useState} from 'react';
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
import { signUp as signUpApi } from "@src/shared/api/user";


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


const SignUp = () => {

  const { language, t, switchLanguage} = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    fullName: '',
    legalDocumentId: '',
    birthday: '',
    email: '',
    password: '',
    address: '',
  }
  const router = useRouter();
  const goToLogin = () => { router.push('/sign-in') }


  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  })

  const onSubmit = async (event) => {
    
    const { fullName, legalDocumentId, birthday, email, password, address } = values;
    setIsLoading(true);
    try{
      await signUpApi({userInfo: { fullName, legalDocumentId, birthDate: `${birthday}T00:00:00Z`, email, address, profilePictureID: '' }, authInfo: {email, password}});
      setIsLoading(false);
      goToLogin();
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
  
  
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            {t('signUp.title')}
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
                label={t(`signUp.${input.name}`)}
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
                {t(`signUp.submitButton`)}
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'} onClick={goToLogin} >
                {t(`signUp.alreadyUser_1`)} <Link color={'blue.400'}>{t(`signUp.alreadyUser_2`)}</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default withoutAuth(SignUp);