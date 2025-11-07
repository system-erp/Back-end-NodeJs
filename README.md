# 🧠 ERP Backend — Node.js + PostgreSQL + Docker

Backend base desarrollado en **Node.js** con **Express** y **PostgreSQL**, configurado para ejecutarse completamente dentro de **contenedores Docker**.  
Este proyecto establece la infraestructura inicial para un ERP modular, con conexión funcional a la base de datos y entorno listo para extender con modelos, rutas y controladores.

---

## 🚀 Tecnologías

- **Node.js** — entorno de ejecución del servidor.  
- **Express** — framework para manejo de rutas y peticiones HTTP.  
- **PostgreSQL** — base de datos relacional.  
- **Docker** y **Docker Compose** — orquestación y despliegue de servicios.

---

## ⚙️ Requisitos previos

Antes de comenzar, asegúrate de tener instalados:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

---

## 🧩 Instalación y ejecución con Docker


1️⃣ **Clona el repositorio**
```bash
git clone https://github.com/system-erp/Back-end-NodeJs.git
cd erp-backend


2️⃣ **Construye y levanta los contenedores**
```bash
docker-compose up --build
```
Esto descargará las imágenes necesarias, construirá los contenedores y levantará los servicios definidos en `docker-compose.yml`.


3️⃣ **Verifica que los servicios estén corriendo**
```bash
docker-compose ps
```
Deberías ver los contenedores de la aplicación y la base de datos en estado "Up".
Para acceder a la aplicación, abre tu navegador y dirígete a `http://localhost:3000`.


Para detener los servicios:
```bash
docker-compose down
```

---
