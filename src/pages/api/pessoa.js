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
          ...req.body
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