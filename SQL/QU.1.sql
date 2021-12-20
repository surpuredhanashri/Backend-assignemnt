CREATE DATABASE ASSIGNMENT1;

use ASSIGNMENT1;

create table Persons ( emp_id int,
 PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255)
);

insert into Persons values (101,'surpure','Dhanashri','Kolhapur');
insert into Persons values (102,'Shree','Mutha','pune');
insert into Persons values (103,'Kalpana', 'Bhandari','Nagar');

select * from Persons; 

-- ------------------------------------------------------------ ------------------------------------------------------------ ----------------------------------------------------------


create table productTable ( 
 PRODUCTID int,
    productname varchar(255),
    descriptionProd varchar(255),
    cost varchar(255)
);

insert into Persons values (101,'SURPURE','DHAASNHRI','KOLHAPUR');
insert into Persons values (101,'SURPURE','DHAASNHRI','pune');
insert into Persons values (3,103,'CSC');


select * from Persons; 

-- ------------------------------------------------------------ ------------------------------------------------------------ ----------------------------------------------------------


SELECT * FROM PRODUCTTABLE ;

insert into PRODUCTTABLE values(101,'TV','Good ui',55000);

DELETE FROM PRODUCTTABLE WHERE PRODUCTID = 101;

-- -------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------

Select distinct(city) from Customer;

-- -------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------
select distinct count(city) as cn from customer;
-- -------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------

Select * from productTable where cost >=15000;

-- -------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------

select CustomerId, CustomerName, City from Customer where CustomerId in (select CustomerId from  Purchase);

-- ------------------------------------------- ------------------------------------------------------------ ----------------------------------------------------------

select customername, country from customer where country = 'India';

-- ---------------------------------------------------- ----------------------------------------------------------- ----------------------------------------------------------

select customername from customer order by customername ASC;

-- ------------------------------------------------------------ ------------------------------------------------------------ ----------------------------------------------------------

select customername,country  from customer order by customername ASC, country DESC ;

-- ------------------------------------------------------------ ------------------------------------------------------------ ----------------------------------------------------------

insert into customer values (106,null,null,null,123456,null);
select * from customer;

update customer set postalcode = null where customerid = 106;

select * from customer where postalcode is null;
-- ------------------------------------------------------------ ------------------------------------------------------------ ----------------------------------------------------------

select * from customer where postalcode is not null;

-- ------------------------------------------------------------ ------------------------------------------------------------ ----------------------------------------------------------
update  productTable set productname = 'Vivo Mobile' where productname = 'Mobile';
-- ------------------------------------------------------------ ------------------------------------------------------------ ----------------------------------------------------------

update productTable set descriptionProd = 'Vivo is chinese mobile' where productId = 104 and productname = 'Vivo Mobile';

-- ------------------------------------------------------------ ------------------------------------------------------------ ----------------------------------------------------------

delete  from customer where customerid = 106;

-- ------------------------------------------------------------ ------------------------------------------------------------ ----------------------------------------------------------
truncate table customer;
-- ------------------------------------------------------------ ------------------------------------------------------------ ----------------------------------------------------------

select productid, productname, cost from ProductTable where cost in (select max(cost) from productTable);

-- ------------------------------------------------------------ ------------------------------------------------------------ ----------------------------------------------------------
select productid, productname, cost from ProductTable  order by cost desc limit 0,1;

-- ------------------------------------------------------------ ------------------------------------------------------------ ----------------------------------------------------------

select productid, productname from ProductTable order by cost limit 0,1;

-- ------------------------------------------------------------ ------------------------------------------------------------ --------------------------------------------

select sum(cost) from productTable;
-- ------------------------------------------------------------ ------------------------------------------------------------ --------------------------------------------

ALTER TABLE customer rename COLUMN PostalCode TO Pincode;

-- ------------------------------------------------------------ ------------------------------------------------------------ --------------------------------------------
ALTER TABLE Customer
ADD Rating varchar(255);
-- ------------------------------------------------------------ ------------------------------------------------------------ --------------------------------------------
delete  from customer where customerid = 5;

rollback;
-- ------------------------------------------------------------ ------------------------------------------------------------ --------------------------------------------

select count(productid) ,customerid from purchase group by customerid;
-- ------------------------------------------------------------ ------------------------------------------------------------ -------------------------------------------

 select c.CustomerId,c.CustomerName, p.ProductName, p.cost from customer c, productTable p, purchase ph where c.customerid = ph.customerid;
-- ------------------------------------------------------------ ------------------------------------------------------------ --------------------------------------------


create table Employee ( emp_id int,
Employeename varchar(255),
address varchar(255),
city varchar(255),
state varchar(255),
country varchar(255)
);

insert into employee values (3,'Dhanashri','ichalkaranji','Kohlapur','Maharashtra','india');
insert into employee values (1,'Radhika','Paharganj','New Delhi','Delhi','india');
insert into employee values (2,'Shri','Rewari','Gurugram','Haryana','india');


create table Department ( emp_id int,
Dept_id int,
Dept_name varchar(255)
);


insert into Department values (1,101,'E%TC');
insert into Department values (2,102,'IT');
insert into Department values (3,103,'CSC');



select Employee.employeename, Department.Dept_name from Employee inner join Department on employee.emp_id = Department.emp_id;


use ASSIGNMENT1;

insert into productSequelize values(1,101,"mobile","good mobile",30083);
insert into productSequelize values(2,102,"tv","good tv",34083);
insert into productSequelize values(3,103,"ac","good ac",76083);
insert into productSequelize values(4,104,"fridge","good fridge",43);
insert into productSequelize values(5,105,"fan","good fan",5345);

select * from ProductName;




