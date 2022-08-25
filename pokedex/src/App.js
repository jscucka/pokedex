import './App.css';
import Header from './components/Header';
import PokemonProvider from './components/PokemonProvider';
function App() {
  return (
    <div className="App">
      <Header />
      <PokemonProvider />
    </div>
  );
}

export default App;
