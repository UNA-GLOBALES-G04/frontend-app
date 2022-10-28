//import flex from chakra-ui
import { Flex, Box, Center, Heading } from "@chakra-ui/react";
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
    herlperText: 'esto es una ayudita',
  },
  {
    key: 'password',
    name: 'password',
    type: 'password',
    herlperText: 'esto es una ayudita',
  },
];
 
const Profile = () => {

  const { language, t, switchLanguage} = useTranslation();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(t('global.error.required')),
    password: Yup.string().required(t('global.error.required')),
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
        <Heading as='h1' textAlign='center' w={'100%'}>
            Profile
        </Heading>
        <Flex direction='column' w='500px' >
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
        />))}
        </Flex>
    </Flex>
  );
}

export default withAuth(Profile);
