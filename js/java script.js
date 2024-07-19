document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = slider.children;
    let index = 0;

    const showNextSlide = () => {
        index = (index + 1) % slides.length;
        const offset = index * slides[0].clientWidth;
        slider.scrollTo({
            left: offset,
            behavior: 'smooth'
        });
    };

    setInterval(showNextSlide, 5000); 
});