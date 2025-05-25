<template>
  <div>
    <!-- Navegação -->
    <nav class="nav">
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
        <img class="icon" :src="lupa" alt="lupa de pesquisa" @click="search" style="cursor: pointer" />
      </div>
      <div class="bag">
        <router-link to="/sacola">
          <img :src="bag" alt="sacola" />
        </router-link>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <h1>Saiba mais sobre nossa empresa</h1>
      <p>
        Somos uma empresa dedicada a oferecer produtos de qualidade e um
        atendimento excepcional. Nossa missão é garantir a satisfação total de
        nossos clientes, com entregas rápidas e seguras.
      </p>
    </section>

    <!-- Como trabalhamos -->
    <section>
      <div class="container">
        <h2>Como trabalhamos</h2>
        <div class="grid three-columns">
          <div class="card" data-animate>
            <img :src="clienteImg" alt="Pedido" />
            <h3>Você quem manda</h3>
            <p>
              A gente cuida de tudo! Escolha o que você quer e nós entregamos na
              sua casa. Com segurança e rapidez.
            </p>
          </div>
          <div class="card" data-animate>
            <img :src="entregaImg" alt="Separação" />
            <h3>Separação rápida</h3>
            <p>
              Nossa equipe é a melhor em separar seu pedido com rapidez e
              segurança. Aqui é assim, comprou, chegou!
            </p>
          </div>
          <div class="card" data-animate>
            <img :src="freteImg" alt="Entrega" />
            <h3>Entrega expressa</h3>
            <p>
              Receba tudo em até 48h e com rastreio. Além de ganhar frete grátis
              em compras acima de 150,00
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Avaliações -->
    <section style="background: #f1f5f9">
      <div class="container">
        <h2>Avaliações de clientes</h2>
        <div class="grid three-columns">
          <div class="card" data-animate style="height: 50vh">
            <p class="about-text" style="margin-top: 8vh;">
              “Simplesmente encantada com a experiência de compra! As bonecas são lindas, com acabamento perfeito, ricas
              em detalhes e cheias de personalidade. A entrega foi super rápida e veio tudo muito bem embalado, com um
              cheirinho maravilhoso. É visível o carinho que a empresa tem com cada cliente. Me senti valorizada desde o
              primeiro clique no site!”
            </p>
            <h3>Fernanda</h3>
          </div>
          <div class="card" data-animate style="height: 50vh">
            <p class="about-text" style="margin-top: 8vh;">
              “Comprei uma boneca de presente para minha filha e foi um sucesso total! A qualidade é excelente, os
              acessórios vieram completos e a boneca é ainda mais bonita do que nas fotos. O atendimento da empresa
              também me surpreendeu positivamente — tiraram todas as minhas dúvidas com paciência e atenção. Recomendo
              de olhos fechados!”
            </p>
            <h3>Fernando</h3>
          </div>
          <div class="card" data-animate style="height: 50vh">
            <p class="about-text" style="margin-top: 8vh;">
              “A Barbie Site é, sem dúvida, uma das melhores lojas online que já comprei. As bonecas são exclusivas, bem
              acabadas e com ótimo custo-benefício. A equipe foi extremamente atenciosa desde o pedido até o pós-venda.
              Além disso, a entrega chegou antes do prazo! Estou muito satisfeita e já indiquei para várias amigas.”
            </p>
            <h3>Ana</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Quem somos -->
    <section>
      <div class="container grid two-columns" style="align-items: center; gap: 3rem">
        <div class="about-text" data-animate>
          <h2>Quem somos</h2>
          <p>
            Fundada em 2015, a <strong>Barbie site+</strong> surgiu para
            oferecer uma experiência de compra única e personalizada. Nossa
            equipe é formada por profissionais apaixonados por moda e
            brinquedos, sempre prontos para ajudar nossos clientes a encontrar o
            que há de melhor no mundo da Barbie.
          </p>
          <p style="margin-top: 1rem">
            Já entregamos mais de 100 mil Barbies por todo o país, sempre com
            foco no cliente e no cuidado com cada detalhe da bonecas. Nossa
            missão é fazer com que cada cliente se sinta especial e satisfeito
            com sua compra.
          </p>
        </div>
        <div data-animate>
          <img style="margin-left: 25vh; margin-top: 7vh; width: 80%; border-radius: 20px;" :src="empresaImg"
            alt="Equipe da empresa" />
        </div>
      </div>
    </section>

    <!-- Footer -->
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
            <li><router-link to="index/">Home</router-link></li>
            <li><router-link to="/bonecas">Bonecas</router-link></li>
            <li><router-link to="/saiba-mais">Saiba Mais</router-link></li>
          </ul>
        </div>
        <div class="social-media">
          <h4>Siga a Barbie</h4>
          <div class="social-icons">
            <img :src="instagram" alt="Instagram" />
            <img :src="facebook" alt="Facebook" />
            <img :src="youtube" alt="YouTube" />
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Barbie™ - Todos os direitos reservados.</p>
        <img :src="logo" alt="Barbie Logo" class="barbie-logo" />
      </div>
    </footer>
  </div>
</template>

<script>
import logo from "@/assets/imagens/logos/logo-nav.png";
import lupa from "@/assets/imagens/icons/lupa.png";
import bag from "@/assets/imagens/icons/bag.png";

import clienteImg from "@/assets/imagens/bonecas/cliente.jpg";
import entregaImg from "@/assets/imagens/bonecas/entrega.jpg";
import freteImg from "@/assets/imagens/bonecas/frete.jpg";

import empresaImg from "@/assets/imagens/empresa.jpg";

import instagram from "@/assets/imagens/icons/instagram.png";
import facebook from "@/assets/imagens/icons/facebook.png";
import youtube from "@/assets/imagens/icons/youtube.png";

export default {
  name: "SaibaMais",
  data() {
    return {
      logo,
      lupa,
      bag,
      clienteImg,
      entregaImg,
      freteImg,
      empresaImg,
      instagram,
      facebook,
      youtube,
      searchQuery: "",
    };
  },
  mounted() {
    this.animateOnScroll();
  },
  methods: {
    animateOnScroll() {
      const elements = document.querySelectorAll("[data-animate]");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      elements.forEach((el) => observer.observe(el));
    },
    search() {
      if (!this.searchQuery.trim()) {
        alert("Digite algo para buscar.");
        return;
      }
      alert(`Você pesquisou por: ${this.searchQuery}`);
      // Aqui você pode implementar sua lógica de busca
    },
  },
};
</script>


<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background: #ffffff;
  color: #333;
  line-height: 1.6;
}

/* NAV */
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

.links-nav {
  display: flex;
  align-items: center;
}

.nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  gap: 6vh;
  margin-left: 78vh;
}

.nav ul li {
  font-weight: bold;
  font-style: oblique;
  font-size: 15px;
}

.nav ul li a {
  text-decoration: none;
  color: rgb(242, 97, 136);
  transition: color 0.3s ease;
}

.nav ul li a:hover {
  color: rgb(132, 0, 93);
}

/* SEARCH/PESQUISA */
.search-box {
  display: flex;
  align-items: center;
  margin-left: 45vh;
}

.input-search {
  background-color: rgb(242, 97, 136);
  padding: 6px 10px;
  border-radius: 15px;
  border: 1px solid white;
  outline: none;
}

.input-search::placeholder {
  color: white;
  font-weight: bold;
}

.icon {
  width: 20px;
  margin-left: 10px;
}

.bag {
  width: 23px;
  margin-left: 10px;
}

/* SECTIONS */
section {
  padding: 4rem 1.5rem;
}

section img {
  width: 300px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1,
h2,
h3 {
  text-align: center;
  color: #f26188;
}

.hero {
  background-color: #f26188;
  color: white;
  text-align: center;
  padding: 5rem 1rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #fff;
}

.hero p {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  color: #fff;
}

/* GRID */
.grid {
  display: grid;
  gap: 2rem;
  margin-top: 2.5rem;
}

.three-columns {
  grid-template-columns: 1fr;
}

.two-columns {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .three-columns {
    grid-template-columns: repeat(3, 1fr);
  }

  .two-columns {
    grid-template-columns: 1fr 1fr;
  }
}

/* CARD */
.card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s;
  height: 60vh;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  margin-bottom: 1rem;
}

.card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #f26188;
}

.card p {
  color: #555;
  font-size: 1rem;
}

.img-cliente {
  width: 100px;
  border-radius: 100%;
}

/* SOBRE NÓS */
.about-text {
  font-size: 1.05rem;
  color: #444;
}

/* ANIMAÇÃO */
[data-animate] {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

[data-animate].visible {
  opacity: 1;
  transform: translateY(0);
}

/* FOOTER */
.barbie-footer {
  background-color: #fff;
  color: #000;
  padding: 3rem 2rem 2rem;
  font-family: "Comic Sans MS", cursive, sans-serif;
  border-top: 2px solid #f26188;
  margin-top: 6vh;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  text-align: center;
}

@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-around;
    text-align: left;
  }
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links ul li {
  margin: 8px 0;
}

.footer-links a {
  color: #000;
  text-decoration: none;
  transition: 0.3s;
}

.footer-links a:hover {
  color: #f26188;
}

h4 {
  color: #f26188;
}

.social-icons img {
  width: 30px;
  height: 30px;
  margin: 0 10px;
  transition: transform 0.3s;
}

.social-icons img:hover {
  transform: scale(1.2);
}

.footer-bottom {
  margin-top: 2rem;
  text-align: center;
  font-size: 14px;
  position: relative;
}

.footer-bottom .barbie-logo {
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 80px;
}
</style>
