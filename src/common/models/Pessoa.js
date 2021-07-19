import mongoose from 'mongoose';

const Pessoa = {
  nome: {
    type: String,
    required: true
  },
  sobrenome: {
    type: String,
    required: true
  },
  cep: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  },
  nacionalidade: {
    type: String,
    required: true
  },
  cidade: {
    type: String,
    required: true
  },
  logradouro: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  created_date: {
    type: Date,
    default: Date.now
  }
}

let PessoaInstanciated;


try {
  PessoaInstanciated = mongoose.model("Pessoa");
} catch {
  PessoaInstanciated = mongoose.model("Pessoa", new mongoose.Schema(Pessoa));
}

export default PessoaInstanciated;