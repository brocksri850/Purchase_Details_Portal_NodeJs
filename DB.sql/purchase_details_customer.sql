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
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `customer_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `user_name` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `hash_password` varchar(200) DEFAULT NULL,
  `salt` varchar(100) DEFAULT NULL,
  `key` varchar(45) DEFAULT NULL,
  `payload` longtext,
  `status` varchar(45) DEFAULT 'Active',
  `created_by` int DEFAULT NULL,
  `created_dt` datetime DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  `updated_dt` datetime DEFAULT NULL,
  PRIMARY KEY (`customer_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `user_name_UNIQUE` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'Then Molzi','S','srisandy','6369126322','srisandystar@gmail.com','chennai','yaMin34#4','8ac7f95b8ad52f1dc75ff09691f8fe38244816094f8acbf7757f288a3c5c3c05e18a07e04203a25a20cec375eb644261f598d9f61cf5b415b784ca9931d6dc93','052ec207bdefd98f840bae519323c9e4','Customer#Id_1','{\"customer_id\":1,\"first_name\":\"Then Molzi\",\"last_name\":\"S\",\"email\":\"srisandystar@gmail.com\",\"phone\":\"6369126322\",\"user_name\":\"srisandy\",\"accessToken\":\"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJyZWRpc0lkIjoiQ3VzdG9tZXIjSWRfMSIsImlhdCI6MTY2NDA5MDQ3NX0.F3dhWcHRK75H6isKd2zSdWDTFdbCgdxNmKzm0vQromai0hSiS_y7nBJt0D5iFZ6Oz3GgG-kR25_o6T0N2oVeTQ\",\"created_dt\":\"2022-09-25T07:21:15.231Z\",\"key\":\"Customer#Id_1\"}','Active',NULL,'2022-09-25 02:49:18',NULL,NULL);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
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
