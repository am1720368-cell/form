document.addEventListener("DOMContentLoaded", loadCart);

function loadCart() {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let cartList = document.getElementById("cart-items");
    let emptyMessage = document.getElementById("empty-message");

    if (cartItems.length === 0) {
        emptyMessage.style.display = "block";
        return;
    }

    emptyMessage.style.display = "none";

    cartItems.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
    });
}

function clearCart() {
    localStorage.removeItem("cart");
    window.location.reload();
}

function checkout() {
    alert("Thank you for your purchase! ✅");
    localStorage.removeItem("cart");
    window.location.reload();
}