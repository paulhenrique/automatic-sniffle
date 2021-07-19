import connection from '../../../common/database/connection';
import Pessoa from '../../../common/models/Pessoa';


export default async function userHandler(req, res) {
  connection();
  const { query: { id }, method } = req;
  switch (method) {
    case 'GET':
      try {
        res.send(await Pessoa.find({ '_id': id }));
      } catch (err) {
        res.send(err);
      }
      break;
    case 'PUT':
      const returnedPessoa = await Pessoa.findOneAndUpdate({ '_id': id }, {
        ...req.body
      });
      res.json(await returnedPessoa)
      break;
    case 'DELETE':
      const deletedPessoa = await Pessoa.findOneAndDelete({ '_id': id });
      res.json(await deletedPessoa)
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
