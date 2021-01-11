/*window.onload = () => {
    document.querySelector(".numero").innerHTML = cardNumber();
    document.querySelector(".card").classList.add(cardType());
    if (document.querySelector(".numero")=== "10"){
        document.querySelector("span").style.left = "80px"
    }
}*/

const cardNumber = () =>{
    let cardNumbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
    let num = Math.floor(Math.random()*cardNumbers.length)
    return cardNumbers[num]
}

const cardType = () =>{
    let cardTypes = ["hearts", "spades", "diamonds", "clubs"]
    let num = Math.floor(Math.random()*cardTypes.length)
    return cardTypes[num]
}

let input = document.querySelector(".cartas");
let btnDraw = document.querySelector(".draw");
let btnSort = document.querySelector(".sort");
let borrar = document.querySelector(".delete");

btnDraw.addEventListener("click", (e)=>{
    /*if (input.value !==""){
        numCartas = parseInt(input.value);
        cardArray = [];
        let i = 0;
        while (i<numCartas){

        }
    }*/
    let newSpan = document.createElement("span");
    let newDiv = document.createElement("div");
    newSpan.classList.add("numero");
    newDiv.classList.add("miniCard");
    newDiv.classList.add(cardType());
    newDiv.classList.add("d-flex");
    newSpan.innerHTML = cardNumber();
    newDiv.appendChild(newSpan)
    document.body.appendChild(newDiv)

})

