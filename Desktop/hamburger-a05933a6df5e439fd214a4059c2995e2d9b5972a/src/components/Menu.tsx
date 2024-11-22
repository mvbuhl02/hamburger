import React from 'react';
import x1 from '../assets/x1.jpg';
import x2 from '../assets/x3.jpg';
import x3 from '../assets/x3.jpg';

interface MenuItem {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  price: string;
}

const Menu: React.FC = () => {
  const menuItems: MenuItem[] = [
    {
      imageSrc: x1,
      imageAlt: 'Hambúrguer Clássico',
      title: 'Hambúrguer Clássico',
      description: 'Pão, carne, queijo, alface, tomate e molho especial.',
      price: 'R$ 25,00',
    },
    {
      imageSrc: x2,
      imageAlt: 'Hambúrguer Gourmet',
      title: 'Hambúrguer Gourmet',
      description: 'Pão australiano, blend de carnes, queijo cheddar, cebola caramelizada e bacon.',
      price: 'R$ 32,00',
    },
    {
      imageSrc: x3,
      imageAlt: 'Hambúrguer Vegetariano',
      title: 'Hambúrguer Vegetariano',
      description: 'Hambúrguer de lentilha, queijo vegano, alface, tomate e molho de ervas.',
      price: 'R$ 28,00',
    },
  ];

  return (
    <section id="menu">
      <div className="container">
        <h2>Nosso Menu</h2>
        <div className="menu-items">
          {menuItems.map((item) => (
            <div className="menu-item" key={item.title}>
              <img src={item.imageSrc} alt={item.imageAlt} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="price">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;