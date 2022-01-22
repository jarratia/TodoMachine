import { CreateTodoButton } from "./CreateTodoButton"
import { TodoCounter } from "./TodoCounter"
import { TodoItem } from "./TodoItem"
import { TodoList } from "./TodoList"
import { TodoSearch } from "./TodoSearch"

function App() {

  const todos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar curso de intro a react', completed: true },
    { text: 'Hacer quiz de intro a react', completed: false }

  ]

  return (
    <>
      <TodoCounter />

      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed} />
        ))}
      </TodoList>

      {/* <CreateTodoButton /> */}
      <CreateTodoButton />
    </>
  )
}

export default App
