//Consultas con expresiones regulares

    //Buscar productos cuyo nombre empiece por "Boro".

    db.productos.find({nombre: {$regex: '^boro', $options: 'im'}})

    //Encontrar productos cuyo nombre contenga la palabra "con" (como en “Concentrado de borojó”).

    db.productos.find({nombre: {$regex: 'con', $options: 'im'}})

    //Encontrar clientes cuyo nombre tenga la letra "z" (insensible a mayúsculas/minúsculas).

    db.clientes.find({nombre: {$regex: 'z', $options: 'im'}})

//Operadores en consultas sobre arrays

    //Buscar clientes que tengan `"natural"` en sus preferencias.

    db.clientes.find({preferencias: {$in: ['natural']}})

    //Encontrar productos que tengan al menos los tags `"natural"` y `"orgánico"` (usa `$all`).

    db.productos.find({tags: {$all: ['natural', 'orgánico']}})

    //Listar productos que tienen **más de un tag** (`$size`).

    db.productos.find({tags:{$size: 2}})


