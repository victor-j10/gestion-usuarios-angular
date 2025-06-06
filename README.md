# Gestión de Usuarios - Angular

Esta aplicación web desarrollada en **Angular** permite gestionar usuarios, tras loguearse, con navegación protegida y vistas dinámicas. Además, se pueden revisar los detalles de un usuario seleccionado.

## Características

- Inicio de sesión con autenticación local
- Listado de usuarios con tabla interactiva
- Vista detallada de cada usuario
- SideBar con nombre del usuario logueado, botón home y botón de logout
- Protección de rutas mediante **guards**
- Diseño moderno con **Angular Material**
- Datos simulados desde un JSON (assets/db.json)
- Ruteo con rutas hijas (/users y /users/:id)

## Tecnologías

- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- TypeScript
- SCSS
- RxJS
- Vercel

## 📦 Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

2. Instalar las dependencias:
   
```bash
npm install
```

3. Correr el servidor:
   
```bash
ng serve
```

## Despliegue

Esta aplicación se puede desplegar en vercel con fácilidad. Solo debes asegurarte de tener en la raíz del proyecto tu archivo vercel.json con el siguiente contenido:

```bash
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## Notas

- El login es simulado, por lo que se puede realizar el acceso mediante credenciales ficticias.
- La forma en la que se loguea el usuario es con el email y su password
- Los datos se cargan desde un archivo JSON local que simula un servidor ficticio

## Autor

Desarrollado por Victor Hernandez como parte de una prueba técnica.




