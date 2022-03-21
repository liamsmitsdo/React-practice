
const TodoItem = ({name, completed}) => (
    <li style={{textDecoration: completed? 'line-through': 'none'}} className="task">
        {name} 
    </li>
)

export default TodoItem;