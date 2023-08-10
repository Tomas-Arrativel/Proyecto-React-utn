import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

import '../styles/components/normalize.css';
import '../styles/components/pages/HomePage.css';
import '../styles/components/pages/NovedadesPage.css';

function NovedadesPage() {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/novedades');
      setNovedades(response.data);
      setLoading(false);
    };
    cargarNovedades();
  }, []);

  return (
    <main>
      <h1 className='noticias-title'>Novedades</h1>
      <div className='flex-noticias'>
        <div className='main__noticias'>
          {loading ? (
            <p>Cargando...</p>
          ) : (
            novedades.map((item) => (
              <NovedadItem
                key={item.id}
                title={item.titulo}
                subtitle={item.subtitulo}
                image={item.imagen}
                text={item.cuerpo}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}

export default NovedadesPage;
