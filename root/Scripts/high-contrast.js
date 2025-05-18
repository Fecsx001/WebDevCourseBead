// Toggle high contrast mode
function toggleHighContrast() {
    document.body.classList.toggle("high-contrast");

    // Save preference in localStorage
    if (document.body.classList.contains("high-contrast")) {
        localStorage.setItem("contrast", "high");
    } else {
        localStorage.removeItem("contrast");
    }
}

// Apply saved preference on load
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("contrast") === "high") {
        document.body.classList.add("high-contrast");
    }

    // Add contrast toggle button if not already added
    if (!document.getElementById("contrast-toggle")) {
        const btn = document.createElement("button");
        btn.id = "contrast-toggle";
        btn.textContent = "🌓 Kontraszt";
        btn.style.cssText = `
            position: fixed;
            bottom: 80px;
            right: 20px;
            z-index: 9999;
            background-color: #000;
            color: #FFD700;
            border: 2px solid #FFD700;
            padding: 10px 15px;
            border-radius: 10px;
            font-weight: bold;
            cursor: pointer;
        `;
        btn.onclick = toggleHighContrast;
        document.body.appendChild(btn);
    }
});
