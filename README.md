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

![image](https://user-images.githubusercontent.com/46940564/56930531-f17d0e00-6aaa-11e9-816f-ae1bb5082da8.png)

![Bamazon_Successful1](https://user-images.githubusercontent.com/46940564/56928584-4ae23e80-6aa5-11e9-99a1-8bcabb546d20.gif)



If an invalid amount is entered the program will ask for you to:

	? Please modify your order
	OKAY, EXIT
	
![image](https://user-images.githubusercontent.com/46940564/56930533-f477fe80-6aaa-11e9-8f7e-6a8646f82df8.png)
	

