import ReactDom from 'react-dom'




const ElementosUsuarios = (props) => {
  return (
    <ul>
      <li>{props.nombre} {props.edad}</li>
    </ul>
  );
};


const ComponenteUsuario = () => {
  return (
    <div>
      <h1>Esta es la lista de usuarios del 1 semestre</h1>
      <ElementosUsuarios nombre='Santiago antonio' edad={27}></ElementosUsuarios>
      <ElementosUsuarios nombre='Melanie' edad={1}></ElementosUsuarios>
      <ElementosUsuarios nombre='Joel Calvo' edad={26}></ElementosUsuarios>
      <ElementosUsuarios nombre='Andrea alejandra' edad={28}></ElementosUsuarios>
    </div>

  );
}




ReactDom.render(<ComponenteUsuario></ComponenteUsuario>, document.getElementById("root"));


