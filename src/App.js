import './App.css';
import './materialize.min.css';

// let tasks = [];

const addTask = (props) => {
  console.log(props);
};

// let currentInput = '';
const handleInput = change => {
  let inputText = change.target.value;
  setInputText(inputText);
  
}

const App = props => {
  return (
    <div className="App">

      <div className="tasks" onSubmit={addTask}>
        <div className="tasks-input">
          <input onInput={handleInput} type="text" />
          <button onClick={addTask} className="waves-effect waves-light btn tasks-input__submit">Add tasks</button>
        </div>

        <div className="tasks-list">
          <p className="tasks-list__item">Tasklisk</p>
        </div>
      </div>

    </div>
  );
}

export default App;
