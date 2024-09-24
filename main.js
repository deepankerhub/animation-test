document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.illis-section-title');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('title-animation');
                observer.unobserve(entry.target);  // Stop observing once animated
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => observer.observe(element));
});


document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.illstrations-bg');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animating-pop-up-img');
                observer.unobserve(entry.target);  // Stop observing once animated
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => observer.observe(element));
});