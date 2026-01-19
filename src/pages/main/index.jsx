import { useState } from 'react';
import TodoItem from '../../components/TodoItem';
import './Main.css';

let todoId = 1;

function Main() {
    const [todoItems, setTodoItems] = useState([]);

    const addTodo = (todoItem) => {
        const newTodoItems = [...todoItems, { id: todoId, todo: todoItem, done: false }];
        todoId++;
        setTodoItems(newTodoItems);
    };

    const deleteTodo = (id) => {
        const filteredTodoItems = todoItems.filter(todoItem => todoItem["id"] != id);
        setTodoItems(filteredTodoItems);
    };

    const toggleMarkAsDone = (id) => {
        const completedTodoItem = todoItems.find(todoItem => todoItem["id"] == id);
        completedTodoItem["done"] = !completedTodoItem["done"];
        setTodoItems([...todoItems]);
    };

    return (
        <>
            <div className="main-container">
                <h1 className='main-heading'>To-Do App!</h1>
                <label htmlFor="taskInput">Add New To-Do</label>
                <input type="text" placeholder="Enter a new task" id='taskInput' />
                <button className='add-btn' type='submit' onClick={
                    () => {
                        let todoItem = document.querySelector("#taskInput");
                        if (!todoItem.value) return alert("You must specify a task!");
                        addTodo(todoItem.value);
                        todoItem.value = "";
                    }
                }>
                    Add
                </button>
            </div>
            <div className="todos-container">
            {todoItems.length == 0 ? <p className='todos-title'>No todos yet.</p>
                :
                <div className="todos-list-container">
                    <p className="todos-title">Let's get some work done!</p>
                    <ul className="todos-list">
                        {todoItems.map(todoItem => {
                            return <TodoItem key={todoItem["id"]} todo={todoItem} onDeleteTodo={deleteTodo} onMarkAsDone={toggleMarkAsDone} />;
                        })}
                    </ul>
                </div>
            }
            </div>
        </>
    );
}

export default Main;