import connection from '../../../common/database/connection';
import Pessoa from '../../../common/models/Pessoa';


export default async function userHandler(req, res) {
  connection();
  const { query: { id, name }, method } = req;

  switch (method) {
    case 'GET':
      try {
        const newPessoa = new Pessoa({
          'nome': 'content',
          'sobrenome': 'content',
          'cep': 'content',
          'estado': 'content',
          'cidade': 'content',
          'logradouro': 'content',
          'email': 'content',
          'telefone': 'content',
          'cpf': 'content',
        });

        console.log(await newPessoa.save());
      } catch (err) {
        res.send(err);
      }
      res.status(200).json({ id, name: `User ${id}` });
      break;
    case 'POST':
      res.status(200).json({ id, name: `User ${id}` });
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
