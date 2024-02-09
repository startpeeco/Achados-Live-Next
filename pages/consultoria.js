import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const Consultoria = (props) => {
  return (
    <>
      <div className="consultoria-container">
        <Head>
          <title>Consultoria - Achados Live</title>
          <meta property="og:title" content="Consultoria - Achados Live" />
        </Head>
        <div className="consultoria-container1">
          <div className="consultoria-container2">
            <Script
              html={`<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="7; url='https://api.whatsapp.com/send/?phone=5511967272695&text&type=phone_number&app_absent=0'" />
  </head>
  <body>
    <p>carregando...</p>
  </body>
</html>`}
            ></Script>
          </div>
        </div>
        <a
          href="https://api.whatsapp.com/send/?phone=5511967272695&amp;text&amp;type=phone_number&amp;app_absent=0"
          autoFocus="true"
          target="_blank"
          rel="noreferrer noopener"
          className="consultoria-link button"
        >
          Iniciar conversa
        </a>
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
          .consultoria-container2 {
            display: contents;
          }
          .consultoria-link {
            font-size: 40px;
            border-width: 4px;
            text-decoration: none;
            background-color: rgb(65, 239, 106);
          }
          @media (max-width: 991px) {
            .consultoria-container1 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .consultoria-link {
              font-size: 40px;
            }
          }
          @media (max-width: 479px) {
            .consultoria-link {
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
