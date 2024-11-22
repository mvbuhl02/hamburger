
interface MenuItemProps {
    imageSrc: string;
    title: string;
    description: string;
    price: string;
  }
  
  function MenuItem({ imageSrc, title, description, price }: MenuItemProps) {
    return (
      <div className="menu-item">
        <img src={imageSrc} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="price">{price}</span>
      </div>
    );
  }
  
  export default MenuItem;