import { useTranslation } from "@src/shared/hooks";

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

import { DesktopSubNav } from "./";

const NAV_ITEMS = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Perfil",
    children: [
      {
        label: "Mi Perfil",
        subLabel: "Find your dream design job",
        href: "/profileid",
      },
      {
        label: "Actualizar Perfil",
        subLabel: "Find your dream design job",
        href: "/updateProfile",
      },
    ],
  },
  {
    label: "Servicios",
    children: [
      {
        label: "Mis Servicios",
        subLabel: "Find your dream design job",
        href: "/services-list",
      },
      {
        label: "Solicitar Servicio",
        subLabel: "Find your dream design job",
        href: "#",
      },
    ],
  },
];

//const NAV_ITEMS = []

const DesktopNav = () => {
  const { language, t, switchLanguage } = useTranslation();

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

  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNav;