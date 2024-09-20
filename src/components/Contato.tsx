import ContatoInfo from './ContatoInfo';
import ContatoForm from './ContatoForm';
import '../styles/contato.css';

function Contato() {
  const contatoInfoData = {
    endereco: 'Rua dos Burgers, 123 - Centro',
    telefone: '(12) 3456-7890',
    email: 'contato@hamburgueriadeliciosa.com',
  };

  return (
    <section id="contato">
      <div className="container">
        <h2>Contato</h2>
        <div className="flex justify-around">
          <ContatoInfo {...contatoInfoData} />
          <ContatoForm />
        </div>
      </div>
    </section>
  );
}

export default Contato;