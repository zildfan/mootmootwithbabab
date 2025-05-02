document.addEventListener('DOMContentLoaded', function() {
    // Calculate months together (update the start date)
    const startDate = new Date('2023-01-01'); // Change to your actual start date
    const today = new Date();
    const monthsTogether = Math.floor((today - startDate) / (1000 * 60 * 60 * 24 * 30));
    
    // Update month count in the page
    document.getElementById('months-count').textContent = monthsTogether;
    document.getElementById('months-text').textContent = monthsTogether;
    
    // Surprise button functionality
    const surpriseBtn = document.getElementById('surprise-btn');
    const surpriseElement = document.getElementById('surprise');
    
    surpriseBtn.addEventListener('click', function() {
        surpriseElement.classList.toggle('hidden');
        createHearts();
    });
    
    // Create floating hearts
    function createHearts() {
        const colors = ['#ff4081', '#ff6b8b', '#ff8fab', '#ffb3c6'];
        const container = document.querySelector('.floating-hearts');
        
        // Clear previous hearts
        container.innerHTML = '';
        
        // Create new hearts
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            heart.style.animation = `float ${Math.random() * 3 + 2}s linear forwards`;
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            container.appendChild(heart);
        }
    }
    
    // Create some initial floating hearts
    createHearts();
});

document.addEventListener('DOMContentLoaded', function() {
    // Surprise button functionality
    const surpriseBtn = document.getElementById('surprise-btn');
    const surpriseElement = document.getElementById('surprise');
    
    surpriseBtn.addEventListener('click', function() {
        surpriseElement.classList.toggle('hidden');
        createHearts();
    });
    
    // Create floating hearts
    function createHearts() {
        const colors = ['#ff4081', '#ff6b8b', '#ff8fab', '#ffb3c6'];
        const container = document.querySelector('.floating-hearts');
        
        // Clear previous hearts
        container.innerHTML = '';
        
        // Create new hearts
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            heart.style.animation = `float ${Math.random() * 3 + 2}s linear forwards`;
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            container.appendChild(heart);
        }
    }
});