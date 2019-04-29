# Bamazon

## Description
The application takes npm [inquirer](https://www.npmjs.com/package/inquirer) commmands along with [mysql](https://www.npmjs.com/package/mysql) code and allows the customer to purchase books as long as they are in stock.

### Customer Interface
The application opens with a display of the current books in stock.  The consumer can select the id of a book along with the quantity they want. The program will respond with a successful purchase. If the quality is too high, or the id does not exist, the program will prompt for new values.

To run the customer interface please follow the steps below:

	git clone 
	cd bamazon
	npm install
	node bamazonCustomer.js
	
The customer interface displays questions that require numerical answers 

	? Please enter the Item ID which you would like to buy. 
	? How many do you need? 

If the item ID is valid and the amount required is avalable, the order is placed.

![image](https://user-images.githubusercontent.com/46940564/56931298-85e87000-6aad-11e9-8691-65437f55b909.png)

![Successful_Update_Bzon](https://user-images.githubusercontent.com/46940564/56931455-1626b500-6aae-11e9-983f-bc574bfd51fc.gif)



If an invalid amount is entered the program will ask for you to:

	? Please modify your order
	OKAY, EXIT
	
![image](https://user-images.githubusercontent.com/46940564/56931302-884aca00-6aad-11e9-8138-2732fcbbf0e9.png)
	

