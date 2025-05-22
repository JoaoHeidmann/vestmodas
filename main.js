// Array de produtos — você pode expandir facilmente depois
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

// Função para criar um card de produto
function criarCardProduto(produto) {
  const card = document.createElement("div");
  card.className = "card";

  // Usar createElement para evitar possíveis ataques XSS (segurança)
  const img = document.createElement("img");
  img.src = produto.imagem;
  img.alt = produto.nome;

  const titulo = document.createElement("h3");
  titulo.textContent = produto.nome;

  card.appendChild(img);
  card.appendChild(titulo);

  return card;
}

// Função para carregar os produtos no container
function carregarProdutos(produtos, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container com id "${containerId}" não encontrado.`);
    return;
  }

  // Limpa o conteúdo antes de carregar, caso queira recarregar depois
  container.innerHTML = "";

  produtos.forEach(produto => {
    const card = criarCardProduto(produto);
    container.appendChild(card);
  });
}

// Chamada da função para carregar os produtos
carregarProdutos(produtos, "produtos-container");
