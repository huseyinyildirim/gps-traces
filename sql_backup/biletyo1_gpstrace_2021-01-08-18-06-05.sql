# ************************************************************
# Sequel Ace SQL dump
# Version 3010
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: mysql10.trwww.com (MySQL 5.5.52-cll-lve)
# Database: biletyo1_gpstrace
# Generation Time: 2021-01-08 15:06:05 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table tbl_admins
# ------------------------------------------------------------

DROP TABLE IF EXISTS `tbl_admins`;

CREATE TABLE `tbl_admins` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_by` int(11) unsigned DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `tbl_admins` WRITE;
/*!40000 ALTER TABLE `tbl_admins` DISABLE KEYS */;

INSERT INTO `tbl_admins` (`id`, `name`, `surname`, `mail`, `phone`, `password`, `created_at`, `created_by`, `updated_at`, `updated_by`)
VALUES
	(1,'Hüseyin','Yıldırım','huseyin.yildirim@buluton.com','+905320602602','123456','2021-01-07 00:34:53',NULL,'2021-01-05 22:49:20',NULL),
	(2,'Ali','Pişkin','ali.piskin@buluton.com','+905447214080','123456','2021-01-07 00:34:53',NULL,'2021-01-05 22:49:20',NULL);

/*!40000 ALTER TABLE `tbl_admins` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table tbl_customer_devices
# ------------------------------------------------------------

DROP TABLE IF EXISTS `tbl_customer_devices`;

CREATE TABLE `tbl_customer_devices` (
  `customer_id` int(11) unsigned NOT NULL,
  `device_id` int(11) unsigned NOT NULL,
  UNIQUE KEY `customer_id` (`customer_id`,`device_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `tbl_customer_devices` WRITE;
/*!40000 ALTER TABLE `tbl_customer_devices` DISABLE KEYS */;

INSERT INTO `tbl_customer_devices` (`customer_id`, `device_id`)
VALUES
	(1,1),
	(1,2),
	(1,3),
	(2,1),
	(2,2),
	(2,3);

/*!40000 ALTER TABLE `tbl_customer_devices` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table tbl_customers
# ------------------------------------------------------------

DROP TABLE IF EXISTS `tbl_customers`;

CREATE TABLE `tbl_customers` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_by` int(11) unsigned DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `tbl_customers` WRITE;
/*!40000 ALTER TABLE `tbl_customers` DISABLE KEYS */;

INSERT INTO `tbl_customers` (`id`, `name`, `surname`, `mail`, `phone`, `password`, `created_at`, `created_by`, `updated_at`, `updated_by`)
VALUES
	(1,'Ümit','Kocabıçak','umit@sakarya.edu.tr','+902642955891','123456','2021-01-07 19:02:07',NULL,NULL,NULL),
	(2,'Cüneyt','Bayılmış','cbayilmis@sakarya.edu.tr','+902642955454','123456','2021-01-07 19:02:06',NULL,NULL,NULL),
	(3,'Hüseyin','Yıldırım','huseyinyildirim@hotmail.com','+905320602602','123456','2021-01-07 19:02:03',NULL,NULL,NULL),
	(4,'Ali','Pişkin','ali.piskin@hotmail.com.tr','+905447214080','123456','2021-01-07 19:02:30',NULL,NULL,NULL);

/*!40000 ALTER TABLE `tbl_customers` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table tbl_device_traces
# ------------------------------------------------------------

DROP TABLE IF EXISTS `tbl_device_traces`;

CREATE TABLE `tbl_device_traces` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `device_id` int(11) unsigned NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `speed` int(11) DEFAULT NULL,
  `ip_address` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `device_id` (`device_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `tbl_device_traces` WRITE;
/*!40000 ALTER TABLE `tbl_device_traces` DISABLE KEYS */;

INSERT INTO `tbl_device_traces` (`id`, `device_id`, `longitude`, `latitude`, `speed`, `ip_address`, `created_at`)
VALUES
	(1,1,'02705.86329E','3828.43989N',NULL,'83.123.54.32','2021-01-07 00:12:46'),
	(2,1,'02705.84927E','3828.43578N',NULL,'83.123.54.32','2021-01-07 00:12:47'),
	(3,1,'02705.85170E','3828.44124N',NULL,'83.123.54.32','2021-01-07 00:12:47'),
	(4,1,'02705.85417E','3828.44575N',NULL,'83.123.54.32','2021-01-07 00:12:47'),
	(5,1,'02705.84985E','3828.44249N',NULL,'83.123.54.32','2021-01-07 00:12:46'),
	(6,1,'02705.84158E','3828.43990N',NULL,'83.123.54.32','2021-01-07 00:12:46'),
	(7,1,'02705.86020E','3828.44920N',NULL,'83.123.54.32','2021-01-07 00:12:46'),
	(8,1,'02705.86474E','3828.44965N',NULL,'83.123.54.32','2021-01-07 00:12:46'),
	(9,1,'02705.84378E','3828.43357N',NULL,'83.123.54.32','2021-01-07 00:12:46'),
	(10,1,'02705.84378E','3828.43357N',NULL,'83.123.54.32','2021-01-07 00:12:46'),
	(11,1,'02705.84378E','3828.43357N',NULL,'83.123.54.32','2021-01-07 00:12:47'),
	(12,1,'02705.84378E','3828.43357N',NULL,'83.123.54.32','2021-01-07 00:12:47'),
	(13,1,'02705.84378E','3828.43357N',NULL,'83.123.54.32','2021-01-07 00:12:47'),
	(14,1,'02705.84378E','3828.43357N',NULL,'83.123.54.32','2021-01-07 00:12:46'),
	(15,1,'02705.84378E','3828.43357N',NULL,'83.123.54.32','2021-01-07 00:12:46'),
	(16,1,'02705.84378E','3828.43357N',NULL,'83.123.54.32','2021-01-07 00:12:46'),
	(17,1,'02705.84378E','3828.43357N',NULL,'83.123.54.32','2021-01-07 00:12:46'),
	(18,1,'02705.84378E','3828.43357N',NULL,'83.123.54.32','2021-01-07 00:12:46'),
	(19,1,'02705.84378E','3828.43357N',NULL,'83.123.54.32','2021-01-07 00:12:46'),
	(20,1,'02705.84378E','3828.43357N',NULL,'83.123.54.32','2021-01-07 00:12:46'),
	(21,1,'27.0981','38.47422',2,'83.123.54.32','2021-01-07 00:32:47'),
	(22,1,'27.09752','38.47401',0,'83.123.54.32','2021-01-07 00:32:48'),
	(23,1,'27.09758','38.47406',2,'83.123.54.32','2021-01-07 00:32:49'),
	(24,1,'27.09757','38.47404',2,'83.123.54.32','2021-01-07 00:32:50'),
	(25,1,'27.09758','38.47407',0,'83.123.54.32','2021-01-07 00:32:51'),
	(26,1,'27.09757','38.47403',2,'83.123.54.32','2021-01-07 00:33:19'),
	(27,1,'27.09757','38.47403',4,'83.123.54.32','2021-01-07 00:34:17'),
	(28,1,'27.09757','38.47403',4,'83.123.54.32','2021-01-07 00:34:28'),
	(29,1,'27.09749','38.47393',1,'83.123.54.32','2021-01-07 00:34:57'),
	(30,1,'27.09751','38.4739',1,'83.123.54.32','2021-01-07 00:36:35'),
	(31,1,'27.09749','38.47395',0,'83.123.54.32','2021-01-07 00:38:13'),
	(32,1,'27.09754','38.47393',0,'83.123.54.32','2021-01-07 00:39:50'),
	(33,1,'27.09755','38.47399',0,'83.123.54.32','2021-01-07 00:42:43'),
	(34,1,'27.0976','38.47409',4,'83.123.54.32','2021-01-07 00:44:21'),
	(35,1,'38.47401','27.09764',4,'83.123.54.32','2021-01-07 00:46:17'),
	(36,1,'27.09762','38.47398',1,'83.123.54.32','2021-01-07 00:48:04'),
	(37,1,'27.09765','38.47396',0,'83.123.54.32','2021-01-07 00:49:42'),
	(38,1,'27.04949','38.47935',-1,'83.123.54.32','2021-01-07 12:01:34'),
	(39,1,'27.0495','38.47938',5,'83.123.54.32','2021-01-07 12:03:11'),
	(40,1,'27.04958','38.47936',2,'83.123.54.32','2021-01-07 12:04:49'),
	(41,1,'27.04954','38.47935',0,'83.123.54.32','2021-01-07 12:06:27'),
	(43,1,'27.0495','38.47948',0,'83.123.54.32','2021-01-07 16:18:48'),
	(44,1,'27.04968','38.47945',1,'83.123.54.32','2021-01-07 16:20:25'),
	(46,1,'27.04877','38.48001',0,'83.123.54.32','2021-01-07 17:42:29'),
	(48,1,'27.03681','38.4823',14,'83.123.54.32','2021-01-07 17:47:37'),
	(49,1,'27.04144','38.4781',82,'83.123.54.32','2021-01-07 17:49:20'),
	(50,1,'27.06633','38.48229',86,'83.123.54.32','2021-01-07 17:51:00'),
	(51,1,'27.08829','38.48242',64,'83.123.54.32','2021-01-07 17:52:33'),
	(55,1,'27.09751','38.4741',0,'83.123.54.32','2021-01-07 21:56:08'),
	(56,1,'27.09758','38.47406',0,'83.123.54.32','2021-01-07 21:57:48'),
	(57,1,'27.09769','38.47396',0,'83.123.54.32','2021-01-07 21:59:24'),
	(58,1,'27.09783','38.47391',0,'83.123.54.32','2021-01-07 22:01:02'),
	(59,1,'27.09761','38.47404',0,'83.123.54.32','2021-01-07 22:02:39'),
	(60,1,'27.09768','38.47401',0,'83.123.54.32','2021-01-07 22:04:17'),
	(61,1,'27.09751','38.47409',0,'83.123.54.32','2021-01-07 22:05:55'),
	(62,1,'27.09754','38.47406',1,'83.123.54.32','2021-01-07 22:07:33'),
	(63,1,'27.09764','38.47403',0,'83.123.54.32','2021-01-07 22:09:10'),
	(64,1,'27.09776','38.47393',0,'83.123.54.32','2021-01-07 22:10:48');

/*!40000 ALTER TABLE `tbl_device_traces` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table tbl_devices
# ------------------------------------------------------------

DROP TABLE IF EXISTS `tbl_devices`;

CREATE TABLE `tbl_devices` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL DEFAULT '',
  `serial_no` varchar(255) NOT NULL,
  `secret_key` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_by` int(11) unsigned DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `tbl_devices` WRITE;
/*!40000 ALTER TABLE `tbl_devices` DISABLE KEYS */;

INSERT INTO `tbl_devices` (`id`, `title`, `serial_no`, `secret_key`, `created_at`, `created_by`, `updated_at`, `updated_by`)
VALUES
	(1,'Arac 1','865532044987747','865532044987747','2021-01-08 18:06:34',1,NULL,NULL),
	(2,'Arac 2','865532044987746','865532044987746','2021-01-08 18:07:20',1,NULL,NULL),
	(3,'Arac 3','865532044987745','865532044987745','2021-01-08 18:07:35',1,NULL,NULL);

/*!40000 ALTER TABLE `tbl_devices` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
