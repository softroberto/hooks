import { Component, useState } from "react";
// reglas de los hooks:
//  No se pueden usar en contadores ni en validaciones iF
// tienen que declararse al inicio del componente
// solo se llaman en dos partes, en componentes de react
// custom hooks

// useState con clases
class AppClases extends Component {
  state = {contador: 0}
  incrementar = () => {
    this.setState({contador: this.state.contador + 1})
  }
  render() {
    return (
      <div>
        contador: {this.state.contador}
        <button onClick={this.incrementar}>
          Incrementar contador
        </button>
      </div>
    );
  }
}

// usState con componente funcional
const App = () => {
  // prmer elemento valor , segundo elemento el set del valor
  const [contador, setContador] = useState(0); //<-- UNICO ELEMENTO
  return (
    <div>
      contador: {contador}
      <button onClick={() => setContador(contador + 1)}>
        Incrementar contador
      </button>
    </div>
  );
};

export default App;
