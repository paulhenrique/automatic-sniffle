import connection from '../../common/database/connection';
import Pessoa from '../../common/models/Pessoa';

export default async function handler(req, res) {
  connection();
  const { method } = req;

  switch (method) {
    case 'GET':
      const pessoas = await Pessoa.find();
      res.status(200).json(pessoas);
      break;
    case 'POST':
      try {
        const newPessoa = new Pessoa({
          "nome": req.body.nome,
          "sobrenome": req.body.sobrenome,
          "cep": req.body.cep,
          "estado": req.body.estado,
          "cidade": req.body.cidade,
          "logradouro": req.body.logradouro,
          "email": req.body.email,
          "telefone": req.body.telefone,
          "cpf": req.body.cpf,
        });
        res.send(await newPessoa.save());
      } catch (err) {
        res.send(err);
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}