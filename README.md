# 🧃 Tienda del borojo 

## 📌 Descripcion del proyecto 
**Tienda del borojo** es una base de datos para gestionar una tienda de jugos y diferentes productos.
El sistema maneja:  
- Productos (con informacion como categoria, nombre, precio, etc) 
- Clientes (almacenando informacion general, sus preferencias y un registro de sus compras)  
- Proveedores (Entidades que proporcionan productos a la tienda)
- Ventas (Compras hechas por los clientes con fechas)  
- Inventario (Cantidad y fecha en la que ingresan nuevo stock de un producto)  

---

## 🛠️ Creacion de la base de datos en MongoDB 

1. Abrir **MongoDB** shell.  
2. Crear la base de datos con:  

```js
use tienda_borojo
```

---

## 📂 Importar las colecciones

Los archivos `.json` incluyen los datos de:  

| JSON File                         | MongoDB Collection |
|-----------------------------------|--------------------|
| `tienda_borojo.productos.json`    | `productos`        |
| `tienda_borojo.clientes.json`     | `clientes`         |
| `tienda_borojo.proveedores.json`  | `proveedores`      |
| `tienda_borojo.ventas.json`       | `ventas`           |
| `tienda_borojo.ventas.json`   | `inventario`       |


Para importar las colecciones, ejecuta los siguientes comandos en tu consola (asegurate de estar en la carpeta con los archivos `.json`):  

```bash
mongoimport --db tienda_borojo --collection clientes --file tienda_borojo.clientes.json --jsonArray
mongoimport --db tienda_borojo --collection productos --file tienda_borojo.productos.json --jsonArray
mongoimport --db tienda_borojo --collection ventas --file tienda_borojo.ventas.json --jsonArray
mongoimport --db tienda_borojo --collection proveedores --file tienda_borojo.proveedores.json --jsonArray
mongoimport --db tienda_borojo --collection inventario --file tienda_borojo.inventario.json --jsonArray
```

---

## 📦 Estructura del proyecto
```
La_tienda_del_boroj-/
├── json/
│   └── tienda_borojo.productos.json
│   └── tienda_borojo.clientes.json
│   └── tienda_borojo.ventas.json
│   └── tienda_borojo.proveedores.json
│   └── tienda_borojo.inventario.json
├── consultas/
│   └── aggregation.js
│   └── consultas.js
├── funciones/
│   └── funciones.js
├── indexacion/
│   └── index.js
├── modificaciones/
│   └── modificaciones.js
├── transacciones/
│   └── t_devolucion.js
│   └── t_ingreso.js
│   └── t_venta.js
└── README.md
```

---

## ✅ Project Status  
Este proyecto puede ser usado para.
- Consultas simples.  
- Consultas con expresiones regulares.
- Uso de funciones js en Mongo DB
- Creacion de indices para mejorar su ejecucion

---

## 👩‍💻 Desarrollado por

 * [Karol Reyes](https://github.com/KarolainReyes)

 * [Andres Leal](https://github.com/Andre07g)

 * [Michel Rodriguez](https://github.com/michelrodriguez05)

---

## 🧩 Requisitos

- MongoDB instalado o acceso a MongoDB Atlas.

- MongoDB Compass (opcional, para mejor visualizacion de las colecciones).
---

## 📝 License

This project is for educational use. It can be used as a reference for modeling NoSQL databases in MongoDB.
