import '../styles/sobre.css';
import animation from '../assets/animation.gif';
function Sobre() {
    return (
        <section id="sobre">
            <div className="container">
                <img src={animation} alt="Equipe da Hamburgueria" />
                <div>
                    <h2>Sobre Nós</h2>
                    <p>
                        Somos apaixonados por hambúrgueres e queremos compartilhar essa paixão com você!
                        Nossa hamburgueria nasceu do desejo de oferecer uma experiência gastronômica única,
                        com hambúrgueres artesanais preparados com ingredientes frescos e de alta qualidade.
                    </p>
                    <p>
                        Acreditamos que um bom hambúrguer vai além do sabor, é sobre criar momentos especiais
                        e proporcionar uma experiência memorável. Por isso, nos dedicamos a cada detalhe,
                        desde a escolha dos ingredientes até o preparo cuidadoso de cada pedido.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Sobre;