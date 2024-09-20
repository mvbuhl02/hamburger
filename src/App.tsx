import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Sobre from './components/Sobre';
import Contato from './components/Contato';


function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Sobre />
        <Contato />
      </main>
    </div>
  );
}

export default App;