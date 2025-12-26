import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc, } from "firebase/firestore";
import { db } from "../../utils/firebase";


export const obtenerProductos = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const productos = querySnapshot.docs.map(doc => ({
    id: doc.id, ...doc.data() 
  }));
  return productos;
};


export const obtenerProductoPorId = async (id) => {    const ref = doc(db, "products", id);
  const snapshot = await getDoc(ref);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
}

export const crearProducto = async (producto) => {
  const docRef = await addDoc(collection(db, "products"), producto);
}

export const actualizarProducto = async (id, productoActualizado) => {
  const ref = doc(db, "products", id);
  await updateDoc(ref, productoActualizado);
};

export const eliminarProducto = async (id) => {
  const ref = doc(db, "products", id);
  await deleteDoc(ref);
};