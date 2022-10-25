import {useRef, useState, useEffect, useMemo} from 'react'

function UseMemoExample(){

    const [number, setNumber] = useState(1)
    const [inc, setInc] = useState(0)

    const renders = useRef(1)

    // By using useMemo() the sqrt doesn't gets renderred another time unless until the dependency changes.
    const sqrt = useMemo(() => getSqrt(number), [number]) 

    useEffect(() => {
        renders.current += 1
    })

    const handleClick = () => {
        setInc((prevState) => {
            console.log(prevState + 1)
            return prevState + 1
        })
    }

    return(
        <div>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} className="form-control w-25 mb-3" />
            <button className='btn btn-primary' onClick={handleClick}>Re Render</button>
            <h3>Square root of {number} is {sqrt}</h3>
            <h3>Renders: {renders.current}</h3>
        </div>
    )
}

const getSqrt = (n) => {
    for( let i = 0; i < 10000; i++){
        console.log(i)
    }

    return Math.sqrt(n)
}

export default UseMemoExample