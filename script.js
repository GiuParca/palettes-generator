const buttons = document.querySelectorAll(".change-color");
const canvas = document.querySelectorAll(".div-color");
const buttonRandom = document.getElementById("random-pallete");
const copyBtns = document.querySelectorAll('.btn-copy-hex-ref');

canvas.forEach(div => {
    const button = div.querySelector(".change-color");
    button.addEventListener('click', (event) => {
        event.preventDefault();
        let hexRef = `${getHexRef()}`;
        div.style.background = hexRef;
        const p = div.querySelector("p");
        p.innerText = hexRef;
        p.appendChild(div.querySelector('.btn-copy-hex-ref'));
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

copyBtns.forEach(copyBtn => {
    copyBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const colorRef = copyBtn.parentElement.innerText.replace('Copy', '').trim(); // Remove 'Copy' text
        navigator.clipboard.writeText(colorRef).then(() => {
            copyBtn.innerText = 'Copied';
            setTimeout(() => copyBtn.innerText = 'Copy', 1500);
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    });
});


