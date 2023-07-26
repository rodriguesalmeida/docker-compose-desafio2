create database nodedb;

use nodedb;

create table if not exists people (
    id int auto_increment, 
    nome varchar(255), 
    primary key (id)
);

