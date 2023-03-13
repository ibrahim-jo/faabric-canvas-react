import React from "react";
import './App.css'
import Canvas from "./components/Canvas/canvas";
import CanvaFabric from './components/CavaFabric/CanvaFabric'

function App() {
  return (
    <div className="App">
     
     {/* <Canvas  width={500} height={400} /> */}
    <CanvaFabric />

    </div>
  );
}

export default App;
