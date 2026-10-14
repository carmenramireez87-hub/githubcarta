// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const title = document.getElementById("letter-title");

//click envelope
envelope.addEventListener("click", () => { 
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
} );



