import React, { useState } from 'react';
import '../styles/contatoForm.css';
interface ContatoFormProps {
  onSubmit?: (formData: { nome: string; email: string; mensagem: string }) => void;
}

function ContatoForm({ onSubmit }: ContatoFormProps) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (onSubmit) {
      onSubmit({ nome, email, mensagem });
    }
  };

  return (
    <div className="contato-form">
      <h3>Envie uma mensagem</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required 
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div>
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required 
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ContatoForm;