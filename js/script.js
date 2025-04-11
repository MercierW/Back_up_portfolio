const text = `< "Hey, moi c’est William – designer UI & développeur qui jongle entre pixels et lignes de code.
Bienvenue dans mon univers, où chaque détail compte (et où le café coule à flots) !" >`;

const speed = 50; // adjust typing speed
const target = document.getElementById("presentation");
let index = 0;
let caract;
let timeOutID;

function typeWriter() {
    if(index > 96 && index < 106) {
            caract = text.charAt(index)
            target.innerHTML += `<span class="bold">${caract}</span>`
            index++
            timeOutID = setTimeout(typeWriter, speed)
        }else {
            target.innerHTML += text.charAt(index)
            index++
            timeOutID = setTimeout(typeWriter, speed)
        if(index >= 195) {
                clearTimeout(timeOutID)
            }
        }
    }

// Start the typewriter effect when the page loads
window.onload = typeWriter;