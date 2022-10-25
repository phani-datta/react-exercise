import {useRef} from 'react'

function UseRefExample1(){
    
    const inputRef = useRef()
    const paraRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        inputRef.current.value = "Who are you??"
        inputRef.current.style.backgroundColor = 'red'
        paraRef.current.innerText = "Goodbye"
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" ref={inputRef} id="name" className="form-control mb-2" />
                <button type="submit" className="btn btn-primary">Submit</button>
                <p ref={paraRef} onClick={() => inputRef.current.focus()}>This is a sample paragraph</p>
            </form>
        </div>
    )
}

export default UseRefExample1