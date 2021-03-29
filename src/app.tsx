import React from 'react'
import './app.scss'
interface IProps {
  name: string
  age: number
}
function App(props: IProps) {
  const { name, age } = props
  return <div className="App">{`ooooo, I am ${name}, ${age} years old`}</div>
}

export default App
