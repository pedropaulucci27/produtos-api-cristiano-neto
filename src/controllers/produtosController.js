let produtos = [];
let nextId = 1;

function listar(req, res) {
  return res.status(200).json(produtos);
}

function buscarPorId(req, res) {
  const id = Number(req.params.id);

  const produto = produtos.find((p) => p.id === id);

  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado" });
  }

  return res.status(200).json(produto);
}

function criar(req, res) {
  const { nome, descricao, preco, categoria, estoque } = req.body;

  if (!nome || !descricao || preco === undefined || !categoria || estoque === undefined) {
    return res.status(400).json({ erro: "Campos obrigatórios não informados" });
  }

  const novoProduto = {
    id: nextId++,
    nome,
    descricao,
    preco,
    categoria,
    estoque,
    ativo: true
  };

  produtos.push(novoProduto);

  return res.status(201).json(novoProduto);
}

function atualizar(req, res) {
  const id = Number(req.params.id);
  const index = produtos.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Produto não encontrado" });
  }

  const { nome, descricao, preco, categoria, estoque, ativo } = req.body;

  produtos[index] = {
    id,
    nome,
    descricao,
    preco,
    categoria,
    estoque,
    ativo
  };

  return res.status(200).json(produtos[index]);
}

function remover(req, res) {
  const id = Number(req.params.id);
  const index = produtos.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Produto não encontrado" });
  }

  produtos.splice(index, 1);

  return res.status(204).send();
}

module.exports = { listar, buscarPorId, criar, atualizar, remover };