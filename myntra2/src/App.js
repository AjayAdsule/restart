import './App.css';
import Navbar from './component/Navbar';
import Curosel from './component/Curosel';
import './component/main.css'
import Items from './component/Items';

function App() {
  return (
    <div className="container-fluid">
      <div className="nav">
          ` <Navbar heading="Myntra"/>`
      </div>
      <div className="ban">
        <Curosel/>
      </div>
      <div className="item">
        <Items/>
      </div>
    </div>
  );
}

export default App;
