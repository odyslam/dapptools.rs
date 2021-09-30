import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
export default ({ data }) => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="flex flex-row items-start sm:flex sm:flex-row-reverse ">
          <div className="flex flex-col items-center sm:px-2">
            <h1 className="px-4 text-2xl text-left font-bold sm:text-3xl">
              Dapptools.rs: A drop-in replacement for Dapptools, written in
              Rust.
            </h1>
            <p className="px-4 mt-8 text-lg text-gray-700 sm:mt-8">
              Dapptools.rs (aka Turbodapptools) is a complete rewrite of the
              notorious toolchain, focussing on performance.
            </p>
            <p className="px-4 mt-8 text-lg text-gray-700 sm:mt-8">
              DappTools is REALLY great. You should{" "}
              <a className="text-blue-500" href="https://dapp.tools/">
                try it
              </a>
              , especially the symbolic execution and step debugger features.
            </p>
            <div className="mt-8 mx-auto grid grid-flow-col gap-10">
              <a
                href="https://github.com/gakonst/dapptools-rs"
                className="p-4 text-black text-sm font-bold rounded shadow-lg hover:bg-gray-300"
              >
                View on GitHub
              </a>
              <a
                href="https://github.com/gakonst/dapptools-rss"
                className="p-4 text-black text-sm font-bold rounded shadow-lg hover:bg-gray-300"
              >
                Join the Telegram group
              </a>
            </div>
          </div>
          <StaticImage
            className="w-full max-w-lg h-lg mx-auto sm:w-1/2 "
            src="../images/turbodapptools.jpg"
            alt="dapptools-rs prime meme"
          />
        </div>
        <div className="mx-auto -mt-20 w-11/12 sm:px-2 flex flex-col items-center gap-5">
          <h2 className="mx-auto text-xl text-center font-bold">
            {" "}
            How to Instal Dapptools.rs{" "}
          </h2>
          <p className="font-bold">Linux - Apt</p>
          <div className="mb-0 flex items-center p-3 mx-auto bg-white rounded shadow-xs sm:mx-auto">
            <code className="text-gray-600 text-xs leading-xl">
              curl http://apt.dapptools.rs/dapptools-rs-key.gpg | sudo apt-key
              add - <br />
              echo "dev [arch=amd64] localhost bullseye" | sudo tee
              /etc/apt/sources.list.d/dapptools-rs.list <br />
              apt-get update <br />
              apt-get install dapptools-rs
            </code>
          </div>
          <p className="font-bold">MacOS</p>
          <div className="mb-0 flex items-center p-3 mx-auto bg-white rounded shadow-xs sm:mx-auto">
            <code className="text-gray-600 text-xs leading-xl">
              brew install dapptools-rs
            </code>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "images/turbodapptools.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
