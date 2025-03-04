import { useState } from 'react';
import '/workspaces/juan-salazar-todo-list-react-hello/src/styles/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
//include images into your bundle
//create your first component


  const ToDo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleOnChange = (e) => {
      setInputValue(e.target.value);
  };

  const handleOnKeyDown = (e) => {
      if (e.key === 'Enter' && inputValue.trim() !== "") {
          setTodos([...todos, inputValue]);
          setInputValue("");
      }
  };

  const handleDelete = (index) => {
      const updateTodos = todos.filter((todo, i) => i !== index);
      setTodos(updateTodos);
  };


  return (
    <div className='container'>
      <h2>todos</h2>
      <div className='container__input'>
      <input type="text" value={inputValue}  onChange={handleOnChange}  onKeyDown={handleOnKeyDown} />
      
      </div>
      <ul>
        {
          todos.length > 0 ? todos.map((todo, index) => {
            return (
              <li
              key={index}
              onMouseEnter={() => setHoveredIndex(index)} 
              onMouseLeave={() => setHoveredIndex(null)} 
            >
              {todo}
              {hoveredIndex === index && ( <button className='btn-delete' onClick={() => { handleDelete(index) }}> <FontAwesomeIcon icon={faX} /></button>)}
            </li>
             
            )
          })
            :
            <p>No hay tareas, añadir tareas</p>
        }




      </ul>
      <footer className="counter">
      
          <strong>{todos.filter(task => !task.done).length}</strong> 
        
      </footer>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <ToDo />
      </div>
      
  );
}

export default App;