# Guía Básica para Trabajar con GitHub y React

## GitHub: Comandos Básicos

### 1. Clonar el repositorio
Si es la primera vez que trabajas con este repositorio, clónalo usando:
```bash
 git clone <URL_DEL_REPOSITORIO>
```

### 2. Configurar la rama de trabajo
Vamos a trabajar en la rama `dev`. Una vez clonado el repositorio, entra en la carpeta y cambia a la rama correcta:
```bash
 cd <NOMBRE_DEL_PROYECTO>
 git checkout dev
```
Si la rama `dev` no existe localmente, descárgala:
```bash
 git fetch origin
git checkout -b dev origin/dev
```

### 3. Actualizar el código antes de trabajar
Antes de hacer cambios, asegúrate de tener la última versión:
```bash
 git pull origin dev
```

### 4. Subir cambios
Antes de hacer cualquier cambio, avísame para coordinar. Una vez que termines:
```bash
 git add .  # Agrega todos los archivos modificados
 git commit -m "Descripción breve del cambio"
 git push origin dev
```

### 5. Crear una nueva rama (si es necesario)
Si necesitas trabajar en una nueva funcionalidad o corrección:
```bash
 git checkout -b feature/nueva-funcionalidad
```
Luego, sube los cambios a GitHub:
```bash
 git push origin feature/nueva-funcionalidad
```

## Restaurar Cambios

### 1. Revertir a un commit anterior (sin perder cambios locales)
```bash
 git revert <ID_DEL_COMMIT>
```

### 2. Resetear a un commit anterior (perdiendo cambios)
```bash
 git reset --hard <ID_DEL_COMMIT>
```

### 3. Deshacer cambios en archivos específicos
Si hiciste cambios en un archivo y quieres descartarlos:
```bash
 git checkout -- <NOMBRE_DEL_ARCHIVO>
```

## React: Configuración y Ejecución

### 1. Instalar dependencias
Antes de correr el proyecto, instala las dependencias necesarias:
```bash
 npm install
```

### 2. Iniciar el servidor de desarrollo
Para correr la aplicación en local:
```bash
 npm start
```
Esto iniciará un servidor en `http://localhost:3000/` donde podrás ver la aplicación en tiempo real.

---
Si tienes dudas o necesitas ayuda, avísame antes de hacer cambios importantes.

