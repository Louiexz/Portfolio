export class UteisFuncts {
    constructor () {
        
    }

    getYear() {
        var data = new Date();
        const nascimento = new Date('2004-03-16');
        var idade = data.getFullYear() - nascimento.getFullYear();  
        
        if (data.getMonth() < nascimento.getMonth() || (nascimento.getMonth() === data.getMonth() && data.getDate() < nascimento.getDate())) {
            idade--;
        }
        document.getElementById("idade").innerText = idade;
    }
    
    trocaFoto() {
        var img = document.getElementById("me-img");

        if (img.src.endsWith("2.jpg")) {
            img.src = "../img/eu/foto1.jpg";
        } else {
            img.src = "../img/eu/foto2.jpg";
        }
    }
}
