
import React, { useState } from 'react'
import Card from './components/card';
function App() {

   const [counter, SetCounter] =  useState(15);
   let myObj = {
    username : "nandani",
    age : 24,
      city : "jaipur"
   }

      // let counter = 5;
      const  addvalue = () => {
        if(counter < 20){
          SetCounter(counter + 1);
        }
         else{
          alert("Counter value cannot be greater than 20");
         }
        
      }

        const  removevalue = () => {
        if(counter > 0){
          SetCounter(counter - 1);
        }
         else{
          alert("Counter value cannot be less than 0");
         }
        
      }
  return (
    <>
    <h1 className="text-black bg-yellow-200 rounded-xl p-6 mb-4"> Counter project </h1>
    <Card channel="test" username={"nandani"} btnText="Click Me"/>


    {/* <button onClick={addvalue}>Add Value {counter}</button> <br/>
    <button onClick={removevalue}>Remove Value {counter}</button>  */}
    
    
    </>
  )
}

export default App
