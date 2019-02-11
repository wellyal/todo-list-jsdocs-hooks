import React from 'react'
import Typography from '@material-ui/core/Typography'
import TodoForm from '../TodoForm'
import TodoList from '../TodoList'
import useTodoState from '../useTodoState'

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([])

  function saveTodo(todoText) {
    const trimmedText = todoText.trim();
    if (trimmedText.length > 0) {
      addTodo(todoText)
    }
  }

  return (
    <div className="App">
      <Typography component="h1" variant="h2">Todos</Typography>
      <TodoForm saveTodo={saveTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App;
