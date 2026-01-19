import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className="todo-item">
            <button onClick={() => props.onMarkAsDone(props.todo["id"])}>Complete</button>
            <button onClick={() => props.onDeleteTodo(props.todo["id"])}>Delete</button>
            <span>
                {props.todo["done"] ? <s>{props.todo["todo"]}</s>
                    : props.todo["todo"]}
            </span>
        </li>
    );
}

export default TodoItem;