
const introScene = document.getElementById("introScene");
const envelopeScene = document.getElementById("envelopeScene");
const envelope = document.getElementById("envelope");
const letterScene = document.getElementById("letterScene");
const anchorMusic = document.getElementById("anchorMusic");

let envelopeOpened = false;


/* =========================================
   MOSTRAR O ENVELOPE
========================================= */

setTimeout(() => {

    introScene.style.opacity = "0";
    introScene.style.transition = "opacity 1s ease";

    setTimeout(() => {

        introScene.style.display = "none";

        envelopeScene.classList.add("visible");

    }, 1000);

}, 6000);


/* =========================================
   ABRIR A CARTA
========================================= */

function openLetter() {

    if (envelopeOpened) return;

    envelopeOpened = true;

    envelope.classList.add("open");

    /*
        Esperamos o envelope abrir
        antes de mostrar o papel.
    */

    setTimeout(() => {

        envelopeScene.style.opacity = "0";

        setTimeout(() => {

            envelopeScene.style.display = "none";

            letterScene.classList.add("visible");

            startAnchor();

        }, 700);

    }, 1300);
}


/* =========================================
   CLIQUE NO ENVELOPE
========================================= */

envelope.addEventListener("click", openLetter);


/* =========================================
   TECLADO
========================================= */

envelope.addEventListener("keydown", (event) => {

    if (
        event.key === "Enter" ||
        event.key === " "
    ) {

        event.preventDefault();

        openLetter();
    }

});


/* =========================================
   ANCHOR
========================================= */

function startAnchor() {

    if (!anchorMusic) return;

    anchorMusic.volume = 0.65;

    anchorMusic.play()
        .catch(() => {

            /*
                Alguns navegadores podem bloquear
                o áudio. Como o clique no envelope
                já aconteceu, normalmente o play
                será permitido.
            */

            console.log(
                "O navegador bloqueou o início automático da música."
            );

        });

}

