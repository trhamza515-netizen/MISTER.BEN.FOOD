
// TEMPORARY MENU DATA
// We will replace this with the real restaurant menu.

const menuItems = [

    {
        name: "Classic Burger",
        category: "burgers",
        description: "Juicy beef, fresh lettuce and cheese.",
        price: "45 DH",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700"
    },

    {
        name: "Double Burger",
        category: "burgers",
        description: "Double beef, double flavor.",
        price: "60 DH",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=700"
    },

    {
        name: "Chicken Sandwich",
        category: "sandwiches",
        description: "Crispy chicken with fresh vegetables.",
        price: "40 DH",
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=700"
    },

    {
        name: "Special Pizza",
        category: "pizza",
        description: "Cheese, tomato and delicious toppings.",
        price: "55 DH",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700"
    },

    {
        name: "Fresh Juice",
        category: "drinks",
        description: "A refreshing drink for every moment.",
        price: "20 DH",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=700"
    },

    {
        name: "Cheese Burger",
        category: "burgers",
        description: "Beef, melted cheese and special sauce.",
        price: "50 DH",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=700"
    }

];


// DISPLAY MENU

const menuGrid = document.getElementById("menu-grid");

function displayMenu(items) {

    menuGrid.innerHTML = "";

    items.forEach(function(item) {

        const card = document.createElement("article");

        card.className = "food-card";

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" loading="lazy">

            <div class="food-info">

                <span class="food-category">
                    ${item.category.toUpperCase()}
                </span>

                <h3>${item.name}</h3>

                <p>${item.description}</p>

                <span class="food-price">${item.price}</span>

            </div>
        `;

        menuGrid.appendChild(card);

    });

}


// FILTER MENU

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.category;

        if (category === "all") {
            displayMenu(menuItems);
        } else {
            const filteredItems = menuItems.filter(function(item) {
                return item.category === category;
            });

            displayMenu(filteredItems);
        }

    });

});


// MOBILE MENU

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    menuToggle.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";

});


// CLOSE MOBILE MENU AFTER NAVIGATION

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";

    });

});


// INITIAL DISPLAY

displayMenu(menuItems);
 