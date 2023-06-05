import '../styles/components/normalize.css';
import '../styles/components/pages/HomePage.css';
import '../styles/components/pages/NosotrosPage.css';

function NosotrosPage() {
  return (
    <main>
      <div className='main'>
        <section className='main__historia'>
          <h2>Historia</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto iure
            quasi, modi accusantium sequi laborum reprehenderit natus animi
            itaque repellendus aspernatur porro illo sit qui sunt aliquam
            eveniet alias. Quas.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            maiores vitae ea veritatis quasi quibusdam. Explicabo sapiente ipsam
            et dolorem.
          </p>
        </section>
      </div>

      <div className='main'>
        <section className='main__nosotros'>
          <div className='main__nosotros-card'>
            <img
              src='images/nosotros/nosotros1.jpg'
              className='main__nosotros-card-img'
            />
            <h2 className='main__nosotros-card-name'>Juan López</h2>
            <p className='main__nosotros-card-text'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              nam culpa exercitationem labore eius quibusdam nesciunt quos
              tempora dolor veritatis. Dolore unde autem quam quo cumque id
              dolor esse repudiandae?
            </p>
          </div>
          <div className='main__nosotros-card'>
            <img
              src='images/nosotros/nosotros2.jpg'
              className='main__nosotros-card-img'
            />
            <h2 className='main__nosotros-card-name'>Sofía García</h2>
            <p className='main__nosotros-card-text'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              nam culpa exercitationem labore eius quibusdam nesciunt quos
              tempora dolor veritatis. Dolore unde autem quam quo cumque id
              dolor esse repudiandae?
            </p>
          </div>
          <div className='main__nosotros-card'>
            <img
              src='images/nosotros/nosotros3.jpg'
              className='main__nosotros-card-img'
            />
            <h2 className='main__nosotros-card-name'>Javier Gómez</h2>
            <p className='main__nosotros-card-text'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              nam culpa exercitationem labore eius quibusdam nesciunt quos
              tempora dolor veritatis. Dolore unde autem quam quo cumque id
              dolor esse repudiandae?
            </p>
          </div>
          <div className='main__nosotros-card'>
            <img
              src='images/nosotros/nosotros4.jpg'
              className='main__nosotros-card-img'
            />
            <h2 className='main__nosotros-card-name'>Lucía Sánchez</h2>
            <p className='main__nosotros-card-text'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              nam culpa exercitationem labore eius quibusdam nesciunt quos
              tempora dolor veritatis. Dolore unde autem quam quo cumque id
              dolor esse repudiandae?
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default NosotrosPage;
