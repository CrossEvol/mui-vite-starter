// components/TodoList.tsx
import React, { useState } from 'react'
import { useTodoStore } from '../store/todo-store'

const TodoList: React.FC = () => {
    const [newTodo, setNewTodo] = useState('')
    const { todos, addTodo, deleteTodo, toggleTodo } = useTodoStore()

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            addTodo(newTodo)
            setNewTodo('')
        }
    }

    return (
        <div className='max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg'>
            <h1 className='text-xl font-bold mb-4'>Todo List</h1>
            <div className='flex mb-4'>
                <input
                    type='text'
                    className='flex-grow p-2 border border-gray-300 rounded-md'
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button
                    className='ml-2 p-2 bg-blue-500 text-white rounded-md'
                    onClick={handleAddTodo}
                >
                    Add
                </button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className='flex items-center justify-between mb-2'
                    >
                        <input
                            type='checkbox'
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            className='mr-2'
                        />
                        <span
                            className={`flex-grow ${
                                todo.completed ? 'line-through' : ''
                            }`}
                        >
                            {todo.text}
                        </span>
                        {/* <span
                            className={`flex-grow cursor-pointer ${
                                todo.completed ? 'line-through' : ''
                            }`}
                            onClick={() => toggleTodo(todo.id)}
                        >
                            {todo.text}
                        </span> */}
                        <button
                            className='ml-2 p-2 bg-red-500 text-white rounded-md'
                            onClick={() => deleteTodo(todo.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
