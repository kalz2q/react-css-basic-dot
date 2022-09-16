import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "react-css-basic-dot"
  })
  return (
    <div className="App">
      <div className="box1">Box 1</div>
      <div className="box2">
        <div className="inner-box">Box 2</div></div>
      <div className="box3">Box 3</div>
    </div>
  );
}

export default App;
