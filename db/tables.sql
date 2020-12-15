-- Notes on bottom

-- Our database
CREATE DATABASE mygamespaceDB;
USE mygamespaceDB;


-- Table holding games and their data
DROP TABLE IF EXISTS games;
CREATE TABLE games (
	id INTEGER auto_increment not null,
    title VARCHAR(50),
    rating INTEGER,
    gamemodes INTEGER,
    platforms VARCHAR(20),
    -- pictures stored in seperate table (gameimg)
    -- genre VARCHAR(50), 
    -- developer VARCHAR(50),
    -- releaseDate DATE,
    primary key(id)
)

-- Table to hold imgs provided by idgb
DROP TABLE IF EXISTS gameimg;
create table gameimg(
	id integer auto_increment not null,
    photoid integer, -- since idgb is providing numbers for each img, they'll be stored here.
    fromgame varchar(50), -- which 
    primary key (id)
)

DROP TABLE IF EXISTS wishlist;
CREATE TABLE 


