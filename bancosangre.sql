-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-05-2023 a las 07:07:05
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bancosangre`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `donantes`
--

CREATE TABLE `donantes` (
  `nombre_don` varchar(20) NOT NULL,
  `apellido_don` varchar(20) NOT NULL,
  `tipoDoc_don` varchar(20) NOT NULL,
  `nroDoc_don` bigint(11) NOT NULL,
  `genero_don` varchar(15) NOT NULL,
  `tel_don` bigint(11) NOT NULL,
  `edad_don` int(2) NOT NULL,
  `gs_don` varchar(2) NOT NULL,
  `rh_don` varchar(1) NOT NULL,
  `eps_don` varchar(30) NOT NULL,
  `cantDon_don` int(1) NOT NULL,
  `fechaDon_don` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `donantes`
--

INSERT INTO `donantes` (`nombre_don`, `apellido_don`, `tipoDoc_don`, `nroDoc_don`, `genero_don`, `tel_don`, `edad_don`, `gs_don`, `rh_don`, `eps_don`, `cantDon_don`, `fechaDon_don`) VALUES
('dfadsfd', 'gdfsgadf', 'Cedula Ciudadania', 4352532, 'Femenino', 5435, 12, 'B', '', 'Emssanar EPS', 2, '2023-05-01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eps`
--

CREATE TABLE `eps` (
  `id_eps` int(2) NOT NULL,
  `desc_eps` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eps`
--

INSERT INTO `eps` (`id_eps`, `desc_eps`) VALUES
(1, 'Nueva EPS'),
(2, 'Coomeva EPS'),
(3, 'Sanitas EPS'),
(4, 'Salud Total EPS'),
(5, 'EPS SURA'),
(6, 'SOS EPS'),
(7, 'Comfamiliar EPS'),
(8, 'Cruz Blanca EPS'),
(9, 'Comparta EPS'),
(10, 'Asmet Salud EPS'),
(11, 'Emssanar EPS'),
(12, 'Savia Salud EPS'),
(13, 'Cajacopi EPS'),
(14, 'Capresoca EPS'),
(15, 'Caprecom EPS'),
(16, 'Comfenalco Valle EPS'),
(17, 'Comfenalco Antioquia EPS'),
(18, 'Compensar EPS'),
(19, 'Ecoopsos EPS'),
(20, 'Emdisalud EPS'),
(21, 'Famisanar EPS'),
(22, 'Fondo Adaptación EPS'),
(23, 'Medimás EPS'),
(24, 'Mutual Ser EPS'),
(25, 'Policía Nacional EPS'),
(26, 'Red Salud EPS'),
(27, 'Saludcoop EPS'),
(28, 'Servicio Occidental de Salud -'),
(29, 'Solsalud EPS'),
(30, 'Sura EPS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generos`
--

CREATE TABLE `generos` (
  `id_genero` int(1) NOT NULL,
  `desc_genero` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `generos`
--

INSERT INTO `generos` (`id_genero`, `desc_genero`) VALUES
(1, 'Masculino'),
(2, 'Femenino');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gs`
--

CREATE TABLE `gs` (
  `id_gs` int(1) NOT NULL,
  `desc_gs` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `gs`
--

INSERT INTO `gs` (`id_gs`, `desc_gs`) VALUES
(1, 'A'),
(2, 'B'),
(3, 'AB'),
(4, 'O');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `nombre_pac` varchar(20) NOT NULL,
  `apellido_pac` varchar(20) NOT NULL,
  `tipoDoc_pac` varchar(20) NOT NULL,
  `nroDoc_pac` bigint(11) NOT NULL,
  `genero_pac` varchar(15) NOT NULL,
  `tel_pac` bigint(11) NOT NULL,
  `edad_pac` int(2) NOT NULL,
  `gs_pac` varchar(2) NOT NULL,
  `rh_pac` varchar(1) NOT NULL,
  `eps_pac` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`nombre_pac`, `apellido_pac`, `tipoDoc_pac`, `nroDoc_pac`, `genero_pac`, `tel_pac`, `edad_pac`, `gs_pac`, `rh_pac`, `eps_pac`) VALUES
('gfdgasdds', 'erwfsdfsd', 'Pasaporte', 432423, '', 423432, 54, 'B', '-', 'Savia Salud EPS'),
('John', 'Doe', 'Cedula', 1000000000, 'Masculino', 1000000123, 32, 'A', '-', 'Sanitas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rhs`
--

CREATE TABLE `rhs` (
  `id_rh` int(1) NOT NULL,
  `desc_rh` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rhs`
--

INSERT INTO `rhs` (`id_rh`, `desc_rh`) VALUES
(1, '+'),
(2, '-');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipodocs`
--

CREATE TABLE `tipodocs` (
  `id_tipoDoc` int(1) NOT NULL,
  `desc_tipoDoc` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipodocs`
--

INSERT INTO `tipodocs` (`id_tipoDoc`, `desc_tipoDoc`) VALUES
(1, 'Tarjeta de Identidad'),
(2, 'Cedula Ciudadania'),
(3, 'Pasaporte'),
(4, 'Cedula Extranjeria');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `donantes`
--
ALTER TABLE `donantes`
  ADD PRIMARY KEY (`nroDoc_don`);

--
-- Indices de la tabla `eps`
--
ALTER TABLE `eps`
  ADD PRIMARY KEY (`id_eps`);

--
-- Indices de la tabla `generos`
--
ALTER TABLE `generos`
  ADD PRIMARY KEY (`id_genero`);

--
-- Indices de la tabla `gs`
--
ALTER TABLE `gs`
  ADD PRIMARY KEY (`id_gs`);

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`nroDoc_pac`);

--
-- Indices de la tabla `rhs`
--
ALTER TABLE `rhs`
  ADD PRIMARY KEY (`id_rh`);

--
-- Indices de la tabla `tipodocs`
--
ALTER TABLE `tipodocs`
  ADD PRIMARY KEY (`id_tipoDoc`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `eps`
--
ALTER TABLE `eps`
  MODIFY `id_eps` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `generos`
--
ALTER TABLE `generos`
  MODIFY `id_genero` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `gs`
--
ALTER TABLE `gs`
  MODIFY `id_gs` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `rhs`
--
ALTER TABLE `rhs`
  MODIFY `id_rh` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tipodocs`
--
ALTER TABLE `tipodocs`
  MODIFY `id_tipoDoc` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
