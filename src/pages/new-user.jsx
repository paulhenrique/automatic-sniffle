import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Rocket from '../assets/rocket.svg';
import Input from '../components/Input';

function NewUser() {
  return (
    <div className="container">
      <div className="row vh-100 align-items-center">
        <div className="col-7">
          <Image src={Rocket} alt="Rocket" />
        </div>
        <div className="col">
          <h1>Novo Usuário</h1>
          <form>
            <div className="row">
              <div className="col">
                <Input
                  name="nome"
                  label="Nome"
                  helper="Digite o nome"
                  placeholder="Anakin"
                />
              </div>
              <div className="col">
                <Input
                  name="sobrenome"
                  label="Sobrenome"
                  helper="Digite o sobrenome"
                  placeholder="Skywalker"
                />
              </div>
            </div>
            <Input
              name="email"
              type="email"
              label="Email"
              helper="Digite o seu melhor e-mail"
              placeholder="anakin@deathstar.com"
            />
            <div className="row">
              <div className="col"><Input
                name="nacionalidade"
                label="Nacionalidade"
                helper="Digite a nacionalidade"
                placeholder="Brasileiro"
              />
              </div>
              <div className="col">
                <Input
                  name="cep"
                  label="CEP"
                  helper="Digite o CEP"
                  placeholder="18214400"
                />
              </div>
            </div>
            <div className="row">
              <div className="col"><Input
                name="logradouro"
                label="Logradouro"
                helper="Digite o Logradouro"
                placeholder="Rua Um"
              />
              </div>
              <div className="col">
                <Input
                  name="cidade"
                  label="Cidade"
                  helper="Digite a Cidade"
                  placeholder="Itapetininga"
                />
              </div>
              <div className="col-2">
                <Input
                  name="estado"
                  label="Estado"
                  helper="Estado"
                  placeholder="SP"
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
