import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "react-css-basic-dot"
  })
  return (
    <div className="App">
      <div className="box1">bokkusu
        <div className="box2">kl;lj;j</div>


      </div>

      <div className="box3">Box 3</div>
    </div>
  );
}

export default App;
