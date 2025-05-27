<template>
  <div class="sacola-body">
    <nav class="nav">
      <div class="logo">
        <img src="@/assets/imagens/logos/logo-nav.png" alt="logo menu" />
      </div>

      <div class="links-nav">
        <ul>
          <li>
            <RouterLink to="/index">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/bonecas">Bonecas</RouterLink>
          </li>
          <li>
            <RouterLink to="/saiba-mais">Saiba Mais</RouterLink>
          </li>
        </ul>
      </div>

      <div class="search-box">
        <input
          type="text"
          placeholder="O que procura?"
          class="input-search"
          v-model="searchQuery"
          @keyup.enter="search"
        />
        <img class="icon" :src="searchIcon" alt="lupa de pesquisa" @click="search" />
      </div>

      <div class="bag">
        <RouterLink to="/sacola">
          <img :src="bagIcon" alt="sacola" />
        </RouterLink>
      </div>
    </nav>

    <header>
      <h1>Minha Sacola</h1>
    </header>

    <main>
      <table class="sacola-tabela">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cartItems" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ formatPrice(item.price) }}</td>
            <td>
              <input
                type="number"
                v-model.number="item.quantity"
                min="1"
                @change="atualizarQuantidade(index)"
                style="width: 60px; text-align: center"
              />
            </td>
          </tr>
          <tr v-if="cartItems.length === 0">
            <td colspan="3" style="text-align:center">Seu carrinho está vazio.</td>
          </tr>
        </tbody>
      </table>

      <div class="sacola-total">
        <h2 class="quantidade-input">Total: <span>{{ formatPrice(cartTotal) }}</span></h2>
        <button @click="finalizarCompra" class="botao-finalizar">Finalizar Compra</button>
      </div>
    </main>
  </div>
</template>

<script>
import logo from "@/assets/imagens/logos/logo-nav.png";
import bagIcon from "@/assets/imagens/icons/bag.png";
import searchIcon from "@/assets/imagens/icons/lupa.png";

export default {
  name: "Sacola",
  data() {
    return {
      logo,
      bagIcon,
      searchIcon,
      searchQuery: "",
      cartItems: [],
    };
  },
  computed: {
    cartTotal() {
      return this.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    formatPrice(value) {
      return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
    search() {
      if (!this.searchQuery.trim()) {
        alert("Digite algo para buscar.");
        return;
      }
      alert(`Procurando por: ${this.searchQuery}`);
    },
    finalizarCompra() {
      if (this.cartItems.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
      }
      alert("Compra finalizada com sucesso!");
      this.cartItems = [];
      localStorage.removeItem("cart");
    },
    atualizarQuantidade(index) {
      let quantidade = parseInt(this.cartItems[index].quantity);
      if (isNaN(quantidade) || quantidade < 1) {
        quantidade = 1;
      }
      // Atualiza com reatividade
      this.$set(this.cartItems, index, {
        ...this.cartItems[index],
        quantity: quantidade,
      });
    },
  },
  mounted() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        // Converter preço string para número e garantir quantidade numérica
        this.cartItems = parsedCart.map((item) => {
          const priceNumber =
            typeof item.price === "string"
              ? parseFloat(
                  item.price
                    .replace("R$", "")
                    .replace(/\./g, "")
                    .replace(",", ".")
                    .trim()
                )
              : item.price;
          return {
            ...item,
            price: isNaN(priceNumber) ? 0 : priceNumber,
            quantity: parseInt(item.quantity) || 1,
          };
        });
      } catch {
        this.cartItems = [];
      }
    }
  },
  watch: {
    cartItems: {
      handler(newVal) {
        localStorage.setItem("cart", JSON.stringify(newVal));
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
@import "@/assets/style.css";

/* Estilos da sacola */
.links-nav ul {
  gap: 1.5rem;
}

.links-nav li {
  font-weight: bold;
  font-style: oblique;
  font-size: 12px;
}

/* Total e botão */
.sacola-total {
  margin-top: 1.5rem;
  text-align: right;
}

.botao-finalizar {
  position: fixed;
  bottom: 10px;
  right: 20px;
  background-color: rgb(242, 97, 136);
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  z-index: 1000;
}

.botao-finalizar:hover {
  background-color: #f92d6e;
}
</style>
