import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
    return (
        <Flex direction='column' minH="100vh" minW="100vw">
            <Navbar />

            <Box as="main" flex="1">
                <Outlet />
            </Box>

            <Footer />
        </Flex>
    );
}

export default Layout;