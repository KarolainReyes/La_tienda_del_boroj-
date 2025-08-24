//Transaccion

// 2.Simular la entrada de nuevo inventario:

const session = db.getMongo().startSession();
const dbSession = session.getDatabase("tienda_borojo");
session.startTransaction();

try {
  dbSession.inventario.insertOne({
  "productoId": 8,
  "lote": "L003",
  "cantidad": 50,
  "entrada": new Date()
});
 dbSession.productos.updateOne({ _id: 8 }, { $inc: { stock: 50 } });

  session.commitTransaction();
  print("Ingreso registrado correctamente");
} catch (e) {
  session.abortTransaction();
  print("Error:", e);
} finally {
  session.endSession();
}
print("Fin del script")
