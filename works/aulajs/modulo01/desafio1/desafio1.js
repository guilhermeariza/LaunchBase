const nome = 'Joaco';
const peso = 75;
const altura = 1.60;

const IMC = peso/(altura * altura)

console.log(`Seu IMC é de: ${IMC}`);

if(IMC >= 30) {
    console.log("Pobre Joaco, está acima do peso!")
} else{
    console.log("Tá magrinho em!")
}