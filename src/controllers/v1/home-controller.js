const index =(req, res) => {
 respuesta = {
  error: false,
  codigo: 200,
  mensaje: 'Punto de inicio'
 };
 res.send(respuesta);
};

module.exports = {
  index
};