let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName) {
    cart.push(productName);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showToast(productName + " added to cart ✅");
}

function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}

// Toast Notification بدل الـ alert
function showToast(message) {
    let toast = document.createElement("div");
    toast.textContent = message;
    toast.className = "toast";
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 100); 
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// أول ما الصفحة تفتح يحدث العداد
updateCartCount();