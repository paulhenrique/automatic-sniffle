import connection from '../../common/database/connection';
import Pessoa from '../../common/models/Pessoa';


export default async function userHandler(req, res) {
  connection();
  const { method } = req;

  switch (method) {
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
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
