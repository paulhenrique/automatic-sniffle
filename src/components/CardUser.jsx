import Swal from 'sweetalert2';
import { AiOutlineUserDelete, AiOutlineEdit } from 'react-icons/ai';
import database from '../common/services/database';
import Link from 'next/link';

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
          <Link href={`/editar-pessoa/${pessoa._id}`} passHref>
            <button className="btn btn-success m-1 text-center align-items-center btn-sm rounded-circle ml-5">
              <AiOutlineEdit />
            </button>
          </Link>
          <button className="btn btn-danger btn-sm rounded-circle ml-5" onClick={() => confirmDelete(pessoa._id)}>
            <AiOutlineUserDelete />
          </button>
        </span>
      </div>
    </div>
  );
}

export default CardUser;