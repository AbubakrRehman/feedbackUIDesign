const ratings__container = document.getElementById("ratings__container");
const ratingElements = document.querySelectorAll(".rating");
const sendBtn = document.getElementById("send");
const main__panel = document.getElementById("main__panel");
let selectedRating = 'Satisfied';

ratings__container.addEventListener("click", (e) => {

    if (e.target.parentNode.classList.contains("rating")) {
        removeActiveClasses();
        e.target.parentNode.classList.add("active");
        selectedRating = e.target.nextElementSibling.innerText;
    }
})

sendBtn.addEventListener("click", (e) => {

    main__panel.innerHTML = `<i class="feedback__text fa-solid fa-heart"></i>
    <p class="feedback__text">Thank You!</p>
    <p class="feedback__text">Feedback: ${selectedRating}</p>
    <p class="feedback__text" >We'll use your feedback to imrove our customer support</p>`;
})

function removeActiveClasses() {
    ratingElements.forEach((ratingElement) => {
        ratingElement.classList.remove("active");
    })
}



