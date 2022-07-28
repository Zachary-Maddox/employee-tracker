use employee_db;

insert into department (name) values("MachineryTech"),("Boatswain Mates"),("Electrcians Mate");

insert into role (title, salary, department_id) values ("BMC",65000,2),("EMC",67250,3),("MK1",57000,1), ("BMSC",100000,2),("MKC",100000,1),("EM3",48000,3);

insert into employee (first_name,last_name,role_id,manager_id) values ("Danny","Smith",2,null), ("Todd","Davenport",2,1),("Trevor","Dupuis",1,null),("Sarah","Jacobsen",1,3), ("Edward","Leblanc",3,null),("Christopher","Strien",3,5);

