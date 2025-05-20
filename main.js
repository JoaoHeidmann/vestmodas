const produtos = [
  { nome: "Vestido Floral", imagem: "vestido1.jpg" },
  { nome: "Blusa Social", imagem: "blusa1.jpg" },
  { nome: "Conjunto Feminino", imagem: "conjunto1.jpg" }
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
