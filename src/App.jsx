import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<p>Produtos</p>} />
          <Route path="/login" element={<p>Login</p>} />
          <Route path="/carrinho" element={<p>Carrinho</p>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;