
//File: app.ts
//Author: Ács Bence
//Copyright: 2024, Ács Bence
//Group: Szoft-2-N
//Date: 2024-05-30
//Github: https://github.com/acsbence2023/
//Licenc: GNU GPL
class Atlo {
    aSide?: HTMLInputElement | null;
    bSide?: HTMLInputElement | null;
    diagonal?: HTMLInputElement | null;
    calcButton?: HTMLButtonElement | null;

    constructor(){
        this.bindHtml();
        this.handleEvent();
    }

    bindHtml(){
        this.aSide = document.querySelector('#aSide');
        this.bSide = document.querySelector('#bSide');
        this.diagonal = document.querySelector('#diagonal');
        this.calcButton = document.querySelector('#calcButton');
    }

    handleEvent(){
        this.calcButton?.addEventListener("click", () => {
            console.log('működik');
            this.startCalc();    
        });
    }

    startCalc(){
        const aSide = Number(this.aSide?.value);
        const bSide = Number(this.bSide?.value);
        const diagonal = this.caclDiagonal(aSide, bSide);
        this.diagonal!.value = String(diagonal);
    }

    caclDiagonal(aSide: number, bSide: number): number{
        return Math.sqrt(aSide * aSide + bSide * bSide);
    }
}

new Atlo();