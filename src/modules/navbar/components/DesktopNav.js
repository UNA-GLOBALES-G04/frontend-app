import { useTranslation, useUpdateUser } from "@src/shared/hooks";

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
        href: "/profileid",
      },
      {
        label: "Actualizar Perfil",
        href: "/user/update-profile",
      },
    ],
  },
  {
    label: "Servicios",
    children: [
      {
        label: "Mis Servicios",
        href: "/services-list",
      },
      {
        label: "Solicitar Servicio",
        href: "#",
      },
    ],
  },
];

//const NAV_ITEMS = []

const DesktopNav = () => {
  const { language, t, switchLanguage } = useTranslation();
  const { user, signOut } = useUpdateUser();

  const NAV_ITEMS = [
    {
      label: t("navBar.home"),
      href: "/",
    },
    {
      label: t("navBar.service"),
      children: [
        {
          label: t("navBar.allServices"),
            href: "/services-list",
        },
        {
          label: t("navBar.createService"),
          href: "/service/create",
        },
      ],
    },
  ];

  const USER_NAV_ITEM = {
    label: t("navBar.profile"),
    children: [
      {
        label: t("navBar.myProfile"),
        href: `/profile/${user?.id}`,
      },
      {
        label: t("navBar.updateProfile"),
        href: "/profile/update-profile",
      },
      {
        label: t("navBar.myOrders"),
        href: "/service/my-orders",
      },
      {
        label: t("navBar.resquestedOrders"),
        href: "/service/orders-todo",
      }
      
    ],
  }

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
      {user && (
        <Box key={USER_NAV_ITEM.label}>
        <Popover trigger={"hover"} placement={"bottom-start"}>
          <PopoverTrigger>
            <Link
              p={2}
              href={USER_NAV_ITEM.href ?? "#"}
              fontSize={"sm"}
              fontWeight={500}
              color={linkColor}
              _hover={{
                textDecoration: "none",
                color: linkHoverColor,
              }}
            >
              {USER_NAV_ITEM.label}
            </Link>
          </PopoverTrigger>

          {USER_NAV_ITEM.children && (
            <PopoverContent
              border={0}
              boxShadow={"xl"}
              bg={popoverContentBgColor}
              p={4}
              rounded={"xl"}
              minW={"sm"}
            >
              <Stack>
                {USER_NAV_ITEM.children.map((child) => (
                  <DesktopSubNav key={child.label} {...child} />
                ))}
              </Stack>
            </PopoverContent>
          )}
        </Popover>
      </Box>)}
    </Stack>
  );
};

export default DesktopNav;