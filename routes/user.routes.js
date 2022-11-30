import express from "express";

const userRoute = express.Router();

const processos = [
  {
      "id": "3dc5e637-0bbb-4a3d-bb64-8ac73ccc33f9",
      "documentName": "Licitacao ENAP - Cursos WEB DEV",
      "status": "Em andamento",
      "details": "bla bla",
      "dateInit": "28/11/2022",
      "dateEnd": "16/12/2022",
      "comments": ["Processo aberto", "Processo em Andamento", "Falta assinatura"],
      "setor": "ENAP"
  },
  {
      "id": "2f392cd0-931a-46b2-b3b1-2c9e4f8434a1",
      "documentName": "Licitacao Notebooks",
      "status": "Em andamento",
      "details": "bla bla",
      "dateInit": "30/11/2022",
      "dateEnd": "",
      "comments": ["Processo aberto e sem previsãode conclusão"],
      "setor": "TRE"
  },
  {
      "id": "3b087a00-a01d-41c3-b1d9-dfa2849562fa",
      "documentName": "Licitacao Compras - Ar condicionado",
      "status": "Finalizado",
      "details": "bla bla",
      "dateInit": "30/11/2022",
      "dateEnd": "",
      "comments": ["Processo aberto", "Processo Finalizado"],
      "setor": "TRJ"
  }
]

//ROTAS
userRoute.get("/all", (req, res) => {
  return res.status(200).json(processos)
})

userRoute.put("/addComment/:id", (req, res) => {
  const { id } = req.params;
  const processo = processos.find(processo => processo.id === id);
  processo.comments.push(req.body.comments);
  return res.status(200).json(processo);
});

userRoute.get("/process/:id", (req, res) => {
  const { id } = req.params; // eu estou DESCONTRUINDO o req.params e ABRINDO o obj e acessando pelo NOME da chave
  const processo = processos.find((processo) => processo.id === id);
  return res.status(200).json(processo)
})

userRoute.post("/create", (req, res) => {
  const form = req.body
  processos.push(form);
  return res.status(201).json(form)
})

//DELETE - delete a process
userRoute.delete("/delete/:id", (req, res) => {
  console.log(req.params.id); // req.params -> {} por isso ele pode ser DESCONTRUÍDO
  const { id } = req.params; // eu estou DESCONTRUINDO o req.params e ABRINDO o obj e acessando pelo NOME da chave
  const deleteById = processos.find((processo) => processo.id === id);
  const index = processos.indexOf(deleteById);
  processos.splice(index, 1);
  return res.status(200).json(processos);
});

userRoute.get("/status/open", (req, res) => {
  const andamento = processos.filter(processo => processo.status === "Em andamento");
  return res.status(200).json(andamento);
});

userRoute.get("/status/close", (req, res) => {
  const finalizados = processos.filter(processo => processo.status === "Finalizado");
  return res.status(200).json(finalizados);
})

export default userRoute;
