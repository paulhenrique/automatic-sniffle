import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Rocket from '../../assets/rocket.svg';
import Input from '../../components/Input';
import database from '../../common/services/database';

function EditPessoa() {
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

  const router = useRouter();
  const { id } = router.query;

  const getDataFromCurrentUser = React.useCallback(async () => {
    const { data } = await database.get(`/${id}`);
    const currentUserData = await data[0];
    if (!(currentUserData)) return;
    console.log(currentUserData.nome);
    setNome(currentUserData.nome);
    setSobrenome(currentUserData.sobrenome);
    setEmail(currentUserData.email);
    setNacionalidade(currentUserData.nacionalidade);
    setCep(currentUserData.cep);
    setLogradouro(currentUserData.logradouro);
    setCidade(currentUserData.cidade);
    setEstado(currentUserData.estado);
    setTelefone(currentUserData.telefone);
    setCpf(currentUserData.cpf);

  }, [id]);

  React.useEffect(() => {
    getDataFromCurrentUser()
  }, [getDataFromCurrentUser]);
  async function sendDataToDataBase() {
    const response = await database.post('', {
      nome,
      sobrenome,
      email,
      nacionalidade,
      cep,
      cpf,
      telefone,
      logradouro,
      cidade,
      estado,
    });

    return response.data;
  }

  async function handleSubmitForm(e) {
    e.preventDefault();
    await sendDataToDataBase();
    router.push('/pessoas');
  }

  return (
    <div className="container">
      <div className="row vh-100 align-items-center">

        <div className="col">
          <h1>Editar Pessoa</h1>
          <form onSubmit={(e) => handleSubmitForm(e)}>
            <div className="row">
              <div className="col">
                <Input
                  name="nome"
                  label="Nome"
                  value={nome}
                  helper="Digite o nome"
                  placeholder="Anakin"
                  onInput={(e) => setNome(e.target.value)}
                />
              </div>
              <div className="col">
                <Input
                  name="sobrenome"
                  value={sobrenome}
                  label="Sobrenome"
                  helper="Digite o sobrenome"
                  placeholder="Skywalker"
                  onInput={(e) => setSobrenome(e.target.value)}
                />
              </div>
            </div>
            <Input
              name="email"
              type="email"
              value={email}
              label="Email"
              helper="Digite o seu melhor e-mail"
              placeholder="anakin@deathstar.com"
              onInput={(e) => setEmail(e.target.value)}

            />
            <Input
              name="telefone"
              type="telefone"
              value={telefone}
              label="Telefone"
              helper="Digite seu número de telefone"
              placeholder="(+55) 15 99999-9999"
              onInput={(e) => setTelefone(e.target.value)}

            />
            <Input
              name="cpf"
              type="cpf"
              label="CPF"
              helper="Digite o seu cpf"
              value={cpf}
              placeholder="000.000.000-00"
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
        <div className="col-7">
          <Image src={Rocket} alt="Rocket" />
        </div>
      </div>
    </div>
  )
}

export default EditPessoa
