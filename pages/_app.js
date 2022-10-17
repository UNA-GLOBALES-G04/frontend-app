import { RecoilRoot } from "recoil";
import { ChakraProvider, Box } from '@chakra-ui/react';
import { SidebarWithHeader, Footer, Navbar } from '../src/modules';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ChakraProvider>
      <Box minH="100vh">
        <Navbar/>
          <Component {...pageProps} />
        <Footer/>
      </Box>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
