import React from "react"
import "./main.css"
import ProgressBar from "./ProgressBar";
function App() {

  const bars = [1,100,30,10,50,60,70,20,90,80];

  return (
    <>
     <h1 className="text-center text-5xl mb-6" >Dynamic Progress Bar</h1>
     {bars.map((bar , index) => {
      return (
        <section className="mb-6" key={index}>
       <ProgressBar progress={bar}/>
       </section>
      )
     })}
    
    </>
  )
}

export default App;
