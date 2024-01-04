import { useState } from "react";
import { Navbar, Main, Product, Footer } from "../components";

function Home() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <Main />
      <Product search={search} />
      <Footer />
    </>
  )
}

export default Home