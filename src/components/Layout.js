import React from "react"
import SEO from "./SEO"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-gray-200">
        <header className="p-4 flex items-center justify-start font-semibold">
          <h1 className="max-w-4xl">Dapptools.rs</h1>
          <img
            className="w-10 h-10"
            src="https://www.rust-lang.org/static/images/rust-logo-blk.svg"
          />
        </header>
        {children}
        <footer className="py-2 text-center text-gray-600 text-xs">
          (☞ﾟ∀ﾟ)☞ Dapptools.rs™️ |{" "}
          <a
            href="https://github.com/odyslam/dapptools.rs"
            target="_blank"
            className="text-blue-500"
          >
            improve dapptools.rs
          </a>
        </footer>
      </div>
    </>
  )
}

export default Layout
