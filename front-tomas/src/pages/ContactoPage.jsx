import '../styles/components/normalize.css';
import '../styles/components/pages/HomePage.css';
import '../styles/components/pages/ContactoPage.css';
import { useState } from 'react';
import axios from 'axios';

function ContactoPage() {
  const initialForm = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  };

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('');
    setSending(true);
    const response = await axios.post(
      'http://localhost:3000/api/contacto',
      formData,
    );
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  };

  return (
    <main className='main__contacto'>
      <div className='main__contacto-formulario'>
        <div className='formulario'>
          <h1>Contacto</h1>
          <h2>Completa el Formulario</h2>
          <form
            action='/contacto'
            method='post'
            className='form'
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor='nombre'>Nombre</label>
              <input
                type='text'
                placeholder='Nombre'
                name='nombre'
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                placeholder='Email'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor='telefono'>Telefono</label>
              <input
                type='text'
                placeholder='Telefono'
                name='telefono'
                value={formData.telefono}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor='mensaje'>Mensaje</label>
              <textarea
                placeholder='Su mensaje aqui...'
                name='mensaje'
                value={formData.mensaje}
                onChange={handleChange}
              ></textarea>
            </div>

            <input type='submit' value='Enviar' className='form-btn' />
          </form>
          {sending ? <p>Enviando...</p> : null}
          {msg ? <p>{msg}</p> : null}
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
