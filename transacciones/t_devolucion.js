//Transaccion

//3.Hacer una operación de devolución

const session = db.getMongo().startSession();
const dbSession = session.getDatabase("tienda_borojo");
session.startTransaction();

try {
  dbSession.productos.updateOne({ _id: 10 }, { $inc: { stock: 1 } });
  dbSession.ventas.deleteOne({_id:9});

  session.commitTransaction();
  print("Producto devuelto exitosamente");
} catch (e) {
  session.abortTransaction();
  print("Error:", e);
} finally {
  session.endSession();
}
print("Fin del script")
