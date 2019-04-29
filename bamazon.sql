-- Create a database called 'Bamazon' and switch into it for this activity --
CREATE DATABASE Bamazon;
USE Bamazon;

-- Create a table called 'products' which will contain the store inventory --
CREATE TABLE books (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	book_title VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

-- Insert data into the 'products' table --
INSERT INTO books (book_title, department_name, price, stock_quantity)
VALUES  ('Crime and Punishment', 'Book', 5.75, 500),
		('Note From the Underground', 'Book', 6.25, 627),
		('Catch 22', 'Book', 5.99, 300),
		('Dr Jackyl & Mr. Hyde', 'Book', 4.25, 400),
		('War and Peace', 'Book', 10.35, 800),
		('Fight Club', 'Book', 10.20, 10000),
		('1984', 'Book', 4.45, 267),
		('Brave New World', 'Book', 14.50, 200),
		('Pride and Prejudice', 'Book', 12.75, 476),
		('Animal Farm', 'Book', 12.99, 575),
		('CAtcher and the Rye', 'Book', 1.50, 423),
		('Hamlet', 'Book', 12.75, 150),
		('Romio and Juliet', 'Book', 17.99, 89),
		('The Hobbit', 'Book', 15.55, 120),
		('Anna Korenina', 'CBook', 17.88, 250),
		('Huckleberry Finn', 'Book', 17.25, 157),
		('Karka on the Shore', 'Book', 12.50, 163),
		('The Metamorphosis', 'Book', 14.95, 389),
		('Ulysses', 'Book', 23.25, 550),
		('The Grapes of Wrath', 'Book', 13.25, 432);
        
DROP TABLE IF EXISTS `books`;