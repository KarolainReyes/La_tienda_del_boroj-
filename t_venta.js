//Transacciones

//1. Simular una venta:
    
const session = db.getMongo().startSession();
const dbSession = session.getDatabase("tienda_borojo");
session.startTransaction();

try {
  dbSession.inventario.updateOne({ _id: 1 }, { $inc: { cantidad: -1 } });
  dbSession.ventas.insertOne({clienteId:3,productos:[{productoId:1,cantidad:1}], fecha: new Date(),total:5000 });

  session.commitTransaction();
  print("Venta registrada correctamente");
} catch (e) {
  session.abortTransaction();
  print("Error:", e);
} finally {
  session.endSession();
}
print("Fin del script")

    
    
