const cards = document.querySelectorAll(".card");

const ingredients = document.querySelector(".ingredients");

const verification = document.querySelectorAll(".beginInformation")



for(let card of cards){
    card.addEventListener("click", function(){
        const pageId = card.getAttribute("id");

        window.location.href = `/pageRecipes?id=${pageId}`

        if(document.getElementsByClassName(".eachOne").value === ""){       // Essa é a programação de aparecer e sumir
            verification.classList.add(".removeInformation")                // as informações adicionais( especificamente nas linhas 15, 16 e 17)
        }

    })
    
}

    