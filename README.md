# 🚀 Aeromexico Test - Rick & Morty App

Aplicación web desarrollada con **Next.js + TypeScript** que consume la API de Rick & Morty, permitiendo visualizar personajes y gestionar favoritos usando JSON Server.

---

## 📌 Descripción

Esta aplicación permite explorar personajes de la serie _Rick & Morty_ a través de una interfaz interactiva y responsive.

### Funcionalidades principales:

- Visualización de personajes en formato grid
- Selección de personaje con panel de detalle dinámico
- Gestión de favoritos mediante estado global
- Persistencia de datos con JSON Server
- Diseño adaptable a dispositivos móviles

---

## 🛠️ Tecnologías utilizadas

- ⚛️ **Next.js**
- 📘 **TypeScript**
- 🎨 **CSS Modules + Global CSS**
- 🌐 **Fetch API**
- 🗄️ **JSON Server** (mock backend)
- 📦 **Node.js**
- 🧠 **Redux + Redux Saga** (manejo de estado global y efectos)

---

## 📡 API utilizada

Se utilizó la API pública de Rick & Morty:

🔗 https://rickandmortyapi.com/  
🔗 https://rickandmortyapi.com/api/character

---

## 🧠 Arquitectura del proyecto

El proyecto sigue una estructura modular y escalable basada en separación de responsabilidades:

![Arquitectura](https://i.ibb.co/pjckSwPb/Captura-de-pantalla-2026-03-31-095732.png)

---

## ⚙️ Instalación

### 1. Clonar repositorio

1.1 git clone https://github.com/Ian-Marcel-Castrejon-Cuevas/aeromexico-test

1.2 cd aeromexico-test

### 2. Instalar dependencias

2.1 npm install

### 3. Ejecutar proyecto

3.1 npm run dev

### 4. Ejecutar json-server

4.1 npx json-server --watch db.json --port 3001

### 5. App Disponible

App: http://localhost:3000
API local: http://localhost:3001

---

## 🧪 Pruebas unitarias

⚠️ Nota: Actualmente el proyecto no incluye pruebas automatizadas completas

Sugerencias de pruebas a implementar:

- Renderizado de componentes (CharacterCard)
- Funcionalidad de favoritos (Redux)
- Llamadas a API (mockeadas)
- Hooks personalizados

---

## ⭐ Funcionalidades

🔹 Listado de personajes

- Consumo de API externa
- Renderizado en grid
- Manejo de estado de carga

🔹 Detalle de personaje

Al seleccionar una tarjeta se muestra:

- Nombre
- Especie
- Tipo
- Origen
- Ubicación
- Género
- Número de episodios

🔹 Estado del personaje

- Alive → 🟢 VIVO
- Dead → 🔴 MUERTO

🔹Sistema de favoritos (Redux)

- Manejo mediante estado global con Redux
- Acciones centralizadas (agregar/eliminar)
- Control de duplicados desde el store
- Persistencia usando Redux Saga + JSON Server
- Sincronización automática entre UI y backend

🔹 UI / UX

- Basado en diseño Figma
- Panel dividido (detalle + listado)
- Scroll con flechas personalizadas
- Barra de búsqueda estilizada
- Indicadores visuales (hover, selección, favoritos)

🔹 Responsive

- Adaptado a dispositivos móviles
- Reorganización de layout
- Stats en formato de 2 columnas
- Ajuste de tamaños dinámicos

---

## 🎯 Decisiones técnicas

- Uso de Redux para centralizar la lógica de favoritos
- Implementación de Redux Saga para manejar efectos secundarios (peticiones HTTP)
- Separación clara por capas: components, hooks, services y store
- Uso de hooks personalizados para lógica reutilizable
- Tipado fuerte con TypeScript para mayor robustez

---

## 🐞 Problemas resueltos

- ❌ Error de map undefined → manejo correcto de respuesta API
- ❌ Hydration mismatch → control de renderizado
- ❌ Duplicados en favoritos → validación previa
- ❌ Click en botón afectaba card → stopPropagation
- ❌ Layout roto en mobile → media queries

---

## 💡 ¿Qué es lo que más te gustó de TU desarrollo?

Uno de los aspectos más interesantes fue la implementación de la interfaz visual, especialmente el uso de estilos modernos como glassmorphism y efectos de selección en las tarjetas. También disfruté estructurar la aplicación de manera clara y escalable utilizando buenas prácticas con React y TypeScript.

---

## 🚧 ¿Qué mejoraría con más tiempo?

- Implementar animaciones más avanzadas (por ejemplo, con Framer Motion)
- Mejorar la accesibilidad (ARIA labels, navegación con teclado)
- Agregar pruebas unitarias completas
- Optimizar performance (memoización, lazy loading)
- Persistencia de favoritos en backend real
