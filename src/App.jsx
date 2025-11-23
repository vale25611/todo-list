import './App.css';
import TodoList from './features/TodoList';
import TodoForm from './features/TodoForm';


function App() {

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm />
      <TodoList />
    </div>
  )

}
export default App
