import { useState } from 'react'


// Write your Color component here
const Color = ({color, setSelectedColor, selected}) => {
  const selectedBorder = selected === color ? "selected" : ""
  return (
    <div 
      className= {`${color} ${selectedBorder}`}
      onClick={() => setSelectedColor(color)} 
      
     ></div>
  )
}

const App = () => {
const [selectedColor, setSelectedColor] = useState("")
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} selected ={selectedColor}/>
        <Color color= "blue"setSelectedColor={setSelectedColor} selected={selectedColor}/> 
        <Color color= "green"setSelectedColor={setSelectedColor} selected={selectedColor} /> 
      </div>
    </div>
  );
};

export default App;
