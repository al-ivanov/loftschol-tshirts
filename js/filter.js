document.addEventListener("DOMContentLoaded", () => {
    const elem = document.querySelector('.products__list');
    let iso = new Isotope( elem, {
        itemSelector: '.products__item',
    });

    const controlls = document.querySelectorAll('.filter__link');
    const activeClass = "filter__item--active"

    controlls.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            const filterName = item.getAttribute("data-filter");

            iso.arrange({
                filter: `.${filterName}`
            });

            controlls.forEach(item => {
                item.closest(".filter__item").classList.remove(activeClass);
            })

            item.closest(".filter__item").classList.add(activeClass);
        });
    });

});