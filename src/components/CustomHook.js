import { useState } from "react";

// CUSTOM HOOKS
const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial); //<-- ÚNICO ELEMENTO
  const incrementar = () => {
    setContador(contador + 1);
  };
  return [contador, incrementar]
};

const CustomHook = () => {
    const [contador, incrementar] = useContador(0)
    return (
    <div>
      contador: {contador}
      <button onClick={incrementar}>Incrementar contador</button>
    </div>
  );
};
export default CustomHook;
