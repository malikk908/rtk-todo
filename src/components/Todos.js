import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../store/slices/TodoSlice'

const Todos = () => {

    const todos = useSelector(state => state.todo.todos)
    console.log(todos)

    const dispatch = useDispatch()


    return (
        <>
            <div className='container flex justify-center my-10'>
                <h1 className='text-3xl font-bold'>Todos</h1>
            </div>

            <div className='flex flex-col justify-center my-10'>
                {todos.map((k) => {
                    return <div key={k.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{k.text}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{k.id}</p>
                            <a onClick={()=>{dispatch(removeTodo(k.id))}} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Remove
                                
                            </a>
                        </div>                      
                    

                })

                }

            </div>

        </>
    )
}

export default Todos
