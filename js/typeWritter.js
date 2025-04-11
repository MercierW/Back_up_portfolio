export class Writter {
    constructor(text, targetId, speed) {
        this.text = text;
        this.target = document.getElementById(targetId);
        this.speed = speed;
        this.index = 0;
        this.timeOutID = null;
    }
    typeWritter = () => {
        if (this.index > 96 && this.index < 110) {
            const caract = this.text.charAt(this.index);
            this.target.innerHTML += `<span class="bold">${caract}</span>`;
        } else {
            this.target.innerHTML += this.text.charAt(this.index);
        }

        this.index++;

        if (this.index < this.text.length) {
            this.timeOutID = setTimeout(this.typeWritter, this.speed);
        } else {
            clearTimeout(this.timeOutID);
        }
    }
}