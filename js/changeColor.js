document.addEventListener("DOMContentLoaded", () => {
    let activeImg = document.querySelector(".tsherts-choice__img").src;

    document.querySelector(".tshirt-choice__color__list").querySelectorAll('input').forEach( item => {
        item.addEventListener("click", function() {
            let colorId = this.dataset.id;
            let srcArr = activeImg.split("");
            srcArr.splice(-6, 2, colorId);

            document.querySelector(".tsherts-choice__img").src = srcArr.join("");

        });

    });

});