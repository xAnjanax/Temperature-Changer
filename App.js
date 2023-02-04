import React, {useState} from 'react'; 

const App = () => { 
  const [tempVal, setTempVal] = useState(15); 
  const [tempColor, setTempColor] = useState("medium"); 

  const incTemp = () => 
  {
    if(tempVal === 40) return; 
    const newTemp = tempVal + 1; 

    if(newTemp > 25) 
    {
      setTempColor('hot'); 
    } 

    if(newTemp <= 25 && newTemp >= 15)
    {
      setTempColor("medium"); 
    }

    setTempVal(newTemp); 
  }

  const decTemp = () => 
  {
    if(tempVal === -40) return; 
    const newTemp = tempVal - 1; 

    if(newTemp < 15) 
    {
      setTempColor('cold'); 
    }

    if(newTemp <= 25 && newTemp >= 15)
    {
      setTempColor("medium"); 
    }

    setTempVal(newTemp); 
  }

  return (
    <div className='app-container'>
      <div className='temp-display-container'>
        <div className={`temperature-display ${tempColor}`}>{tempVal}°C</div>
      </div>
      <button onClick={() => incTemp()}>+</button> 
      <button onClick={() => decTemp()}>-</button> 
    </div> 
  )
} 

export default App; 