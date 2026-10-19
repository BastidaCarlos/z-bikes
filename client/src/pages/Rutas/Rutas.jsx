import SEO from "../../components/SEO";
import { Box, VStack } from "@chakra-ui/react";
import HeroRutas from "./HeroRutas";
import PlaceHolderRutas from "./PlaceHolderRutas";
import CardRuta from "./CardRuta";
import { rutas } from "../../data/rutas";

function Rutas() {
    return (
        <Box>
            <SEO 
                title="Rutas MTB · Cerro Z · Z-Bikes"
                description='Descubre las rutas de mountain bike en el Cerro Z y descarga los archivos .gpx para tu ciclocomputador.'
                path="/rutas"
            />
            <HeroRutas />
            <PlaceHolderRutas />

            {/* <VStack gap={6} mt={8}>
                {rutas.map((ruta) => (
                    <CardRuta key={ruta.id} route={ruta}/>
                ))}
            </VStack> */}
        </Box>
    )
}

export default Rutas;   