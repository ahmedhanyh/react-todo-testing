function TodoItem(props) {
    return (
        <li>
            <button>Complete</button>
            <button>Delete</button>
            <span>{props.todo}</span>
        </li>
    );
}

export default TodoItem;