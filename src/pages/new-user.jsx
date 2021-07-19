import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Rocket from '../assets/rocket.svg';
import Input from '../components/Input';

function NewUser() {
  const [nome, setNome] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [nacionalidade, setNacionalidade] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [logradouro, setLogradouro] = React.useState('');
  const [cidade, setCidade] = React.useState('');
  const [estado, setEstado] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  function handleSubmitForm(e) {
    e.preventDefault();
    console.log({
      nome,
      sobrenome,
      email,
      nacionalidade,
      cep,
      logradouro,
      cidade,
      estado,
    });
  }
  return (
    <div className="container">
      <div className="row vh-100 align-items-center">
        <div className="col-7">
          <Image src={Rocket} alt="Rocket" />
        </div>
        <div className="col">
          <h1>Novo Usuário</h1>
          <form onSubmit={(e) => handleSubmitForm(e)}>
            <div className="row">
              <div className="col">
                <Input
                  name="nome"
                  label="Nome"
                  helper="Digite o nome"
                  placeholder="Anakin"
                  onInput={() => setNome('oie')}
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

      </div>
    </div>
  )
}

export default NewUser
