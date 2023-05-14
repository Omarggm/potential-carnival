DROP DATABASE IF EXISTS sample_db;

-- create database --
CREATE DATABASE sample_db;

-- use database --
USE sample_db;

--create table --
CREATE TABLE IF NOT EXISTS `sample_menu` (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NULL,
)
