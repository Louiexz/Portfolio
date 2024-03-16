document.getElementById('hover-text').addEventListener('click', function () {
  document.getElementById('pdf-iframe').style.display = 'block';
  document.getElementById('close-warning').style.display = 'block';
});

document.getElementById('hover-text').addEventListener('dblclick', function () {
  document.getElementById('pdf-iframe').style.display = 'none';
  document.getElementById('close-warning').style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function() {
  var data = new Date();
  var nascimento = new Date('2004-03-16');
  var idade = data.getFullYear() - nascimento.getFullYear();
  if (data.getMonth() < nascimento.getMonth() || (nascimento.getMonth() === data.getMonth() && data.getDate() < nascimento.getDate())) {
      idade--;
  }
  document.getElementById("idade").innerText = idade;
});

function trocaFoto() {
  const img = document.getElementById("me-img");

  if (img.src.endsWith("1.jpg")) {
    img.src = "img/eu/foto2.jpg";
  } else {
    img.src = "img/eu/foto1.jpg";
  }
};
document.getElementById("me-img").addEventListener("click", trocaFoto);
document.addEventListener("DOMContentLoaded", trocaFoto);
