import { useState } from "react"

// builds the form component
export function NewTodoForm({ addTodo }) {
    
    // tracks the state of new item, or what is put into the input
    const [newItem, setNewItem] = useState('')

    // function to handle the submit
    function handleSubmit(e) {
        // doesn't reload page
        e.preventDefault()
        // if it's empty, do nothing
        if (newItem === '') return
        // call up the add todo function with what is in the input taken from the state
        addTodo(newItem)
        // resets the state of newItem
        setNewItem('')
    }

    
    return (
        // sets the form up and how we handle submit
        <form onSubmit={handleSubmit} className='new-item-form'>
            <div className='form-row'>
                <label htmlFor='item'> New Item</label>
                {/* the value is taken from the state, and when it is changed, we set the value */}
                <input 
                    value={newItem} 
                    onChange={e => setNewItem(e.target.value)} 
                    type='text' 
                    id='item' 
                />
            </div>
            <button className='btn'>Add</button>
        </form>
    )
}