
create database mydb;

use mydb;

CREATE TABLE Customer(
   ID int NOT NULL,
   Name_Customer varchar(50),
   Location varchar(50),
   PRIMARY KEY (ID)
   );
  
   CREATE TABLE Product(
    ProductNumber int NOT NULL,
    ProductDescription varchar (50),
   Cost int,
   ID int,
   PRIMARY KEY (ProductNumber),
   FOREIGN KEY (ID) REFERENCES Customer (ID)
   );
  
   
   INSERT INTO Customer VALUE(1,'Kumar','Delhi');
   INSERT INTO Customer VALUE(2,'Dhanashri','Haryana');
   INSERT INTO Customer VALUE(3,'Shree','kolhapur');
   
   select * from Customer;
  
   INSERT INTO Product VALUE(101,'TV',20000,1);
   INSERT INTO Product VALUE(102,'AC',40000,2);
   INSERT INTO Product VALUE(103,'Laptop',50000,3);
   
   select * from Product;
  
   SELECT c1.Name_Customer,c2.ProductDescription FROM Customer c1, Product c2 WHERE  c1.ID=c2.ID;