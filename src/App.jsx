// Imports hooks used
import { useEffect, useState } from 'react'
// Imports css
import './styles.css'
// Imports the child components
import { NewTodoForm } from './NewTodoForn'
import { TodoList } from './TodoList'

// Declare the App function
export default function App() {

  // Handles state of the todos
  const [todos, setTodos] = useState(() => {
    // this looks in the local storage for an item.
    const localValue = localStorage.getItem('ITEM')
    //if there's nothing, start new
    if (localValue == null) return []
    // otherwise give me the values
    return JSON.parse(localValue)
  })

  // if something change to todos, save to local storage
  useEffect(() => {
    localStorage.setItem('ITEM', JSON.stringify(todos))
  }, [todos])

  // function for adding a todo
  function addTodo(title) {
    // calls the setTodo from state
    setTodos((currentTodos) => {
      // returns the current todos, plus the new item
      return [
        ...currentTodos, 
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  // function to toggle checked
  function toggleTodo(id, completed) {
    // calls to the state
    setTodos(currentTodos => {
      // finds the todo in question and set the state of the completed
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  // function to delete a todo
  function deleteTodo(id) {
    // calls to the state
    setTodos(currentTodos => {
      // filters out the todo and gets rid of it.
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  // What we get back
  return (
    // can return multiple items
    <>
      {/* Calls in the form component and passes through the add todo */}
      < NewTodoForm addTodo={addTodo} />
      <h1 className='header'>Todo List</h1>
      {/* Calls in the todo list and passes through the todos, toggling and deleting */}
      < TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </> 
  )
}
