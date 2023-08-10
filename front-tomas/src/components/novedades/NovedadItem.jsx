import React from 'react';

const NovedadItem = ({ title, subtitle, image, text }) => {
  return (
    <div
      className='main__noticias-noticia'
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <img src={image} />
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  );
};

export default NovedadItem;
