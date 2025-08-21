// Consultas utilizando aggregation framework y Pipelines

//1. Mostrar un listado de los productos más vendidos (suma total de unidades vendidas por producto).

db.ventas.aggregate(
    {$unwind:"$productos"},
    {$group:{_id:"$productos.productoId",
    totalVendidos:{$sum:"$productos.cantidad"}
    }},
    {$sort:{totalVendidos:-1}},
    {$limit:3},
    {$project:{_id:0,productoId:"$_id",totalVendidos:1}}
)

// 2. Agrupar clientes por cantidad de compras realizadas.

db.ventas.aggregate(
    {
        $group:{
        _id:"$clienteId",
        comprasTotales:{$sum:{$size:"$productos"}}
    }},
    {$sort:{"_id":1}},
    {$project:{_id:0,clienteId:"$_id",comprasTotales:1}}
)

// 3. Mostrar el total de ventas por mes (usa `$group` y `$month`).

db.ventas.aggregate(
    {$group:{
        _id:{mes:{"$month":"$fecha"}},
        ventas:{$sum:{$size:"$productos"}}
    }},
    {$project:{_id:0,mes:"$_id.mes",ventas:1}}

)

// 4. Calcular el promedio de precios por categoría de producto.

db.productos.aggregate(
    {$group:{
        _id:"$categoria",
        promedioPrecio:{$avg:"$precio"}
    }},
    {$project:{_id:0,categoria:"$_id",precioPromedio:{$round:["$promedioPrecio",2]}}}
)

// 5. Mostrar los 3 productos con mayor stock (orden descendente con `$sort` y `$limit`).

db.productos.aggregate(
    {$sort:{"stock":-1}},
    {$limit:3},
    {$project:{_id:0,nombre:1,stock:1}}
)