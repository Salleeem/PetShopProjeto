
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
  btnRemover.textContent = 'X';
  btnRemover.classList.add('btn-remover');

  // Adiciona um ouvinte de evento ao botão de remoção para remover o produto
  btnRemover.addEventListener('click', function(event) {
    const produtoParaRemover = event.target.closest('.produto');
    produtoParaRemover.remove();
    atualizarTotais();
  });

  // Adiciona os elementos à div do novo produto
  novoProduto.appendChild(nomeProduto);
  

  // Adiciona o novo produto à seção de checkout
  checkout.appendChild(novoProduto);

  // Chama a função para atualizar os totais, se necessário
  atualizarTotais();
}

function msg() {
  alert("Compra Finalizada!");
}

// Array para armazenar os preços dos produtos no carrinho
const carrinho = [];

// Função para calcular o subtotal
function calcularSubtotal() {
  let subtotal = 0;
  // Itera sobre o carrinho e soma os preços
  carrinho.forEach(item => {
    subtotal += parseFloat(item.price); // Converte o preço para número e adiciona ao subtotal
  });
  return subtotal.toFixed(2); // Retorna o subtotal formatado com duas casas decimais
}

// Função para atualizar os totais na página
function atualizarTotais() {
  const subtotalElement = document.getElementById('subtotalAmount');
  const totalElement = document.getElementById('totalAmount');

  const subtotal = calcularSubtotal();
  subtotalElement.textContent = subtotal; // Atualiza o subtotal na página
  totalElement.textContent = subtotal; // No exemplo, o total é o mesmo que o subtotal
}

// Ao adicionar um produto ao carrinho, além de exibi-lo, também o armazenamos no array "carrinho"
function adicionarProdutoAoCarrinho(productPrice) {
  // Adiciona o preço do produto ao carrinho
  carrinho.push({ price: parseFloat(productPrice) });

  // Atualiza os totais após adicionar o produto
  atualizarTotais();

  // Cria um botão de remoção
  const btnRemover = document.createElement('button');
  btnRemover.textContent = 'Remover';
  btnRemover.classList.add('btn-remover');

  // Adiciona um evento de clique para o botão de remoção
  btnRemover.addEventListener('click', function() {
    const index = carrinho.length - 1; // Obtém o índice do item a ser removido (último item adicionado)
    carrinho.splice(index, 1); // Remove o item do carrinho

    // Remove o botão de remoção e atualiza os totais
    btnRemover.parentNode.remove();
    atualizarTotais();
  });

  // Adiciona o botão de remoção ao item no carrinho
  const ultimoItemAdicionado = document.querySelector('.checkout .produtos').lastChild;
  ultimoItemAdicionado.appendChild(btnRemover);
}

// Exemplo de uso para adicionar um produto ao carrinho
const botoesAdicionar = document.querySelectorAll('.comprar-btn'); // Botões para adicionar produto

botoesAdicionar.forEach(botao => {
  botao.addEventListener('click', function(event) {
    const card = botao.closest('.card'); // Encontra o card pai do botão clicado
    const productPrice = card.querySelector('.preco h2').textContent.replace('R$', '').trim(); // Obtém o preço do card

    adicionarProdutoAoCarrinho(productPrice);
  });
});
