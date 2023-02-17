import { useState, useEffect } from "react";

// CUSTOM HOOKS
const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial); //<-- ÚNICO ELEMENTO
  const incrementar = () => {
    setContador(contador + 1);
  };
  return [contador, incrementar];
};

// DESUSCRIBIR A UN useEffect
const Interval = ({ contador }) => {
  useEffect(() => {
    const i = setInterval(() => console.log(contador), 1000)
    return () => clearInterval(i)
  }, [contador])
  return (<p>Intervalo</p>)
};

const UseEffect = () => {
  const [contador, incrementar] = useContador(0);

  useEffect(() => {
    document.title = contador;
  }, [contador]); // primera parte {función} <-- la función que se ejecutara , segunda parte [dependencias] <-- cuando queremos que cambie

  return (
    <div>
      contador: {contador}
      <button onClick={incrementar}>Incrementar contador</button>
      <Interval contador={contador}/>
    </div>
  );
};
export default UseEffect;
