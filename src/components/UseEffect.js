import { useState, useEffect } from "react";

// CUSTOM HOOKS
const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial); //<-- UNICO ELEMENTO
  const incrementar = () => {
    setContador(contador + 1);
  };
  return [contador, incrementar];
};

// DESUSCRIBIR A UN useEfect
const Interval = ({ contador }) => {
  useEffect(() => {
    const i = setInterval(() => console.log(contador), 1000)
    return () => clearInterval(i)
  }, [contador])
  return (<p>Intervalo</p>)
};

const UseEfect = () => {
  const [contador, incrementar] = useContador(0);

  useEffect(() => {
    document.title = contador;
  }, [contador]); // primera parte {funcion} <-- la funcion que se ejecutara , segunda parte [dependencias] <-- cuando queremos que cambie

  return (
    <div>
      contador: {contador}
      <button onClick={incrementar}>Incrementar contador</button>
      <Interval contador={contador}/>
    </div>
  );
};
export default UseEfect;
