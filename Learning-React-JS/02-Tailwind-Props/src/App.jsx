
import './App.css'
import Card from './components/Card'




function App() {

  const myObj ={
    username:'Instagram',
    age:20
  }

  return (
    <>
     <h1 className='bg-yellow-200 text-black p-4  font-bold rounded-xl mb-6 '>Tailwind Test</h1>

     <Card username={myObj.username} age={myObj.age} btnText="Click me"/>
     <Card username="Model" age="24" btnText="Visit"/>
    </>
  )
}

export default App
