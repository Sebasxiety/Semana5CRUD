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

## Ejecución en modo desarrollo
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

## Pruebas
- Ejecutar pruebas unitarias:
	```bash
	ng test
	```
- Ejecutar pruebas end-to-end si están configuradas:
	```bash
	ng e2e
	```
