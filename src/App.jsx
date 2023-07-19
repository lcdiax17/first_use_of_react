import {  useState } from 'react'
import { TextComponent } from './components/textArea/component'
import { CardPerson } from './components/textArea/propsatividade'
import { ListFruit } from './components/textArea/fruitsList'

function App() {
  const student = {
    name: 'Lucas',
    module: 'M3',
    age: 20,
  }

  const fruitsList =
  [
    {
      "id": 1,
      "name": "Morango",
      "category": "vermelha",
      "price": 12
    },
    {
      "id": 2,
      "name": "Banana",
      "category": "amarela",
      "price": 2
    },
    {
      "id": 3,
      "name": "Amora",
      "category": "vermelha",
      "price": 5
    }
  ]

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

    <CardPerson name={"lucas"} age={20} country={"Brasil"}/>
      <CardPerson name={"luca"} age={10} country={"Italia"}/>
      <CardPerson name={"lucasDois"} age={40} country={"Espanha"}/>
    </>,

    <ListFruit fruitList={fruitsList}/>
  )
  
}

export default App
