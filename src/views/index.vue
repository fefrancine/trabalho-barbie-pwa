<template>
  <div>
    <div class="nav">
      <div class="logo">
        <img src="@/assets/imagens/logos/logo-nav.png" alt="logo menu" />
      </div>
      <div class="links-nav">
        <ul>
          <li><router-link to="/index">Home</router-link></li>
          <li><router-link to="/bonecas">Bonecas</router-link></li>
          <li><router-link to="/saiba-mais">Saiba Mais</router-link></li>
        </ul>
      </div>

      <div class="search-box">
        <input type="text" placeholder="O que procura?" class="input-search" />
        <img class="icon" src="@/assets/imagens/icons/lupa.png" alt="lupa de pesquisa" />
      </div>
      <div class="bag">
        <router-link to="/sacola">
          <img src="@/assets/imagens/icons/bag.png" alt="sacola" />
        </router-link>
      </div>
    </div>

    <div class="homeView">

      <div class="informacoes">
        <img id="img-info2" src="@/assets/imagens/logos/logo04.png" alt="" />
        <img id="img-info" src="@/assets/imagens/logos/logo05.png" alt="" />
        <div class="texto-informacoes">
          <h1>Bem-vindo ao site da Barbie</h1>
          <p>
            Descubra um mundo cheio de estilo, diversão e infinitas
            possibilidades! Aqui, você pode ser tudo o que quiser. ✨
          </p>
          <router-link to="/saiba-mais">
            <button>Saiba Mais</button>
          </router-link>
        </div>
      </div>

      <div class="title-card">
        <h1>Lançamentos da Barbie</h1>
      </div>
      <div class="container">
        <div class="card" v-for="(boneca, index) in bonecas" :key="index">
          <div class="img-card">
            <img :src="boneca.imagem" :alt="boneca.titulo" />
          </div>
          <div class="info-card">
            <h1>{{ boneca.titulo }}</h1>
            <p>{{ boneca.descricao }}</p>
          </div>
        </div>
      </div>

      <div class="sobre-nos">
        <img src="@/assets/imagens/bonecas/boneca.jpg" alt="" />
        <div class="sobre-texto">
          <h1>Sobre nós</h1>
          <p>
            Acreditamos que brincar é uma forma poderosa de sonhar e criar. Somos
            apaixonados por levar magia e inspiração a todas as crianças (e
            colecionadores!) através da boneca mais icônica do mundo: a Barbie...
          </p>
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
              <li><router-link to="/index">Home</router-link></li>
              <li><router-link to="/bonecas">Bonecas</router-link></li>
              <li><router-link to="/saiba-mais">Saiba Mais</router-link></li>
            </ul>
          </div>
          <div class="social-media">
            <h4>Siga a Barbie</h4>
            <div class="social-icons">
              <img src="@/assets/imagens/icons/instagram.png" alt="Instagram" />
              <img src="@/assets/imagens/icons/facebook.png" alt="Facebook" />
              <img src="@/assets/imagens/icons/youtube.png" alt="YouTube" />
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Barbie™ - Todos os direitos reservados.</p>
          <img src="@/assets/imagens/logos/logo-nav.png" alt="Barbie Logo" class="barbie-logo" />
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import boneca02 from "@/assets/imagens/bonecas/boneca02.png";
import boneca10 from "@/assets/imagens/bonecas/boneca10.png";
import boneca07 from "@/assets/imagens/bonecas/boneca07.jpg";

export default {
  name: "HomeView",
  data() {
    return {
      bonecas: [
        {
          titulo: "Barbie Engenheira de Construção",
          imagem: boneca02,
          descricao:
            "Conheça a Barbie que está construindo o futuro com estilo e inovação!Ela é uma verdadeira engenheira de construção, pronta para enfrentar qualquer desafio" ,
        },
        {
          titulo: "Barbie Aventureira do Campo",
          imagem: boneca10,
          descricao:
            "Essa Barbie adora a natureza e está sempre pronta para um passeio a cavalo!",
        },
        {
          titulo: "Barbie Patinadora Divertida",
          imagem: boneca07,
          descricao:
            "Entre no ritmo com a Barbie mais divertida das pistas!",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import "@/assets/style.css";

.homeView {
  background-color: rgb(242, 97, 136);
}

.sobre-nos {
  margin-bottom: 20vh;
}
</style>
