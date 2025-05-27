<template>
  <div>
    <div class="homeView">
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
          <input type="text" placeholder="O que procura?" class="input-search" />
          <img class="icon" src="@/assets/imagens/icons/lupa.png" alt="lupa de pesquisa" />
        </div>

        <div class="bag">
          <RouterLink to="/sacola">
            <img src="@/assets/imagens/icons/bag.png" alt="sacola" />
          </RouterLink>
        </div>
      </nav>


      <section class="titlePage">
        <h1>Bonecas</h1>
      </section>

      <section class="cards-container">
        <div v-for="card in cards" :key="card.title" class="cardCompra">
          <img :src="card.image" alt="Imagem da boneca" class="card-img" />
          <h2>{{ card.title }}</h2>
          <p>{{ card.description }}</p>
          <div class="card-footer">
            <span class="preco">R$ {{ card.valor }}</span>
            <button @click="adicionar(card)" :class="[
              card.inStock === 0 ? 'btn-sold-out' : '',
              card.inStock > 0 && card.inStock < 5 ? 'btn-running-out' : ''
            ]" :style="card.inStock > 0 && card.inStock < 5 ? { width: '100px' } : {}" :disabled="card.inStock === 0">
              {{ buttonText(card.inStock) }}
            </button>
          </div>
        </div>
      </section>

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
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "Bonecas",
  components: {
    RouterLink,
  },
  data() {
    return {
      cards: [
        {
          title: 'Barbie Médica',
          image: "imagens/bonecas/boneca01.png",
          description: 'Barbie pronta para salvar vidas com seu jaleco rosa e estetoscópio. Ideal para quem sonha com a medicina!',
          valor: '89,90',
          inStock: 10

        },
        {
          title: 'Barbie Engenheira',
          image: "imagens/bonecas/boneca02.png",
          description: 'Com capacete e prancheta, a Barbie Engenheira inspira meninas a construir um mundo melhor com criatividade.',
          valor: '109,90',
          inStock: 0
        },
        {
          title: 'Barbie Cantora',
          image: "imagens/bonecas/boneca03.jpg",
          description: 'Brilhando no palco, Barbie Cantora vem com microfone e look incrível para soltar a voz e arrasar nos shows.',
          valor: '89,90',
          inStock: 3
        },
        {
          title: 'Barbie Praiana',
          image: "imagens/bonecas/boneca04.jpg",
          description: 'Com roupa de banho estilosa, a Barbie Praiana adora curtir o sol e o mar em dias de verão perfeitos.',
          valor: '109,90',
          inStock: 5
        },
        {
          title: 'Barbie de Férias',
          image: "imagens/bonecas/boneca05.jpg",
          description: 'Pronta para viajar, Barbie de Férias vem com acessórios perfeitos para aventuras ao redor do mundo.',
          valor: '109,90',
          inStock: 8
        },
        {
          title: 'Barbie Estilista',
          image: "imagens/bonecas/boneca06.jpg",
          description: 'Criativa, cheia de estilo, Barbie Estilista desenha tendências e cria roupas incríveis direto da sua oficina fashion.',
          valor: '89,90',
          inStock: 2
        },
        {
          title: 'Barbie de Patins',
          image: "imagens/bonecas/boneca07.jpg",
          description: 'Patinando com muita graça, essa Barbie adora aventuras sobre rodas com estilo e diversão garantida.',
          valor: '109,90',
          inStock: 10
        },
        {
          title: 'Barbie Fashionista',
          image: "imagens/bonecas/boneca08.jpg",
          description: 'Barbie Fashionista traz diversidade e beleza com looks modernos que representam todos os estilos e corpos.',
          valor: '89,90',
          inStock: 10
        },
        {
          title: 'Barbie Médica',
          image: "imagens/bonecas/boneca09.png",
          description: 'Versão alternativa da Barbie Médica, com jaleco e acessórios para cuidar de todos com carinho e dedicação.',
          valor: '89,90',
          inStock: 0
        },
        {
          title: 'Cavalo Barbie',
          image: "imagens/bonecas/boneca10.png",
          description: 'Companheiro de aventuras, o Cavalo da Barbie é ideal para passeios divertidos no campo ou na cidade.',
          valor: '109,90',
          inStock: 10
        },
        {
          title: 'Barbie Zoo',
          image: "imagens/bonecas/boneca11.png",
          description: 'Amiga dos animais, Barbie Zoo cuida com amor dos bichinhos e compartilha conhecimento sobre a natureza.',
          valor: '109,90',
          inStock: 10
        },
        {
          title: 'Barbie Bombeira',
          image: "imagens/bonecas/boneca12.jpg",
          description: 'Com acessórios de bombeiro, Barbie Bombeira encanta com sua coragem e determinação',
          valor: '150,00',
          inStock: 3
        },
        {
          title: 'Princesa Edição Limitada',
          image: "imagens/bonecas/boneca13.jpg",
          description: 'Em edição especial, essa Barbie Princesa brilha com vestido luxuoso. Item raro para colecionadores!',
          valor: '150,00',
          inStock: 10
        },
        {
          title: 'Barbie Plus Size',
          image: "imagens/bonecas/boneca14.jpg",
          description: 'Barbie Plus Size celebra a diversidade com estilo e atitude. Modelo exclusivo e limitado!',
          valor: '150,00',
          inStock: 10
        },
        {
          title: 'Barbie Grávida',
          image: "imagens/bonecas/boneca15.jpg",
          description: 'Representando o poder da maternidade, Barbie Grávida é uma edição especial e encantadora.',
          valor: '150,00',
          inStock: 0
        },
        {
          title: 'Barbie Princesa Negra',
          image: "imagens/bonecas/boneca16.png",
          description: 'Com beleza real, a Barbie Princesa Negra é uma edição limitada que celebra realeza e representatividade.',
          valor: '150,00',
          inStock: 10
        },
        {
          title: 'Barbie Princesa',
          image: "imagens/bonecas/boneca17.png",
          description: 'Com coroa e vestido encantador, Barbie Princesa está pronta para viver contos de fadas inesquecíveis.',
          valor: '89,90',
          inStock: 2
        },
        {
          title: 'Barbie Rapunzel',
          image: "imagens/bonecas/boneca18.png",
          description: 'Com cabelos longos e mágicos, Barbie Rapunzel é uma edição especial inspirada no clássico conto de fadas.',
          valor: '150,00',
          inStock: 10
        },
        {
          title: 'Barbie Princesa e a Plebeia',
          image: "imagens/bonecas/boneca19.png",
          description: 'Inspirada no filme, essa edição limitada traz duas histórias em uma: princesa e plebeia em um só coração.',
          valor: '150,00',
          inStock: 10
        },
        {
          title: 'Barbie Fada',
          image: "imagens/bonecas/boneca20.png",
          description: 'Com asas brilhantes e muita magia, Barbie Fada é perfeita para quem ama o mundo encantado das florestas.',
          valor: '150,00',
          inStock: 10
        },
        {
          title: 'Barbie Sereia',
          image: "imagens/bonecas/boneca21.png",
          description: 'Do fundo do mar, Barbie Sereia encanta com sua cauda colorida e brilho mágico. Edição limitada!',
          valor: '150,00',
          inStock: 10
        },
        {
          title: 'Barbie Bailarina',
          image: "imagens/bonecas/boneca22.png",
          description: 'Uma versão mágica da Barbie Bailarina, com figurino especial e muito brilho. Modelo de colecionador.',
          valor: '150,00',
          inStock: 10
        },
        {
          title: 'Barbie Astronauta',
          image: "imagens/bonecas/boneca23.jpg",
          description: 'Barbie Astronauta é uma verdadeira exploradora, pronta para combinar ciência e moda em uma só missão',
          valor: '150,00',
          inStock: 4
        },
        {
          title: 'Barbie Professora',
          image: "imagens/bonecas/boneca24.jpg",
          description: 'Barbie Professora é uma verdadeira inspiração para as futuras gerações, com seu amor pelo ensino e aprendizado',
          valor: '109,90',
          inStock: 10
        },
        {
          title: 'Barbie Cientista',
          image: "imagens/bonecas/boneca25.jpg",
          description: 'Barbie Cientista é uma verdadeira exploradora do mundo da ciencia, pronta para descobrir novas possibilidades',
          valor: '109,90',
          inStock: 0
        },
        {
          title: 'Barbie Escritora',
          image: "imagens/bonecas/boneca26.jpg",
          description: 'Barbie Escritora é uma verdadeira contadora de histórias, pronta para inspirar a imaginação de todos com suas palavras',
          valor: '',
          inStock: 10
        },
        {
          title: 'Barbie Cantora',
          image: "imagens/bonecas/boneca27.jpg",
          description: 'Barbie Cantora é uma verdadeira estrela da música, pronta para brilhar nos palcos e conquistar corações com sua voz',
          valor: '109,90',
          inStock: 10
        },
        {
          title: 'Barbie Programadora',
          image: "imagens/bonecas/boneca28.png",
          description: 'Barbie Programadora é uma verdadeira artista do design, pronta para criar espaços incríveis e cheios de vida',
          valor: '150,00',
          inStock: 4
        },
        {
          title: 'Barbie Surfista',
          image: "imagens/bonecas/boneca29.png",
          description: 'Barbie Surfista é uma verdadeira aventureira do mar, pronta para pegar ondas e viver momentos inesquecíveis',
          valor: '150,00',
          inStock: 10
        },
        {
          title: 'Barbie Gari',
          image: "imagens/bonecas/boneca30.jpg",
          description: 'Barbie Gari é uma verdadeira heroína do dia a dia, pronta para cuidar da cidade e deixar tudo mais bonito',
          valor: '150,00',
          inStock: 4
        },
        {
          title: 'Barbie (TEA)',
          image: "imagens/bonecas/boneca31.jpg",
          description: 'Barbie (TEA) foi feita para inspirar o amor e aceitação, das diferenças e a beleza de cada um',
          valor: '150,00',
          inStock: 10
        },
        {
          title: 'Ken da Barbie',
          image: "imagens/bonecas/boneca32.jpg",
          description: 'Ken é um verdadeiro amigo da Barbie, sempre pronto para aventuras e momentos especiais juntos',
          valor: '109,90',
          inStock: 10
        }
      ]
    };
  },
  methods: {
    buttonText(inStock) {
      if (inStock === 0) return "Esgotado";
      if (inStock < 5) return `Apenas ${inStock}`;
      return "Comprar";
    },
    adicionar(card) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existente = cart.find(item => item.name === card.title);

      if (existente) {
        existente.quantity += 1;
      } else {
        cart.push({
          name: card.title,
          price: "R$" + card.valor,
          image: card.image,
          quantity: 1
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      alert(card.title + " foi adicionada à sacola!");
    }
  }
};
</script>

<style scoped>
@import "@/assets/style.css";

.homeView {
  background-color: rgb(242, 97, 136);
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.preco {
  font-weight: bold;
  color: #e91e63;
}

.btn-sold-out {
  background-color: gray;
  cursor: not-allowed;
}

.btn-running-out {
  background-color: orange;
  color: white;
}
</style>
