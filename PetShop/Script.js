document.addEventListener('DOMContentLoaded', function () {
  let icons = document.querySelectorAll('ion-icon');
  
  icons.forEach(function(icon) {
    icon.onclick = function() {
      icon.classList.toggle('active');
    }
  });
});



document.getElementById('produto1').addEventListener('click', function() {
  // Obter dados ou executar ações antes de redirecionar para o carrinho
  var produto = {
    nome: 'Produto A',
    preco: 19.99
  };

  // Converte o objeto para uma string JSON e armazena no localStorage
  localStorage.setItem('carrinho', JSON.stringify(produto));

  // Redireciona para a página do carrinho
  window.location.href = 'carrinho.html';
});

