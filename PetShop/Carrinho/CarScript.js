document.addEventListener("DOMContentLoaded", function () {
    // Funções para manipular a quantidade de produtos
    function updateQuantity(element, increment) {
      const qtyElement = element.parentElement.querySelector("span");
      let qty = parseInt(qtyElement.textContent);
      qty += increment;
      if (qty < 1) {
        qty = 1;
      }
      qtyElement.textContent = qty;
      updateTotal(element);
      updateCartTotal();
    }
  
    function updateTotal(element) {
      const qty = parseInt(element.parentElement.querySelector("span").textContent);
      const price = parseFloat(element.parentElement.parentElement.previousElementSibling.textContent.slice(2));
      const total = qty * price;
      element.parentElement.parentElement.nextElementSibling.textContent = `R$ ${total.toFixed(2)}`;
    }
  
    function updateCartTotal() {
      const totalElements = document.querySelectorAll("tbody td:nth-child(4)");
      let cartTotal = 0;
      totalElements.forEach((element) => {
        cartTotal += parseFloat(element.textContent.slice(2));
      });
      document.getElementById("total").textContent = `R$ ${cartTotal.toFixed(2)}`;
    }
  
    // Event listeners para os botões de incremento e decremento
    const qtyButtons = document.querySelectorAll(".qty button");
    qtyButtons.forEach((button) => {
      button.addEventListener("click", function () {
        if (button.classList.contains("bx-minus")) {
          updateQuantity(button, -1);
        } else if (button.classList.contains("bx-plus")) {
          updateQuantity(button, +1);
        }
      });
    });
  
    // Event listeners para os botões de remoção
    const removeButtons = document.querySelectorAll(".remove");
    removeButtons.forEach((button) => {
      button.addEventListener("click", function () {
        button.parentElement.parentElement.remove();
        updateCartTotal();
      });
    });
  
    // Função para finalizar a compra (apenas um alert neste exemplo)
    window.finalizarCompra = function () {
      alert("Compra finalizada!");
    };
  });

  // Função para incrementar a quantidade
function incrementQuantity(index) {
    cartItems[index].quantity++;
    initCart(); // Atualizar o carrinho
  }
  
  // Função para decrementar a quantidade
  function decrementQuantity(index) {
    if (cartItems[index].quantity > 1) {
      cartItems[index].quantity--;
    }
    initCart(); // Atualizar o carrinho
  }
  
  // ...
  
  // No trecho onde os botões de incremento e decremento são criados dinamicamente, você precisa passar o índice da linha correspondente:
  // ...
  
  cartItems.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <!-- ... -->
  
      <td>
        <div class="qty">
          <button onclick="decrementQuantity(${index})"><i class="bx bx-minus"></i></button>
          <span>${item.quantity}</span>
          <button onclick="incrementQuantity(${index})"><i class="bx bx-plus"></i></button>
        </div>
      </td>
  
      <!-- ... -->
    `;
    cartBody.appendChild(row);
  });
  