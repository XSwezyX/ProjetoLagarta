# ProjetoLagarta
# Henrique Haramaki RA: 10752924 | Lukas Barone Sussa RA: 10753291 | Ryan Matias Dos Santos Alves RA: 10752963
# Explicação do processo de ideação
#Nosso processo de ideação aconteceu por meio de uma conversa em grupo onde conversamos sobre nossas ideias e projetos que envolviam pessoas que conhecemos, pai de um amigo nosso que precisava de um site para o seu mercado e um amigo nosso que estava começando na carreira com a moda, querendo criar uma loja de vendas de roupas com seus projetos e estilos. Com isso definimos pontos necessários em cada um dos projetos, analisamos o estilo de criação para cada um e chegamos na conclusão, onde todos os membros concordaram em ajudar nosso amigo que precisa de um site para começar sua carreira.
#Caráter extensionista
#Nosso carater extensionista vai ser com nosso amigo, Lucas, por conta da sua carreira na moda, considerando que ele começou a criar projetos de roupas e deseja realizar a venda do seu estilo, chegando ao mercado de trabalho por meio de um site onde vai vender suas roupas. Suas ideias de roupas são muito interessantes, com isso, o desenvolvimento de um site possibilitaria seu crescimento profissional.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Tutorial Html HomePage
1) Primeiro elementos, abordando a linguagem do site, formatação com UTF-8 e o viewport.
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Mask®️</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Integração de Css e Js -->
<link rel="stylesheet" href="Mask.css">
<script src="Mask.js"></script>
</head>

<body>

<!-- Barra superior do site -->
<header>
  <!-- Logo do site -->
  <div class="logo">
    <img src="Pack de Roupas Mask/masklogo-removebg-preview.png" alt="Mask">
  </div>

  <!-- Interface da barra superior -->
  <nav>
    <ul>
      <li><a href="#drop">!!NEW DROP!!</a></li>
      <li><a href="#sobre">Sobre nós</a></li>
      <li><a href="#informacoes">Informações</a></li>
    </ul>

    <!-- Simbolos de acesso -->
    <ul class="icons">
      <li><a href="#">🔍</a></li>
      <li><a href="#">👤</a></li>
      <li><a href="#">🛒</a></li>
    </ul>
  </nav>
</header>

<!-- Carrosel background -->
<section class="hero">
<img src="slide" src="Pack de Roupas Mask/Modelo blusa 2.jpg">
<img class="slide active" src="Pack de Roupas Mask/Maski.jpeg">
<img class="slide" src="Pack de Roupas Mask/Modelo camiseta 2].jpg">
<img class="slide" src="Pack de Roupas Mask/Modelo camiseta 3.jpeg">


</section>

<!-- Roupas a venda -->
<main>

<section class="categorias">

  <a href="camisetas.html" class="categoria">
    <img src="Pack de Roupas Mask/Modelo camisetas.jpg" alt="Camisetas">
    <div class="overlay">
      <h2>Camisetas</h2>
    </div>
  </a>

  <a href="shorts.html" class="categoria">
    <img src="Pack de Roupas Mask/Modelo shorts.jpeg" alt="Shorts">
    <div class="overlay">
      <h2>Shorts</h2>
    </div>
  </a>

  <a href="calcas.html" class="categoria">
    <img src="Pack de Roupas Mask/Modelo calça.jpeg" alt="Calças">
    <div class="overlay">
      <h2>Calças</h2>
    </div>
  </a>

  <a href="moletons.html" class="categoria">
    <img src="Pack de Roupas Mask/Modelo moletom.jpg" alt="Moletons">
    <div class="overlay">
      <h2>Moletons</h2>
    </div>
  </a>

</section>

<!-- Explicação sobre quem somos -->
<section id="sobre" class="sobre">
  <h2>Sobre a Mask</h2>

  <p>
  A Mask nasceu com a ideia de criar roupas que representem atitude,
  identidade e cultura urbana. Inspirada no streetwear moderno,
  a marca busca trazer peças únicas que expressem personalidade
  e estilo. Cada coleção é pensada para quem quer se destacar
  e mostrar sua visão através da moda.
  </p>

  <div class="fotos-sobre">
    <img src="Pack de Roupas Mask/foto-sobre-1.jpeg">
  </div>
</section>

<!-- Informações de contato, endereço e horários -->
<section id="informacoes" class="informacoes">
  <h2>Informações</h2>

  <p><strong>Telefone:</strong> (11) 99999-9999</p>
  <p><strong>Email:</strong> maskcompany@email.com</p>
  <p><strong>Endereço:</strong> São Paulo - SP</p>
  <p><strong>Horário:</strong> Seg - Sex / 9h às 18h</p>
</section>

</main>

</body>
</html>

Tutorial Css Home page:
1) Configurações gerais do css do site.
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #1a1a1a;
}
2) Configurações do body do site
body {
    background-color: #FFFFFF; /* Branco */
    line-height: 1.6;
}
3) Configurações do navbar do header
```
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #FFFFFF;
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 2px solid #1a1a1a;
}
```

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    height: 70px;
    margin-right: 30px;
}
4) Container de navegação
nav {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
}

/* Links principais */
nav ul:not(.icons) {
    display: flex;
    list-style: none;
    gap: 15px;
}

nav ul li a {
    text-decoration: none;
    font-weight: 700;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.2s;
}

nav ul li a:hover {
    color: #7a7a7a;
}
5) Configurações principais em css
nav ul:not(.icons) {
    display: flex;
    list-style: none;
    gap: 15px;
}

nav ul li a {
    text-decoration: none;
    font-weight: 700;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.2s;
}

nav ul li a:hover {
    color: #7a7a7a;
}
6) Configurações dos ícones
.icons {
    display: flex;
    list-style: none;
    gap: 20px;
    font-size: 1.4rem;
}
7) Main do site
.hero {
    position: relative;
    height: 500px;
    width: 80%;
    margin: 40px auto;
    background-color: #f0f0f0; /* leve contraste */
    overflow: hidden;
    border: 1px solid #1a1a1a;
}

.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    z-index: 1;
}

.slide.active {
    opacity: 1;
}
8) Configurações do grid de categoria
.categorias {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2px;
    padding: 20px;
    background-color: #eaeaea; /* separação */
}

.categoria {
    position: relative;
    height: 500px;
    overflow: hidden;
    background-color: #FFFFFF;
}

.categoria img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(20%);
    transition: 0.4s;
}

.categoria:hover img {
    filter: grayscale(0%);
    transform: scale(1.05);
}

.overlay {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.9); /* branco */
    padding: 10px 25px;
    border: 1px solid #1a1a1a;
}

.overlay h2 {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 800;
}
9) Secções de texto
.sobre, .informacoes {
    padding: 80px 10%;
    text-align: left;
}

.sobre h2, .informacoes h2 {
    font-size: 3rem;
    margin-bottom: 40px;
    text-transform: uppercase;
    letter-spacing: -2px;
}

.fotos-sobre img {
    display: block;
    margin: 0 auto;
    width: 50%;
    height: 500px; /* controla o corte */
    object-fit: cover;
    object-position: top; /* mostra só a parte de cima */
    border: 1px solid #1a1a1a;
}
    nav ul:not(.icons) {
        gap: 15px;
    }
}
