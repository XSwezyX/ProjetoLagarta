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
</html>html>
