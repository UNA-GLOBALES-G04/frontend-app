import React from 'react';
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';

import { useRouter } from "next/router";
import { MobileNav, SidebarContent } from './components';

export default function SidebarWithHeader({
  children,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  if(router.pathname === "/sign-up" || router.pathname === "/sign-in"){
    return <>{children}</>;
  }

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="0">
        <Box p="4">
          {children}
        </Box>
      </Box>
    </Box>
  );
}