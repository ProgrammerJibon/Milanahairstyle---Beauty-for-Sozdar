-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 21, 2022 at 12:18 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_38`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id` int(255) NOT NULL,
  `book_email` varchar(255) NOT NULL,
  `book_phone` varchar(255) NOT NULL,
  `book_name` varchar(255) NOT NULL,
  `book_time` varchar(255) NOT NULL,
  `book_date` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `ip` varchar(255) NOT NULL,
  `user-agent` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `info`
--

CREATE TABLE `info` (
  `id` int(255) NOT NULL,
  `name` varchar(1024) NOT NULL,
  `value` longtext NOT NULL,
  `time` int(255) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `info`
--

INSERT INTO `info` (`id`, `name`, `value`, `time`) VALUES
(1, 'logo', 'uploads/2022/Apr/image-1650488829-978676149.png', 0),
(2, 'title', 'Milanahairstyle & Beauty', 0),
(3, 'top_banner_men', 'cdn/1594922460-image.jpg', 0),
(4, 'facebook', 'https://www.facebook.com//', 0),
(5, 'twitter', 'https://twitter.com/', 0),
(6, 'instagram', 'https://www.instagram.com/', 0),
(8, 'youtube', 'https://www.youtube.com/', 0),
(11, 'email', 'info@milanahairstyle.de', 0),
(15, 'phone', '+49020145880699', 0),
(16, 'address', 'Vereinstraße:18,45127 Essen', 0),
(17, 'password', '2853d3544f105dd7b0bc4376e4f55c14', 0),
(18, 'hours', 'Monday to Saturday: 09:00 - 20:00\r\nSunday: Closed', 0),
(19, 'top_banner_women', 'cdn/2090262.jpg', 0),
(20, 'beside_prices', 'cdn/image-2-2.png', 0),
(21, 'intro', 'uploads/2022/Apr/video-1650489247-858631205.mp4', 0);

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE `photos` (
  `id` int(255) NOT NULL,
  `title` varchar(1024) NOT NULL DEFAULT 'N/A',
  `took_date` varchar(1024) NOT NULL,
  `pic` longtext NOT NULL,
  `time` int(255) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `photos`
--

INSERT INTO `photos` (`id`, `title`, `took_date`, `pic`, `time`) VALUES
(1, 'N/A', '2011-7-10', '/cdn/0.jpg', 0),
(2, 'N/A', '2011-7-10', '/cdn/1.jpg', 0),
(3, 'N/A', '2011-7-10', '/cdn/2.jpg', 0),
(4, 'N/A', '2011-7-10', '/cdn/3.jpg', 0),
(5, 'N/A', '2011-7-10', '/cdn/4.jpg', 0),
(6, 'N/A', '2011-7-10', '/cdn/5.jpg', 0),
(7, 'N/A', '2011-7-10', '/cdn/6.jpg', 0),
(8, 'N/A', '2011-7-10', '/cdn/7.jpg', 0),
(9, 'N/A', '2011-7-10', '/cdn/8.jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `prices_list`
--

CREATE TABLE `prices_list` (
  `id` int(11) NOT NULL,
  `name` varchar(1024) NOT NULL DEFAULT 'N/A',
  `price` int(255) NOT NULL DEFAULT 0,
  `gender` varchar(255) NOT NULL DEFAULT 'men',
  `time` int(255) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `prices_list`
--

INSERT INTO `prices_list` (`id`, `name`, `price`, `gender`, `time`) VALUES
(1, 'Haarschnitt mit Maschine', 12, 'men', 0),
(2, 'Bartrasur', 9, 'men', 0),
(3, 'Haar färben', 20, 'men', 0),
(4, 'Bart färben', 10, 'men', 0),
(6, 'Waschen, Schneiden, Föhnen', 30, 'women', 0),
(7, 'Waschen, Schneiden', 24, 'women', 0),
(8, 'Waschen, Föhnen', 20, 'women', 0),
(11, 'Trockenhaarschnitt', 20, 'women', 1650490843);

-- --------------------------------------------------------

--
-- Table structure for table `subscribed`
--

CREATE TABLE `subscribed` (
  `id` int(255) NOT NULL,
  `email` varchar(1024) NOT NULL,
  `ip` varchar(1024) NOT NULL,
  `time` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prices_list`
--
ALTER TABLE `prices_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscribed`
--
ALTER TABLE `subscribed`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `info`
--
ALTER TABLE `info`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `prices_list`
--
ALTER TABLE `prices_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `subscribed`
--
ALTER TABLE `subscribed`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
