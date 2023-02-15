// LOS COMPONENTES FUNCIONALES NO SE PUEDEN LLAMAR EN COMPONENTES DE CLASES
// PARA ESTO ESTA EL EXTENDS COMPONENT Y CREAR EL STATE MANUAL

// Las funciones impuras son las que retornas cosas que no tienen nada que ver y manda valores distintos

const impura = () => new Date().toLocaleDateString();
console.log(impura());

// TODOS LOS COMPONENTES FUNCIONALES SIEMPRE SE TRABAJAN CON REACT

const MiComponente = ({ miprop }) => {
  return <div>nombre: {miprop}</div>;
};

const App = () => {
  return <MiComponente miprop={"eres un chingon"} />;
};

export default App;
