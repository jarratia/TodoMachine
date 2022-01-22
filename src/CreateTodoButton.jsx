import './CreateTodoButton.css'

const CreateTodoButton = () => {
    return (
        <div>
            <button className='CreateTodoButton' onClick={() => console.log("click")}>
                +
            </button>
        </div>
    )
}

export { CreateTodoButton }
