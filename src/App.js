import { useState } from "react";
import Keypad from "./keypad";




function App() {

let [input,setInput] = useState("")
function handleClick(value){

  setInput(input+value)

}

function calculate(value){
  let outptVal = eval(input)
  setInput(outptVal)
} 

function handleClear(){
  setInput("")
}




  return (
    <div className="container flex justify-center items-center h-screen flex-col">
      <h1 className="text-2xl mb-3 font-medium">Calculator app using react</h1>
      <div className="calculator">
        <input type="text" value={input} className="output rounded-tl-md rounded-tr-md  outline-none w-80  h-14 text-2xl py-2 px-6 bg-[#333333] text-white text-right"/>
        <Keypad handleClick={handleClick} calculate={calculate} handleClear={handleClear} ></Keypad>
      </div>

    </div>
    
  );
}

export default App;
