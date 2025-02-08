import React from 'react';
import Editor from './components/Editor';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Drag and Drop Editor</h1>
      <Editor />
    </div>
  );
};

export default App;