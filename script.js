function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-20px";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 250);

/* Click effect */
document.addEventListener("click", (e) => {
    for (let i = 0; i < 5; i++) {
        const spark = document.createElement("div");
        spark.className = "heart";
        spark.innerHTML = "💖";
        spark.style.left = e.clientX + "px";
        spark.style.top = e.clientY + "px";
        spark.style.fontSize = "14px";
        document.body.appendChild(spark);

        setTimeout(() => spark.remove(), 3000);
    }
});
