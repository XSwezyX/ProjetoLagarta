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
2) Integração do Css e JavaScript e fechamento do head.
<link rel="stylesheet" href="Mask.css">
<script src="Mask.js"></script>
</head>
3) Implementação do Body, começando pelo header, com nossa interface geral do site ( Logo, NewDrop, Sobre nós, Informações, Pesquisa, Carrinho e Login ).
<body>
<header>
  <div class="logo">
    <img src="logo.png" alt="Mask">
  </div>
  <nav>
    <ul>
      <li><a href="#drop">!!NEW DROP!!</a></li>
      <li><a href="#sobre">Sobre nós</a></li>
      <li><a href="#informacoes">Informações</a></li>
    </ul>
    <ul class="icons">
      <li><a href="#">🔍</a></li>
      <li><a href="#">👤</a></li>
      <li><a href="#">🛒</a></li>
    </ul>
  </nav>
</header>
4) Carrosel de imagens, mostrando conteudos principais.
<section class="hero">

<img class="slide active" src="">
<img class="slide" src="">
<img class="slide" src="">
<img class="slide" src="">

<button class="prev">❮</button>
<button class="next">❯</button>

</section>
5) Apresentação de peças de roupas em destaque para venda. Além delas vão haver outras.
<main>

<section class="colecao">

  <div class="camiseta">
    <img src="Pack de Roupas Mask/Apricot-front-20260310.png">
    <h2>Camiseta Apricot</h2>
    <p>R$152,99</p>
  </div>

  <div class="camiseta">
    <img src="Pack de Roupas Mask/Black-front-20260310.png">
    <h2>Camiseta Black</h2>
    <p>R$152,99</p>
  </div>

  <div class="camiseta">
    <img src="Pack de Roupas Mask/Black-front-20260309.png">
    <h2>Camiseta Preta</h2>
    <p>R$152,99</p>
  </div>

  <div class="camiseta">
    <img src="Pack de Roupas Mask/Coffee-front-20260309.png">
    <h2>Camiseta Coffee</h2>
    <p>R$152,99</p>
  </div>

  <div class="camiseta">
    <img src="Pack de Roupas Mask/Colorful Blue-front-20260310.png">
    <h2>Camiseta Colorful Blue</h2>
    <p>R$152,99</p>
  </div>

  <div class="camiseta">
    <img src="Pack de Roupas Mask/Gray-front-20260309.png">
    <h2>Camiseta Gray</h2>
    <p>R$152,99</p>
  </div>

  <div class="camiseta">
    <img src="Pack de Roupas Mask/Light Apricot-front-20260309.png">
    <h2>Camiseta Light Apricot</h2>
    <p>R$152,99</p>
  </div>

  <div class="camiseta">
    <img src="Pack de Roupas Mask/MAKSREDHOODIE.png">
    <h2>Blusa Vermelha</h2>
    <p>R$259,99</p>
  </div>
</section>
6) Explicação sobre quem somos.
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
    <img src="foto1.jpg">
    <img src="foto2.jpg">
  </div>
</section>
7) Encerramento da HomePage com informações de contato, localidade e disponibilidade.
Fim do codigo.
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
