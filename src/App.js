import Dropzone from './Dropzone';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{ color: '#eee', textShadow: '1px 1px 2px #aaa' }}>
        Simple Drag and Drop
      </h1>
      <Dropzone />
    </div>
  );
}

export default App;
