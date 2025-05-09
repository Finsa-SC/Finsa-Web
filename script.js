document.addEventListener('DOMContentLoaded', function() {
    // Portfolio Carousel Auto Scroll
    const portfolioTrack = document.querySelector('.portfolio-track');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const wrapper = document.querySelector('.certificate-wrapper');
    const cards = Array.from(wrapper.children);
    const prevBtn = document.getElementById('prevCert');
    const nextBtn = document.getElementById('nextCert');
    const audio = document.getElementById('bg-music');
    const btn = document.getElementById('play-music-btn');


    btn.addEventListener('click', () => {
        audio.play().then(() => {
            btn.style.display = 'none'; // sembunyikan tombol setelah dipakai
        }).catch((err) => {
            console.error("Playback error:", err);
        });
    });

    let currentIndex = 0;

    function updateCarousel() {
        cards.forEach((card, index) => {
            card.classList.remove('active', 'left', 'right');
            card.style.transform = 'scale(0.8)';
            card.style.opacity = '0.3';
            card.style.zIndex = 1;

            if (index === currentIndex) {
                card.classList.add('active');
                card.style.transform = 'scale(1)';
                card.style.opacity = '1';
                card.style.zIndex = 3;
            } else if (index === currentIndex - 1 || (currentIndex === 0 && index === cards.length - 1)) {
                card.classList.add('left');
                card.style.zIndex = 2;
            } else if (index === currentIndex + 1 || (currentIndex === cards.length - 1 && index === 0)) {
                card.classList.add('right');
                card.style.zIndex = 2;
            }
        });

        // Scroll to center
        const container = document.querySelector('.certificate-container');
        const activeCard = cards[currentIndex];
        const offset = activeCard.offsetLeft - (container.offsetWidth / 2 - activeCard.offsetWidth / 2);
        wrapper.style.transform = `translateX(-${offset}px)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
    
    if (portfolioTrack && portfolioItems.length > 0) {
        // Clone items for continuous scrolling
        portfolioItems.forEach(item => {
            const clone = item.cloneNode(true);
            portfolioTrack.appendChild(clone);
        });
        
        // Calculate total width
        const itemWidth = portfolioItems[0].offsetWidth + 
                          parseInt(window.getComputedStyle(portfolioItems[0]).marginLeft) + 
                          parseInt(window.getComputedStyle(portfolioItems[0]).marginRight);
        const totalWidth = itemWidth * portfolioItems.length;

        // Set initial position
        portfolioTrack.style.transform = `translateX(-${itemWidth}px)`;

        // Auto scroll
        let scrollPosition = 0;
        const totalScrollWidth = itemWidth * portfolioItems.length;

        const scrollInterval = setInterval(() => {
            scrollPosition += 1;
            if (scrollPosition >= totalScrollWidth) {
                scrollPosition = 0;
            }
            portfolioTrack.style.transform = `translateX(-${scrollPosition}px)`;
        }, 16);
    }
});