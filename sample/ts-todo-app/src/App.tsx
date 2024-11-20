import './App.css';

const App = () => {
  return (
    <div className="App">
      <div>
        <h1>TypeScript Todo App</h1>
        <form onSubmit={() => {}}>
          <input type="text" onChange={() => {}} className="inputText" />
          <input type="submit" value="add" className="submitButton" />
        </form>
      </div>
    </div>
  );
}

export default App;
