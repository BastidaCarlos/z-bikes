# Z-Bike's - Backend

Página web oficial de Z-Bike's - Reto Z 2026

API para la gestión del evento Reto Z, administración de resultados, autenticación de administradores y gestión de los miembros del equipo (staff) con almacenamiento de imágenes en la nube (cloudinary).

---

## Stack Tecnológico MERN

- **Entorno de ejecución** Node.js con ES Modules
- **Framework** Express.js
- **Base de Datos** MongoDB en conjunto con Mongoose
- **Autenticación & Seguridad** JSON Web Tokens JWT & Bcrypt
- **Gestión de Archivos e Imágenes** Multer y Cloudinary
- **Procesamiento de Datos** CSV Parser

---

## Configuración Local

**Clonar Repositorio:**

```bash
git clone https://github.com/BastidaCarlos/z-bikes.git
cd server/
```

1. Instalar dependencias:
   npm install
2. Variables de entorno
   Crea un archivo .env en la raíz del proyecto tomando como referencia la plantilla .env.example y asegurate de que se encuentra dentro del archivo .gitignore
   Configura las siguientes variables dentro de tu .env

   PORT=5000
   MONGO_URI=mongodb+srv://<usuario>:<password>@cluster.mongodb.net/<dbname>
   JWT_SECRET=tu_secreto_jwt_super_seguro
   FRONTEND_URL=http://localhost:5173

   # Configuración de Cloudinary

   CLOUDINARY_CLOUD_NAME=tu_cloud_name
   CLOUDINARY_API_KEY=tu_api_key
   CLOUDINARY_API_SECRET=tu_api_secret

3. Inicia el servidor con recarga automática

   npm run dev

   El servidor estará funcionando en http://localhost:5000 o el puerto
   configurado

---

## Endpoints de la API

Públicos

| Método | URL             | Descripción                                        |
| ------ | --------------- | -------------------------------------------------- |
| GET    | /api/healt      | Verifica que el servidor esté en línea             |
| POST   | /api/auth/login | Autentica al administrador y devuelve un token JWT |
| GET    | /api/results    | Obtiene la lista de resultados de la competencia   |
| GET    | /api/staff      | Consulta los miembros del staff activos            |

Protegidos (Requieren Header)

| Método | URL                  | Descripción                                                      |
| ------ | -------------------- | ---------------------------------------------------------------- |
| GET    | /api/admin/resumen   | Obtiene las métricas globales para el dashboard administrativo   |
| POST   | /api/admin/staff     | Registra un nuevo miembro del Staff, con imagen                  |
| PATCH  | /api/admin/staff/:id | Actualiza un miembro del Staff                                   |
| DELETE | /api/admin/staff/:id | Elimina un miembro del Staff con soft delete { isActive: false } |

---

### Pasos para subirlo a GitHub

```bash
# 1. Crear el archivo .env.example si no lo has creado
touch .env.example

# 2. Agregar cambios
git add .

# 3. Confirmar commit
git commit -m "Finalizando la estructura del backend"

# 4. Subir a GitHub
git push origin main
```
