import { useState } from "react"

export const Add1 = () => {
    const [numberOne,setNumberone] = useState(0);
    const [numberTwo,setNumberTwo] = useState(0);
    const [result ,setResult] = useState(0);

    const handleAdd = () =>{
          setResult (parseInt(numberOne) + parseInt(numberTwo));
    }
    return (
        <>
        <input type="number" onChange={(e)=>{setNumberone(e.target.value)}} value={numberOne}/>
        <input type="number" onChange={(e)=>{setNumberTwo(e.target.value)}} value={numberTwo} />
        <button onClick={handleAdd}>Add</button>
        {
            result > 0  && <p>{result}</p>
        }
        </>
    )
}