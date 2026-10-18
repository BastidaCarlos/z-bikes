import Hero from "./Hero";
import About from "./About";
import Countdown from "./Countdown";
import Gallery from "./Gallery";
import Sponsors from "./Sponsors";
import SEO from "../../components/SEO";
import { Box } from "@chakra-ui/react";

function Home() {
   return (
      <Box>
         <SEO 
            title="Inicio MTB Zumpango · Reto Z 2026"
            description="Comunidad de ciclismo de montaña (MTB) en Zumpango y San Juan Zitlaltepec, Estado de México. Rutas en el Cerro Z y Laguna de Zumpango."
            path="/"
         />
         <Hero />
         <About />
         <Countdown />
         <Gallery />
         <Sponsors />
      </Box>
   ) 
}

export default Home;