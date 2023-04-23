import { useState } from 'react';

import Perfil from './components/Perfil';
import Formulario from './components/Formulario';
import ReposList from './components/ReposList';

function App() {
  // const nome = 'Leo'

  // const retornaNome = () => {
  //   return nome
  // }

  // const pessoa = {
  //   nome: 'Maria'
  // }

  // let estaDeDia = false

  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
        </>
      )}
      <div className='procurarUsuario'>
        <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder='Encontrar usuário GitHub'/>
      </div>
      {nomeUsuario.length > 4 && (
        <>
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario/>
      )}

      <button type='button' onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}>Toggle Form</button> */}
      {/* <h1>{nome}</h1>  {/* Uso de variáveis/constantes no HTML */}
      {/* <h1>Olá, {retornaNome()}</h1>  {/* Uso de funções e como concatenar no HTML */}
      {/* <h1>Olá, {pessoa.nome}</h1>  {/* Uso de propriedades de objetos literais */}
      {/* <h2>Subtítulo</h2> */}
      {/* {estaDeDia ? 'Bom dia' : 'Boa tarde'}  {/* Condição com operador ternário */}
      {/* {estaDeDia && 'Bom dia'}  {/* Operador lógico */}
    </>
  )
}

export default App
