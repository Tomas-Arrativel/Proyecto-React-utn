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

const deleteNovedades = async function (id) {
  const query = 'delete from novedades where id = ?';
  const rows = await pool.query(query, [id]);
  return rows;
};

const getNovedadById = async function (id) {
  const query = 'select * from novedades where id = ?';
  const rows = await pool.query(query, [id]);
  return rows[0];
};

const editNovedadesById = async function (obj, id) {
  try {
    const query = 'update novedades set ? where id = ?';
    const rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getNovedades,
  insertNovedad,
  deleteNovedades,
  getNovedadById,
  editNovedadesById,
};
