import './TodoItem.css';

function TodoItem(props) {

    const onComplete = () => { console.log("ToDo completado") }
    const onDelete = () => { console.log("Borraste el ToDO") }

    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={onComplete}>
                √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete" onClick={onDelete}>
                X
            </span>
        </li>
    );
}

export { TodoItem };