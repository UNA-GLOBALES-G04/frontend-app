import { RecoilRoot } from "recoil";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { SidebarWithHeader, Footer, Navbar } from "../src/modules";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ChakraProvider>
      <Flex minH="100vh" direction={'column'} justifyContent={'space-between'}>
        <div>

        <Navbar />
        <Component {...pageProps} />
        </div>

        <Footer />
      </Flex>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
