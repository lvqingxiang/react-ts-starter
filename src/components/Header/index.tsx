import React from 'react'
// import 'Src/app.scss'
interface IProps {
  name: string
  age: number
}
function App(props: IProps) {
  const { name, age } = props
  return <div className="App">{`I am ${name}, ${age} years old`}</div>
}

export default App
