



document.addEventListener('DOMContentLoaded', function() {
    // Display student info
    document.getElementById('student-info').textContent = "Student ID: 200550743@student.georgianc.on.ca | Name: karan gill";

    // Form submission handler
    document.getElementById('pizza-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const size = document.getElementById('pizza-size').value;
        const crust = document.getElementById('crust-type').value;
        const toppings = document.getElementById('toppings').value.split(',').map(topping => topping.trim());
        const quantity = parseInt(document.getElementById('quantity').value);

        // Create Pizza object
        const pizza = new Pizza(size, crust, toppings, quantity);

        // Display pizza details
        displayPizza(pizza);
    });
});

class Pizza {
    constructor(size, crust, toppings, quantity) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.quantity = quantity;
    }
}

function displayPizza(pizza) {
    document.getElementById('size-display').textContent = `Size: ${pizza.size}`;
    document.getElementById('crust-display').textContent = `Crust: ${pizza.crust}`;
    document.getElementById('toppings-display').textContent = `Toppings: ${pizza.toppings.join(', ')}`;
    document.getElementById('quantity-display').textContent = `Quantity: ${pizza.quantity}`;

    document.getElementById('pizza-details').classList.remove('hidden');
}
