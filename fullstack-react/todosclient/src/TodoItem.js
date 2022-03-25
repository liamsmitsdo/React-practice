
const TodoItem = ({name, completed, onDelete, onToggle}) => (
    <li className="task">
        <span onClick={onToggle} className={completed ? 'done' : ''}>
            {name}
        </span>
        <span onClick={onDelete} className="delete">X</span>
    </li>
)

export default TodoItem;