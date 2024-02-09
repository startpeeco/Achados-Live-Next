import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Achados Live</title>
          <meta property="og:title" content="Achados Live" />
        </Head>
        <div>
          <div className="home-container2">
            <Script
              html={`<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="7; url='https://live-co.app/go/130246552237'" />
  </head>
  <body>
    <p></p>
  </body>
</html>`}
            ></Script>
          </div>
        </div>
        <img alt="image" src="/giphy-500h.gif" className="home-image" />
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-container2 {
            display: contents;
          }
          .home-image {
            width: 432px;
            height: 481px;
            margin-top: 126px;
            object-fit: cover;
            margin-left: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-threeunits);
          }
          @media (max-width: 479px) {
            .home-image {
              width: 455px;
              height: 385px;
              margin-top: 164px;
              margin-left: var(--dl-space-space-threeunits);
              margin-right: var(--dl-space-space-threeunits);
              margin-bottom: 89px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
