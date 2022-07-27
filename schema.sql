Drop database if exists employee_db;
create database employee_db;
use employee_db;

create table department(
  id INT AUTO_INCREMENT primary key,
  name varchar(30)
);

create table role(
  id INT AUTO_INCREMENT primary key,
  title varchar(30),
  salary decimal,
  department_id INT,
constraint fk_department foreign key (department_id) references department(id) on delete cascade
);

create table employee(
  id INT AUTO_INCREMENT primary key,
  first_name varchar(30),
  last_name varchar(30),
  role_id INT,
  constraint fk_role foreign key (role_id) references role(id) on delete cascade,
  manager_id INT,
  constraint fk_manager foreign key (manager_id) references employee(id) on delete set null
);
