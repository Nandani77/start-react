import { useState } from 'react'
import './index.css'
function App() {
  const [color, setColor] = useState("red")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
<div className="flex fixed flex-wrap justify-center gap-4 top-1/2 -translate-y-1/2">
  <button onClick={() => setColor("red")} className="w-20 h-20 rounded-full bg-red-500 border-4 border-white shadow-lg"></button>
  <button onClick={() => setColor("blue")} className="w-20 h-20 rounded-full bg-blue-500 border-4 border-white shadow-lg"></button>
  <button onClick={() => setColor("green")} className="w-20 h-20 rounded-full bg-green-500 border-4 border-white shadow-lg"></button>
  <button onClick={() => setColor("yellow")} className="w-20 h-20 rounded-full bg-yellow-500 border-4 border-white shadow-lg"></button>
  <button onClick={() => setColor("purple")} className="w-20 h-20 rounded-full bg-purple-500 border-4 border-white shadow-lg"></button>
</div>


    </div>
     
    </>
  )
}

export default App
