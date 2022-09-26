-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: purchase_details
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `total_amount` int DEFAULT NULL,
  `delivery_address` varchar(250) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `delivery_datetime` datetime DEFAULT NULL,
  `status` varchar(45) DEFAULT 'Active',
  `created_by` int DEFAULT NULL,
  `created_dt` datetime DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  `updated_dt` datetime DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (1,1,8,88,'Airport Road, Peelamedu - Pudur Main Rd, Coimbatore, Tamil Nadu 641014, India','test',NULL,'Active',1,'2022-09-25 11:55:45',NULL,NULL),(2,1,8,88,'Airport Road, Peelamedu - Pudur Main Rd, Coimbatore, Tamil Nadu 641014, India','test',NULL,'Active',1,'2022-09-25 11:55:45',NULL,NULL),(3,1,8,88,'Airport Road, Peelamedu - Pudur Main Rd, Coimbatore, Tamil Nadu 641014, India','test',NULL,'Active',1,'2022-09-25 11:55:45',NULL,NULL),(4,1,4,44,'Airport Road, Peelamedu - Pudur Main Rd, Coimbatore, Tamil Nadu 641014, India','test',NULL,'Active',1,'2022-09-25 11:55:45',NULL,NULL),(6,1,4,44,'Airport Road, Peelamedu - Pudur Main Rd, Coimbatore, Tamil Nadu 641014, India','test',NULL,'Active',1,'2022-09-25 11:55:45',NULL,NULL),(7,1,4,44,'Airport Road, Peelamedu - Pudur Main Rd, Coimbatore, Tamil Nadu 641014, India','test',NULL,'Active',1,'2022-09-25 11:55:45',NULL,NULL),(8,1,4,44,'Airport Road, Peelamedu - Pudur Main Rd, Coimbatore, Tamil Nadu 641014, India','test',NULL,'Active',1,'2022-09-25 11:55:45',NULL,NULL),(9,1,4,44,'Airport Road, Peelamedu - Pudur Main Rd, Coimbatore, Tamil Nadu 641014, India','test',NULL,'Active',1,'2022-09-25 11:55:45',NULL,NULL),(10,1,4,44,'Airport Road, Peelamedu - Pudur Main Rd, Coimbatore, Tamil Nadu 641014, India','test',NULL,'Active',1,'2022-09-25 11:55:45',NULL,NULL),(11,1,13,136,'Airport Road, Peelamedu - Pudur Main Rd, Coimbatore, Tamil Nadu 641014, India','test',NULL,'Active',1,'2022-09-25 11:56:53',1,'2022-09-25 12:44:00'),(12,1,2,20,'Airport Road, Peelamedu - Pudur Main Rd, Coimbatore, Tamil Nadu 641014, India','test',NULL,'Active',1,'2022-09-25 11:57:24',NULL,NULL),(13,1,13,136,'Airport Road, Peelamedu - Pudur Main Rd, Coimbatore, Tamil Nadu 641014, India','test',NULL,'Active',1,'2022-09-25 11:58:22',NULL,NULL),(14,1,13,136,'Airport Road, Peelamedu - Pudur Main Rd, Coimbatore, Tamil Nadu 641014, India','test',NULL,'Active',1,'2022-09-25 12:41:54',NULL,NULL),(15,1,13,136,'Airport Road, Peelamedu - Pudur Main Rd, Coimbatore, Tamil Nadu 641014, India','test',NULL,'InActive',1,'2022-09-25 12:52:23',NULL,NULL);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-26  9:43:10
