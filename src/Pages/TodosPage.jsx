import React, { useReducer, useState } from 'react'

function TodosPage() {
    const [inputValue, setInputValue] = useState("")
    // const [todos, setTodos] = useState([])
    const [todos, dispatchTodos]= useReducer((current, action)=>{
        switch(action.type){
            case "Add":
                return(
                    [...current, action.obj]
                );
           default:
            return current
        }
    }, [])

    function inputHandle() {
        // setTodos([...todos, { id: Math.random(), text: inputValue, isDone: false }])
        dispatchTodos({type: "Add", obj : { id: Math.random(), text: inputValue, isDone: false }})
    }

    function handleClick(id) {
        {
            setTodos(
                todos.map((todo) => {
                    return (

                        todo.id == id ? {
                            ...todo,
                            isDone: !todo.isDone
                        } : todo
                    )
                })
            )
        }

    }
    console.log(todos);
    return (
        <div>
            <div className='flex gap-5 flex-col justify-center items-center'>
                <label>Todos</label>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={inputHandle}>Add</button>
            </div>
            <div>
                {
                    todos.map((el) => {
                        return (
                            <div className='flex justify-center items-center gap-5' key={el.id}>
                                <input type="checkbox" checked={el.isDone} onChange={() => handleClick(el.id)} />
                                <p>{el.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TodosPage