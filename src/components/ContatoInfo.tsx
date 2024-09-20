import '../styles/contatoInfo.css';
interface ContatoInfoProps {
    endereco: string;
    telefone: string;
    email: string;
  }
  
  function ContatoInfo({ endereco, telefone, email }: ContatoInfoProps) {
    return (
      <div className="contato-info">
        <p><strong>Endereço:</strong> {endereco}</p>
        <p><strong>Telefone:</strong> {telefone}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    );
  }
  
  export default ContatoInfo;