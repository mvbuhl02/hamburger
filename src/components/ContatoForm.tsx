import React, { useState } from 'react';
import '../styles/contatoForm.css';

interface ContatoFormProps {
  onSubmit?: (formData: { nome: string; email: string; mensagem: string }) => void;
}

function ContatoForm({ onSubmit }: ContatoFormProps) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submission status

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true); // Set submitting state to true

    // Basic email validation (you can use a library for more complex validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um email válido.');
      setIsSubmitting(false); // Reset submitting state on error
      return;
    }

    try {
      const response = await fetch('api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA4NzU3NDAwNDYzNjkyMjQ5NjQ0IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJtdmJ1aGxAbWluaGEuZmFnLmVkdS5iciIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiUU1RRWRVLU13eFpuZEYwb25KS2hEUSIsIm5iZiI6MTczMjIzMTQ4MywiaWF0IjoxNzMyMjMxNzgzLCJleHAiOjE3MzIyMzUzODMsImp0aSI6IjU2ZWMyOGFkZjljMzY5OGNkMGEyNzU1ODY3NTZmM2UwY2RkMThiZTUifQ.C_6MXQ3k3VMaG69twR_KfBlOBpc1g7FeqciHn07xoImsLuRcVfPJq4Y_Adxfj9SWwz7Xc9p0sNqHG75gkg9MaJKIbapUm1UEjWhmDKKnR1nQ2v7sstSMkaXl0zfUWwyptfLaJcbBKnxjeNua248Dy73HTInqxrL_7_eKdJRxhs1kWqwrbjjRBQZS6SeSCb7vv3yor4iXt4estltILPynSH5f8TrQFwzcQ-gTwrqJ-d4UZqf37-Xop3ht-QYxEwS_brD2XMzcWRF2BTZ0reSbO0z4afkLjg2aSPBoG4EqpIkfELn5aZzK0DtX3TJLAsWUwVvoy_i8-b8YnSMPMwblsA'
        },
        body: JSON.stringify({
          toMail: email,
          content: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
        }),
      });

      if (response.ok) {
        // Email enviado com sucesso
        if (onSubmit) {
          onSubmit({ nome, email, mensagem });
        }
        setNome('');
        setEmail('');
        setMensagem('');
        alert('Mensagem enviada com sucesso!');
        setIsSubmitting(false); // Reset submitting state on success
      } else {
        // Erro ao enviar email
        console.error('Erro ao enviar email:', response.status);
        alert('Erro ao enviar mensagem.');
        setIsSubmitting(false); // Reset submitting state on error
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      alert('Erro ao enviar mensagem.');
      setIsSubmitting(false); // Reset submitting state on error
    }
  };

  return (
    <div className="contato-form-div">
      <div className="container">
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
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContatoForm;