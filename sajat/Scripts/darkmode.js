document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode gomb létrehozása
    const darkModeToggle = document.createElement('button');
    darkModeToggle.id = 'dark-mode-toggle';
    darkModeToggle.innerHTML = '🌙 Dark Mode';
    
    // Gomb hozzáadása a menühöz
    const menuSection = document.querySelector('.menu-section');
    if (menuSection) {
        menuSection.appendChild(darkModeToggle);
    }
    
    // Dark Mode állapot ellenőrzése
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '☀️ Light Mode';
    }
    
    // Kattintás kezelése
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.innerHTML = '☀️ Light Mode';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.innerHTML = '🌙 Dark Mode';
        }
    });
});