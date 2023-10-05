import React, { useState } from 'react';
import "./Style.css"
import { PlusSquare , MinusSquare } from 'lucide-react';


function App() {



  const [number, setnumber] = useState(0)

  const addNum = () => {
    setnumber(number+1);
  }
  const SubNum = () => {
    if(number==0){
      alert("Number is already Zero")
    }else{
      setnumber(number-1);
    }
  }

  return (
    <div className='main'>
      <center>
        <div className='display'>

          <button onClick={SubNum} className='minus'><MinusSquare/></button> 
          <p className='num'>{number}</p>
          <button onClick={addNum} className='plus'><PlusSquare/></button>


        </div>
      </center>
    </div>
  );
}

export default App;
