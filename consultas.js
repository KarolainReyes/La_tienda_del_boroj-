//Consultas con expresiones regulares

    //Buscar productos cuyo nombre empiece por "Boro".

    db.productos.find({nombre: {$regex: '^boro', $options: 'im'}})

    //Encontrar productos cuyo nombre contenga la palabra "con" (como en “Concentrado de borojó”).

    db.productos.find({nombre: {$regex: 'con', $options: 'im'}})

    //Encontrar clientes cuyo nombre tenga la letra "z" (insensible a mayúsculas/minúsculas).

    db.clientes.find({nombre: {$regex: 'z', $options: 'im'}})