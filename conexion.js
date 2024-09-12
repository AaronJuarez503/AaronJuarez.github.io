let mysql = require('mysql');

let conexion = mysql.createConnection({
    host: 'localhost',
    database: 'todasmias',
    user: 'root',
    password: ''
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexion exitosa.....');
    }
});

/*
 const meter = "INSERT INTO user (id, nombre, apellido, usuario) VALUES (NULL, 'Raymundo', 'Espinoza', 'Ki-kass')";
 conexion.query(meter, function(error, results){
    if(error){
        throw error;
    }else{
        console.log('Datos insertados...');
    }
});
*/
const actualizar = "UPDATE user SET usuario = 'Deadpool' WHERE id = 3";
conexion.query(actualizar, function(error, results){
    if(error){
        throw error;
    }else{
        console.log('Datos actualizados correctamente');
    }
});

const borrar = "DELETE FROM user WHERE id = 3";
conexion.query(borrar, function(error, results){
    if(error){
        throw error;
    }else{
        console.log('Datos borrados correctamente');
    }
});

const mostrar = "SELECT * FROM user";
conexion.query(mostrar, function(error, results){
    if(error){
        throw error;
    }else{
        console.log(results);

    }
});


conexion.end();