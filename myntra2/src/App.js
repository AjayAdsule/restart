import './App.css';
import Navbar from './component/Navbar';
import Curosel from './component/Curosel';
import './component/main.css'
import Items from './component/Men';
import Footer from './component/Footer';
import Women from './component/Women';
import Kids from './component/Kids';
import Home from './Home';

function App() {
  return (
    <div className="container-fluid">
     <Navbar heading="Myntra"/>`
       {/* <Curosel/> */}
       {/* <Items/> */}
        {/* <Women/> */}
        {/* <Kids/> */}
        <Home></Home>
        {/* <Footer/> */}
      </div>
  );
}

export default App;
