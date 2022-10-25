import {useState, useEffect, useRef} from 'react'

function Todo(){

    const [loading, setLoading] = useState(true)
    const [todo, setTodo] = useState({})
    const isMounted = useRef(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    if(isMounted.current){
                        setLoading(false);
                        setTodo(data[0]);
                    }
                }, 3000)
            })

        return () => {
            isMounted.current = false
        }
    }, [isMounted])

    return loading ? <h2>Loading...</h2> : <h2>{todo.title}</h2>
}

export default Todo