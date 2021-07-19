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
        if (await Pessoa.findOne({ 'cpf': req.body.cpf })) throw new Error('CPF duplicado');
        const newPessoa = Pessoa.create({
          ...req.body
        });
        res.json({ error: false, content: await newPessoa });
      } catch (err) {
        res.json({ error: true, message: err.message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}