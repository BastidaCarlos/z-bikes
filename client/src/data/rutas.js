import Ruta25 from '../assets/Ruta25KM.webp'
import Ruta40 from '../assets/Ruta40KM.webp'

export const rutas = [
    {
        id: '25km',
        distancia: '25 KM',
        nombre: 'Ruta Intermedios',
        dificultad: 'Media',
        desnivel: '634 m',
        terreno: 'Terracería y sendero',
        descripcion: 'Recorre los caminos y senderos del Cerro Z, con vistas a la Laguna de Zumpango. Encuentra tu paso en las subidas y pon a trabajar tu técnica en los cambios del terreno. Un desafío para quienes ya tienen experiencia en MTB y quieren probar sus capacidades en una ruta cronometrada.',
        imagen: Ruta25,
        color: 'bosque',
        stravaUrl: 'https://strava.app.link/0bALoP6L47b',
        gpxUrl: '/gpx/RetoZ25KM.gpx',
    },
    {
        id: '40km',
        distancia: '40 KM',
        nombre: 'Ruta Avanzados',
        dificultad: 'Alta',
        desnivel: '1098 m',
        terreno: 'Sendero técnico y descenso',
        descripcion: 'Senderos técnicos y descensos pronunciados Sube hasta la cima del Cerro Z y pon a prueba tu resistencia durante el recorrido. Las secciones técnicas y los descensos pronunciados te pedirán leer el terreno, elegir tu línea y mantener el control. Administra tus fuerzas: el desafío está en cómo respondes a cada tramo hasta llegar a la meta, con vistas a la Laguna de Zumpango como parte del camino.',
        imagen: Ruta40,
        color: 'laguna',
        stravaUrl: 'https://strava.app.link/u0stzp3L47b',
        gpxUrl: '/gpx/RetoZ40KM.gpx',
    }
]