document.getElementById('hover-text').addEventListener('click', function () {
  document.getElementById('pdf-iframe').style.display = 'block';
  document.getElementById('close-warning').style.display = 'block';
});

document.getElementById('hover-text').addEventListener('dblclick', function () {
  document.getElementById('pdf-iframe').style.display = 'none';
  document.getElementById('close-warning').style.display = 'none';
});