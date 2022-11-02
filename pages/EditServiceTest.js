import EditService from "../src/modules/EditService/EditService";
import { MyServices } from "../src/modules/Offerts/components";

import {
  Heading,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box,
  HStack,
  Text,
  Button,
  Stack,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";

const EditServiceTest = () => {
  return (
    <Center>
      <MyServices></MyServices>
      <Box>
        <EditService />
      </Box>
    </Center>
  );
};

export default EditServiceTest;
