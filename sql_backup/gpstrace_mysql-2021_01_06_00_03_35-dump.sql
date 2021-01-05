-- MariaDB dump 10.18  Distrib 10.5.8-MariaDB, for osx10.15 (x86_64)
--
-- Host: mysql10.trwww.com    Database: biletyo1_gpstrace
-- ------------------------------------------------------
-- Server version	5.5.52-cll-lve

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_admins`
--

DROP TABLE IF EXISTS `tbl_admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_admins` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_by` int(11) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_admins`
--

LOCK TABLES `tbl_admins` WRITE;
/*!40000 ALTER TABLE `tbl_admins` DISABLE KEYS */;
INSERT INTO `tbl_admins` VALUES (2,'Hüseyin','Yıldırım','huseyin.yildirim@buluton.com','+905320602602','123456','2021-01-05 02:16:18',NULL,'2021-01-05 19:49:20',NULL),(3,'Ali','Pişkin','ali.piskin@buluton.com','+905447214080','123456','2021-01-05 02:16:23',NULL,'2021-01-05 19:49:20',NULL);
/*!40000 ALTER TABLE `tbl_admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_customer_devices`
--

DROP TABLE IF EXISTS `tbl_customer_devices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_customer_devices` (
  `customer_id` int(11) NOT NULL,
  `device_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_customer_devices`
--

LOCK TABLES `tbl_customer_devices` WRITE;
/*!40000 ALTER TABLE `tbl_customer_devices` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_customer_devices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_customers`
--

DROP TABLE IF EXISTS `tbl_customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_customers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_by` int(11) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_customers`
--

LOCK TABLES `tbl_customers` WRITE;
/*!40000 ALTER TABLE `tbl_customers` DISABLE KEYS */;
INSERT INTO `tbl_customers` VALUES (1,'Ümit','Kocabıçak','umit@sakarya.edu.tr','+902642955891','123456','2021-01-05 02:20:06',NULL,'2021-01-05 19:49:21',NULL),(2,'Cüneyt','Bayılmış','cbayilmis@sakarya.edu.tr','+902642955454','123456','2021-01-05 02:20:08',NULL,'2021-01-05 19:49:21',NULL);
/*!40000 ALTER TABLE `tbl_customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_device_traces`
--

DROP TABLE IF EXISTS `tbl_device_traces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_device_traces` (
  `id` int(11) NOT NULL,
  `device_id` int(11) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `speed` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `ip_address` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_device_traces`
--

LOCK TABLES `tbl_device_traces` WRITE;
/*!40000 ALTER TABLE `tbl_device_traces` DISABLE KEYS */;
INSERT INTO `tbl_device_traces` VALUES (137,1,'02705.86329E','3828.43989N',NULL,'2021-01-05 19:56:05','83.123.54.32'),(138,1,'02705.84927E','3828.43578N',NULL,'2021-01-05 19:56:06','83.123.54.32'),(139,1,'02705.85170E','3828.44124N',NULL,'2021-01-05 19:56:06','83.123.54.32'),(140,1,'02705.85417E','3828.44575N',NULL,'2021-01-05 19:56:06','83.123.54.32'),(141,1,'02705.84985E','3828.44249N',NULL,'2021-01-05 19:56:06','83.123.54.32'),(142,1,'02705.84158E','3828.43990N',NULL,'2021-01-05 19:56:06','83.123.54.32'),(143,1,'02705.86020E','3828.44920N',NULL,'2021-01-05 19:56:07','83.123.54.32'),(144,1,'02705.86474E','3828.44965N',NULL,'2021-01-05 19:56:07','83.123.54.32'),(152,1,'02705.84378E','3828.43357N',NULL,'2021-01-05 19:56:07','83.123.54.32'),(153,1,'02705.84378E','3828.43357N',NULL,'2021-01-05 19:56:07','83.123.54.32'),(154,1,'02705.84378E','3828.43357N',NULL,'2021-01-05 19:56:07','83.123.54.32'),(155,1,'02705.84378E','3828.43357N',NULL,'2021-01-05 19:56:08','83.123.54.32'),(156,1,'02705.84378E','3828.43357N',NULL,'2021-01-05 19:56:08','83.123.54.32'),(157,1,'02705.84378E','3828.43357N',NULL,'2021-01-05 19:56:08','83.123.54.32'),(158,1,'02705.84378E','3828.43357N',NULL,'2021-01-05 19:56:08','83.123.54.32'),(159,1,'02705.84378E','3828.43357N',NULL,'2021-01-05 19:56:08','83.123.54.32'),(160,1,'02705.84378E','3828.43357N',NULL,'2021-01-05 19:56:09','83.123.54.32'),(161,1,'02705.84378E','3828.43357N',NULL,'2021-01-05 19:56:09','83.123.54.32'),(162,1,'02705.84378E','3828.43357N',NULL,'2021-01-05 19:56:09','83.123.54.32'),(163,1,'02705.84378E','3828.43357N',NULL,'2021-01-05 19:56:09','83.123.54.32');
/*!40000 ALTER TABLE `tbl_device_traces` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_devices`
--

DROP TABLE IF EXISTS `tbl_devices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_devices` (
  `id` int(11) NOT NULL,
  `serial_no` varchar(255) NOT NULL,
  `secret_key` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_by` int(11) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_devices`
--

LOCK TABLES `tbl_devices` WRITE;
/*!40000 ALTER TABLE `tbl_devices` DISABLE KEYS */;
INSERT INTO `tbl_devices` VALUES (1,'865532044987747','865532044987747','2020-12-01 02:56:02',1,'2021-01-05 19:51:56',NULL);
/*!40000 ALTER TABLE `tbl_devices` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-06  0:03:37
