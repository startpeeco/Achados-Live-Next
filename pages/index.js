import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Achados Live</title>
          <meta property="og:title" content="Achados Live" />
        </Head>
        <img alt="image" src="/giphy-500h.gif" className="home-image" />
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image {
            width: 432px;
            height: 481px;
            object-fit: cover;
          }
          @media (max-width: 479px) {
            .home-image {
              width: 455px;
              height: 385px;
              margin-right: 0px;
              margin-bottom: 272px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
