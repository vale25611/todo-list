function TodoList() {
    const todos = [
        "Buy groceries",
        "Finish homework",
        "Water plants"
    ];

    return (
        <ul>
            {todos.map((todo, index) => (
                <li key = {index}>{todo}</li>
            ))}
        </ul>
    );
}

export default TodoList;
