import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, toggleTask } from './taskSlice';

function App() {
  const tasks = useSelector(state => state.task.tasks);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      dispatch(addTask({ id: Date.now(), text: inputValue, completed: false }));
      setInputValue('');
    }
  };

  const handleDeleteTask = id => {
    dispatch(deleteTask(id));
  };

  const handleCheckTask = id => {
    dispatch(toggleTask(id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Add a task"
          />
          <button onClick={handleAddTask}>Add</button>
        </div>
        <ul>
          {tasks.map(task => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              <span>{task.text}</span>
              <div>
                <button onClick={() => handleCheckTask(task.id)}>
                  {task.completed ? 'Uncheck' : 'Check'}
                </button>
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
        {tasks.length === 0 && <p>No tasks added yet.</p>}
      </header>
    </div>
  );
}

export default App;
