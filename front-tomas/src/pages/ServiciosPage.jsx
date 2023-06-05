import '../styles/components/normalize.css';
import '../styles/components/pages/HomePage.css';
import '../styles/components/pages/ServiciosPage.css';

function ServiciosPage() {
  return (
    <main>
      <h1 className='servicios-title'>Servicios</h1>

      <div className='main'>
        <div className='container'>
          <div className='main__servicio'>
            <img
              src='images/servicios/compra-venta.webp'
              alt='imagen de compra y venta'
            />
            <div className='main__servicio-info'>
              <h2>Compra y venta</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                doloremque, ex assumenda consequatur magni odit saepe quae
                officiis minima voluptatum ipsa facilis maiores fuga incidunt
                impedit veritatis praesentium. Officia, quibusdam.
              </p>
            </div>
          </div>

          <div className='main__servicio'>
            <img
              src='images/servicios/interes.png'
              alt=' imagen de mucho dinero'
            />
            <div className='main__servicio-info'>
              <h2>Generación de intereses</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                possimus consequatur labore quidem maxime, praesentium aut,
                placeat perferendis rem quo deserunt qui repellendus adipisci
                iusto et suscipit in facere debitis?
              </p>
            </div>
          </div>

          <div className='main__servicio'>
            <img
              src='images/servicios/criptos.png'
              alt='almacenamiento de criptomonedas'
            />
            <div className='main__servicio-info'>
              <h2>Almacenamiento de Cryptos</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                perferendis, suscipit nostrum veniam placeat et eos beatae enim
                odit magni commodi facere pariatur, earum distinctio illo, quae
                vero autem illum!
              </p>
            </div>
          </div>

          <div className='main__servicio'>
            <img
              src='images/servicios/contactlesscard.png'
              alt='Tarjeta contactless'
            />
            <div className='main__servicio-info'>
              <h2>Tarjeta contactless</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
                nesciunt, nulla dolorem dolore quibusdam voluptates iste
                cupiditate impedit velit. Modi amet provident saepe iusto
                quibusdam at praesentium alias quaerat officiis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ServiciosPage;
