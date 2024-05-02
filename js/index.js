import { UteisFuncts } from "./components/uteis.js";

const uteis = new UteisFuncts();
/*
// Carrega a foto na página home
if (window.location.pathname.includes('index.html')) {
    document.addEventListener("DOMContentLoaded", uteis.trocaFoto);
    document.getElementById("me-img").addEventListener("click", uteis.trocaFoto);
}*/

// Atualiza idade na página sobre
document.addEventListener("DOMContentLoaded", uteis.getYear)
