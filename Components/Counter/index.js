import { useState } from "react"


export default function Counter() {
    const [number, setNumber] = useState(0)
;    return(
        <>
            <div>
                <button onClick={()=> setNumber(number + 1)}></button>
                <button onClick={()=> setNumber(number - 1)}></button>
            </div>

            <div>
                {number}
            </div>
        </>
    )
}