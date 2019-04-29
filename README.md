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

