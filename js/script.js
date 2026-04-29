
    window.addEventListener("scroll", function () {
        let navbar = document.getElementById("navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // // 2️⃣ Sign Up Button
    // document.getElementById("signupBtn").onclick = function () {
    //     alert("Sign Up coming soon!");
x    // };

    // 3️⃣ Read More Button
    document.getElementById("readBtn").onclick = function () {
        alert("More content coming soon!");
    };

    // 4️⃣ Add to Cart Toast
    let toastTimer;
    function addToCart(name) {
        const toast = document.getElementById("toast");
        const msg   = document.getElementById("toastMsg");
        msg.textContent = `"${name}" added to cart!`;
        toast.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
    }


let slider = document.getElementById("slider");

let scrollAmount = 0;

setInterval(()=>{

scrollAmount += 280;

if(scrollAmount >= slider.scrollWidth - 800){
scrollAmount = 0;
}

slider.style.transform = `translateX(-${scrollAmount}px)`;

},3000);

window.addEventListener("scroll", function(){

let navbar = document.querySelector(".navbar");

if(window.scrollY > 50){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}

});