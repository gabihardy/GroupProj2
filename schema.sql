/* 
This file is intended to help developers get their SQL Databases setup correctly.
It is important since other developers will be unlikely to have the same database or tables setup already. 
*/

/* Create and use the partners db */
CREATE DATABASE  `partners`;
USE `partners`;

/* Create a table for all partners db */
CREATE TABLE `allpartners` (
	`userName` VARCHAR( 255 ) NOT NULL,
	`realName` VARCHAR( 255) NOT NULL,
	`password` VARCHAR( 255 ) NOT NULL,
	`age` INT ( 15 ) NOT NULL,
	`skillLevel` VARCHAR( 255 ) NOT NULL,
	`image` VARCHAR( 500 ) NOT NULL,
	`aboutMe` VARCHAR( 500 ) NOT NULL,
	PRIMARY KEY ( `id` ) ); /* Set ID as primary key */