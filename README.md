# ProjetoLagarta

# Henrique Haramaki RA: 10752924 | Lukas Barone Sussa RA: 10753291 | Ryan Matias Dos Santos Alves RA: 10752963

# Explicação do processo de ideação

Nosso processo de ideação aconteceu por meio de uma conversa em grupo onde discutimos ideias e projetos envolvendo pessoas próximas. Consideramos duas possibilidades: o pai de um amigo que precisava de um site para seu mercado e um amigo que estava iniciando na carreira da moda, com interesse em criar uma loja online para vender suas roupas.

Após analisar as ideias e os objetivos de cada projeto, avaliamos o estilo de criação necessário para cada caso e chegamos à conclusão de que seria mais interessante desenvolver o site para o nosso amigo que deseja iniciar sua carreira na moda.

---

# Caráter extensionista

Nosso caráter extensionista será voltado ao nosso amigo Lucas, considerando sua entrada no mercado da moda. Ele já desenvolve projetos de roupas e deseja comercializar suas criações.

Com isso, o desenvolvimento do site permitirá que ele tenha uma plataforma para divulgar e vender seus produtos, contribuindo diretamente para seu crescimento profissional.

---

---

# Tutorial HTML HomePage

## 1) Estrutura inicial do documento

Definição da linguagem, codificação UTF-8 e configuração de responsividade com viewport.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Mask®️</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="Mask.css">
<script src="Mask.js"></script>
</head>

<body>
```

---

## 2) Header (barra superior do site)

```html
<header>
  <div class="logo">
    <img src="Pack de Roupas Mask/masklogo-removebg-preview.png" alt="Mask">
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
```

---

## 3) Carrossel de imagens

```html
<section class="hero">
<img src="slide" src="Pack de Roupas Mask/Modelo blusa 2.jpg">
<img class="slide active" src="Pack de Roupas Mask/Maski.jpeg">
<img class="slide" src="Pack de Roupas Mask/Modelo camiseta 2].jpg">
<img class="slide" src="Pack de Roupas Mask/Modelo camiseta 3.jpeg">
</section>
```

---

## 4) Categorias de produtos

```html
<section class="categorias">

  <a href="camisetas.html" class="categoria">
    <img src="Pack de Roupas Mask/Modelo camisetas.jpg">
    <div class="overlay">
      <h2>Camisetas</h2>
    </div>
  </a>

  <a href="shorts.html" class="categoria">
    <img src="Pack de Roupas Mask/Modelo shorts.jpeg">
    <div class="overlay">
      <h2>Shorts</h2>
    </div>
  </a>

</section>
```

---

## 5) Seção sobre

```html
<section id="sobre" class="sobre">
  <h2>Sobre a Mask</h2>
  <p>Texto sobre a marca...</p>
</section>
```

---

## 6) Informações

```html
<section id="informacoes" class="informacoes">
  <h2>Informações</h2>

  <p><strong>Telefone:</strong> (11) 99999-9999</p>
  <p><strong>Email:</strong> maskcompany@email.com</p>
  <p><strong>Endereço:</strong> São Paulo - SP</p>
  <p><strong>Horário:</strong> Seg - Sex / 9h às 18h</p>
</section>
```

---

# Tutorial CSS Home Page

## 1) Configurações globais

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #1a1a1a;
}
```

---

## 2) Body

```css
body {
    background-color: #FFFFFF;
    line-height: 1.6;
}
```

---

## 3) Header

```css
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #FFFFFF;
}
```

---

## 4) Navegação

```css
nav {
    display: flex;
    justify-content: space-between;
}
```

---

## 5) Links

```css
nav ul li a {
    text-decoration: none;
    font-weight: bold;
}
```

---

## 6) Ícones

```css
.icons {
    display: flex;
    gap: 20px;
}
```

---

## 7) Carrossel

```css
.hero {
    position: relative;
}

.slide {
    opacity: 0;
}

.slide.active {
    opacity: 1;
}
```

---

## 8) Categorias

```css
.categorias {
    display: grid;
}
```

---

## 9) Seções

```css
.sobre, .informacoes {
    padding: 80px;
}
```

---

---

# Tutorial JavaScript

## 1) Seleção de elementos

```js
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
```

---

## 2) Função principal

```js
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));

        if (index >= slides.length) currentIndex = 0;
        else if (index < 0) currentIndex = slides.length - 1;
        else currentIndex = index;

        slides[currentIndex].classList.add('active');
    }
```

---

## 3) Alternância automática

```js
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);
});
```
