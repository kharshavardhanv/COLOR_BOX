import logo from './logo.svg';
import './App.css';
import Grid from './Components/Grid.jsx';
import './Components/Colors.css';
function App() {
  const colors=[
    "red",
    "blue",
    "green",
    "voilet",
    "magenta",
    "yellow",
    "orange",
    "silver",
    "gray",
    "black",
    "indigo",
  ];
  return (
    <div className="App">
        <Grid colors={colors}/>
    </div>
  );
}

export default App;
