import SEO from "../../components/SEO";
import HeroReto from "./HeroReto";
import RoutesReto from "./RoutesReto";
import GeneralInfo from "./GeneralInfo";
import BeforeEditions from "./BeforeEditions";
import CTAReto from "./CTAReto";
import StaffList from "./StaffList";
import Includes from "./Includes";
import { Flex, Separator } from "@chakra-ui/react";

function RetoZ() {
    return (
        <Flex
            w="100%"
            direction="column"
        >
            <SEO 
                title="Reto Z 2026 · 29 de Noviembre · Inscríbete"
                description="Participa en el Reto Z 2026. Rutas de 30km y 40km en el Cerro Z, Zumpango. 29 de Noviembre"
                path="/reto-z"
            />
            <HeroReto />
            <GeneralInfo />
            <StaffList />
            <RoutesReto />
            <Includes />
            <BeforeEditions />
            <Separator 
                orientation="horizontal"
                maxW={{ base: '90%', lg: "900px"}}
                size="lg"
                mx="auto"
                mb={4}
            />
            <CTAReto />
        </Flex>
    )
}

export default RetoZ;