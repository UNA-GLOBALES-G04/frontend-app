import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Image,
  Select,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { DesktopNav, MobileNav } from "./components";

import { useRouter } from "next/router";

import { useTranslation } from "../../shared/hooks";
import { useUpdateUser } from "@src/shared/hooks";

function NavbarComponent() {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  const { language, t, switchLanguage } = useTranslation();
  const { user, signOut } = useUpdateUser();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        zIndex={3}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image
            objectFit="cover"
            boxSize="40px"
            src={"/Logo.png"}
            alt="logo"
          />

          <Flex
            display={{ base: "none", md: "flex" }}
            ml={10}
            alignItems="center"
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Select
            width={112}
            onChange={(e) => switchLanguage(`${e.target.value}`, false)}
            value={language}
          >
            <option value="language" disabled>
              {t(`global.language.${language}`)}
            </option>
            <option value="en">{t("global.language.en")}</option>
            <option value="es">{t("global.language.es")}</option>
          </Select>
          {user ? (
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"#66a3f8"}
              onClick={signOut}
              _hover={{
                bg: "#326AB8",
              }}
            >
              {t("navBar.logoutButton")}
            </Button>
          ) : (
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"#66a3f8"}
              as={"a"}
              href={"/sign-in"}
              _hover={{
                bg: "#326AB8",
              }}
            >
              {t("navBar.loginButton")}
            </Button>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

export default function Navbar() {
  const router = useRouter();
 
  if (router.pathname === "/sign-up" || router.pathname === "/sign-in") {
    return <></>;
  }

  return (
    <NavbarComponent/>
  )

}
