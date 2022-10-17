import { RecoilRoot } from "recoil";
import { ChakraProvider, Box } from '@chakra-ui/react';
import { SidebarWithHeader, Footer, Navbar } from '../src/modules';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Navbar/>
        <Box minH="82vh">          
          <Component {...pageProps} />
        </Box>
        <Footer/>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
