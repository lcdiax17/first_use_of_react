import {  useState } from 'react'
import { TextComponent } from './components/textArea/component'

function App() {
  const student = {
    name: 'Lucas',
    module: 'M3',
    age: 20,
  }

  const alertUser = () =>{
    alert (student.name)
  }
  return (
    <>
      <div>
        <ul>
          <li>
            <h1>{student.name}</h1>
            <p>{student.module}</p>
            <small>{student.age}</small>
          </li>
        </ul>
        <TextComponent/>
        <ul>
          <li>
            <button onClick={alertUser}>clique aqui</button>
          </li>
        </ul>
      </div>

    </>
  )
}

export default App
