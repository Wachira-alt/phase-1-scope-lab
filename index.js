// Write your solution in this file!
// Declare customerName in global scope
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to set bestCustomer in global scope
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Declare leastFavoriteCustomer as a constant in global scope
const leastFavoriteCustomer = 'someone';

// Function attempting to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'another person'; 
}
