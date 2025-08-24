//Funciones definidas en System.js

    //1.Definir una funcion calcularDescuento (precio, porcentaje) que devuelva el precio con descuento aplicado 

            db.system.js.insertOne({
                _id: "calcularDesc",
                value: new Code("function(precio, porcentaje) { let descAplicado = precio - precio * (porcentaje / 100); return descAplicado; }")
            });
            
            //Guardamos el string de la funcion dentro de una variable

            const fd = db.system.js.findOne({_id:'calcularDesc'})

            //Guardamos la funcion dentro de una variable

            const calcularDescuento = new Function('return '+fd.value.code)();

            //Probamos la funcion

            calcularDescuento(1000,10) //resultado: 900


    //2.Definir una funcion clienteActivo (idCliente) que devuelva 'true' si el cliente tiene mas de tres compras registradas

            db.system.js.insertOne({
                _id: "clienteActivo",
                value: new Code("function (idCliente) {if(idCliente.compras.lenght>=3){return true} else{return false};}")
            });
            
            //Guardamos el string de la funcion dentro de una variable

            const ca = db.system.js.findOne({_id:'clienteActivo'})

            //Guardamos la funcion dentro de una variable

            const clienteActivo = new Function('return '+ca.value.code)();

    //3. Definir una funcion verificarStock (productoId, cantidadDeseada) que retorne si hay suficiente stock

            db.System.js.insertOne({
                _id: 'verificarStock',
                value: new Code ('function (productoId, cantidadDeseada){if (cantidadDeseada <= productoId.stock){return true} else {return false};}')
            });

            //Guardamos el string de la funcion dentro de una variable
            
            const vs = db.System.js.findOne({_id: 'verificarStock'})

            //Guardamos la funcion dentro de una variable

            const verificarStock = new Function ('return '+vs.value.code)



    