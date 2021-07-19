import connection from '../../common/database/connection';
import Pessoa from '../../common/models/Pessoa';

export default async function handler(req, res) {
  connection();
  const pessoas = await Pessoa.find();
  res.status(200).json(pessoas);
}
