# Bamazon

## Description
The application takes npm [inquirer](https://www.npmjs.com/package/inquirer) commmands along with [mysql](https://www.npmjs.com/package/mysql) code which allows the customer to purchase items as long as they are in stock

### Customer Interface
The application opens with a display of the current items in stock.  From the item, the consomer can select the id of a item along with the quantity they want. The program will respond with a successful purchase, or , if the quality is too high, it will respond asking to select a new quantity.

To run the customer interface please follow the steps below:

	git clone 
	cd bamazon
	npm install
	node bamazonCustomer.js
	
The customer interface displays questions that require numerical answers 

	? Please enter the Item ID which you would like to buy. 
	? How many do you need? 

If the item ID is valid and the amount required is avalable, the order is placed.

![Bamazon_Successful1](https://user-images.githubusercontent.com/46940564/56928584-4ae23e80-6aa5-11e9-99a1-8bcabb546d20.gif)

![image](https://user-images.githubusercontent.com/46940564/56929092-bb3d8f80-6aa6-11e9-92ad-4bbc678c39bc.png)

If an invalid amount is entered the program will ask for you to:

	? Please modify your order
	OKAY, EXIT
	
![image](https://user-images.githubusercontent.com/46940564/56928821-f8ede880-6aa5-11e9-90e3-9ec1781f9a28.png)
	

