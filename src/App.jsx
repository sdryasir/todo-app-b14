import { useState } from 'react'

import Test from './components/Test'
import Test1 from './components/Test1'


export default function App() {


  const [num, setNum] = useState(520)

  return (
    <>
        {/* {
          products.map((product, idx)=><h1 key={idx}>{idx+1} - {product}</h1>)
        }
        <p style={{color:'red'}}>{err}</p>
        <input type="text" value={newProd} onChange={(event)=>setNewProd(event.target.value)} />
        <button onClick={addItem}>Add New Item</button> */}


        <h1>Test - {num}</h1>
        <Test abc='hi' name="Ali" n={90}/>
    </>
  )
}







