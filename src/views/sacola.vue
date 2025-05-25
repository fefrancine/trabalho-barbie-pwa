<template>
  <div class="sacola-body">
    <div class="nav">
      <div class="logo">
        <img :src="logo" alt="logo menu" />
      </div>
      <div class="links-nav">
        <ul>
          <li><router-link to="/index">Home</router-link></li>
          <li><router-link to="/bonecas">Bonecas</router-link></li>
          <li><router-link to="/saiba-mais">Saiba Mais</router-link></li>
        </ul>
      </div>
      <div class="search-box">
        <input type="text" placeholder="O que procura?" class="input-search" v-model="searchQuery"
          @keyup.enter="search" />
        <img class="icon" :src="searchIcon" alt="lupa de pesquisa" @click="search" style="cursor: pointer" />
      </div>
      <div class="bag">
        <router-link to="/sacola">
          <img :src="bagIcon" alt="sacola" />
        </router-link>
      </div>
    </div>

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
            <td>{{ item.quantity }}</td>
          </tr>
          <tr v-if="cartItems.length === 0">
            <td colspan="3" style="text-align:center">Seu carrinho está vazio.</td>
          </tr>
        </tbody>
      </table>

      <div class="sacola-total">
        <h2>Total: <span>{{ formatPrice(cartTotal) }}</span></h2>
        <button @click="finalizarCompra" class="botao-finalizar">
          Finalizar Compra
        </button>
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
      // Implementar busca real aqui
    },
    finalizarCompra() {
      if (this.cartItems.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
      }
      alert("Compra finalizada com sucesso!");
      this.cartItems = [];
      localStorage.removeItem("cartItems");
    },
  },
  mounted() {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      try {
        this.cartItems = JSON.parse(savedCart);
      } catch {
        this.cartItems = [];
      }
    }
  },
  watch: {
    cartItems: {
      handler(newVal) {
        localStorage.setItem("cartItems", JSON.stringify(newVal));
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
@import "@/assets/style.css";

/* Estilos da sacola */ 
.sacola-body {
  font-family: 'Poppins', sans-serif;
  background-color: #fff;
  color: #333;
  min-height: 100vh;
  padding: 0 1.5rem;
}

/* Estilos da navegação */
.nav {
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  padding: 0 20px;
  box-sizing: border-box;
}

.logo img {
  width: 60px;
}

.links-nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  gap: 1.5rem;
}

.links-nav li {
  font-weight: bold;
  font-style: oblique;
  font-size: 15px;
}

.links-nav a {
  text-decoration: none;
  color: rgb(242, 97, 136);
  transition: color 0.3s ease;
}

.links-nav a:hover {
  color: rgb(132, 0, 93);
}

.search-box {
  display: flex;
  align-items: center;
}

.input-search {
  background-color: rgb(242, 97, 136);
  padding: 6px 10px;
  border-radius: 15px;
  border: 1px solid white;
  outline: none;
  color: white;
  font-weight: bold;
}

.input-search::placeholder {
  color: white;
}

.icon {
  width: 20px;
  margin-left: 10px;
  cursor: pointer;
}

.bag img {
  width: 23px;
  margin-left: 10px;
}

/* Estilos da tabela */
.sacola-tabela {
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
}

.sacola-tabela th,
.sacola-tabela td {
  border: 1px solid #ddd;
  padding: 12px 15px;
  text-align: center;
}

.sacola-tabela th {
  background-color: #f26188;
  color: white;
  font-weight: bold;
}

/* Total e botão */
.sacola-total {
  margin-top: 1.5rem;
  text-align: right;
}

.botao-finalizar {
  background-color: #f26188;
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 0.5rem;
  transition: background-color 0.3s ease;
}

.botao-finalizar:hover {
  background-color: #b03058;
}
</style>
