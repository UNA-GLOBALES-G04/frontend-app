import { RecoilRoot } from "recoil";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { SidebarWithHeader, Footer, Navbar } from "../src/modules";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Flex
            minH="100vh"
            direction={"column"}
            justifyContent={"space-between"}
          >
            <div>
              <Navbar />
              <Component {...pageProps} />
            </div>

            <Footer />
          </Flex>
        </ChakraProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
