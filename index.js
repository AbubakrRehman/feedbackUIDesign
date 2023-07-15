const ratings__container = document.getElementById("ratings__container");
const ratingElements = document.querySelectorAll(".rating");
const sendBtn = document.getElementById("send");
const main__panel = document.getElementById("main__panel")

ratings__container.addEventListener("click", (e) => {
    removeActiveClasses();
    if (e.target.parentNode.classList.contains("rating")) {
        e.target.parentNode.classList.add("active");
    }
})

sendBtn.addEventListener("click", (e) => {
    main__panel.innerHTML = `<i class="feedback__text fa-solid fa-heart"></i>
    <p class="feedback__text">Thank You!</p>
    <p class="feedback__text">Feedback: Neutral</p>
    <p class="feedback__text" >We'll use your feedback to imrove our customer support</p>`;
})

function removeActiveClasses() {
    ratingElements.forEach((ratingElement) => {
        ratingElement.classList.remove("active");
    })
}



