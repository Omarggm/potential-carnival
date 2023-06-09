DROP DATABASE IF EXISTS sample_db;
CREATE DATABASE sample_db;
USE sample_db;

CREATE TABLE customers (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS `sample_menu` (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NULL,
    price DECIMAL(5,2) NULL,
    PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS `sample_menu2` (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NULL,
    price DECIMAL(5,2) NULL,
    PRIMARY KEY (id)
);