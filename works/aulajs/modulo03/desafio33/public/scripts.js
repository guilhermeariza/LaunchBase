const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal')

for(let card of cards){
    card.addEventListener("click", function(){
        const pageId = card.getAttribute("id");

        window.location.href = `/course?id=${pageId}`
    })
}


document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})

document.querySelector(".maximize").addEventListener("click", function(){
    modal.classList.add("max")
})

document.querySelector(".minimize").addEventListener("click", function(){
    modal.classList.remove("max")
})


