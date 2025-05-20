const produtos = [
  { nome: "Vestido em Chamise", imagem: "Vestido em Chamise.jpg",},
  { nome: "Vestido Chamise", imagem: "Vestido Chamise.jpg" },
  { nome: "Vestido xadrez em viscolinho", imagem: "Vestido xadrez em viscolinho.jpg" }
];

const container = document.getElementById("produtos-container");

produtos.forEach(produto => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}">
    <h3>${produto.nome}</h3>
  `;
  container.appendChild(card);
});
