import './styles/App.css';
import WorkFlow from './components/WorkFlow';
import Graphs from './components/Graphs';
import PaletterDiv from'./components/PaletteDiv';
function App() {
  return (
    <div className="App">
      <WorkFlow/>      
      <Graphs/>
      <PaletterDiv/>
    </div>
  );
}

export default App;
