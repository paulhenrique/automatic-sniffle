import React from 'react'
import Image from 'next/image';
import Note from '../assets/note.svg';
import Head from 'next/head';
import { AiOutlineUserDelete, AiOutlineEdit } from 'react-icons/ai';
function CardUser() {
  return (

    <div className="card rounded-lg border-0 shadow-sm mb-3">
      <div className="card-body d-flex align-items-center justify-content-between">
        <h5>Paulo Henrique</h5>
        <span>
          <button className="btn btn-success m-1 text-center align-items-center btn-sm rounded-circle ml-5">
            <AiOutlineEdit />
          </button>
          <button className="btn btn-danger btn-sm rounded-circle ml-5">
            <AiOutlineUserDelete />
          </button>
        </span>
      </div>
    </div>
  );
}

function Users() {
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
            {[1, 2, 3, 4, 6].map((e, i) => (<CardUser key={i} />))}
          </div>
          <div className="col-4">
            <Image src={Note} alt="Notebook" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Users
