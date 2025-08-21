//insercion

//insercion de un nuevo producto 
db.productos.insertOne({
    nombre:"chocolatina de borojo",
    categoria: "snack",
    precio:4000,
    stock: 35,
    tags: ["dulce","energia"]

});

//insercion de un nuevo cliente 
db.cliente.insertOne({
    nombre: "Mario Mendoza",
    correo: "mario@gmail.com",
    compras:[],
    preferencias: ["energetico", "natural"]
})



//lectura

//Consultar todos los productos que tengan stock mayor a 20 unidades.
db.productos.find({stock:{$gt:20}});

//Encontrar los clientes que no han comprado aún ningún producto.
db.clientes.find({compras:{$size:0}})



//Actualizacion
//Aumentar en 10 unidades el stock del producto "Borojó deshidratado".
db.productos.updateOne(
    {nombre:"Borojo deshidratado"},
    {stock:{stock:10}}
);
