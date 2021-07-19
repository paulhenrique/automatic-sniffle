import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Rocket from '../assets/rocket.svg';
import Input from '../components/Input';
import database from '../common/services/database';
import consultaCEP from '../common/services/consultaCEP';
import isValidCPF from '../common/resources/isValidCPF';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NewPessoa() {
  const [nome, setNome] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [nacionalidade, setNacionalidade] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [logradouro, setLogradouro] = React.useState('');
  const [cidade, setCidade] = React.useState('');
  const [estado, setEstado] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [cpf, setCpf] = React.useState('');

  async function sendDataToDataBase() {
    const response = await database.post('', {
      nome,
      sobrenome,
      email,
      nacionalidade,
      cep: cep.replace(/_/g, ''),
      cpf: cpf.replace(/_/g, ''),
      telefone: telefone.replace(/_/g, ''),
      logradouro,
      cidade,
      estado,
    });
    return response.data;
  }

  const router = useRouter();
  async function handleSubmitForm(e) {
    e.preventDefault();
    const refactoredCep = cpf.replace(/_|-|\./g, "");

    if (!isValidCPF(refactoredCep)) {
      toast.warn('CPF Inválido');
      return;
    }

    const data = await sendDataToDataBase();
    if (await data.error) {
      toast.error('Este CPF já está cadastrado!');
      return;
    };

    router.push('/pessoas');

  }

  React.useEffect(() => {
    let refactoredCep = cep.replace(/_|-|\./g, "");
    if (refactoredCep.length !== 8) return;
    async function getAddressData() {
      const { data } = await consultaCEP.get(`/${cep.replace(/_|-|\./g, "")}/json`);
      setCidade(data.localidade);
      setEstado(data.uf);
      setLogradouro(data.logradouro);
    }

    getAddressData();
  }, [cep]);

  React.useEffect(() => {
    const refactoredCPF = cpf.replace(/_|-|\./g, "");
    if (refactoredCPF.length !== 12) return;
    if (isValidCPF(refactoredCPF)) return;
    toast.warn('CPF Inválido');
  }, [cpf]);

  return (
    <div className="container">
      <ToastContainer />
      <div className="row vh-100 align-items-center py-md-5">
        <div className="col-7 d-none d-md-block">
          <Image src={Rocket} alt="Rocket" />
        </div>
        <div className="col">
          <h1>Nova Pessoa</h1>
          <form onSubmit={(e) => handleSubmitForm(e)}>
            <div className="row">
              <div className="col">
                <Input
                  name="nome"
                  label="Nome"
                  value={nome}
                  helper="Digite o nome"
                  placeholder="Anakin"
                  type="text"
                  onInput={(e) => setNome(e.target.value)}
                />
              </div>
              <div className="col">
                <Input
                  name="sobrenome"
                  value={sobrenome}
                  label="Sobrenome"
                  helper="Digite o sobrenome"
                  type="text"
                  placeholder="Skywalker"
                  onInput={(e) => setSobrenome(e.target.value)}
                />
              </div>
            </div>
            <Input
              name="email"
              type="text"
              value={email}
              label="Email"
              helper="Digite o seu melhor e-mail"
              placeholder="anakin@deathstar.com"
              onInput={(e) => setEmail(e.target.value)}
            />
            <Input
              name="telefone"
              type="text"
              value={telefone}
              label="Telefone"
              helper="Digite seu número de telefone"
              mask="(+55) 99 99999-9999"
              placeholder="(+55) 15 99999-9999"
              onInput={(e) => setTelefone(e.target.value)}
            />
            <Input
              name="cpf"
              label="CPF"
              helper="Digite o seu cpf"
              value={cpf}
              placeholder="000.000.000-00"
              mask="999.999.999-99"
              onInput={(e) => setCpf(e.target.value)}

            />
            <div className="row">
              <div className="col">
                <Input
                  value={nacionalidade}
                  name="nacionalidade"
                  label="Nacionalidade"
                  helper="Digite a nacionalidade"
                  placeholder="Brasileiro"
                  onInput={(e) => setNacionalidade(e.target.value)}

                />
              </div>
              <div className="col">
                <Input
                  name="cep"
                  value={cep}
                  label="CEP"
                  type="text"
                  mask="99.999-999"
                  helper="Digite o CEP"
                  placeholder="18214400"
                  onInput={(e) => setCep(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Input
                  value={logradouro}
                  name="logradouro"
                  label="Logradouro"
                  type="text"
                  helper="Digite o Logradouro"
                  placeholder="Rua Um"
                  onInput={(e) => setLogradouro(e.target.value)}

                />
              </div>
              <div className="col">
                <Input
                  name="cidade"
                  value={cidade}
                  label="Cidade"
                  type="text"
                  helper="Digite a Cidade"
                  placeholder="Itapetininga"
                  onInput={(e) => setCidade(e.target.value)}
                />
              </div>
              <div className="col-2">
                <Input
                  name="estado"
                  value={estado}
                  label="Estado"
                  type="text"
                  helper="Estado"
                  placeholder="SP"
                  onInput={(e) => setEstado(e.target.value)}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <Link href="/">
                  <button type="submit" className="shadow btn btn-secondary w-100">Voltar</button>
                </Link>
              </div>
              <div className="col">
                <button type="submit" className="shadow btn btn-primary w-100">Cadastrar</button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default NewPessoa
