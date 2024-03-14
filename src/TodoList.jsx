import { TodoItem } from "./TodoItem"
// sets up the todo list, calling in todos, and the functions
export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className='list'>
            {/* if there is nothing, display this */}
            {todos.length === 0 && 'No Todos'}
            {/* map through the todo list */}
            {todos.map(todo => {
            return (
                // call up the todoItem component
                <TodoItem
                    // This can pass through each of the attributes
                    {...todo}
                    key={todo.id}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            )
            })}
        </ul>
    )
}