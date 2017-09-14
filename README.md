# Hack Your Future - webshop exercise:

The task is to build a simple webshop interface.

As a minimum it should allow the user to:
- Browse available products (pictures, descriptions and prices)
- Add items to cart
- View the cart and show the total order amount

- You should not worry about handling multiple users on the site at the same time - no need for login.
- You should not try to implement actual payment.
- You are allowed to store product data in a json file in your application, but see below for a better solution.

The clients has requested some additional features. Try to cover as many of these as you can:
- Assigning country of origin to products and browsing products "by country of origin"
- The clients wants to offer a 10% discount if you add 5 items of the same type to the cart.
- Fetching the data from a remote server. You can use JSON server to build a quick API from a single JSON file. Try to use promises when communicating with the server.

A sample JSON file is included in the project.

## Instructions for working on github
- Clone this repository to your local computer.
- Create a branch called `your-name-version-x.x` (I suggest starting with version-0.1 and then incrementing it as you improve the project).

## Instructions about the included server
You can choose to read data directly from the data.json or you can host it with the included server. If you want to host the data.json file with json server you need to first run `npm install` and then whenever you want to start the server you run `npm start`

## Final Requirements
Homework for next week:
- A 5-10 minute presentation
- Ability to add to cart, remove from cart, edit quantity
- A page listing the contents of your cart `/cart`
- A page listing all of the products `/`
- A page detailing a particular product `/products/:id`
- Cart page should include the line total and the total of all items in the cart
- Products should have images
- Images should be shown on all pages with the product (cart, product list, product view)
- Prices should be formatted in a currency of your choosing
