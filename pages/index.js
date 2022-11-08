import { useTranslation } from "../src/shared/hooks";
import { MainPage } from "../src/modules";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  const { language, t, switchLanguage } = useTranslation();

  return (
    <>
      <Flex m="40px 32px" justifyContent={'center'}>
        <MainPage />
      </Flex>
    </>
  );
}
