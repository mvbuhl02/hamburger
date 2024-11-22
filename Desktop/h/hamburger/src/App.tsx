import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Sobre from './components/Sobre';
import Avaliacoes from './components/Avaliacoes';
import ContatoForm from './components/ContatoForm';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Sobre />
        <Avaliacoes />
        <ContatoForm />
        <Footer />
      </main>
    </div>
  );
}

export default App;