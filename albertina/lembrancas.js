const memories =
    document.querySelectorAll(".memory-showcase");

const nextMemory =
    document.getElementById("nextMemory");

const buttonText =
    document.getElementById("buttonText");

const currentMemory =
    document.getElementById("currentMemory");

const progressBar =
    document.getElementById("progressBar");

const memoryMusic =
    document.getElementById("memoryMusic");

const musicStatus =
    document.getElementById("musicStatus");


let currentIndex = 0;


/* ================================
   MÚSICA
================================ */

function startMemoryMusic() {

    if (!memoryMusic) return;

    memoryMusic.volume = 0.65;

    memoryMusic.play()
        .then(() => {

            musicStatus.textContent =
                "♫ Não Vai Nem Lembrar";

            musicStatus.classList.add("playing");

        })
        .catch(() => {

            musicStatus.textContent =
                "♫ toca ao interagir com a página";

        });

}


window.addEventListener(
    "load",
    startMemoryMusic
);


document.addEventListener(
    "click",
    () => {

        if (memoryMusic.paused) {

            startMemoryMusic();

        }

    },
    { once: true }
);


/* ================================
   TROCAR MEMÓRIA
================================ */

function showMemory(newIndex) {

    if (
        newIndex < 0 ||
        newIndex >= memories.length
    ) {
        return;
    }


    const oldMemory =
        memories[currentIndex];

    const newMemory =
        memories[newIndex];


    if (oldMemory === newMemory) {
        return;
    }


    oldMemory.classList.remove("active");

    newMemory.classList.remove(
        "effect-classic",
        "effect-flower",
        "effect-polaroid",
        "effect-soft",
        "effect-jealousy",
        "effect-film",
        "effect-glow",
        "effect-special",
        "effect-cinema",
        "effect-hearts",
        "effect-vintage"
    );


    newMemory.classList.add("active");


    currentIndex = newIndex;


    updateInterface();


    window.scrollTo({

        top:
            document.querySelector(
                ".memories-container"
            ).offsetTop - 40,

        behavior: "smooth"

    });

}


/* ================================
   INTERFACE
================================ */

function updateInterface() {

    const number =
        String(currentIndex + 1)
        .padStart(2, "0");


    currentMemory.textContent =
        number;


    const progress =
        ((currentIndex + 1) / memories.length) * 100;


    progressBar.style.width =
        `${progress}%`;


    if (
        currentIndex ===
        memories.length - 1
    ) {

        buttonText.textContent =
            "Ir para a carta";

        nextMemory.querySelector(".arrow")
            .textContent = "→";

    } else {

        buttonText.textContent =
            "Próxima lembrança";

        nextMemory.querySelector(".arrow")
            .textContent = "↓";

    }

}


/* ================================
   BOTÃO
================================ */

nextMemory.addEventListener(
    "click",
    () => {

        if (
            currentIndex <
            memories.length - 1
        ) {

            showMemory(
                currentIndex + 1
            );

        } else {

            /* =========================
               ÚLTIMA MEMÓRIA → CARTA
            ========================= */

            const codigo = prompt(
                "Antes de abrir a última lembrança... 💜\n\nDigite o código:"
            );

            if (
                codigo &&
                codigo.trim().toLowerCase() === "alziane"
            ) {

                window.location.href =
                    "carta.html";

            } else {

                alert(
                    "Código incorreto. 💜"
                );

            }

        }

    }
);


/* ================================
   TECLADO
================================ */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "ArrowRight" ||
            event.key === "ArrowDown"
        ) {

            if (
                currentIndex <
                memories.length - 1
            ) {

                showMemory(
                    currentIndex + 1
                );

            }

        }


        if (
            event.key === "ArrowLeft" ||
            event.key === "ArrowUp"
        ) {

            if (
                currentIndex > 0
            ) {

                showMemory(
                    currentIndex - 1
                );

            }

        }

    }
);


/* ================================
   INICIALIZAÇÃO
================================ */

updateInterface();