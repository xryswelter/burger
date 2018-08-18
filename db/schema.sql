DROP DATABASE IF EXISTS hamburger;
CREATE DATABASE hamburger;
USE hamburger;

CREATE TABLE burger(
	id INT NOT NULL AUTO_increment,
	name varchar(255) NOT NULL,
	consumption BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
    )