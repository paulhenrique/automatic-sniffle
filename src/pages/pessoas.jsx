import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import CardUser from '../components/CardUser';
import Note from '../assets/note.svg';
import Head from 'next/head';
import database from '../common/services/database';


function Pessoas() {
  const [pessoas, setPessoas] = React.useState([]);

  const getPessoasFromDatabase = React.useCallback(async () => {
    const { data } = await database.get();
    setPessoas(await data.reverse());
  }, []);

  React.useEffect(() => {
    getPessoasFromDatabase();
  }, [getPessoasFromDatabase]);
  return (
    <>
      <Head>
        <title>Automatic Sniffle - Listando Pessoas</title>
        <meta name="description" content="Listagem de usuários" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container pt-5">
        <div className="row">
          <div className="col">
            <h2>Estes são os usuários na nossa base</h2>
            <p>Quer cadastrar uma nova Pessoa? <Link href="/nova-pessoa">Clique aqui</Link></p>
            {
              pessoas.length === 0 &&
              (<p className="mt-5">Ainda não há Pessoas na nossa base, <Link href="/nova-pessoa"><a className="btn btn-primary">Cadastrar Pessoa</a></Link></p>)
            }

            {pessoas.length > 0 && pessoas.map((e, i) => (<CardUser updated={() => getPessoasFromDatabase()} key={e._id} pessoa={e} />))}
          </div>
          <div className="col-4">
            <Image src={Note} alt="Notebook" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Pessoas
