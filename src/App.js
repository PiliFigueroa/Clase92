import './App.css';
import { Navbar, Footer, Card } from './components'
import personajes from './assets/data.json'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container-cards'>
        {personajes.map(personaje => <Card key={personaje.id} personaje={personaje} />)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
