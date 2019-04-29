// Pull in required dependencies
var inquirer = require('inquirer');
var mysql = require('mysql');
var colors = require('colors');

// Define the MySQL connection parameters
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	// Your username
	user: 'root',

	// Your password
	password: 'default',
	database: 'bamazon'
});

// validateInput makes sure that the user is supplying only positive integers for their inputs
// function validateInput(value) {
// 	var integer = Number.isInteger(parseFloat(value));
// 	var sign = Math.sign(value);

// 	if (integer && (sign === 1)) {
// 		return true;
// 	} else {
// 		return 'Please enter a whole non-zero number.';
// 	}
// }

// Start here
function displayBooks() {

	// Construct the db query string
	table = 'SELECT * FROM books';

	// Make the db query
	connection.query(table, function(err, data) {
		if (err) throw err;

		console.log('Existing Inventory: ');
		console.log('...................\n');

		var displayItems = '';
		for (var i = 0; i < data.length; i++) {
			displayItems = '';
			displayItems += 'Item ID: ' + data[i].item_id + '  ||  ';
			displayItems += 'Book Title: ' + data[i].book_title + '  || ';
			displayItems += 'Department: ' + data[i].department_name + '  ||  ';
			displayItems += 'Price: $' + data[i].price + '\n';

			console.log(displayItems);
		}

	  	console.log("---------------------------------------------------------------------\n");

	  	//Prompt the user for item/quantity they would like to purchase
	  	userPromptsNResponce();
	})
}


function userPromptsNResponce() {

	inquirer.prompt([
		{
			type: 'input',
			name: 'itemID',
			message: 'Please enter the Item ID for the book you would like to buy.',
			//validate: validateInput,
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many do you need?',
			//validate: validateInput,
			filter: Number
		}
	]).then(function(input) {

		var book = input.itemID;
		var quantity = input.quantity;

		var table = 'SELECT * FROM books WHERE ?';

		connection.query(table, {item_id: book}, function(err, data) {
			if (err) throw err;

			// Wrong book
			if (data.length === 0) {
				function retry1() {
                    inquirer
                      .prompt({
                        name: "retry1",
                        type: "list",
                        message: "That book is not avalable, please modify your order",
                        choices: ["OKAY", "EXIT"]
                    })
                        .then(function(answer) {
                            if (answer.retry1 === "OKAY") {
                                displayBooks();
                            }
                            else{
                              connection.end();
                            }
                          })               
                      }
                      retry1(); 

			} else {
				var productData = data[0];

				 //console.log('productData = ' + JSON.stringify(productData).rainbow);
				// console.log('productData.stock_quantity = ' + productData.stock_quantity);

				// In Stock
				if (quantity <= productData.stock_quantity) {
					console.log('Congratulations, the product you requested is in stock! Placing order!'.blue);

					
					var updateTable = 'UPDATE books SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + book;
					
					// Update t
					connection.query(updateTable, function(err, data) {
						if (err) throw err;

						console.log(colors.blue('Your oder has been placed! Your total is $' + productData.price * quantity));
						console.log('Thank you for shopping with us!'.trap.rainbow);
						console.log("\n---------------------------------------------------------------------\n".trap);

						// End the database connection
						connection.end();
					})
				} else {
                    console.log("\n---------------------------------------------------------------------\n");
					console.log('Sorry, there is not enough product in stock, your order can not be placed as is.');
					function retry() {
                        inquirer
                          .prompt({
                            name: "retry",
                            type: "list",
                            message: "Please modify your order",
                            choices: ["OKAY", "EXIT"]
                        })
                            .then(function(answer) {
                                // based on their answer, either call the bid or the post functions
                                if (answer.retry === "OKAY") {
                                    displayBooks();
                                }
                                else{
                                  connection.end();
                                }
                              })               
                          }
					//console.log("\n---------------------------------------------------------------------\n");
                    retry();     
					//displayBooks();
				}
			}
		})
	})
}

displayBooks();