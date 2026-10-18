import SEO from "../../components/SEO";
import HeroCommunity from "./HeroCommunity";
import History from "./History";
import Territory from "./Territory";
import AddMembers from "./AddMembers";
import { Box } from "@chakra-ui/react";

function Comunidad() {
    return (
        <Box>
            <SEO 
                title="Conoce Z-Bikes Comunidad MTB Zumpango"
                description="Historia, Filosofía y territorio de Z-Bikes. Ciclismo de montaña en el Cerro Z y Laguna de Zumpango."
                path="/comunidad"
            />
            <HeroCommunity />
            <History />
            <Territory />
            <AddMembers />
        </Box>
    )
}

export default Comunidad;