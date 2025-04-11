import { Writter } from './typeWritter.js'; // si ton fichier s'appelle writter.js

window.addEventListener("DOMContentLoaded",()=>{
    const text = `< "Hey, moi c’est William – designer UI & développeur qui jongle entre pixels et lignes de code.
    Bienvenue dans mon univers, où chaque détail compte (et où le café coule à flots) !" >`;
    const targetId = "presentation";
    const speed = 50;
    const writer = new Writter(text, targetId, speed);
    writer.typeWritter();
})