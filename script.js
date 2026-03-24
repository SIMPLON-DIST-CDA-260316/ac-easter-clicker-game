const accueil = document.querySelector(".accueil");
const niveau1 = document.querySelector(".niveau1");
const niveau2 = document.querySelector(".niveau2");
const niveau3 = document.querySelector(".niveau3");
const gameArea = document.querySelector(".game-area");
const scoreDisplay1 = document.querySelector("#score1");
const timerDisplay1 = document.querySelector("#timer1");


const btnNiveau1 = document.querySelector(".btn-niveau1");
const btnNiveau2 = document.querySelector(".btn-niveau2");
const btnNiveau3 = document.querySelector(".btn-niveau3");

btnNiveau1.addEventListener("click", () => {
  accueil.style.display = "none";
  niveau1.style.display = "block";
});

btnNiveau2.addEventListener("click", () => {
  accueil.style.display = "none";
  niveau2.style.display = "block";
});

btnNiveau3.addEventListener("click", () => {
  accueil.style.display = "none";
  niveau3.style.display = "block";
});

imgArray = [
    "images/egg1.png",
    "images/egg2.png",
    "images/poussin.png",
    "images/bunny.png",
    "images/cookie.png",
    "images/redcandy.png",
];


function randomEgg() {
    const randomIndex = Math.floor(Math.random() * imgArray.length);
    return imgArray[randomIndex];
}
let score = 0;
let timer = 60;

showTimer();
function showTimer() {
    const timerInterval = setInterval(() => {
        timer--;
        timerDisplay1.textContent = timer;
        if (timer <= 0) {
            clearInterval(timerInterval);
            clearInterval(eggInterval);
            alert("Temps écoulé ! Votre score est : " + score);
            // Réinitialiser le jeu ou rediriger vers l'accueil
            location.reload();
        }
    }, 1000);
    }

function showEgg() { 
    const egg = document.createElement("img");
    egg.src = randomEgg();
    gameArea.appendChild(egg);
    egg.style.top = Math.random() * (200) + "px";
    egg.style.left = Math.random() * (400) + "px";

    setTimeout(() => {
        egg.remove();
    }, 3000);
    egg.addEventListener("click", () => {
        egg.remove();
        if (egg.src.includes("images/cookie.png") || egg.src.includes("images/redcandy.png")) {
            score += 5;
        }
        else if (egg.src.includes("images/poussin.png") || egg.src.includes("images/bunny.png")) {
            score -= 2;
        }
        else {
            score++;
        }
        scoreDisplay1.textContent = score;
        
    });
}

eggInterval = setInterval(showEgg, 1500);