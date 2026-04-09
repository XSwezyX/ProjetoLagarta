document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));

        if (index >= slides.length) currentIndex = 0;
        else if (index < 0) currentIndex = slides.length - 1;
        else currentIndex = index;

        slides[currentIndex].classList.add('active');
    }

    // Auto-play (troca a cada 5 segundos)
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);
});
