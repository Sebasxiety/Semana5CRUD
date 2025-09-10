# Guía de Pruebas de la API Backend

Este documento proporciona los pasos necesarios para configurar, ejecutar y probar la API backend.

## 1. Requisitos Previos

Asegúrate de tener instalado lo siguiente:
*   **SQL Server:** Una instancia de SQL Server (local o remota).
*   **SDK de .NET:** Versión 9.0 o superior.
*   **Herramientas de Entity Framework Core:** Instaladas globalmente o localmente (`dotnet tool install dotnet-ef`).

## 2. Configuración Inicial

### 2.1. Archivo de Variables de Entorno (`.env`)

Crea un archivo llamado `.env` en el directorio raíz del proyecto `backend` (ej. `backend/.env`) con el siguiente contenido. Asegúrate de reemplazar `your_super_secret_key_here_that_is_long_enough_for_security` con una clave secreta fuerte y única para la firma de tokens JWT.

```
DB_HOST=localhost
DB_NAME=MyDatabase
DB_USER=sa
DB_PASSWORD=123456
JWT_SECRET=your_super_secret_key_here_that_is_long_enough_for_security
JWT_ISSUER=https://localhost:7000
JWT_AUDIENCE=https://localhost:7000
```

**Nota:** Ajusta `DB_HOST`, `DB_NAME`, `DB_USER` y `DB_PASSWORD` según la configuración de tu instancia de SQL Server.

### 2.2. Migraciones de Base de Datos

Navega al directorio `backend` en tu terminal y ejecuta los siguientes comandos para crear y aplicar las migraciones de la base de datos:

```bash
cd backend
dotnet ef database update
```

Este comando creará la base de datos (`MyDatabase`) y las tablas (`Clientes`, `Usuarios`) si no existen, y aplicará cualquier cambio de esquema pendiente.

## 3. Ejecución de la API

Desde el directorio `backend`, ejecuta la API con el siguiente comando:

```bash
cd backend
dotnet run
```

La API se iniciará y estará disponible, por defecto, en `https://localhost:7000` (o un puerto similar).

## 4. Pruebas de la API

Puedes utilizar herramientas como Postman, Insomnia o `curl` para probar los endpoints de la API.

### 4.1. Inicio de Sesión (Login)

Para obtener un token de autenticación, realiza una solicitud `POST` al endpoint de login.

*   **URL:** `https://localhost:7000/api/Auth/login` (ajusta el puerto si es diferente)
*   **Método:** `POST`
*   **Body (JSON):**
    ```json
    {
        "username": "admin",
        "password": "admin123"
    }
    ```
*   **Credenciales Iniciales:** El usuario inicial creado automáticamente al iniciar la aplicación es `admin` con la contraseña `admin123`.
*   **Respuesta Esperada:** Un objeto JSON que contiene el token JWT.

```json
{
    "token": "eyJhbGciOiJIUzI1Ni..."
}
```

### 4.2. Acceso a Rutas Protegidas

Una vez que hayas obtenido un token JWT, puedes usarlo para acceder a los endpoints protegidos.

*   **URL:** `https://localhost:7000/Cliente` (ajusta el puerto si es diferente)
*   **Método:** `GET`
*   **Headers:**
    *   `Authorization: Bearer <TU_TOKEN_JWT>` (Reemplaza `<TU_TOKEN_JWT>` con el token obtenido en el paso de login).
*   **Respuesta Esperada:** Una lista de clientes si la autenticación es exitosa, o un error `401 Unauthorized` si el token es inválido o está ausente.

---
