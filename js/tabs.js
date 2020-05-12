document.addEventListener("DOMContentLoaded", () => {
    let tabLinks = document.querySelectorAll(".filter__link");
    let tabs = document.querySelectorAll(".tab__item");
    let currentTab, tabToShow;

    tabLinks.forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();

            tabLinks.forEach(item => {
                item.parentNode.classList.remove("filter__item--active");
            });
            this.parentNode.classList.add("filter__item--active");

            currentTab = this.dataset.filter;
            tabToShow = document.querySelector(`.${currentTab}`);
            tabs.forEach(items => {
                items.classList.remove("tab__item--active");
            });
            tabToShow.classList.add("tab__item--active");
        });
    })
});