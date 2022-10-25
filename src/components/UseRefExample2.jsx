import {useEffect, useState, useRef} from 'react'

function UseRefExample2(){

    const [name, setName] = useState('')
    const prevName = useRef('')
    const renders = useRef(1)

    useEffect(()=>{
        renders.current = renders.current + 1
        prevName.current = name
    }, [name])


    return(
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <h1>Current State: {name}</h1>
            <h2>Prev Name: {prevName.current}</h2>
            <h2>Renders: {renders.current}</h2>
        </div>
    )
}

export default UseRefExample2