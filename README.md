# Guía para Ejecutar la API Backend

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


## 5. Postman
<img width="886" height="421" alt="image" src="https://github.com/user-attachments/assets/7b5c2ecc-e111-4cc7-bd2d-659aeabed122" />
**Sin Token:**
<img width="886" height="362" alt="image" src="https://github.com/user-attachments/assets/5f7f7583-7eb3-45c5-8dae-c99b9ae8a2cf" />

**Con Token:**
<img width="886" height="349" alt="image" src="https://github.com/user-attachments/assets/bad86113-3a42-467a-b86e-0cee83505b8d" />


---


# AngularProject1

Este documento describe los pasos mínimos y claros para ejecutar el proyecto Angular.

## Prerrequisitos
- Node.js (v14 o superior) instalado en el sistema: https://nodejs.org/
- Angular CLI instalado globalmente:
	```bash
	npm install -g @angular/cli
	```

## Instalación de dependencias
1. Abrir una terminal y posicionarse en el directorio del proyecto:
	 ```bash
	 cd AngularProject1
	 ```
2. Instalar las dependencias con npm:
	 ```bash
	 npm install
	 ```

## Ejecución en modo desarrollo (Por defecto)
Iniciar el servidor de desarrollo y observar cambios en caliente:
```bash
ng serve
```
Luego abrir en el navegador:
```
http://localhost:4200
```

## Compilar para producción
Generar los archivos optimizados en la carpeta `dist/`:
```bash
ng build --configuration production
```

## Ventanas
<img width="886" height="412" alt="image" src="https://github.com/user-attachments/assets/498aab11-f188-4273-8323-663a3c8941ed" />
<img width="886" height="417" alt="image" src="https://github.com/user-attachments/assets/4311ca11-7a6b-4adc-b6d1-5bef014650af" />
<img width="886" height="411" alt="image" src="https://github.com/user-attachments/assets/381b1f07-0d23-40b2-b296-189eb20bad26" />
<img width="886" height="415" alt="image" src="https://github.com/user-attachments/assets/0d701e39-83f3-4db2-adbd-6b995df664b3" />
<img width="886" height="412" alt="image" src="https://github.com/user-attachments/assets/91b61e2d-b2c2-410e-81b4-63b1922bc220" />





