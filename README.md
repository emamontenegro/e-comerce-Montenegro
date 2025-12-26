# NeonByte - PC Hardware Store 

**NeonByte** es un e-commerce de alto rendimiento desarrollado con **React + Vite** para la comercialización de componentes de hardware. El proyecto utiliza **Firebase Firestore** como base de datos dinámica y un sistema de gestión de estado global para el carrito de compras.

## Funcionalidades

- **Catálogo de Productos:** Navegación dinámica de componentes (GPUs, CPUs, RAMs, etc.) consumidos desde Firestore.
- **Filtrado Avanzado:** Segmentación por categorías y marcas (NVIDIA, AMD, Intel).
- **Gestión de Carrito:**
    - Implementación de **Context API** (`AuthContext`) para persistencia y estado global.
    - Cálculo automático de totales y cantidades.
    - Proceso de finalización de compra con reporte detallado.
- **Panel Administrativo:** Interfaz para la carga y gestión de stock en la base de datos.
- **Diseño Custom:** Estilado 100% con **CSS Puro**, priorizando la identidad visual de la marca y la velocidad de carga.

## Tecnologías

- **Bundler:** [Vite](https://vitejs.dev/) (Rendimiento optimizado con HMR).
- **Frontend:** React JS.
- **BaaS:** Firebase (Cloud Firestore).
- **Rutas:** React Router DOM.
- **Estado:** Context API.

## Estructura del Proyecto

Organización basada en las mejores prácticas de modularización:

- `src/components`: Componentes de UI (`common`) y estructura general (`layout`).
- `src/pages`: Vistas de la aplicación (`Home`, `Shop`, `Cart`, `Admin`, etc.).
- `src/hooks`: Lógica reutilizable (`useProducts`, `useProductCounter`).
- `src/services`: Capa de datos y conexión con Firebase.
- `src/context`: Proveedores de estado global.
- `src/utils`: Configuraciones técnicas y constantes.

## Instalación y Uso

1. Clona este repositorio:
   ```bash
   git clone [https://github.com/emamontenegro/e-comerce-Montenegro.git](https://github.com/emamontenegro/e-comerce-Montenegro.git)