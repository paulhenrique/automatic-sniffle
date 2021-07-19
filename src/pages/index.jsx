import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Hand from '../assets/hand.png';
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Automatic Sniffle</title>
        <meta name="description" content="User settings" />
        <script src="https://kit.fontawesome.com/9f635a5f2f.js" crossOrigin="anonymous"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="row vh-100 fill-height align-items-center">
          <div className="col">
            <h1 className="pb-2 text-dark">Por onde quer começar?</h1>
            <div>
              <div className="d-inline">
                <Link href="/nova-pessoa" >
                  <a className="btn btn-primary btn-lg mr-5">Cadastrar novo usuário</a>
                </Link>
              </div>
              <div className="ml-2 d-inline">
                <Link href="/pessoas" >
                  <a className="btn btn-lg">Administrar usuários</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col align-items-center fill-height">
            <span>
              <Image src={Hand} alt="Hand" />
            </span>
          </div>
        </div>
      </main>

    </div>
  )
}
