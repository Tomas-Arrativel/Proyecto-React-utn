const pool = require('./db');

const getNovedades = async function () {
  const query = 'select * from novedades';
  const rows = await pool.query(query);
  return rows;
};

const insertNovedad = async function (obj) {
  try {
    const query = 'insert into novedades set ?';
    const rows = await pool.query(query, [obj]);
    return rows;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = { getNovedades, insertNovedad };
