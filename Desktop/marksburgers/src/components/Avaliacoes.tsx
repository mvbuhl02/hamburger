import React, { useState, useEffect } from 'react';
import '../styles/avaliacao.css';

interface AvaliacaoProps {
  fotoSrc?: string;
  nome: string;
  estrelas: number;
  comentario: string;
}

const Avaliacao: React.FC<AvaliacaoProps> = ({ fotoSrc, nome, estrelas, comentario }) => {
  const renderEstrelas = () => {
    const estrelasCheias = Array(estrelas).fill('★');
    const estrelasVazias = Array(5 - estrelas).fill('☆');
    return [...estrelasCheias, ...estrelasVazias].join('');
  };

  return (
    <div className="menu-item" role="comment">
      {fotoSrc && (
        <img src={fotoSrc} alt={nome} className="foto-avaliacao" />
      )}
      <div className="conteudo-avaliacao">
        <h3>{nome}</h3>
        <div className="estrelas" aria-label={`${estrelas} de 5 estrelas`}>
          {renderEstrelas()}
        </div>
        <p>{comentario}</p>
      </div>
    </div>
  );
};

const Avaliacoes: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const avaliacoes: AvaliacaoProps[] = [
    {
      fotoSrc: 'https://wallpapers.com/images/hd/family-guy-stewie-griffin-z8if6xxqftztkwrk.jpg',
      nome: 'João Silva',
      estrelas: 4,
      comentario: 'Ótimo produto! Recomendo.',
    },
    {
      fotoSrc: 'https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.br:0d555ac5-740b-11ea-a59c-0a7527021758?quality=0.7&gen=ntrn',
      nome: 'Mario Souza',
      estrelas: 5,
      comentario: 'Superou minhas expectativas.',
    },
    {
      fotoSrc: 'https://i.cbc.ca/1.2439270.1385396617!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/family-guy-brian-from-fox.jpg',
      nome: 'Pedro Alves',
      estrelas: 3,
      comentario: 'Bom produto, mas poderia ser melhor.',
    },
    {
      fotoSrc: 'https://imgix.ranker.com/list_img_v2/15175/2735175/original/best-butters-stotch-quotes-south-park?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720',
      nome: 'Lucas Pereira',
      estrelas: 4,
      comentario: 'Muito bom! Vale a pena comprar.',
    },
    {
      fotoSrc: 'https://wallpapers.com/images/hd/family-guy-stewie-griffin-z8if6xxqftztkwrk.jpg',
      nome: 'João Silva',
      estrelas: 4,
      comentario: 'Ótimo produto! Recomendo.',
    },
    {
      fotoSrc: 'https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.br:0d555ac5-740b-11ea-a59c-0a7527021758?quality=0.7&gen=ntrn',
      nome: 'Sugiro kimokoma',
      estrelas: 5,
      comentario: 'grande é a expectativa.',
    },

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(avaliacoes.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, [avaliacoes.length]);

  const getAvaliacoesToDisplay = () => {
    const startIndex = currentIndex * 3;
    return avaliacoes.slice(startIndex, startIndex + 3);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(avaliacoes.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? Math.ceil(avaliacoes.length / 3) - 1 : newIndex;
    });
  };

  return (
    <section id="menu">
      <div className="container">
        <h2>Avaliações</h2>
        <div className="menu-items">
          {getAvaliacoesToDisplay().map((avaliacao, index) => (
            <Avaliacao key={index} {...avaliacao} />
          ))}
          <button className="prev-button" onClick={prevSlide}>
            Anterior
          </button>
          <button className="next-button" onClick={nextSlide}>
            Próximo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Avaliacoes;