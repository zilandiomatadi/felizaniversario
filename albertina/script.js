const openGift = document.getElementById("openGift");
const welcome = document.getElementById("welcome");
const backgroundMusic = document.getElementById("backgroundMusic");

function startMusic() {
    if (!backgroundMusic) return;

    backgroundMusic.volume = 0.65;

    const playPromise = backgroundMusic.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            // O navegador pode bloquear autoplay.
            // O clique no botão abaixo tenta iniciar novamente.
        });
    }
}

// Tenta começar a música assim que a página abre.
window.addEventListener("load", startMusic);

// O clique conta como interação do utilizador e aumenta
// a possibilidade de o navegador permitir o áudio.
openGift.addEventListener("click", () => {
    startMusic();

    welcome.scrollIntoView({
        behavior: "smooth"
    });
});
