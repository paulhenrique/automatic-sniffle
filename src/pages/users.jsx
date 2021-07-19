import React from 'react'
import Image from 'next/image';
import Note from '../assets/note.svg';
import Head from 'next/head';
import Swal from 'sweetalert2';
import { AiOutlineUserDelete, AiOutlineEdit } from 'react-icons/ai';
import database from '../common/services/database';

function CardUser({ pessoa, updated }) {
  const deleteUser = async (id) => {
    try {
      await database.delete(`/${id}`);
    } catch (err) {
      Swal.fire({
        title: 'Um erro aconteceu durante esse processo',
        text: err.message,
        icon: 'warning'
      });
    }
  }

  const confirmDelete = (id) => {
    Swal.fire({
      title: 'Você tem certeza?',
      text: "Você não poderá desfazer essa ação!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id);
        Swal.fire(
          'Deletado!',
          'Este registro foi removido da base.',
          'success'
        );
        updated();
      }
    });
  }
  return (
    <div className="card rounded-lg border-0 shadow-sm mb-3">
      <div className="card-body d-flex align-items-center justify-content-between">
        <h5>{pessoa.nome}</h5>
        <span>
          <button className="btn btn-success m-1 text-center align-items-center btn-sm rounded-circle ml-5">
            <AiOutlineEdit />
          </button>
          <button className="btn btn-danger btn-sm rounded-circle ml-5" onClick={() => confirmDelete(pessoa._id)}>
            <AiOutlineUserDelete />
          </button>
        </span>
      </div>
    </div>
  );
}

function Pessoas() {
  const [pessoas, setPessoas] = React.useState([]);

  const getPessoasFromDatabase = React.useCallback(async () => {
    console.log('executando');
    const { data } = await database.get();
    setPessoas(await data);
  }, []);

  React.useEffect(() => {
    getPessoasFromDatabase();
  }, [getPessoasFromDatabase]);
  return (
    <>
      <Head>
        <title>Automatic Sniffle - Listing Users</title>
        <meta name="description" content="Listagem de usuários" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container pt-5">
        <div className="row">
          <div className="col"><h2>Estes são os usuários na nossa base</h2>
            {pessoas.map((e, i) => (<CardUser updated={() => getPessoasFromDatabase()} key={e._id} pessoa={e} />))}
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
