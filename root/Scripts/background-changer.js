document.addEventListener('DOMContentLoaded', function() {
    const backgrounds = [
        "Képek/autok/mclaren.jpg",
        "Képek/autok/Ferrari.jpg",
        "Képek/autok/red-bull.jpg",
        "Képek/autok/mercedes.jpg",
        "Képek/autok/aston.jpg",
        "Képek/autok/alpine.jpg",
        "Képek/autok/rb.jpg",
        "Képek/autok/haas.jpg",
        "Képek/autok/williams.jpg",
        "Képek/autok/sauber.jpg"
    ];

    const bgChangeButton = document.createElement('button');
    bgChangeButton.id = 'bg-change-button';
    bgChangeButton.innerHTML = 'Change Background';
    bgChangeButton.title = 'Change Background Image';
    
    const header = document.querySelector('.header');
    if (header) {
        header.appendChild(bgChangeButton);
    } else {
        document.body.insertBefore(bgChangeButton, document.body.firstChild);
    }
    
    const savedBg = localStorage.getItem('background');
    if (savedBg) {
        document.documentElement.style.backgroundImage = `url(${savedBg})`;
    }
    
    bgChangeButton.addEventListener('click', function() {
        const currentBg = document.documentElement.style.backgroundImage || 
                         getComputedStyle(document.documentElement).backgroundImage;
        
        let currentIndex = 0;
        for (let i = 0; i < backgrounds.length; i++) {
            if (currentBg.includes(backgrounds[i])) {
                currentIndex = i;
                break;
            }
        }
        
        const nextIndex = (currentIndex + 1) % backgrounds.length;
        const nextBg = backgrounds[nextIndex];
        
        document.documentElement.style.backgroundImage = `url(${nextBg})`;

        localStorage.setItem('background', nextBg);
    });
});