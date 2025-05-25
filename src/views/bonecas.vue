<template>
  <div>
    <div class="nav">
      <div class="logo">
        <img src="@/assets/imagens/logos/logo-nav.png" alt="logo menu" />
      </div>

      <div class="links-nav">
        <ul>
          <li><RouterLink to="/index">Home</RouterLink></li>
          <li><RouterLink to="/bonecas">Bonecas</RouterLink></li>
          <li><RouterLink to="/saiba-mais">Saiba Mais</RouterLink></li>
        </ul>
      </div>

      <div class="search-box">
        <input type="text" placeholder="O que procura?" class="input-search" />
        <img class="icon" src="@/assets/imagens/icons/lupa.png" alt="lupa de pesquisa" />
      </div>

      <div class="bag">
        <RouterLink to="/sacola">
          <img src="@/assets/imagens/icons/bag.png" alt="sacola" />
        </RouterLink>
      </div>
    </div>

    <div class="titlePage">
      <h1>Bonecas</h1>
    </div>

    <div>
      <div v-for="(card, index) in cards" :key="index" class="cardCompra">
        <img :src="card.image" alt="Imagem da boneca" class="card-img" />
        <h2>{{ card.title }}</h2>
        <p>{{ card.description }}</p>
        <div class="card-footer">
          <span id="preco">R$ {{ card.valor }}</span>
          <button
            @click="adicionar(card)"
            :class="{
              'btn-sold-out': card.inStock === 0,
              'btn-running-out': card.inStock < 5 && card.inStock > 0
            }"
            :style="card.inStock < 5 && card.inStock > 0 ? { width: '100px'} : {}"
            :disabled="card.inStock === 0"
          >
            {{ buttonText(card.inStock) }}
          </button>
        </div>
      </div>
    </div>

    <footer class="barbie-footer">
      <div class="footer-content">
        <div class="contact-section">
          <h4>Contato</h4>
          <p>Telefone: (00)00000-0000</p>
          <p>Email: barbie@gmail.com</p>
          <p>CEP: 00000-000</p>
        </div>

        <div class="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><RouterLink to="/index">Home</RouterLink></li>
            <li><RouterLink to="/bonecas">Bonecas</RouterLink></li>
            <li><RouterLink to="/saiba-mais">Saiba Mais</RouterLink></li>
          </ul>
        </div>

        <div class="social-media">
          <h4>Siga a Barbie</h4>
          <div class="social-icons">
            <a href="#"><img src="@/assets/imagens/icons/instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="@/assets/imagens/icons/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="@/assets/imagens/icons/youtube.png" alt="YouTube" /></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Barbie™ - Todos os direitos reservados.</p>
        <img src="@/assets/imagens/logos/logo-nav.png" alt="Barbie Logo" class="barbie-logo" />
      </div>
    </footer>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import boneca1 from '@/assets/imagens/boneca1.jpg'
import boneca2 from '@/assets/imagens/boneca2.jpg'

export default {
  name: 'BonecasView',
  components: {
    RouterLink
  },
  data() {
    return {
      cards: [
        {
          image: boneca1,
          title: 'Barbie Fashion',
          description: 'Edição limitada com vestido rosa',
          valor: 150,
          inStock: 3
        },
        {
          image: boneca2,
          title: 'Barbie Esportiva',
          description: 'Look casual de verão',
          valor: 120,
          inStock: 0
        }
      ]
    }
  },
  methods: {
    adicionar(card) {
      alert(`Boneca "${card.title}" adicionada à sacola!`)
    },
    buttonText(estoque) {
      if (estoque === 0) return 'Esgotado'
      if (estoque < 5) return `Restam ${estoque}`
      return 'Comprar'
    }
  }
}
</script>

<style scoped>  
@import "@/assets/style.css";
</style>