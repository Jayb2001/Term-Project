document.addEventListener("DOMContentLoaded", function () {
    const cartToggle = document.getElementById("cart-toggle");
    const cartClose = document.getElementById("cart-close");
    const cartPopup = document.getElementById("cart-popup");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    let cart = [];

    function updateCartUI() {
        cartItemsContainer.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            let listItem = document.createElement("li");
            listItem.classList.add("cart-item");
            listItem.innerHTML = `
                <span>${item.name} - $${item.price}</span>
                <button class="remove-item" data-index="${index}">&times;</button>
            `; 
            cartItemsContainer.appendChild(listItem);
            total += parseFloat(item.price);
        });

        cartTotal.textContent = total.toFixed(2);
        cartCount.textContent = cart.length;

        // remove buttons stuff
        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", function () {
                let itemIndex = this.getAttribute("data-index");
                cart.splice(itemIndex, 1);
                updateCartUI();
            });
        });
    }

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            let itemName = this.getAttribute("data-name");
            let itemPrice = this.getAttribute("data-price");

            cart.push({ name: itemName, price: itemPrice });
            updateCartUI();
            cartPopup.classList.add("show");
        });
    });

    cartToggle.addEventListener("click", function (event) {
        event.preventDefault();
        cartPopup.classList.toggle("show");
    });

    cartClose.addEventListener("click", function () {
        cartPopup.classList.remove("show");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const quizPopup = document.getElementById("quiz-popup");
    const openQuizBtn = document.getElementById("open-quiz");
    const closeQuizBtn = document.querySelector(".close-quiz");
    const quizOptions = document.querySelectorAll(".quiz-option");
    const quizResult = document.getElementById("quiz-result");

    // quiz popup 
    setTimeout(() => {
        quizPopup.style.display = "block";
    }, 2000); 

    // close quiz popup
    closeQuizBtn.addEventListener("click", function () {
        quizPopup.style.display = "none";
    });

    
    quizOptions.forEach(option => {
        option.addEventListener("click", function () {
            const answer = this.getAttribute("data-answer");

            if (answer === "relaxing") {
                quizResult.innerText = "We recommend the Serenity Candle!";
            } else if (answer === "romantic") {
                quizResult.innerText = "Try the Seduction Candle for a cozy atmosphere.";
            } else if (answer === "energizing") {
                quizResult.innerText = "Opulence Candle is perfect for an uplifting scent!";
            }

            // Hide buttons after selection
            document.getElementById("quiz-questions").style.display = "none";
        });
    });
});
