# ITLAcademy Web

Plataforma web de ITLAcademy - Formación continua en tecnologías emergentes.

## Descripción

Sitio web completo para ITLAcademy, plataforma de educación continua del Instituto Tecnológico de Las Américas (ITLA). Desarrollado con React, ofrece información sobre programas, modalidades de estudio, inscripción y contacto.

## Características

- ✨ Diseño moderno y responsive
- 🎨 Interfaz intuitiva y profesional
- 📱 Compatible con dispositivos móviles
- 🚀 Navegación fluida entre secciones
- 📝 Formularios de inscripción y contacto
- 🎯 Información completa sobre programas y servicios

## Tecnologías

- React 18.2.0 con TypeScript
- React Router DOM 6.20.0
- TypeScript 5.0+
- CSS3 con diseño responsive
- Estructura organizada con carpetas separadas para estilos

## Instalación

1. Instala las dependencias:

```bash
npm install
```

2. Inicia el servidor de desarrollo:

```bash
npm start
```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del Proyecto

```
src/
  ├── components/     # Componentes reutilizables (Header, Footer)
  ├── pages/         # Páginas principales (Home, Programas, Nosotros, etc.)
  ├── App.js         # Componente principal con routing
  └── index.js       # Punto de entrada
```

## Páginas

- **Inicio**: Página principal con información general
- **Programas**: Catálogo completo de programas disponibles
- **Nosotros**: Información sobre ITLAcademy, misión, visión y valores
- **Inscripción**: Formulario de inscripción a programas
- **Contacto**: Información de contacto y formulario de consulta

## Scripts Disponibles

- `npm start`: Inicia el servidor de desarrollo
- `npm build`: Crea la versión de producción
- `npm test`: Ejecuta las pruebas

## Licencia

© 2024 ITLAcademy. Todos los derechos reservados.

-- ============================================================
-- CREAR BASE DE DATOS
-- ============================================================
CREATE DATABASE IF NOT EXISTS itlacademy_inscripciones
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE itlacademy_inscripciones;

-- ============================================================
-- TABLA: programas
-- (Para llenar el select dinámicamente desde backend o mantener catálogo)
-- ============================================================
CREATE TABLE programas (
id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(150) NOT NULL,
descripcion TEXT NULL,
activo TINYINT(1) DEFAULT 1,
creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- TABLA: modalidades
-- ============================================================
CREATE TABLE modalidades (
id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
activo TINYINT(1) DEFAULT 1,
creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- TABLA PRINCIPAL: solicitudes
-- Aquí se guardarán los envíos del formulario
-- ============================================================
CREATE TABLE solicitudes (
id INT AUTO_INCREMENT PRIMARY KEY,

    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    telefono VARCHAR(30) NOT NULL,

    programa_id INT NOT NULL,
    modalidad_id INT NOT NULL,

    empresa VARCHAR(200) NULL,
    comentarios TEXT NULL,

    estado ENUM("pendiente","procesado","rechazado")
        DEFAULT "pendiente",

    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    actualizado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    -- Llaves foráneas
    CONSTRAINT fk_programa FOREIGN KEY (programa_id) REFERENCES programas(id),
    CONSTRAINT fk_modalidad FOREIGN KEY (modalidad_id) REFERENCES modalidades(id)

);

-- ============================================================
-- ÍNDICES (para mejorar rendimiento al buscar)
-- ============================================================
CREATE INDEX idx_email ON solicitudes(email);
CREATE INDEX idx_telefono ON solicitudes(telefono);
CREATE INDEX idx_programa ON solicitudes(programa_id);
CREATE INDEX idx_modalidad ON solicitudes(modalidad_id);

-- ============================================================
-- INSERTAR DATOS INICIALES (Opcional)
-- ============================================================
INSERT INTO programas (nombre) VALUES
("Desarrollo Web FullStack"),
("Ciberseguridad"),
("Diseño Gráfico"),
("Inteligencia Artificial"),
("Marketing Digital");

INSERT INTO modalidades (nombre) VALUES
("Presencial"),
("Virtual"),
("Híbrida");
