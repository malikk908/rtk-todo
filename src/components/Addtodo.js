import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/slices/TodoSlice'

const Addtodo = () => {

    const dispatch = useDispatch()

    const [input, setInput] = useState("")
    // const [content, setContent] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(addTodo(input))

        setInput("")

    }



    return (
        <div className='flex flex-col justify-center my-5 mx-auto'>
            <h1 className='text-3xl font-bold text-center'>Add Todo</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-6 mt-6 max-w-md mx-auto">
                    <input value={input} onChange={handleChange} type="text" id="text" className="bg-white border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Todo" required />
                    {/* <input value={content} onChange={handleChange} type="text" id="text" className="bg-white border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Content" required /> */}
                </div>

                <div className='text-center'>
                    <button type="submit" className=" mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default Addtodo
