import { useState } from 'react';
import TodoItem from '../../components/TodoItem';

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

    const markAsDone = (id) => {
        const completedTodoItem = todoItems.find(todoItem => todoItem["id"] == id);
        completedTodoItem["done"] = true;
        setTodoItems([...todoItems]);
    };

    return (
        <>
            <input type="text" placeholder="Enter a new task" id='taskInput' />
            <button type='submit' onClick={
                () => {
                    const todoItem = document.querySelector("#taskInput").value;
                    if (!todoItem) return alert("You must specify a task!");
                    addTodo(todoItem);
                }
            }>
                Add
            </button>
            <ul>
                {todoItems.length == 0 ? <p>No todos yet.</p>
                    : todoItems.map(todoItem => {
                        return <TodoItem key={todoItem["id"]} todo={todoItem} onDeleteTodo={deleteTodo} onMarkAsDone={markAsDone} />;
                    }
                    )}
            </ul>
        </>
    );
}

export default Main;