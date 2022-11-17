import React, { useState, useEffect } from "react";
import { useTranslation } from "@src/shared/hooks";
import { useUpdateUser } from "@src/shared/hooks";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { MobileNavItem } from "./";

const MobileNav = () => {
  const { language, t, switchLanguage } = useTranslation();

  const { user, signOut } = useUpdateUser();

  const NAV_ITEMS = [
    {
      label: t("navBar.home"),
      href: "/",
    },
    {
      label: t("navBar.profile"),
      children: [
        {
          label: t("navBar.myProfile"),
          subLabel: "Find your dream design job",
          href: "/profileid",
        },
        {
          label: t("navBar.updateProfile"),
          subLabel: "Find your dream design job",
          href: "/updateProfile",
        },
      ],
    },
    {
      label: t("navBar.service"),
      children: [
        {
          label: t("navBar.allServices"),
          subLabel: "Find your dream design job",
          href: "/services-list",
        },
        {
          label: t("navBar.serviceRequest"),
          subLabel: "Find your dream design job",
          href: "#",
        },
      ],
    },
  ];

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}

      {user ? (
        <Button
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"#66a3f8"}
          onClick={signOut}
          _hover={{
            bg: "#326AB8",
          }}
          width="100%"
        >
          {t("navBar.logoutButton")}
        </Button>
      ) : (
        <Button
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"#66a3f8"}
          as={"a"}
          href={"/sign-in"}
          _hover={{
            bg: "#326AB8",
          }}
          width="100%"
        >
          {t("navBar.loginButton")}
        </Button>
      )}
    </Stack>
  );
};

export default MobileNav;