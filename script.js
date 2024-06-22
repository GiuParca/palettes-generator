const buttons = document.querySelectorAll(".change-color");
const canvas = document.querySelectorAll(".div-color");
const buttonRandom = document.getElementById("random-pallete");


canvas.forEach(div => {
    const button = div.querySelector(".change-color");
    button.addEventListener('click', (event) => {
        event.preventDefault();
        let hexRef = `${getHexRef()}`;
        div.style.background = hexRef;
        const p = div.querySelector("p");
        p.innerText = hexRef;
    })
})

function getHexRef() {
    const hexCharacters = "0123456789abcdef";
    let hexRef = "#";

    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * hexCharacters.length)
        let character = hexCharacters[index];
        hexRef += character;
    }

    return hexRef;
}

buttonRandom.addEventListener('click', (event) => {
    event.preventDefault();
    buttons.forEach(button => button.click());
})



function copyHexRef() {
    document.querySelectorAll('.btn-copy').addEventListener('click', copyHexRef);


    document.querySelectorAll(`${getHexRef()}`).select();
    document.execCommand('copy');
}

