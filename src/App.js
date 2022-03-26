import './App.css';
import Watch from './Components/Watch/Watch';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {

  return (
    <div className='m-4'>
      <Header></Header>
      <Watch></Watch>
      <Footer></Footer>
    </div>
  );
}

export default App;
