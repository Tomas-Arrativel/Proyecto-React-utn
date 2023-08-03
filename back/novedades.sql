-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 03-08-2023 a las 13:19:55
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cryptoweb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` varchar(250) NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'Sandy, la salvadoreña que pasó de la frustración a ser guía turístico de bitcoiners', 'Sandy creció rodeada por la extrema violencia de las pandillas y ahora cuenta cómo su vida cambia de la mano de bitcoin.', 'La historia de Sandy es reflejo de que las cosas están cambiando para la juventud en El Salvador, un segmento de la población que está encontrando nuevas oportunidades de desarrollo de la mano de bitcoin (BTC), dejando atrás un pasado de extrema violencia, muerte y miedo.\r\n\r\n“Un día descubrí que me gustaba mucho hablar con bitcoiners, luego aprendí a hablar inglés, también sobre los principios fundamentales de bitcoin y ahora miro hacia atrás y me sorprendo porque soy libre. Simplemente puedo disfrutar de la vida, de que tengo libertad para trabajar y para vivir en un estándar de BTC”, dijo Sandy durante su conversación con Mike Peterson, líder de la comunidad Bitcoin Beach de El Zonte.'),
(7, 'Prueba1', 'hhhhhhhhhhhhhhhhjjjjjjjjjjjjjjjjjjjjhhhhhhhhhhhh', 'hDDDDDDDDDDDDDDDDDDDDDDDFFFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFFFFG   GGGGFDJDFGJDFLKJGDFLGJJDFGKLDJFGLKFDJJDFGJKLFJDFJJDFGJKLDFGJKDFGJKLKJLDFGKJLDFGJKLJKGDFJKGDFJKDKFGKDFGJKDGFJKLJKDFGJKDFG'),
(8, 'prueba2', 'eadaedead', 'aedaddaed'),
(9, 'prueba03', 'kkjkk', 'eadeadaedad'),
(3, '3 empresas de criptomonedas acusan a Lazarus por hackeos millonarios', 'Alphapo, Atomic y CoinsPaid sufrieron pérdidas por aproximadamente USD 130 millones en total.', 'Luego de varios días de rumores de hackeo sin confirmación, la procesadora de pagos con criptomonedas CoinsPaid confirmó un robo de USD 37,3 millones. Tanto CoinsPaid como Alphapo —firma de su mismo rubro— y la wallet de criptomonedas Atomic apuntan al grupo de hackers norcoreano Lazarus como principal responsable.\r\n\r\nEl ataque a CoinsPaid ocurrió el 22 de julio, informa el comunicado de la empresa originaria de Estonia. En el texto, se expresa que los fondos de los usuarios están seguros, pero afirman que «el ataque afectó la disponibilidad de la plataforma» en los últimos días. De a poco, los servicios se van restableciendo uno a uno. El proceso tomará unos días, dijo su CEO, Max Krupyshev.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
