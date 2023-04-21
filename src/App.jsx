
import ToDoList from './toDoList.jsx'

function App() {
  return (
    <>
    <div className="text-success" style={{ borderBottom: '20px solid #007bff' , display: 'flex', justifyContent: 'center' }}>
      <header>
        <h4>tareas</h4>
      </header>
      <br />

    </div>
    <div><ToDoList/></div>
    </>   

  );
}

export default App