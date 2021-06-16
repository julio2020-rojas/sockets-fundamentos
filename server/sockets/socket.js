const { io } = require('../server');



io.on('connection', (client) => { // client es el objeto que permite ver que usuario esta conectado
    console.log('usuario conectado...');
    // emit: emitir mensaje
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'bienvenido a la aplicacion'
    });

    // on: escuchar
    client.on('disconnect', () => {
        console.log('usuario desconectado...');
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        /*
        if (mensaje.usuario) {
            callback({
                resp: 'todo salio bien'
            });
        } else {
            callback({
                resp: 'todo salio mal'
            });
        }*/
    });
});