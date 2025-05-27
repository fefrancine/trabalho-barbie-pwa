function carregarCarrinho() {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const tbody = document.getElementById("cart-body");
    let total = 0;
    tbody.innerHTML = "";

    if (cart.length === 0) {
        const emptyRow = document.createElement("tr");
        emptyRow.innerHTML = `<td colspan="3" style="text-align:center;">Sua sacola está vazia.</td>`;
        tbody.appendChild(emptyRow);
    } else {
        cart.forEach((card, index) => {
            const precoNum = parseFloat(card.price.replace("R$", "").replace(",", "."));
            total += precoNum * card.quantity;

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>
                    <img src="${card.image}" alt="${card.name}" width="50" style="vertical-align:middle; margin-right: 10px;">
                    <span>${card.name}</span>
                </td>
                <td>R$ ${precoNum.toFixed(2).replace(".", ",")}</td>
                <td>
                    <input type="number" class="quantidade-input" value="${card.quantity}" min="1"
                        onchange="atualizarQuantidade(${index}, this.value)" />
                    <button class="remover-btn" onclick="removerProduto(${index})">Remover</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    document.getElementById("cart-total").innerText = "R$ " + total.toFixed(2).replace(".", ",");
}

function atualizarQuantidade(index, novaQtd) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    novaQtd = parseInt(novaQtd);
    if (isNaN(novaQtd) || novaQtd < 1) {
        alert("Quantidade inválida.");
        return;
    }
    cart[index].quantity = novaQtd;
    localStorage.setItem("cart", JSON.stringify(cart));
    carregarCarrinho();
}

function removerProduto(index) {
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (confirm("Tem certeza que deseja remover este item?")) {
        cart.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(cart));
        carregarCarrinho();
    }
}

function finalizarCompra() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Sua sacola está vazia! Por favor, adicione produtos.");
        return;
    }

    alert("Compra finalizada com sucesso! Obrigado por comprar conosco.");
    localStorage.removeItem("cart");
    carregarCarrinho();
}

window.onload = carregarCarrinho;
