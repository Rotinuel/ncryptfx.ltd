import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';

function App() {
  return (
//BEM class naming convention
    <div className='container'>
       <Header />
       <Nav />

    </div>
  )
}

export default App;
