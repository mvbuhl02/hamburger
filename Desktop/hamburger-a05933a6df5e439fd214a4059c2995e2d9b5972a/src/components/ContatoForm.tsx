import React, { useState } from 'react';
import '../styles/contatoForm.css';

interface ContatoFormProps {
  onSubmit?: (formData: { email: string; mensagem: string }) => void;
}

function ContatoForm({ onSubmit }: ContatoFormProps) {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um email válido.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ''
        },
        body: JSON.stringify({
          toMail: email,
          content: `Email: ${email}\nMensagem: ${mensagem}`,
        }),
      });

      if (response.ok) {
        if (onSubmit) {
          onSubmit({ email, mensagem });
        }
        setEmail('');
        setMensagem('');
        alert('Mensagem enviada com sucesso!');
        setIsSubmitting(false);
      } else {
        console.error('Erro ao enviar email:', response.status);
        alert('Erro ao enviar mensagem.');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      alert('Erro ao enviar mensagem.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contato-form-div">
      <div className="container">
        <h3>Envie uma mensagem</h3>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContatoForm;