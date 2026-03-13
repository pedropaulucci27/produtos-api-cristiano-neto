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
  // TODO
}

function atualizar(req, res) {
  // TODO
}

function remover(req, res) {
  // TODO
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  remover
};