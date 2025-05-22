// Array de produtos — pode adicionar/remover facilmente
const produtos = [
  { nome: "Vestido em Chamise", imagem: "Vestido em Chamise.jpg" },
  { nome: "Vestido Chamise", imagem: "Vestido Chamise.jpg" },
  { nome: "Vestido xadrez em viscolinho", imagem: "Vestido xadrez em viscolinho.jpg" },
  { nome: "Vestido", imagem: "Vestido.jpeg" },
  { nome: "Vestido eu escolhinho com lastex nas costas", imagem: "Vestido eu escolhinho com lastex nas costas.jpeg" },
  { nome: "Vestido midi em viscolinho", imagem: "Vestido midi em viscolinho.jpeg" },
  { nome: "Cardigan em tricô", imagem: "Cardigan em tricô.jpeg" },
  { nome: "Vestido em viscose", imagem: "Vestido em viscose.jpeg" },
  { nome: "Cardigan em tricô", imagem: "Cardigan em tricô2.jpeg" },
  { nome: "Casaco listra", imagem: "Casaco listra.jpeg" },
  { nome: "Vestido em viscolinho", imagem: "Vestido em viscolinho.jpeg" },
  { nome: "Blazer", imagem: "Blazer.jpeg" },
];

// Cria um card para cada produto
function criarCardProduto(produto) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = produto.imagem;
  img.alt = produto.nome;

  const titulo = document.createElement("h3");
  titulo.textContent = produto.nome;

  card.appendChild(img);
  card.appendChild(titulo);

  return card;
}

// Carrega produtos no container da página
function carregarProdutos(produtos, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container com id "${containerId}" não encontrado.`);
    return;
  }

  container.innerHTML = ""; // limpa antes

  produtos.forEach(produto => {
    const card = criarCardProduto(produto);
    container.appendChild(card);
  });
}

// Chamada inicial para mostrar os produtos na página
carregarProdutos(produtos, "produtos-container");
