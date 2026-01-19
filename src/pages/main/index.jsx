import { useState } from 'react';
import TodoItem from '../../components/TodoItem/TodoItem';

let todoId = 1;

function Main() {
    const [todoItems, setTodoItems] = useState([]);

    const addTodo = (todoItem) => {
        const newTodoItems = [...todoItems, { id: todoId, todo: todoItem }];
        todoId++;
        setTodoItems(newTodoItems);
    };

    return (
        <>
            <input type="text" />
            <button type='submit' onClick={() => { addTodo("Todo Item"); }}>
                Add
            </button>
            <ul>
                {todoItems.length == 0 ? <p>No todos yet.</p>
                    : todoItems.map(todoItem => {
                        return <TodoItem key={todoItem["id"]} todo={todoItem["todo"]} />;
                    }
                    )}
            </ul>
        </>
    );
}

export default Main;