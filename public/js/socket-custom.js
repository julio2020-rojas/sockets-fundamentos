// este objeto io es el mismo de parte del servidor
// on : son de escuchar
var socket = io();
socket.on('connect', function() {
    console.log('conectado al servidor...'); // aqui de parte del usuario sabemos cuando esta corriendo el servidor
});
socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor...');
});

// enviando mensaje
socket.emit('enviarMensaje', {
    usuario: 'Hector',
    mensaje: 'hola mundo..'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// escuchando informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});