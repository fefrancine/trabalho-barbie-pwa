function carregarCarrinho() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const tbody = document.getElementById("cart-body");
    let total = 0;
    tbody.innerHTML = "";

    cart.forEach((card, index) => {
        const precoNum = parseFloat(card.price.replace("R$", "").replace(",", "."));
        total += precoNum * card.quantity;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="${card.image}" alt="${card.name}" width="50">
                <div>${card.name}</div>
            </td>
            <td>${card.price}</td>
            <td>
            <input type="number" class="quantidade-input" value="${card.quantity}" min="1" onchange="atualizarQuantidade(${index}, this.value)">
            <button class="remover-btn" onclick="removerProduto(${index})">Remover</button>
            </td>
        `;
        tbody.appendChild(row);
    });

    document.getElementById("cart-total").innerText = "R$" + total.toFixed(2).replace(".", ",");
}

function atualizarQuantidade(index, novaQtd) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].quantity = parseInt(novaQtd);
    localStorage.setItem("cart", JSON.stringify(cart));
    carregarCarrinho();
}

function removerProduto(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    carregarCarrinho();
}

function finalizarCompra() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Sua sacola está vazia! Por favor, adicione produtos.");
        return;
    }

    alert("Compra finalizada! Volte sempre!");
    localStorage.removeItem("cart");
    carregarCarrinho();
}

window.onload = carregarCarrinho;