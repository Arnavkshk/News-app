import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

function App() {
  return (
    <>
    <Navbar title="Navbar"/>
    <div className="container my-3">
    <Textarea heading="Enter your text here" />

    </div>
    </>
  );
}


export default App;
