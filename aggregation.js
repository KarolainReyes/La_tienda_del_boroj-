// Consultas utilizando aggregation framework y Pipelines

//1. Mostrar un listado de los productos más vendidos (suma total de unidades vendidas por producto).

db.ventas.aggregate(
    {$unwind:"$productos"},
    {$group:{_id:"$productos.productoId",
    totalVendidos:{$sum:"$productos.cantidad"}
    }}
)

// 2. Agrupar clientes por cantidad de compras realizadas.
// 3. Mostrar el total de ventas por mes (usa `$group` y `$month`).
// 4. Calcular el promedio de precios por categoría de producto.
// 5. Mostrar los 3 productos con mayor stock (orden descendente con `$sort` y `$limit`).