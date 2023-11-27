// Encontrar todos os botões "Comprar" nos cards de produto
const btnComprar = document.querySelectorAll('.comprar-btn');

// Adicionar um ouvinte de evento a cada botão "Comprar"
btnComprar.forEach(btn => {
  btn.addEventListener('click', function(event) {
    event.preventDefault();

    const productName = btn.parentNode.parentNode.querySelector('.card-header p').textContent;
    const productPrice = btn.parentNode.parentNode.querySelector('.card-header .preco h2').textContent;

    adicionarProdutoAoCheckout(productName, productPrice);
  });
});

// Função para adicionar o nome e preço do produto à seção de checkout
function adicionarProdutoAoCheckout(productName, productPrice) {
  const checkout = document.querySelector('.checkout .produtos');

  const novoProduto = document.createElement('div');
  novoProduto.innerHTML = `<p>${productName} - ${productPrice}</p>`;
  checkout.appendChild(novoProduto);
}





// Função para adicionar o produto à seção de checkout (com botão de remoção)
function adicionarProdutoAoCheckout(productName, productPrice) {
  // Lógica para adicionar o produto à seção de checkout com um botão de remoção
  const checkout = document.querySelector('.checkout .produtos');

  // Cria um novo elemento div para representar o produto adicionado
  const novoProduto = document.createElement('div');
  novoProduto.classList.add('produto');

  // Cria parágrafos para exibir o nome e o preço do produto
  const nomeProduto = document.createElement('p');
  nomeProduto.textContent = `${productName} - ${productPrice}`;

  // Cria um botão de remoção para este produto
  const btnRemover = document.createElement('button');
  btnRemover.textContent = 'Remover';
  btnRemover.classList.add('btn-remover');

  // Adiciona um ouvinte de evento ao botão de remoção para remover o produto
  btnRemover.addEventListener('click', function(event) {
    const produtoParaRemover = event.target.closest('.produto');
    produtoParaRemover.remove();
    atualizarTotais();
  });

  // Adiciona os elementos à div do novo produto
  novoProduto.appendChild(nomeProduto);
  novoProduto.appendChild(btnRemover);

  // Adiciona o novo produto à seção de checkout
  checkout.appendChild(novoProduto);

  // Chama a função para atualizar os totais, se necessário
  atualizarTotais();
}

// Exemplo de uso:
// Supondo que você tenha um evento de clique em um botão de adicionar produto
const botaoAdicionar = document.getElementById('produto1'); // Seleciona o botão de adicionar

botaoAdicionar.addEventListener('click', function(event) {
  // Obtém os dados do produto (nome e preço)
  const productName = "Nome do Produto"; // Substitua pelo nome do produto
  const productPrice = 19.99; // Substitua pelo preço do produto

  // Adiciona o produto ao checkout com o botão de remoção
  adicionarProdutoAoCheckout(productName, productPrice);
});








