CREATE DATABASE IF NOT EXISTS veterinaria;

USE veterinaria;

CREATE TABLE mascotas (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    description VARCHAR(20),
    PRIMARY KEY (id)
)

INSERT INTO mascotas VALUES
    (1, "Felix", "gato"),
    (2, "Donita", "gato"),
    (3, "Lacky", "perro"),
    (4, "Luck", "perro"),
    (5, "Chica", "perro");