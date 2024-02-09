import React from 'react'
import Head from 'next/head'

const Consultoria = (props) => {
  return (
    <>
      <div className="consultoria-container">
        <Head>
          <title>Consultoria - Achados Live</title>
          <meta property="og:title" content="Consultoria - Achados Live" />
        </Head>
        <button
          type="button"
          autoFocus="true"
          className="consultoria-button button"
        >
          Iniciar conversa
        </button>
      </div>
      <style jsx>
        {`
          .consultoria-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .consultoria-button {
            font-size: 40px;
            background-color: rgb(65, 239, 106);
          }
          @media (max-width: 767px) {
            .consultoria-button {
              font-size: 40px;
            }
          }
          @media (max-width: 479px) {
            .consultoria-button {
              font-size: 40px;
              border-width: 4px;
              border-radius: var(--dl-radius-radius-radius8);
              background-color: rgb(65, 239, 106);
            }
          }
        `}
      </style>
    </>
  )
}

export default Consultoria
