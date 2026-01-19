import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className="todo-item">
            <button className="btn done-btn" onClick={() => props.onMarkAsDone(props.todo["id"])}>
                {props.todo["done"] ? "Incomplete" : "Complete"}
            </button>
            <button className="btn delete-btn" onClick={() => props.onDeleteTodo(props.todo["id"])}>Delete</button>
            <span>
                {props.todo["done"] ? <s>{props.todo["todo"]}</s>
                    : props.todo["todo"]}
            </span>
        </li>
    );
}

export default TodoItem;