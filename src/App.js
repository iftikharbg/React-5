
import './App.css';
import Header from './components/Header';
import Person from './components/Person';
import Ref from './components/Ref';

function App() {
  return (
    <div className="App">
      <Header title="Salam"/>
      <Person />
      <Ref/>
    </div>
  );
}

export default App;