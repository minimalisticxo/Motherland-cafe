```javascript
/* =========================================================
   MOTHERLAND STUDIOS CAFÉ
   Main JavaScript
========================================================= */


/* =========================================================
   MENU DATA
========================================================= */

const menuData = {

    coffee: [
        {
            name: "Espresso",
            description: "Rich and concentrated classic espresso.",
            price: "₹180"
        },
        {
            name: "Americano",
            description: "Espresso with hot water.",
            price: "₹220"
        },
        {
            name: "Cappuccino",
            description: "Espresso with steamed milk and silky foam.",
            price: "₹260"
        },
        {
            name: "Café Latte",
            description: "Smooth espresso balanced with steamed milk.",
            price: "₹280"
        },
        {
            name: "Flat White",
            description: "Velvety milk and rich espresso.",
            price: "₹280"
        },
        {
            name: "Mocha",
            description: "Espresso, chocolate and steamed milk.",
            price: "₹300"
        }
    ],


    beverages: [
        {
            name: "Fresh Orange Juice",
            description: "Freshly squeezed seasonal oranges.",
            price: "₹280"
        },
        {
            name: "Fresh Watermelon Juice",
            description: "Fresh watermelon served chilled.",
            price: "₹250"
        },
        {
            name: "Lemonade",
            description: "Fresh lemon, water and a touch of sweetness.",
            price: "₹220"
        },
        {
            name: "Iced Tea",
            description: "Refreshing house iced tea.",
            price: "₹250"
        }
    ],


    eggs: [
        {
            name: "New York Poached Eggs",
            description: "A Motherland brunch favourite.",
            price: "₹500"
        },
        {
            name: "Classic Scrambled Eggs",
            description: "Soft scrambled eggs served with toast.",
            price: "₹420"
        },
        {
            name: "Eggs Benedict",
            description: "Poached eggs with toasted bread and sauce.",
            price: "₹480"
        },
        {
            name: "Spanish Omelette",
            description: "Classic omelette inspired by Spanish flavours.",
            price: "₹450"
        }
    ],


    salads: [
        {
            name: "Motherland Signature Greens",
            description: "Fresh greens with carefully selected ingredients.",
            price: "₹450"
        },
        {
            name: "Caesar Salad",
            description: "Crisp greens with classic Caesar dressing.",
            price: "₹450"
        },
        {
            name: "Greek Salad",
            description: "Fresh vegetables, herbs and Mediterranean flavours.",
            price: "₹450"
        }
    ],


    crepes: [
        {
            name: "Brittany Crepe",
            description: "French-inspired savoury crepe.",
            price: "₹620"
        },
        {
            name: "Classic Nutella Crepe",
            description: "Warm crepe with chocolate hazelnut spread.",
            price: "₹480"
        },
        {
            name: "Berry Crepe",
            description: "Sweet crepe with berries and cream.",
            price: "₹520"
        }
    ],


    bagels: [
        {
            name: "Cream Cheese Bagel",
            description: "Toasted bagel with smooth cream cheese.",
            price: "₹380"
        },
        {
            name: "Smoked Salmon Bagel",
            description: "Bagel with smoked salmon and fresh toppings.",
            price: "₹620"
        },
        {
            name: "Avocado Bagel",
            description: "Creamy avocado with fresh herbs.",
            price: "₹480"
        }
    ],


    sandwiches: [
        {
            name: "Famous Grilled Cheese",
            description: "Golden grilled bread with melted cheese.",
            price: "₹400"
        },
        {
            name: "Chicken Sandwich",
            description: "Tender chicken with fresh vegetables and sauce.",
            price: "₹520"
        },
        {
            name: "Motherland Club Sandwich",
            description: "A generous multi-layered café classic.",
            price: "₹550"
        }
    ],


    "small-bites": [
        {
            name: "Truffle Fries",
            description: "Crispy fries with truffle seasoning.",
            price: "₹380"
        },
        {
            name: "Garlic Bread",
            description: "Toasted bread with garlic and herbs.",
            price: "₹320"
        },
        {
            name: "Bruschetta",
            description: "Toasted bread topped with fresh ingredients.",
            price: "₹360"
        }
    ],


    "big-bites": [
        {
            name: "Motherland Burger",
            description: "House-style burger served with fries.",
            price: "₹620"
        },
        {
            name: "Chicken Schnitzel",
            description: "Crispy chicken with fresh accompaniments.",
            price: "₹650"
        },
        {
            name: "Fish & Chips",
            description: "Crispy fish with golden fries.",
            price: "₹680"
        }
    ],


    pasta: [
        {
            name: "Sicilian Tortellini",
            description: "Handmade pasta inspired by Sicily.",
            price: "₹600"
        },
        {
            name: "Creamy Mushroom Pasta",
            description: "Pasta with mushrooms in a rich creamy sauce.",
            price: "₹580"
        },
        {
            name: "Arrabbiata",
            description: "Pasta with a classic tomato and chilli sauce.",
            price: "₹520"
        },
        {
            name: "Pesto Pasta",
            description: "Fresh basil pesto with handmade pasta.",
            price: "₹580"
        }
    ],


    desserts: [
        {
            name: "Classic Cheesecake",
            description: "Creamy cheesecake with a delicate biscuit base.",
            price: "₹420"
        },
        {
            name: "Chocolate Cake",
            description: "Rich chocolate cake served by the slice.",
            price: "₹400"
        },
        {
            name: "Tiramisu",
            description: "Classic Italian dessert with coffee and mascarpone.",
            price: "₹450"
        },
        {
            name: "Seasonal Dessert",
            description: "A rotating dessert inspired by the season.",
            price: "₹420"
        }
    ]

};


/* =========================================================
   DOM ELEMENTS
========================================================= */

const menuGrid = document.getElementById("menuGrid");

const categoryButtons =
    document.querySelectorAll(".category-button");

const navbar =
    document.getElementById("navbar");

const menuToggle =
    document.getElementById("menuToggle");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");


/* =========================================================
   RENDER MENU
========================================================= */

function renderMenu(category) {

    if (!menuGrid) return;

    const items = menuData[category];

    if (!items) {
        menuGrid.innerHTML = `
            <p class="menu-empty">
                Menu coming soon.
            </p>
        `;

        return;
    }


    menuGrid.innerHTML = "";


    items.forEach((item, index) => {

        const menuItem =
            document.createElement("article");

        menuItem.className = "menu-item";

        menuItem.style.animationDelay =
            `${index * 0.06}s`;


        menuItem.innerHTML = `

            <div>

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.description}
                </p>

            </div>

            <span class="menu-price">
                ${item.price}
            </span>

        `;


        menuGrid.appendChild(menuItem);

    });

}


/* =========================================================
   CATEGORY BUTTONS
========================================================= */

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category =
            button.dataset.category;


        /* Remove active state */

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        /* Add active state */

        button.classList.add("active");


        /* Render selected category */

        renderMenu(category);

    });

});


/* =========================================================
   INITIAL MENU
========================================================= */

renderMenu("coffee");


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

function updateNavbar() {

    if (!navbar) return;


    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateNavbar
);


/* Run once when page loads */

updateNavbar();


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMobileMenu() {

    if (!mobileMenu) return;

    mobileMenu.classList.toggle("active");

    document.body.classList.toggle("menu-open");

}


if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        toggleMobileMenu
    );

}


/* =========================================================
   CLOSE MOBILE MENU
========================================================= */

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        document.body.classList.remove("menu-open");

    });

});


/* =========================================================
   ESC KEY CLOSES MOBILE MENU
========================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        if (mobileMenu) {
            mobileMenu.classList.remove("active");
        }

        document.body.classList.remove("menu-open");

    }

});


/* =========================================================
   PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
========================================================= */

const menuObserver = new MutationObserver(() => {

    if (!mobileMenu) return;


    if (mobileMenu.classList.contains("active")) {

        document.body.style.overflow = "hidden";

    } else {

        document.body.style.overflow = "";

    }

});


if (mobileMenu) {

    menuObserver.observe(
        mobileMenu,
        {
            attributes: true,
            attributeFilter: ["class"]
        }
    );

}


/* =========================================================
   SMOOTH INTERNAL LINKS
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const targetId =
            link.getAttribute("href");

        if (
            targetId === "#" ||
            targetId === ""
        ) {
            return;
        }


        const target =
            document.querySelector(targetId);


        if (!target) return;


        event.preventDefault();


        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================================
   SIMPLE IMAGE LAZY LOADING
========================================================= */

document.querySelectorAll("img").forEach(image => {

    image.setAttribute(
        "loading",
        "lazy"
    );

});


/* =========================================================
   HERO IMAGE LOAD EFFECT
========================================================= */

window.addEventListener("load", () => {

    const hero =
        document.querySelector(".hero");

    if (!hero) return;


    hero.classList.add("loaded");

});


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "Motherland Studios Café — Concept Website"
);

console.log(
    "Designed & developed by Amaan."
);
```
