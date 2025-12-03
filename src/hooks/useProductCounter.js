import { useState } from "react";

const useProductCounter = (initial = 0) => {
  const [count, setCount] = useState(initial);

  const add = () => {
    setCount(prev => {
      console.log("Producto agregado");
      return prev + 1;
    });
  };

  const remove = () => {
    setCount(prev => {
      if (prev <= 0) {
        console.log("No hay productos");
        return 0;
      }
      return prev - 1;
    });
  };

  return { count, add, remove };
};

export default useProductCounter;
