// Navigation bar
const burgerButton = document.querySelector('.nav__burger');
const nav = document.querySelector('.nav');

burgerButton.addEventListener('click', () => {
    nav.classList.toggle('nav_open');
});

// FAQ page
const faqButtons = document.querySelectorAll('.button_faq');

faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.closest('.faq-item');
        if (faqItem) {
            faqItem.classList.toggle('faq-item_open');
        }
    });
});


// Catalog page
const filters = document.querySelectorAll('.filter');

filters.forEach(filter => {
    const header = filter.querySelector('.filter__header');
    if (header) {
        header.addEventListener('click', () => {
            filter.classList.toggle('filter_open');
        });
    }
});

const filtersButton = document.querySelector('.button_display-filters');
const filtersBlock = document.querySelector('.search__filters');

filtersButton.addEventListener('click', (e) => {
    e.stopPropagation();
    filtersBlock.classList.toggle('search__filters_open');
});


filtersBlock.addEventListener('click', (e) => {
    e.stopPropagation();
});


document.addEventListener('click', () => {
    filtersBlock.classList.remove('search__filters_open');
});