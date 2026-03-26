document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    let currentIndex = 0;

    function showSlide(index) {
        // Remove a classe active de todas as imagens
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Garante que o índice volte ao início ou ao fim (loop infinito)
        if (index >= slides.length) currentIndex = 0;
        else if (index < 0) currentIndex = slides.length - 1;
        else currentIndex = index;

        // Adiciona a classe active na imagem atual
        slides[currentIndex].classList.add('active');
    }

    // Eventos dos botões
    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    // Opcional: Auto-play (passa sozinho a cada 5 segundos)
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
});