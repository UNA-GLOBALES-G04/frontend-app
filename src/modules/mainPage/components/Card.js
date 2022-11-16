import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
<<<<<<< HEAD

export default function Card({servicesName, description, tags = []}) {
=======
import ServicesRequest from "@src/modules/ServiceRequest/ServicesRequest";


export default function Card({id, serviceName, description, tags = []}) {
>>>>>>> create-service
  return (
    <Center py={6} px={4}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        {/* <Avatar
          size={'xl'}
          src={
            'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          }
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        /> */}
        <Heading fontSize={'2xl'} fontFamily={'body'}>
<<<<<<< HEAD
          {servicesName}
=======
          {serviceName}
>>>>>>> create-service
        </Heading>

        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          mt={6}
          px={3}>
          {description}
        </Text>

<<<<<<< HEAD
        <Stack align={'center'} justify={'center'} direction={'row'} mt={4}>
=======
        <Stack align={'center'} justify={'center'} direction={'row'} mt={4} flexWrap='wrap'>
>>>>>>> create-service
          {tags.map((tag, i)=>(<Badge
            key={i}
            px={2}
            py={1}
<<<<<<< HEAD
            bg={useColorModeValue('gray.50', 'gray.800')}
=======
            bg={'gray.50'}
>>>>>>> create-service
            fontWeight={'400'}>
            {tag}
          </Badge>))}
        </Stack>

        <Stack mt={6} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Message
          </Button>
<<<<<<< HEAD
          <Button
=======
          <ServicesRequest serviceId={id}/>

          {/* <Button
>>>>>>> create-service
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Follow
<<<<<<< HEAD
          </Button>
=======
          </Button> */}
          
>>>>>>> create-service
        </Stack>
      </Box>
    </Center>
  );
}