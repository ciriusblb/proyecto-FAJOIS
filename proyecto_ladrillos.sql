-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-06-2017 a las 21:43:34
-- Versión del servidor: 10.1.16-MariaDB
-- Versión de PHP: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto_ladrillos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cabeza`
--

CREATE TABLE `cabeza` (
  `id_cabeza` int(11) NOT NULL,
  `cabeza_ladrillos` int(11) NOT NULL,
  `cabeza_cemento` float NOT NULL,
  `cabeza_arena` float NOT NULL,
  `cabeza_agua` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cabeza`
--

INSERT INTO `cabeza` (`id_cabeza`, `cabeza_ladrillos`, `cabeza_cemento`, `cabeza_arena`, `cabeza_agua`) VALUES
(2, 624, 0.1267, 0.0179, 0.0043),
(7, 461, 3.7048, 0.5245, 0.126),
(8, 30, 0.5536, 0.0784, 0.0188),
(9, 85, 0.1933, 0.0274, 0.0066),
(10, 638, 1.3259, 0.1877, 0.0451);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `canto`
--

CREATE TABLE `canto` (
  `id_canto` int(11) NOT NULL,
  `canto_ladrillos` int(11) NOT NULL,
  `canto_cemento` float NOT NULL,
  `canto_arena` float NOT NULL,
  `canto_agua` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `canto`
--

INSERT INTO `canto` (`id_canto`, `canto_ladrillos`, `canto_cemento`, `canto_arena`, `canto_agua`) VALUES
(2, 931, 0.1904, 0.027, 0.0065),
(7, 45, 0.1541, 0.0218, 0.0052),
(8, 16, 0.222, 0.0314, 0.0075),
(9, 486, 1.1158, 0.158, 0.0379),
(10, 102, 0.083, 0.0118, 0.0028);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos`
--

CREATE TABLE `datos` (
  `id_nombre` int(11) NOT NULL,
  `id_usuario` varchar(40) NOT NULL,
  `nombre_datos` varchar(50) NOT NULL,
  `longitud` float NOT NULL,
  `ancho` float NOT NULL,
  `altura` float NOT NULL,
  `espesor_horizontal` float NOT NULL,
  `espesor_vertical` float NOT NULL,
  `desperdicio` float NOT NULL,
  `v_desperdicio` float NOT NULL,
  `mezcla` int(11) NOT NULL,
  `cemento` int(11) NOT NULL,
  `arena` int(11) NOT NULL,
  `agua` int(11) NOT NULL,
  `peso_arena` int(11) NOT NULL,
  `aire` int(11) NOT NULL,
  `agua_cemento` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `datos`
--

INSERT INTO `datos` (`id_nombre`, `id_usuario`, `nombre_datos`, `longitud`, `ancho`, `altura`, `espesor_horizontal`, `espesor_vertical`, `desperdicio`, `v_desperdicio`, `mezcla`, `cemento`, `arena`, `agua`, `peso_arena`, `aire`, `agua_cemento`) VALUES
(2, 'denisr16@hotmail.com', 'proyecto0denis', 2.3, 1.4, 3.45, 2.32, 1, 3.2, 3.2, 5, 3150, 2700, 1000, 1600, 1, 0.8),
(7, 'denisr16@hotmail.com', 'veremos', 56, 2, 3.2, 2.3, 2, 3, 23, 5, 3150, 2700, 1000, 1600, 1, 0.8),
(8, 'denisr16@hotmail.com', 'denis', 40, 15, 20, 1.5, 1.5, 5, 19, 5, 3150, 2700, 1000, 1600, 1, 0.8),
(9, 'denisr16@hotmail.com', 'gdfg', 4, 2, 23, 3, 1, 2, 4, 5, 3150, 2700, 1000, 1600, 1, 0.8),
(10, 'ciriusblb@hotmail.com', 'hola', 23, 2, 2, 2, 2, 2, 2, 5, 3150, 2700, 1000, 1600, 1, 0.8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `soga`
--

CREATE TABLE `soga` (
  `id_soga` int(11) NOT NULL,
  `soga_ladrillos` int(11) NOT NULL,
  `soga_cemento` float NOT NULL,
  `soga_arena` float NOT NULL,
  `soga_agua` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `soga`
--

INSERT INTO `soga` (`id_soga`, `soga_ladrillos`, `soga_cemento`, `soga_arena`, `soga_agua`) VALUES
(2, 502, 0.0669, 0.0095, 0.0023),
(7, 34, 0.0758, 0.0107, 0.0026),
(8, 12, 0.1391, 0.0197, 0.0047),
(9, 61, 0.0709, 0.01, 0.0024),
(10, 102, 0.083, 0.0118, 0.0028);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `correo` varchar(40) NOT NULL,
  `contrasena` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellido`, `correo`, `contrasena`) VALUES
(3, '', '', '', 'd41d8cd98f00b204e9800998ecf8427e'),
(5, 'ciro', 'efwegwdvsdv', 'ciriusblb@hotmail.com', 'e10adc3949ba59abbe56e057f20f883e'),
(2, 'Ciro', 'yupanqui Pumachapi', 'ciro30@hotmail.com', 'e10adc3949ba59abbe56e057f20f883e'),
(1, 'Denis Ricardo', 'Vilcas Villalba', 'denisr16@hotmail.com', '7b6581ee30595c57d61332654cf30b0b'),
(4, 'hola', 'veremos', 'sdsfds@dsfs.gmail', '0052069db1a0017f6a27f27e6dcbb919');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `datos`
--
ALTER TABLE `datos`
  ADD PRIMARY KEY (`id_nombre`),
  ADD UNIQUE KEY `id_nombre` (`id_nombre`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`correo`),
  ADD UNIQUE KEY `correo` (`correo`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `datos`
--
ALTER TABLE `datos`
  MODIFY `id_nombre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
