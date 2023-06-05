import '../styles/components/normalize.css';
import '../styles/components/pages/HomePage.css';

function HomePage() {
  return (
    <main>
      <div className='main__img'></div>
      <div className='main'>
        <div className='container'>
          <section className='main__info'>
            <div className='main__info-bienvenido'>
              <h2>Bienvenido</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt quos tenetur adipisci accusamus, quidem porro
                repudiandae. Doloremque eum cum tempore rerum voluptatem,
                accusantium earum, aliquam ipsa voluptas quaerat consectetur
                reiciendis?Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Laborum delectus ipsum harum voluptates, dicta praesentium
                beatae. Itaque in odio reiciendis est nesciunt blanditiis,
                laudantium harum, libero temporibus illo rerum laboriosam.
              </p>
              <img
                src='images/inicio/grafico-bitcoin.png'
                alt='imagen de grafico de bitcoin'
                className='main__info-bienvenido-img'
              />
            </div>

            <aside className='main__info-aside'>
              <h2>Comentarios</h2>
              <div className='main__info-aside-cuadro'>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Culpa voluptas excepturi debitis, perferendis soluta a optio.
                  Ullam ducimus ea, repellat consequuntur nisi eos architecto
                  quo ipsa nihil aut, vel molestiae!
                </p>
                <h4>Tomás arrativel</h4>
              </div>
            </aside>
          </section>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
