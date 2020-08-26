const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");
const eachCard = document.querySelector(".card");

function changeModal(card) {
    modalOverlay.querySelector(".modal-imagem").src = card.querySelector(".imagem").src;
    modalOverlay.querySelector(".modal-owner").innerText = card.querySelector(".owner").innerText;
    modalOverlay.querySelector(".modal-name").innerText = card.querySelector(".name").innerText;
    modalOverlay.querySelector("#modal-cardImg").src = card.querySelector("#cardImg").src;

}

for(let card of cards){
    card.addEventListener("click", function(){
        modalOverlay.classList.add('active')
        changeModal(card);
    })

}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})

