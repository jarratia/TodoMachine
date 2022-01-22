import './CreateTodoButton.css'

const CreateTodoButton = () => {
    const onClickButton = (msg) => {
        console.log(msg)
    }
    return (
        <div>
            <button className='CreateTodoButton' onClick={() => onClickButton("Diste click")}>
                +
            </button>
        </div>
    )
}

export { CreateTodoButton }
