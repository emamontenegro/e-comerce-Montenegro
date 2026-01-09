import { collection, addDoc, doc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../utils/firebase";

// crear orden
export const createOrder = async ({ cart, total }) => {
  const order = {
    items: cart.map(item => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity
    })),
    total,
    createdAt: serverTimestamp()
  };

  const docRef = await addDoc(collection(db, "orders"), order);

  return {
    id: docRef.id,
    ...order
  };
};

// obtener orden por ID
export const getOrderById = async (orderId) => {
  const docRef = doc(db, "orders", orderId);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    throw new Error("Orden no encontrada");
  }

  return {
    id: snapshot.id,
    ...snapshot.data()
  };
};
