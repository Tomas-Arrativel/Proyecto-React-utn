import '../styles/components/normalize.css';
import '../styles/components/pages/HomePage.css';
import '../styles/components/pages/ContactoPage.css';

function ContactoPage() {
  return (
    <main className='main__contacto'>
      <div className='main__contacto-formulario'>
        <div className='formulario'>
          <h1>Contacto</h1>
          <h2>Completa el Formulario</h2>
          <form className='form'>
            <div>
              <label>Nombre</label>
              <input type='text' placeholder='Nombre' />
            </div>
            <div>
              <label>Email</label>
              <input type='email' placeholder='Email' />
            </div>
            <div>
              <label>Telefono</label>
              <input type='text' placeholder='Telefono' />
            </div>
            <div>
              <label>Mensaje</label>
              <textarea placeholder='Su mensaje aqui...'></textarea>
            </div>

            <input type='button' value='Enviar' className='form-btn' />
          </form>
        </div>

        <div className='mas-formas'>
          <h2>Otras formas de contactarte</h2>
          <p>Tambien puede contactarse con nosotros en los siguientes medios</p>
          <ul>
            <li>Telefono: 234234</li>
            <li>Email: contacto@cryptoweb.com</li>
            <li>Facebook:</li>
            <li>Twitter:</li>
            <li>Instagram:</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default ContactoPage;
