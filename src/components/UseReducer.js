import { useReducer, useState } from "react";

//  definir estado (tipo objeto) {contador : 0}
// estado === state
// objeto === {contador: 0}
// state = {contaddor: 0}

// el reducer se declara igual que la funcion reduce de js
// solo se cambia el acumulador,elemento
// action = siempre tiene que ser string
// opcionalemnte se usa paylod y eso puede ser cualquier valor
// action = {type: 'string', paylod: any }

// quedaria asi
// state = {contador: 0}
// action = {type: string, payload: any}

// SIEMPRE USAR PAYLOAD Y TYPE COMO NOMBRE
const inicial = { contador: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementar":
      return { contador: state.contador + 1 }; // <-- se retorna el mismo tipo que se declarar, en este caso un objeto
    case " decrecimiento":
      return { contador: state.contador - 1 };
    case "set":
      return { contador: action.payload };
    default:
      return state;
    }
};

const UseReducer = () => {
  // el primer elemento que va a recibir es el reducer que creamos
  // el segundo argumento es el estado inicial
  const [state, dispatch] = useReducer(reducer, inicial);
  const [valor,setValor] = useState(0)
  return (
    <div>
      contador: {state.contador}
      <input value ={valor} onChange={ e => setValor(e.target.value)}/>
      <button onClick={() => dispatch({ type: "incrementar" })}>Más</button>
      <button onClick={() => dispatch({ type: " decrecimiento" })}>Menos</button>
      <button onClick={() => dispatch({ type: "set", payload: valor})}>Set</button>
    </div>
  );
};
export default UseReducer;
